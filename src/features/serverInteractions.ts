import * as vscode from 'vscode';
import * as path from 'path';
import * as request from 'request';
import { isArray } from 'util';
import * as fs from 'fs';

export enum CallType {
    Start,
    Stop,
    Restart,
    Search
}

export function restartResourceSave(doc: vscode.TextDocument) {
    if (doc.languageId == "mtalua")
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
        if (vscode.workspace.getConfiguration("mtalua-http").get("enable_search_hinting", false))
            options.validateInput = resourcesNameHinting;
        let resName = vscode.window.showInputBox(options);
        resName.then((resourceName) => {
            if (resourceName === undefined)
                return;
            searchResource(resourceName, (result, response, index, resourceName) => {
                if (!result) {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
                    return;
                }
                if (response[1][index] != "loaded") {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' already running.");
                    return;
                }

                httpRequest(CallType.Start, '["^R^' + resourceName + '"]', startResourceCallback);
            });
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = path.dirname(uri.fsPath + "\\fakePath");
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    searchResource(resourceName, (result, response, index, resourceName) => {
        if (!result) {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
            return;
        }
        if (response[1][index] != "loaded") {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' already running.");
            return;
        }

        httpRequest(CallType.Start, '["^R^' + resourceName + '"]', startResourceCallback);
    });
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
        if (vscode.workspace.getConfiguration("mtalua-http").get("enable_search_hinting", false))
            options.validateInput = resourcesNameHinting;
        let resName = vscode.window.showInputBox(options);
        resName.then((resourceName) => {
            if (resourceName === undefined)
                return;
            searchResource(resourceName, (result, response, index, resourceName) => {
                if (!result) {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
                    return;
                }
                if (response[1][index] != "running") {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' not started.");
                    return;
                }

                httpRequest(CallType.Stop, '["^R^' + resourceName + '"]', stopResourceCallback);
            });
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = path.dirname(uri.fsPath + "\\fakePath");
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    searchResource(resourceName, (result, response, index, resourceName) => {
        if (!result) {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
            return;
        }
        if (response[1][index] != "running") {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' not started.");
            return;
        }

        httpRequest(CallType.Stop, '["^R^' + resourceName + '"]', stopResourceCallback);
    });
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
        if (vscode.workspace.getConfiguration("mtalua-http").get("enable_search_hinting", false))
            options.validateInput = resourcesNameHinting;

        let resName = vscode.window.showInputBox(options);
        resName.then((resourceName) => {
            if (resourceName === undefined)
                return;
            searchResource(resourceName, (result, response, index, resourceName) => {
                if (!result) {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
                    return;
                }
                if (response[1][index] != "running") {
                    vscode.window.showErrorMessage("Resource '" + resourceName + "' not running.");
                    return;
                }

                httpRequest(CallType.Restart, '["^R^' + resourceName + '"]', restartResourceCallback);
            });
        });
        return;
    }

    // fakePath because fsPath contains a path without ending \, adding just \ will not work for some odd reason.
    let folderPath = "";
    if (fs.statSync(uri.fsPath).isDirectory())
        folderPath = path.dirname(uri.fsPath + "\\fakePath");
    else
        folderPath = path.dirname(uri.fsPath);
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));

    searchResource(resourceName, (result, response, index, resourceName) => {
        if (!result) {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' not found.");
            return;
        }
        if (response[1][index] != "running") {
            vscode.window.showErrorMessage("Resource '" + resourceName + "' not running.");
            return;
        }

        httpRequest(CallType.Restart, '["^R^' + resourceName + '"]', restartResourceCallback);
    });
}

type HttpCallback = (response: any, resourceName: string) => void;
type SearchCallback = (result: boolean, response: any, index: number, resourceName: string) => void;

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

function searchResource(resourceName: string, callback: SearchCallback) {
    httpRequest(CallType.Search, '["' + resourceName + '", ""]', (response: any, formData: string) => {
        console.log(response);
        if (isArray(response) && isArray(response[0]) && response[0].length > 0) {
            let idx = response[0].indexOf("^R^" + resourceName);
            callback(true, response, idx, resourceName);
        } else {
            callback(false, response, -1, resourceName);
        }
    });
}

function resourcesNameHinting(value: string): string | undefined | null | Thenable<string | undefined | null> {
    return new Promise(resolve => {
        httpRequest(CallType.Search, '["' + value + '", ""]', (response: any, formData: string) => {
            if (isArray(response) && response.length > 0 && response[0].length > 0) {
                let resName = response[0][0].substr(3, response[0][0].length - 3);
                if (resName === value)
                    resolve(null); // Valid
                else
                    resolve(resName);
            }
            else
                resolve("Not found");
        });
    });
}

function httpRequest(callType: CallType, formData: string, callback: HttpCallback) {
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
        case CallType.Search:
            callTypeStr = "getResourcesSearch";
            break;

        default:
            return;
    }
    let opt: request.CoreOptions = getHttpOptions();
    opt.form = formData;
    request.post("/resourcemanager/call/" + callTypeStr, opt, (error: any, response: request.Response, body: any) => {
        if (response == null || response.statusCode == null || response.statusCode != 200) {
            vscode.window.showErrorMessage(body == "" ? "Unknown error" : body);
            return;
        }
        let bodyJson = JSON.parse(body);
        callback(bodyJson, formData);
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