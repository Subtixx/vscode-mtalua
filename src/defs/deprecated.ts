'use strict';

import {LuaFunction, MTAFunction, ScriptSide} from "./defs";

export var DeprecatedDefinitions = new Array<LuaFunction>();

let deprecatedText = "**This function is deprecated. This means that its use is discouraged and that it might not exist in future versions.**\n\n";

let tmpDef = new MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "getPedSkin";
tmpDef.description = deprecatedText + "Please use getElementModel";
tmpDef.returnType = "int";
tmpDef.args =["ped thePed"];
tmpDef.argDescs = { };
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen instead.";
tmpDef.returnType = "bool";
tmpDef.args =["ped thePed"];
tmpDef.argDescs = { };
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args =[" ped thePed", "bool frozen"];
tmpDef.argDescs = { };
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);