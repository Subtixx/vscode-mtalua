'use strict';

import * as vscode from 'vscode'

export enum ScriptSide {
    Shared,
    Client,
    Server
}

export class LuaFunction {

    /**
     * Module name
     */
    module: string;

    /**
     * The function name
     */
    label: string;
    
    /**
     * Description of the function
     */
	description: string;
    
    /**
     * An array containing and types names for arguments
     */
    args: string[];
    
    /**
     * Return type of the function
     */
    returnType: string;

    /**
     * Descriptions for arguments
     */
    argDescs: { [key: string]: string };

    scriptSide: ScriptSide;
    
	constructor() {
		this.label = "";
		this.description = "";
        this.returnType = "";
        this.module = "";
		this.args = [];
        this.argDescs = {};
        this.scriptSide = ScriptSide.Shared;
    }
    
    toMarkdown() : vscode.MarkdownString
    {
        let result = new vscode.MarkdownString();
        result.appendCodeblock(this.label + " ( " + this.args.join(", ") + " )", "mtalua");
        result.appendMarkdown(this.description + "\n\n");
        result.appendMarkdown("- Returns: " + this.returnType + "\n");
        for (const key in this.argDescs) {
            if (this.argDescs.hasOwnProperty(key)) {
                const element = this.argDescs[key];
                result.appendMarkdown("- **" + key + "**: " + element + "\n");
            }
        }
        return result;
    }
}