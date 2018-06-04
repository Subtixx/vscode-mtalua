'use strict';
import * as vscode from 'vscode';

import { LuaFunction, ScriptSide } from '../defs/defs';

import { SharedDefinitions } from '../defs/shared';
import { ClientDefinitions } from '../defs/client';
import { ServerDefinitions } from '../defs/server';

export class functionProvider {
    functions: { [key: string]: vscode.CompletionItem[] };
    globalTypes: vscode.CompletionItem[];

    constructor(extensionPath: string) {
        this.functions = {};
        this.globalTypes = new Array<vscode.CompletionItem>();
        //this.functions = new Array<vscode.CompletionItem>();

        // Shared definitions
        for (let i in SharedDefinitions) {
            let idef: LuaFunction = SharedDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.documentation = idef.toMarkdown();
            this.globalTypes.push(def);
        }

        // Server-Side definitions
        for (let i in ServerDefinitions) {
            let idef: LuaFunction = ServerDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.documentation = idef.toMarkdown();
            this.globalTypes.push(def);
        }

        // Client-Side definitions
        for (let i in ClientDefinitions) {
            let idef: LuaFunction = ClientDefinitions[i];
            let def = new vscode.CompletionItem(idef.label, vscode.CompletionItemKind.Function);
            def.documentation = idef.toMarkdown();
            this.globalTypes.push(def);
        }
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken,
        context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {
        return new Promise<vscode.CompletionItem[]>((resolve, reject) => {
            if (context.triggerKind != vscode.CompletionTriggerKind.TriggerCharacter) {
                resolve(this.globalTypes);
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
}