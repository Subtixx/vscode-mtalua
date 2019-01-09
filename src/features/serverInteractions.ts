import * as vscode from 'vscode';
import * as path from 'path';
import * as request from 'request';
import { isArray } from 'util';
import * as fs from 'fs';

export enum CallType {
    Start,
    Stop,
    Restart
}

export function restartResourceSave(doc: vscode.TextDocument) {
    if(doc.languageId == "mtalua")
        restartResource(doc.uri);
}

export function startResource(uri: vscode.Uri) {
    if (!vscode.workspace.getConfiguration("mtalua-http").get("enabled", true))
        return;
    if (uri == null) {
        const options: vscode.InputBoxOptions = {
            ignoreFocusOut: true,
            prompt: `Type the name of the resource to start, or press ESC to cancel`,
            placeHolder: 'MyAwesomeResource'
        };
        let resName = vscode.window.showInputBox(options);
        if (resName === undefined)
            return;
        resName.then((resourceName) => {
            httpRequest(CallType.Start, resourceName, startResourceCallback);
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = path.dirname(uri.fsPath + "\\fakePath");
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    httpRequest(CallType.Start, resourceName, startResourceCallback);
}

export function stopResource(uri: vscode.Uri) {
    if (!vscode.workspace.getConfiguration("mtalua-http").get("enabled", true))
        return;
    if (uri == null) {
        const options: vscode.InputBoxOptions = {
            ignoreFocusOut: true,
            prompt: `Type the name of the resource to stop, or press ESC to cancel`,
            placeHolder: 'MyAwesomeResource'
        };
        let resName = vscode.window.showInputBox(options);
        if (resName === undefined)
            return;
        resName.then((resourceName) => {
            httpRequest(CallType.Stop, resourceName, stopResourceCallback);
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = path.dirname(uri.fsPath + "\\fakePath");
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    httpRequest(CallType.Stop, resourceName, stopResourceCallback);
}

export function restartResource(uri: vscode.Uri) {
    if (!vscode.workspace.getConfiguration("mtalua-http").get("enabled", true))
        return;
    if (uri == null) {
        const options: vscode.InputBoxOptions = {
            ignoreFocusOut: true,
            prompt: `Type the name of the resource to restart, or press ESC to cancel`,
            placeHolder: 'MyAwesomeResource'
        };
        let resName = vscode.window.showInputBox(options);
        if (resName === undefined)
            return;
        resName.then((resourceName) => {
            httpRequest(CallType.Restart, resourceName, restartResourceCallback);
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = "";
    if(fs.statSync(uri.fsPath).isDirectory())
        folderPath = path.dirname(uri.fsPath + "\\fakePath");
    else
        folderPath = path.dirname(uri.fsPath);
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    httpRequest(CallType.Restart, resourceName, restartResourceCallback);
}

type HttpCallback = (response: any, resourceName: string) => void;

function startResourceCallback(response: any, resourceName: string) {
    if (isArray(response)) {
        if (response[0] === true)
            vscode.window.showInformationMessage("Resource '" + resourceName + "' started.");
        else
            vscode.window.showErrorMessage("Failed to start resource");
    }
}

function stopResourceCallback(response: any, resourceName: string) {
    if (isArray(response)) {
        if (response[0] === true)
            vscode.window.showInformationMessage("Resource '" + resourceName + "' stopped.");
        else
            vscode.window.showErrorMessage("Failed to stop resource");
    }
}

function restartResourceCallback(response: any, resourceName: string) {
    if (isArray(response)) {
        if (response[0] === true)
            vscode.window.showInformationMessage("Resource '" + resourceName + "' restarted.");
        else
            vscode.window.showErrorMessage("Failed to restart resource");
    }
}

function httpRequest(callType: CallType, resourceName: string, callback: HttpCallback) {
    let callTypeStr = "";
    switch (callType) {
        case CallType.Start:
            callTypeStr = "startResource";
            break;
        case CallType.Stop:
            callTypeStr = "stopResource";
            break;
        case CallType.Restart:
            callTypeStr = "restartResource";
            break;

        default:
            return;
    }
    let opt: request.CoreOptions = getHttpOptions();
    opt.form = '["^R^' + resourceName + '"]';
    request.post("/resourcemanager/call/" + callTypeStr, opt, (error: any, response: request.Response, body: any) => {
        if (response.statusCode != 200) {
            vscode.window.showErrorMessage(body);
            return;
        }
        let bodyJson = JSON.parse(body);
        callback(bodyJson, resourceName);
    });
}

function getHttpOptions(): request.CoreOptions {
    return {
        'auth': {
            'user': vscode.workspace.getConfiguration("mtalua-http").get("username"),
            'pass': vscode.workspace.getConfiguration("mtalua-http").get("password"),
            'sendImmediately': true
        },
        'baseUrl': vscode.workspace.getConfiguration("mtalua-http").get("uri"),
        'form': '["^R^"]'
    };
}