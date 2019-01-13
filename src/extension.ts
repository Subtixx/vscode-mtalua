'use strict';

import * as vscode from 'vscode'
import { functionProvider } from './features/completionItemProvider';
import { signatureProvider } from './features/signatureHelpProvider';
import { hoverProvider } from './features/hoverProvider';
import { generateResource, generateMeta, generateClient, generateServer } from './features/resourceGenerator';
import { startResource, stopResource, restartResource, restartResourceSave } from './features/serverInteractions';
import { documentLinkProvider } from './features/documentLinkProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log("MTA:SA LUA: Init");

	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-resource", generateResource));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-meta", generateMeta));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-client", generateClient));
	context.subscriptions.push(vscode.commands.registerCommand("extension.mta-new-server", generateServer));

	if (vscode.workspace.getConfiguration("mtalua-http").get("enabled", true)) {
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-start-resource", startResource));
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-stop-resource", stopResource));
		context.subscriptions.push(vscode.commands.registerCommand("extension.mta-restart-resource", restartResource));
	}

	vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
		if (!vscode.workspace.getConfiguration("mtalua-http").get("enable_restart_on_save", false))
			return;
		restartResourceSave(document);
	});

	// TODO: Write a CompletionItemProvider/SignatureHelpProvider/HoverProvider for meta.xml files. See https://github.com/Subtixx/vscode-mtalua/issues/10

	if (vscode.workspace.getConfiguration("mtalua-sense").get("show_reference_links", false))
		vscode.languages.registerDocumentLinkProvider({ scheme: "file", language: "mtalua" }, new documentLinkProvider(context.extensionPath));

	// Register the built-in function definitions
	vscode.languages.registerCompletionItemProvider({ scheme: "file", language: "mtalua" }, new functionProvider(context.extensionPath), ".");
	vscode.languages.registerHoverProvider({ scheme: "file", language: "mtalua" }, new hoverProvider(context.extensionPath));

	if (!vscode.workspace.getConfiguration("mtalua-sense").get("activate_signature_help_parentheses", true))
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "mtalua" }, new signatureProvider(context.extensionPath), "");
	else
		vscode.languages.registerSignatureHelpProvider({ scheme: "file", language: "mtalua" }, new signatureProvider(context.extensionPath), "(");
}

export function deactivate() {
	console.log("MTA:SA LUA: Free");
}