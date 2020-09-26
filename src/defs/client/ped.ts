'use strict';

import {MTAFunction, ScriptSide} from "../defs";

export var PedFunctionDefinitions = new Array<MTAFunction>();

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "setPedAimTarget";
tmpDef.description = "This function allows you to set a ped's aim target to a specific point. If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedCameraRotation";
tmpDef.description = "This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with setCameraMatrix, because that function is designed for fixed (scripted) camera moves. ";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float cameraRotation"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedDoingTask";
tmpDef.description = "This function checks if the specified ped is carrying out a certain task.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string taskName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedVoice";
tmpDef.description = "Gets the current voice of a ped.";
tmpDef.returnType = "string string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedWeaponMuzzlePosition";
tmpDef.description = "Returns the world position of the muzzle of the weapon that a ped is currently carrying. The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out. The position may not be accurate if the ped is off screen.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPedBeKnockedOffBike";
tmpDef.description = "This function checks if the given ped can fall off bikes.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePedWeapon";
tmpDef.description = "This function gives the specified weapon to the specified ped. This function can't be used on players, use giveWeapon for that.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int weapon [", "int ammo=30", "bool setAsCurrent=false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetCollision";
tmpDef.description = "This function allows retrieval of where a ped's target is blocked. It will only be blocked if there is an obstacle within a ped's target range.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTask";
tmpDef.description = "This function is used to get any simple or complex task of a certain type for a ped.";
tmpDef.returnType = "string, string, string, string";
tmpDef.args = ["ped thePed", "string priority", "int taskType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedOxygenLevel";
tmpDef.description = "This function allows you to set the oxygen level of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float oxygen"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedAnimation";
tmpDef.description = "Gets the animation of a player or ped that was set using setPedAnimation.";
tmpDef.returnType = "string string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedTargetingMarkerEnabled";
tmpDef.description = "This function is used to toggle the health target marker on top of all pedestrians.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedControlState";
tmpDef.description = "This function makes a ped press or release a certain control. It doesn't work with the local player, so use setControlState instead.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetStart";
tmpDef.description = "This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedControlState";
tmpDef.description = "Checks whether a ped has a certain control pressed.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetEnd";
tmpDef.description = "This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedVoice";
tmpDef.description = "Changes the voice of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string voiceType", "string voiceName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedAnalogControlState";
tmpDef.description = "This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed", "string controlName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedMoveState";
tmpDef.description = "This function returns the current move state for the specified ped.";
tmpDef.returnType = "string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedOxygenLevel";
tmpDef.description = "This function returns the current oxygen level of the specified ped.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedCanBeKnockedOffBike";
tmpDef.description = "This function controls if a ped can fall of his bike by accident - namely by banging into a wall.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "bool canBeKnockedOffBike"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAnalogControlState";
tmpDef.description = "Sets an analog state of a specified ped's control, as if they pressed or released it.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control", "float state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedLookAt";
tmpDef.description = "Makes a ped turn his head and look at a specific world position or element.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float x", "float y", "float z [", "int time = 3000 [", "int blend = 1000 ]", "element target = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedCameraRotation";
tmpDef.description = "This function gets the current camera rotation of a ped.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedSimplestTask";
tmpDef.description = "This function is used to get the name of a specified ped's current simplest task.";
tmpDef.returnType = "string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedBonePosition";
tmpDef.description = "Returns the 3D world coordinates of a specific bone of a given ped.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped thePed", "int bone"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

// 1.5.6

tmpDef = new MTAFunction;
tmpDef.label = "isPedReloadingWeapon";
tmpDef.description = "This function is used to determine whether or not a ped is currently reloading their weapon. Useful to stop certain quick reload exploits. ";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedsLODDistance";
tmpDef.description = "This function gets the peds LOD distance. ";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedsLODDistance";
tmpDef.description = "This function sets the peds LOD distance.";
tmpDef.returnType = "bool";
tmpDef.args = ["float distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetPedsLODDistance";
tmpDef.description = "Resets the distance of peds LOD to default. Default values depends on client setting. If client has enabled high detail peds in video options, value will be reset to 500 - otherwise to 60. ";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "isPedFootBloodEnabled";
tmpDef.description = "This function checks if player feets are bleeding.";
tmpDef.returnType = "bool";
tmpDef.args = ["element thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
PedFunctionDefinitions.push(tmpDef);