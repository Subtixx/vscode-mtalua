'use strict';

import { LuaFunction, LuaConst } from './defs/defs';

import { SharedDefinitions } from './defs/shared';
import { ClientDefinitions } from './defs/client';
import { ServerDefinitions } from './defs/server';
import { DeprecatedDefinitions } from './defs/deprecated';

import fs = require('fs');

function GenerateDefinitionFile(FileName: string, Definitions: Array<LuaFunction>) {
    let definitionText = "";

    let y: number = 0;
    for (let i in Definitions) {
        let idef: LuaFunction = Definitions[i];
        if (y > 0)
            definitionText += "|";
        definitionText += idef.label;
        y++;
    }
    
    fs.writeFile(FileName, definitionText, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("File '" + FileName + "' created!");
    });
}

GenerateDefinitionFile("deprecated_defs.txt", DeprecatedDefinitions);
GenerateDefinitionFile("shared_defs.txt", SharedDefinitions);
GenerateDefinitionFile("client_defs.txt", ClientDefinitions);
GenerateDefinitionFile("server_defs.txt", ServerDefinitions);