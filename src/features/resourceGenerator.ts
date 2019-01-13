'use strict';

import * as path from 'path';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import { ScriptSide } from '../defs/defs';
import { walkSync, getScriptSide } from '../utils';

export function generateResource(uri: vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if (fullFilePath === undefined)
        fullFilePath = vscode.workspace.rootPath;

    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the new resource, or press ESC to cancel`,
        placeHolder: 'newResource'
    };
    let resourceName = vscode.window.showInputBox(options);
    if (resourceName === undefined)
        return;
    resourceName.then(name => {
        let folderPath = path.join(fullFilePath, name);
        let metaFilePath = path.join(folderPath, "meta.xml");
        let clientScriptFilePath = path.join(folderPath, getFileName(name, ScriptSide.Client));
        let serverScriptFilePath = path.join(folderPath, getFileName(name, ScriptSide.Server));
        let sharedScriptFilePath = path.join(folderPath, getFileName(name, ScriptSide.Shared));

        if (fs.existsSync(folderPath)) {
            vscode.window.showErrorMessage("Resource folder already exists.");
            return;
        }

        fs.mkdirSync(folderPath);

        generateMetaFile(name, metaFilePath);
        generateClientFile(name, clientScriptFilePath);
        generateServerFile(name, serverScriptFilePath);
        generateSharedFile(name, sharedScriptFilePath);

        vscode.window.showInformationMessage("Resource '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(metaFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateClient(uri: vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if (fullFilePath === undefined)
        fullFilePath = vscode.workspace.rootPath;
    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the client file to create (without extension or c_ prefix), or press ESC to cancel`,
        placeHolder: 'newClientFile'
    };
    let clientFileName = vscode.window.showInputBox(options);
    if (clientFileName === undefined)
        return;
    clientFileName.then(name => {
        let fileName = getFileName(name, ScriptSide.Client);
        let clientScriptFilePath = path.join(fullFilePath, fileName);
        if (!fs.existsSync(fullFilePath)) {
            vscode.window.showErrorMessage("Resource folder does not exist.");
            return;
        }

        if (fs.existsSync(clientScriptFilePath)) {
            vscode.window.showErrorMessage(fileName + " already exists.");
            return;
        }

        generateClientFile(name, clientScriptFilePath);
        addToMeta(fullFilePath, clientScriptFilePath, ScriptSide.Client);

        vscode.window.showInformationMessage("Client file '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(clientScriptFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateServer(uri: vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if (fullFilePath === undefined)
        fullFilePath = vscode.workspace.rootPath;

    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the server file to create (without extension or s_ prefix), or press ESC to cancel`,
        placeHolder: 'newServerFile'
    };
    let serverFileName = vscode.window.showInputBox(options);
    if (serverFileName === undefined)
        return;
    serverFileName.then(name => {
        let fileName = getFileName(name, ScriptSide.Server);
        let serverScriptFilePath = path.join(fullFilePath, fileName);
        if (!fs.existsSync(fullFilePath)) {
            vscode.window.showErrorMessage("Resource folder does not exist.");
            return;
        }

        if (fs.existsSync(serverScriptFilePath)) {
            vscode.window.showErrorMessage(fileName + " already exists.");
            return;
        }

        generateServerFile(name, serverScriptFilePath);
        addToMeta(fullFilePath, serverScriptFilePath, ScriptSide.Server);

        vscode.window.showInformationMessage("Server file '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(serverScriptFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateShared(uri: vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if (fullFilePath === undefined)
        fullFilePath = vscode.workspace.rootPath;

    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the shared file to create (without extension or g_ prefix), or press ESC to cancel`,
        placeHolder: 'newServerFile'
    };
    let sharedFileName = vscode.window.showInputBox(options);
    if (sharedFileName === undefined)
        return;
    sharedFileName.then(name => {
        let fileName = getFileName(name, ScriptSide.Shared);
        let sharedScriptFilePath = path.join(fullFilePath, fileName);
        if (!fs.existsSync(fullFilePath)) {
            vscode.window.showErrorMessage("Resource folder does not exist.");
            return;
        }

        if (fs.existsSync(sharedScriptFilePath)) {
            vscode.window.showErrorMessage(fileName + " already exists.");
            return;
        }

        generateSharedFile(name, sharedScriptFilePath);
        addToMeta(fullFilePath, sharedScriptFilePath, ScriptSide.Server);

        vscode.window.showInformationMessage("Shared file '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(sharedScriptFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateMeta(uri: vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if (fullFilePath === undefined)
        fullFilePath = vscode.window.activeTextEditor.document.fileName;

    let folderPath = path.dirname(fullFilePath);
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));
    let filePath = path.join(folderPath, "meta.xml");
    if (folderPath === undefined || !fs.existsSync(folderPath)) {
        vscode.window.showErrorMessage("Resource folder does not exist.");
        return;
    }

    if (fs.existsSync(filePath)) {
        vscode.window.showErrorMessage("Meta.xml already exists.");
        return;
    }

    let fileExts: Array<string> = vscode.workspace.getConfiguration("mtalua-generate").get("filesrc_extensions", [".png", ".jpg", ".mp3", ".wav", ".ttf", ".tif"]);

    // TODO: This is horrible and should be changed :S, something like a file in the extension which holds our template
    let defaultAuthor = vscode.workspace.getConfiguration("mtalua-generate").get("author", "VSCode MTA:SA Lua");
    let defaultType = vscode.workspace.getConfiguration("mtalua-generate").get("meta_default_type", "script");
    let defaultVersion = vscode.workspace.getConfiguration("mtalua-generate").get("meta_default_version", "0.1.0");
    let content: string = "<meta>\n";

    if (vscode.workspace.getConfiguration("mtalua-generate").get("watermarking", true))
        content += "\t<!-- Auto generated using VSCode MTA:SA Lua by Subtixx -->\n";

    content += "\t<info author=\"" + defaultAuthor + "\" type=\"" + defaultType + "\" name=\"" + resourceName + "\" version=\"" + defaultVersion + "\" />\n";

    walkSync(folderPath, (file: string, stat: fs.Stats) => {
        if (path.extname(file) == ".git") return;

        let fileName = file.substr(file.lastIndexOf("\\") + 1, file.length - file.lastIndexOf("\\"));
        let relFilePath = path.relative(folderPath, file).replace(/\\/g, "/");

        if (fileExts.indexOf(path.extname(file)) > -1) {
            content += "\t<file src=\"" + relFilePath + "\" />\n";
            return;
        }

        if (path.extname(file) != "." + vscode.workspace.getConfiguration("mtalua-generate").get("client_extension", "lua") &&
            path.extname(file) != "." + vscode.workspace.getConfiguration("mtalua-generate").get("shared_extension", "lua") &&
            path.extname(file) != "." + vscode.workspace.getConfiguration("mtalua-generate").get("server_extension", "lua") &&
            path.extname(file) != ".luac" && path.extname(file) != ".clua" && path.extname(file) != ".lua" && path.extname(file) != ".slua" &&
            path.extname(file) != ".glua"
        ) {
            return;
        }

        let side = getScriptSide(fileName);

        switch (side) {
            case ScriptSide.Client:
                // Clientside
                content += "\t<script src=\"" + fileName + "\" type=\"client\" />\n";
                break;

            case ScriptSide.Server:
                // Serverside
                content += "\t<script src=\"" + relFilePath + "\" type=\"server\" />\n";
                break;

            default:
                // Clientside & Serverside / Shared
                content += "\t<script src=\"" + relFilePath + "\" type=\"both\" />\n";
                break;
        }
    });
    content += "</meta>";

    fs.writeFileSync(filePath, content);

    vscode.window.showInformationMessage("Meta file for '" + resourceName + "' successfully created.");

    vscode.workspace.openTextDocument(filePath).then(doc => {
        vscode.window.showTextDocument(doc);
    });
}

function generateMetaFile(resourceName: string, filePath: string) {
    // TODO: This is horrible and should be changed :S, something like a file in the extension which holds our template
    let defaultAuthor = vscode.workspace.getConfiguration("mtalua-generate").get("author", "VSCode MTA:SA Lua");
    let content: string = "<meta>\n";
    content += "\t<info author=\"" + defaultAuthor + "\" type=\"script\" name=\"" + resourceName + "\" />\n";

    if (vscode.workspace.getConfiguration("mtalua-generate").get("activate_client_file_generation", true))
        content += "\t<script src=\"c_" + resourceName + ".lua\" type=\"client\" cache=\"false\" />\n";
    if (vscode.workspace.getConfiguration("mtalua-generate").get("activate_client_file_generation", true))
        content += "\t<script src=\"s_" + resourceName + ".lua\" type=\"server\" />\n";
    content += "</meta>";

    fs.writeFileSync(filePath, content);
}

// TODO: These three can be combined into one.
function generateClientFile(resourceName: string, filePath: string) {
    if (!vscode.workspace.getConfiguration("mtalua-generate").get("activate_client_file_generation", true))
        return;
    let content = vscode.workspace.getConfiguration("mtalua-generate").get("default_client_content", "");
    fs.writeFileSync(filePath, content);
}

function generateServerFile(resourceName: string, filePath: string) {
    if (!vscode.workspace.getConfiguration("mtalua-generate").get("activate_client_file_generation", true))
        return;
    let content = vscode.workspace.getConfiguration("mtalua-generate").get("default_server_content", "");
    fs.writeFileSync(filePath, content);
}

function generateSharedFile(resourceName: string, filePath: string) {
    if (!vscode.workspace.getConfiguration("mtalua-generate").get("activate_shared_file_generation", true))
        return;
    let content = vscode.workspace.getConfiguration("mtalua-generate").get("default_shared_content", "");
    fs.writeFileSync(filePath, content);
}

function addToMeta(folderPath: string, filePath: string, side: ScriptSide) {
    if (!vscode.workspace.getConfiguration("mtalua-generate").get("modify_meta", true))
        return;

    let relFilePath = path.relative(folderPath, filePath).replace(/\\/g, "/");
    let metaFilePath = path.join(folderPath, "meta.xml");
    let data = fs.readFileSync(metaFilePath);

    xml2js.parseString(data, function (err, result) {
        let type = "server";
        if (side == ScriptSide.Client)
            type = "client";
        else if (side == ScriptSide.Shared)
            type = "both";

        var builder = new xml2js.Builder({ headless: true });
        result.meta.script.push({ $: { src: relFilePath, type: "client" } });
        fs.writeFileSync(metaFilePath, builder.buildObject(result));
    });
}

// TODO: Custom extension for weird people who use .clua for client side lua, .slua for server side lua and .glua for global lua
function getFileName(name: string, side: ScriptSide) {
    let sideStr: string = "";
    switch (side) {
        case ScriptSide.Client:
            sideStr = "client";
            break;
        case ScriptSide.Server:
            sideStr = "server";
            break;
        case ScriptSide.Shared:
            sideStr = "shared";
            break;
    }
    let fileName: string;
    if (vscode.workspace.getConfiguration("mtalua-generate").get(sideStr + "_prefix_type"))
        fileName = vscode.workspace.getConfiguration("mtalua-generate").get(sideStr + "_prefix") + name +
            "." + vscode.workspace.getConfiguration("mtalua-generate").get(sideStr + "_extension", "lua");
    else
        fileName = name + vscode.workspace.getConfiguration("mtalua-generate").get(sideStr + "_prefix") +
            "." + vscode.workspace.getConfiguration("mtalua-generate").get(sideStr + "_extension", "lua");

    return fileName;
}