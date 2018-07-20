'use strict';

import * as vscode from 'vscode';

import { LuaFunction, LuaConst } from '../defs/defs';

import { SharedDefinitions, SharedModuleDefinitions } from '../defs/shared';
import { ClientDefinitions } from '../defs/client';
import { ServerDefinitions } from '../defs/server';
import { DeprecatedDefinitions } from '../defs/deprecated';

import { luaClasses, luaConsts, luaFunctions } from '../defs/lualibs';

export class hoverProvider implements vscode.HoverProvider {
    functions: { [key: string]: vscode.MarkdownString };

    constructor(extensionPath: string) {
        this.functions = {};

        this.addLuaLibs();

        // Shared definitions
        for(let i in SharedDefinitions)
        {
            let idef:LuaFunction = SharedDefinitions[i];
            this.functions[idef.label] = idef.toMarkdown();
        }
        for(let i in SharedModuleDefinitions)
        {
            let itype = SharedModuleDefinitions[i];

            this.functions[itype.label] = itype.toMarkdown();
            for(let j in itype.methods)
            {
                let jmethod = itype.methods[j];
                this.functions[itype.label + "." + jmethod.label] =  jmethod.toMarkdown();
            }
            
            for(let j in itype.fields)
            {
                let jfield = itype.fields[j];
                this.functions[itype.label + "." + jfield.label] = jfield.toMarkdown();
            }
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

        // Deprecated definitions
        for(let i in DeprecatedDefinitions)
        {
            let idef:LuaFunction = DeprecatedDefinitions[i];
            this.functions[idef.label] = idef.toMarkdown();
        }
    }
    
    addLuaLibs()
    {
        for(let i in luaConsts)
        {
            let iconst = luaConsts[i];
            this.functions[iconst.label] = iconst.toMarkdown();
        }

        // Built-in lua functions (print etc.)
        for(let i in luaFunctions)
        {
            let itype = luaFunctions[i];
            this.functions[itype.label] = itype.toMarkdown();
        }

        // Built-in lua "modules" (table.concat)
        for(let i in luaClasses)
        {
            let itype = luaClasses[i];
            
            this.functions[itype.label] = itype.toMarkdown();
            for(let j in itype.methods)
            {
                let jmethod = itype.methods[j];
                this.functions[itype.label + "." + jmethod.label] =  jmethod.toMarkdown();
            }
            
            for(let j in itype.fields)
            {
                let jfield = itype.fields[j];
                this.functions[itype.label + "." + jfield.label] = jfield.toMarkdown();
            }
        }
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