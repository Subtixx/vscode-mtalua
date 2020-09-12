'use strict';

import {MTAFunction, ScriptSide} from "../defs";

export var EngineFunctionDefinitions = new Array<MTAFunction>();

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceModel";
tmpDef.description = "This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF. This function supports vehicles, objects, peds and players.";
tmpDef.returnType = "bool";
tmpDef.args = ["dff theModel", "int modelID ", "[bool alphaTransparency = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetVisibleTextureNames";
tmpDef.description = "This function returns a list of the world textures which are being used to draw the current scene.";
tmpDef.returnType = "table";
tmpDef.args = ["[ string nameFilter = \"*\"", "string modelId = \"\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadCOL";
tmpDef.description = "This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can then be used to provide collisions for in-game objects.";
tmpDef.returnType = "col";
tmpDef.args = ["string col_file / string raw_data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRemoveShaderFromWorldTexture";
tmpDef.description = "This function removes a shader from one or more world textures.";
tmpDef.returnType = "bool";
tmpDef.args = ["element shader", "string textureName [", "element targetElement = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineImportTXD";
tmpDef.description = "engineImportTXD";
tmpDef.returnType = "bool";
tmpDef.args = ["txd texture", "int model_id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelTextureNames";
tmpDef.description = "This function returns a table of the world textures which are applied to the specified model.";
tmpDef.returnType = "table";
tmpDef.args = ["string modelId = \"\""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelLODDistance";
tmpDef.description = "This function gets the LOD distance for any object / model ID.";
tmpDef.returnType = "float";
tmpDef.args = ["int model"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetAsynchronousLoading";
tmpDef.description = "This function enables or disables asynchronous model loading. Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time. However, it can cause the new models to appear slightly later than they might have otherwise.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enable", "bool force"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreCOL";
tmpDef.description = "This function restores the original collision model of the given model ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadTXD";
tmpDef.description = "This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture dictionary can then be used to provide textures.";
tmpDef.returnType = "txd";
tmpDef.args = ["string txd_file / string raw_data [", "bool filteringEnabled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceCOL";
tmpDef.description = "This function replaces the collision file of the given model id to the collision file passed. Use engineLoadCOL to load the collision file first.";
tmpDef.returnType = "bool";
tmpDef.args = ["col theCol", "int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadDFF";
tmpDef.description = "This function loads a RenderWare Model (DFF) file into GTA.";
tmpDef.returnType = "dff";
tmpDef.args = ["string dff_file / string raw_data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelNameFromID";
tmpDef.description = "This function gets the model name of an object model from model ID.";
tmpDef.returnType = "string";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreModel";
tmpDef.description = "This function restores the visual DFF model of the given model ID. This restores the result of engineLoadIFP.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineApplyShaderToWorldTexture";
tmpDef.description = "This function applies a shader to one or more world textures.";
tmpDef.returnType = "bool";
tmpDef.args = ["element shader", "string textureName [", "element targetElement = nil", "bool appendLayers = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelIDFromName";
tmpDef.description = "This function gets the model ID of an object model from object name. This function is the inverse of engineGetModelNameFromID";
tmpDef.returnType = "int";
tmpDef.args = ["string modelName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetModelLODDistance";
tmpDef.description = "This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.";
tmpDef.returnType = "bool";
tmpDef.args = ["int model", "float distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

// 1.5.6
tmpDef = new MTAFunction;
tmpDef.label = "engineLoadIFP";
tmpDef.description = "This function loads an animation library (IFP) file into GTA with a custom block name.";
tmpDef.returnType = "ifp";
tmpDef.args = ["string IfpFilePath", "string CustomBlockName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceAnimation";
tmpDef.description = "This function replaces a specific internal (default) animation with a custom one that has been loaded using engineLoadIFP function.";
tmpDef.returnType = "bool";
tmpDef.args = ["thePed", "InternalBlockName", "InternalAnimName", "CustomBlockName", "CustomAnimName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreAnimation";
tmpDef.description = "This function restores internal (default) animations that were replaced using engineReplaceAnimation function.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "[ string InternalBlockName", "string InternalAnimName]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelPhysicalPropertiesGroup";
tmpDef.description = "This function gets physical properties group id used by given model.";
tmpDef.returnType = "int";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreModelPhysicalPropertiesGroup";
tmpDef.description = "This function restores original physical properties group used by given model.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetModelPhysicalPropertiesGroup";
tmpDef.description = "This function sets physical properties group id used by given model.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"," int groupID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetObjectGroupPhysicalProperty";
tmpDef.description = "This function gets physical property of given properties group.";
tmpDef.returnType = "var";
tmpDef.args = ["int groupID"," objectgroup-modifiable property"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreObjectGroupPhysicalProperties";
tmpDef.description = "This function restores physical property of given properties group.";
tmpDef.returnType = "bool";
tmpDef.args = ["int groupID"," objectgroup-modifiable property"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetObjectGroupPhysicalProperty";
tmpDef.description = "This function sets physical property of given properties group.";
tmpDef.returnType = "bool";
tmpDef.args = ["int groupID"," objectgroup-modifiable property"," var newValue"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRequestModel";
tmpDef.description = "This function is used to assign the next available model ID to a certain element type. Currently only 'ped' is supported.";
tmpDef.returnType = "int";
tmpDef.args = ["str elementType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineFreeModel";
tmpDef.description = "This function is used to un-assign the specified model ID from the engineRequestModel assignment.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelTextures";
tmpDef.description = "This function allows you to get the textures of any model.";
tmpDef.returnType = "table";
tmpDef.args = ["string/int modelName/modelID ["," string/table textureNames ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetSurfaceProperties";
tmpDef.description = "This function changes a property of a surface.";
tmpDef.returnType = "bool";
tmpDef.args = ["int surfaceID"," string property"," mixed value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetSurfaceProperties";
tmpDef.description = "This function retrieves the value of a surface property.";
tmpDef.returnType = "mixed";
tmpDef.args = ["int surfaceID"," string property"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineResetSurfaceProperties";
tmpDef.description = "This function resets a surface property to its default value. If no ID is provided, it will reset all surfaces' properties to their original values.";
tmpDef.returnType = "mixed";
tmpDef.args = ["[ int surfaceID ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineResetModelLODDistance";
tmpDef.description = "This function resets the LOD distance for an object / model ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int model"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
EngineFunctionDefinitions.push(tmpDef);