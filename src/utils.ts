'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import { ScriptSide } from './defs/defs';


// Helper function.
export function walkSync(currentDirPath: string, callback: { (file: string, stat: fs.Stats): void; }) {
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

export function getScriptSide(fileName: string): ScriptSide {
    if (path.extname(fileName) != "." + vscode.workspace.getConfiguration("mtalua-generate").get("client_extension", "lua") ||
        fileName.startsWith("c_") || fileName.endsWith("_c") ||
        fileName.startsWith("client") || fileName.endsWith("client") ||
        fileName.startsWith(vscode.workspace.getConfiguration("mtalua-generate").get("client_prefix")) ||
        fileName.endsWith(vscode.workspace.getConfiguration("mtalua-generate").get("client_prefix")))
        return ScriptSide.Client;
    /*if (fileName.startsWith("g_") || fileName.endsWith("_g") ||
        fileName.startsWith("global") || fileName.endsWith("global") ||
        fileName.startsWith(vscode.workspace.getConfiguration("mtalua-generate").get("shared_prefix")) ||
        fileName.endsWith(vscode.workspace.getConfiguration("mtalua-generate").get("shared_prefix")))
        return ScriptSide.Shared;*/
    if (path.extname(fileName) != "." + vscode.workspace.getConfiguration("mtalua-generate").get("server_extension", "lua") ||
        fileName.startsWith("s_") || fileName.endsWith("_s") ||
        fileName.startsWith("server") || fileName.endsWith("server") ||
        fileName.startsWith(vscode.workspace.getConfiguration("mtalua-generate").get("server_prefix")) ||
        fileName.endsWith(vscode.workspace.getConfiguration("mtalua-generate").get("server_prefix")))
        return ScriptSide.Server;

    return ScriptSide.Shared;
}

/**
 * Determines the resource name based on the given path
 *  
 * @param path path of a file within the resource directory
 */
export function getResourceNameFromPath(filePath: string): string {
    const paths = filePath                    
        .replace("/", "\\")
        .split("\\");
    
    for (let i = paths.length - 1; i > 0; i--) {

        // Folders surrounded by square brackets are invalid
        if (paths[i].startsWith("[") && paths[i].endsWith("]"))
            continue;

        if (fs.existsSync(paths.slice(0, i + 1).join("\\") + "\\meta.xml")) {
            return paths[i];
        }
    }

    return;
}