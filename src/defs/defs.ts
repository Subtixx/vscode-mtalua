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

    constructor() {
        this.label = "";
        this.description = "";
        this.returnType = "";
        this.module = "";
        this.args = [];
        this.argDescs = {};
    }

    toMarkdown(): vscode.MarkdownString {
        let result = new vscode.MarkdownString();
        result.appendCodeblock(this.label + " ( " + this.args.join(", ") + " )", "mtaluatypes");
        result.appendMarkdown(this.description + "\n\n");
        //result.appendMarkdown("- Returns: " + this.returnType + "\n");
        if(this.returnType != "")
        {
            result.appendMarkdown("- Returns:");
            result.appendCodeblock(this.returnType, "mtaluatypes");
        }
            
        for (const key in this.argDescs) {
            if (this.argDescs.hasOwnProperty(key)) {
                const element = this.argDescs[key];
                result.appendMarkdown("- **" + key + "**: " + element + "\n");
            }
        }
        return result;
    }
}

export class MTAFunction extends LuaFunction {
    scriptSide: ScriptSide;
    deprecated: boolean;

    constructor() {
        super();
        this.scriptSide = ScriptSide.Shared;
        this.deprecated = false;
    }
}

export class LuaMethod extends LuaFunction {
    constructor(label: string, description: string = "", args: string[] = [], argDescs: { [key: string]: string } = {}, returnType: string = "") {
        super();
        this.label = label;
        this.description = description;

        this.args = args;
        this.argDescs = argDescs;

        this.returnType = returnType;
    }
}

export class LuaClass {
    label: string;
    description: string;
    methods: LuaMethod[];
    fields: LuaField[];

    constructor(label: string, description: string = "") {
        this.label = label;
        this.description = description;
        this.methods = new Array<LuaMethod>();
        this.fields = new Array<LuaField>();
    }

    toMarkdown(): vscode.MarkdownString {
        let result = new vscode.MarkdownString();
        result.appendCodeblock(this.label, "mtaluatypes");
        result.appendMarkdown(this.description + "\n\n");
        return result;
    }
}

export class LuaField {
    label: string;
    description: string;

    constructor(label: string, description: string = "") {
        this.label = label;
        this.description = description;
    }

    toMarkdown(): vscode.MarkdownString {
        let result = new vscode.MarkdownString();
        result.appendCodeblock(this.label, "mtaluatypes");
        result.appendMarkdown(this.description + "\n\n");
        return result;
    }
}

export class LuaConst extends LuaField {
    constructor(label: string, desc: string = "") {
        super(label, desc);
    }
}