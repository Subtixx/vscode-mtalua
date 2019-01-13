'use strict';

import * as vscode from 'vscode';
import { MTAFunction } from '../defs/defs';
import { SharedDefinitions } from '../defs/shared';
import { ServerDefinitions } from '../defs/server';
import { ClientDefinitions } from '../defs/client';
import { DeprecatedDefinitions } from '../defs/deprecated';

export class documentLinkProvider implements vscode.DocumentLinkProvider {
    globalTypes: string[];

    constructor(extensionPath: string) {
        this.globalTypes = new Array<string>();

        // Shared definitions
        for (let i in SharedDefinitions) {
            let idef: MTAFunction = SharedDefinitions[i];
            this.globalTypes.push(idef.label);
        }

        // Server-Side definitions
        for (let i in ServerDefinitions) {
            let idef: MTAFunction = ServerDefinitions[i];
            this.globalTypes.push(idef.label);
        }

        // Client-Side definitions
        for (let i in ClientDefinitions) {
            let idef: MTAFunction = ClientDefinitions[i];
            this.globalTypes.push(idef.label);
        }

        // Deprecated definitions
        for (let i in DeprecatedDefinitions) {
            let idef: MTAFunction = DeprecatedDefinitions[i];
            this.globalTypes.push(idef.label);
        }
    }

    provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink[]> {
        if (!vscode.workspace.getConfiguration("mtalua-sense").get("show_reference_links", false))
            return new vscode.DocumentLink[0];

        let result: vscode.DocumentLink[] = new Array<vscode.DocumentLink>();
        let documentText = document.getText();

        let currentOffset = 0;
        for (let i = 0; i < document.lineCount; i++) {
            let lineText = document.lineAt(i);
            let lineSplitted = lineText.text.split(/[(, \t]/);
            lineSplitted.forEach((v) => {
                if (v == "") return;
                if (this.globalTypes.indexOf(v) > -1)
                    result.push(new vscode.DocumentLink(document.getWordRangeAtPosition(document.positionAt(documentText.indexOf(v, currentOffset - 1))),
                        vscode.Uri.parse("https://wiki.multitheftauto.com/wiki/" + v)));
            });
            currentOffset += lineText.text.length;
        }
        /*this.globalTypes.forEach((v) => {
            let tokenPos = document.getText().indexOf(v);
            if (tokenPos > -1) {
                result.push(new vscode.DocumentLink(document.getWordRangeAtPosition(document.positionAt(tokenPos)), vscode.Uri.parse("https://wiki.multitheftauto.com/wiki/" + v)))
            }
        });*/
        return result;
    }

    /*resolveDocumentLink?(link: vscode.DocumentLink, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentLink> {
        throw new Error("Method not implemented.");
    }*/
};