import * as path from 'path';
import * as vscode from 'vscode';
import * as fs from 'fs';

export function generateResource(uri:vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if(fullFilePath === undefined)    
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
        let clientScriptFilePath = path.join(folderPath, "c_" + name + ".lua");
        let serverScriptFilePath = path.join(folderPath, "s_" + name + ".lua");
        if (fs.existsSync(folderPath)) {
            vscode.window.showErrorMessage("Resource folder already exists.");
            return;
        }

        fs.mkdirSync(folderPath);

        generateMetaFile(name, metaFilePath);
        generateClientFile(name, clientScriptFilePath);
        generateServerFile(name, serverScriptFilePath);

        vscode.window.showInformationMessage("Resource '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(metaFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateClient() {
    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the client file to create (without extension or c_ prefix), or press ESC to cancel`,
        placeHolder: 'newClientFile'
    };
    let clientFileName = vscode.window.showInputBox(options);
    if (clientFileName === undefined)
        return;
    clientFileName.then(name => {
        let folderPath = vscode.workspace.rootPath;
        let clientScriptFilePath = path.join(folderPath, "c_" + name + ".lua");
        if (!fs.existsSync(folderPath)) {
            vscode.window.showErrorMessage("Resource folder does not exist.");
            return;
        }

        fs.mkdirSync(folderPath);

        generateClientFile(name, clientScriptFilePath);

        vscode.window.showInformationMessage("Client file '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(clientScriptFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateServer() {
    const options: vscode.InputBoxOptions = {
        ignoreFocusOut: true,
        prompt: `Type the name of the server file to create (without extension or s_ prefix), or press ESC to cancel`,
        placeHolder: 'newServerFile'
    };
    let serverFileName = vscode.window.showInputBox(options);
    if (serverFileName === undefined)
        return;
    serverFileName.then(name => {
        let folderPath = vscode.workspace.rootPath;
        let serverScriptFilePath = path.join(folderPath, "s_" + name + ".lua");
        if (!fs.existsSync(folderPath)) {
            vscode.window.showErrorMessage("Resource folder does not exist.");
            return;
        }

        generateServerFile(name, serverScriptFilePath);

        vscode.window.showInformationMessage("Server file '" + name + "' successfully created.");

        vscode.workspace.openTextDocument(serverScriptFilePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });
}

export function generateMeta(uri:vscode.Uri) {
    let fullFilePath = uri.fsPath;
    if(fullFilePath === undefined)    
        fullFilePath = vscode.window.activeTextEditor.document.fileName;
    
    let folderPath = path.dirname(vscode.window.activeTextEditor.document.fileName);
    let resourceName = folderPath.substr(folderPath.lastIndexOf("\\") + 1, folderPath.length - folderPath.lastIndexOf("\\"));
    let filePath = path.join(folderPath, "meta.xml");
    if (folderPath === undefined || !fs.existsSync(folderPath)) {
        vscode.window.showErrorMessage("Resource folder does not exist.");
        return;
    }
    
    // TODO: This is horrible and should be changed :S, something like a file in the extension which holds our template
    let defaultAuthor = vscode.workspace.getConfiguration("mtalua-generate").get("author", "VSCode MTA:SA Lua");
    let content: string = "<meta>\n";
    // TODO: Add option to turn off watermarking.
    content += "\t<!-- Auto generated using VSCode MTA:SA Lua by Subtixx -->\n";
    content += "\t<info author=\"" + defaultAuthor + "\" type=\"script\" name=\"" + resourceName + "\" />\n";

    //fs.readdirSync(folderPath).forEach(file => {
    walkSync(folderPath, (file : string, stat : fs.Stats) => {
        if(path.extname(file) == ".git") return;

        let fileName = file.substr(file.lastIndexOf("\\") + 1, file.length - file.lastIndexOf("\\"));
        let relFilePath = path.relative(folderPath, file).replace(/\\/g, "/");

        // TODO: Make this a setting
        if (path.extname(file) != ".lua" && path.extname(file) != ".clua" && path.extname(file) != ".slua" && path.extname(file) != ".luac") {
            content += "\t<file src=\"" + relFilePath + "\" />\n";
            return;
        }
        
        if (fileName.startsWith("c_") || fileName.endsWith("_c") ||
            fileName.startsWith("client") || fileName.endsWith("client")
        ) {
            // Clientside
            content += "\t<script src=\"" + fileName + "\" type=\"client\" />\n";
        } else if (fileName.startsWith("g_") || fileName.endsWith("_g") ||
            fileName.startsWith("global") || fileName.endsWith("global")
        ) {
            // Clientside & Serverside
            content += "\t<script src=\"" + relFilePath + "\" type=\"both\" />\n";
        } else {
            // Serverside
            content += "\t<script src=\"" + relFilePath + "\" type=\"server\" />\n";
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

// Helper function.
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}