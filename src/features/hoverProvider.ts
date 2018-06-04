'use strict';

import * as vscode from 'vscode';

import { LuaFunction } from '../defs/defs';

import { SharedDefinitions } from '../defs/shared';
import { ClientDefinitions } from '../defs/client';
import { ServerDefinitions } from '../defs/server';

export class hoverProvider implements vscode.HoverProvider {
    functions: { [key: string]: vscode.MarkdownString };

    constructor(extensionPath: string) {
        this.functions = {};

        // Shared definitions
        for(let i in SharedDefinitions)
        {
            let idef:LuaFunction = SharedDefinitions[i];
            this.functions[idef.label] = idef.toMarkdown();
        }

        // Server-Side definitions
        for(let i in ServerDefinitions)
        {
            let idef:LuaFunction = ServerDefinitions[i];
            this.functions[idef.label] = idef.toMarkdown();
        }

        // Client-Side definitions
        for(let i in ClientDefinitions)
        {
            let idef:LuaFunction = ClientDefinitions[i];
            this.functions[idef.label] = idef.toMarkdown();
        }

        /*for(let i in typeDefs.luaConsts)
        {
            let iconst = typeDefs.luaConsts[i];
            this.functions[iconst.name] = iconst.toMarkdown();
        }

        // Built-in lua functions (print etc.)
        for(let i in typeDefs.luaFunctions)
        {
            let itype = typeDefs.luaFunctions[i];
            this.functions[itype.name] = itype.toMarkdown();
        }

        // Built-in lua "modules" (table.concat)
        for(let i in typeDefs.luaClasses)
        {
            let itype = typeDefs.luaClasses[i];
            
            this.functions[itype.name] = itype.toMarkdown();
            for(let j in itype.methods)
            {
                let jmethod = itype.methods[j];
                this.functions[itype.name + "." + jmethod.name] =  jmethod.toMarkdown();
            }
        }*/
    }
    
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        return new Promise<vscode.Hover>((resolve, reject) => {
            let hoveredTypePosition = document.getWordRangeAtPosition(position);
            let hoveredWordPosition = document.getWordRangeAtPosition(position, /[\w\.]+/);
            if(hoveredWordPosition == undefined)
                hoveredWordPosition = document.getWordRangeAtPosition(position);
            
            let hoveredFunction = this.functions[document.getText(hoveredTypePosition)];
            if(hoveredFunction != undefined)
            {
                var hover = new vscode.Hover(hoveredFunction);
                resolve(hover);
                return;
            }

            let hoveredWord = document.getText(hoveredWordPosition);
            hoveredFunction = this.functions[hoveredWord];
            if(hoveredFunction == undefined)
            {
                reject();
                return;
            }
            
            var hover = new vscode.Hover(hoveredFunction);
            resolve(hover);
        });
    }
};