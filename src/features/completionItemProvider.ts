'use strict';
import * as vscode from 'vscode';
import * as path from 'path';

import { LuaFunction, ScriptSide, LuaConst, MTAFunction } from '../defs/defs';

import { SharedDefinitions } from '../defs/shared';
import { ClientDefinitions } from '../defs/client';
import { ServerDefinitions } from '../defs/server';
import { DeprecatedDefinitions } from '../defs/deprecated';
import { luaClasses, luaConsts, luaFunctions } from '../defs/lualibs';
import { getScriptSide } from '../utils';

export class functionProvider {
    functions: { [key: string]: vscode.CompletionItem[] };
    clientGlobalTypes: vscode.CompletionItem[];
    serverGlobalTypes: vscode.CompletionItem[];

    globalTypes: vscode.CompletionItem[];

    constructor(extensionPath: string) {
        this.functions = {};
        this.globalTypes = new Array<vscode.CompletionItem>();
        this.clientGlobalTypes = new Array<vscode.CompletionItem>();
        this.serverGlobalTypes = new Array<vscode.CompletionItem>();

        this.addLuaLibs();

        // Shared definitions
        for (let i in SharedDefinitions) {
            let idef: MTAFunction = SharedDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.detail = "Scriptside: Shared";
            if (idef.deprecated)
                def.detail += " (DEPRECATED)";
            def.documentation = idef.toMarkdown();
            this.globalTypes.push(def);
        }

        // Server-Side definitions
        for (let i in ServerDefinitions) {
            let idef: MTAFunction = ServerDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.detail = "Scriptside: Server";
            if (idef.deprecated)
                def.detail += " (DEPRECATED)";
            def.documentation = idef.toMarkdown();
            this.serverGlobalTypes.push(def);
        }

        // Client-Side definitions
        for (let i in ClientDefinitions) {
            let idef: MTAFunction = ClientDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.detail = "Scriptside: Client";
            if (idef.deprecated)
                def.detail += " (DEPRECATED)";
            def.documentation = idef.toMarkdown();
            this.clientGlobalTypes.push(def);
        }

        // Deprecated definitions
        for (let i in DeprecatedDefinitions) {
            let idef: MTAFunction = DeprecatedDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.detail = "Scriptside: " + ScriptSide[idef.scriptSide] + " (DEPRECATED)";
            def.documentation = idef.toMarkdown();
            this.globalTypes.push(def);
        }

        /*this.globalTypes.sort(function (a, b) {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0;
        });
        this.checkDefinitions();*/
    }

    addLuaLibs() {
        // Built-in lua functions (print etc.)
        for (let i in luaFunctions) {
            let itype = luaFunctions[i];

            let def = new vscode.CompletionItem(itype.label, vscode.CompletionItemKind.Function);
            def.documentation = itype.toMarkdown();

            this.globalTypes.push(def);
        }

        // Built-in lua "modules" (table.concat)
        for (let i in luaClasses) {
            let itype = luaClasses[i];

            let def = new vscode.CompletionItem(itype.label, vscode.CompletionItemKind.Class);
            def.documentation = new vscode.MarkdownString();
            def.documentation.appendMarkdown(itype.description);
            this.globalTypes.push(def);

            this.functions[itype.label] = new Array<vscode.CompletionItem>();
            for (let j in itype.methods) {
                let jmethod = itype.methods[j];

                let def = new vscode.CompletionItem(jmethod.label, vscode.CompletionItemKind.Method);
                def.documentation = jmethod.toMarkdown();

                this.functions[itype.label].push(def);
            }

            for (let j in itype.fields) {
                let jfield = itype.fields[j];
                let jkind = vscode.CompletionItemKind.Field;
                if (jfield instanceof LuaConst)
                    jkind = vscode.CompletionItemKind.Constant;

                let def = new vscode.CompletionItem(jfield.label, jkind);
                def.documentation = jfield.toMarkdown();

                this.functions[itype.label].push(def);
            }
        }

        for (let i in luaConsts) {
            let iconst = luaConsts[i];

            let def = new vscode.CompletionItem(iconst.label, vscode.CompletionItemKind.Constant);
            def.documentation = iconst.toMarkdown();
            this.globalTypes.push(def);
        }
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken,
        context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            if (context.triggerKind != vscode.CompletionTriggerKind.TriggerCharacter) {
                let funcs = this.globalTypes;
                if (vscode.workspace.getConfiguration("mtalua-sense").get("show_relevant_only", false)) {
                    let activeFilePath: string = vscode.window.activeTextEditor.document.fileName;
                    let activeFileName: string = path.basename(activeFilePath);

                    let side = getScriptSide(activeFileName);

                    if (side == ScriptSide.Client)
                        funcs = funcs.concat(this.clientGlobalTypes);
                    else if (side == ScriptSide.Server)
                        funcs = funcs.concat(this.serverGlobalTypes);
                } else {
                    funcs = funcs.concat(this.serverGlobalTypes, this.clientGlobalTypes);
                }

                resolve(funcs);
                return;
            }

            var wordRange = document.getWordRangeAtPosition(new vscode.Position(position.line, position.character - 1));
            if (wordRange != undefined) {
                var word = document.getText(wordRange);
                resolve(this.functions[word]);
                return;
            }

            resolve([]);
        });
    }

    checkDefinitions() {
        console.log("Checking definition files..");

        let check = new Array<MTAFunction>();
        SharedDefinitions.forEach(element => {
            if (check[element.label] !== undefined && element.scriptSide == check[element.label].scriptSide) {
                console.log("ERROR! ALREADY ADDED: " + element.label + ", Side: " + ScriptSide[element.scriptSide] + " vs " + ScriptSide[check[element.label].scriptSide]);
            } else
                check[element.label] = element;
        });
        ServerDefinitions.forEach(element => {
            if (check[element.label] !== undefined && element.scriptSide == check[element.label].scriptSide) {
                console.log("ERROR! ALREADY ADDED: " + element.label + ", Side: " + ScriptSide[element.scriptSide] + " vs " + ScriptSide[check[element.label].scriptSide]);
            } else
                check[element.label] = element;
        });
        ClientDefinitions.forEach(element => {
            if (check[element.label] !== undefined && element.scriptSide == check[element.label].scriptSide) {
                console.log("ERROR! ALREADY ADDED: " + element.label + ", Side: " + ScriptSide[element.scriptSide] + " vs " + ScriptSide[check[element.label].scriptSide]);
            } else
                check[element.label] = element;
        });
    }
}