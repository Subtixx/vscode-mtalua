'use strict';

import * as vscode from 'vscode'
import {functionProvider} from './features/completionItemProvider'
import {signatureProvider} from './features/signatureHelpProvider'
import {hoverProvider} from './features/hoverProvider'

export function activate(context: vscode.ExtensionContext) {
	console.log("MTA:SA LUA: Init");

	// Register the built-in function definitions
	vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "mtalua" }, new functionProvider(context.extensionPath), ".");
	vscode.languages.registerHoverProvider({scheme: "file", language: "mtalua"}, new hoverProvider(context.extensionPath));
	
	if (!vscode.workspace.getConfiguration("starbound-sense").get("activate_signature_help_parentheses", true))
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "mtalua" }, new signatureProvider(context.extensionPath), "");
	else
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "mtalua" }, new signatureProvider(context.extensionPath), "(");
}

export function deactivate() {
	console.log("MTA:SA LUA: Free");
}