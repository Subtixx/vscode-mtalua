'use strict';

import { LuaFunction, MTAFunction, ScriptSide } from "./defs";

export var DeprecatedDefinitions = new Array<MTAFunction>();

let deprecatedText = "**This function is deprecated. This means that its use is discouraged and that it might not exist in future versions.**\n\n";

let tmpDef = new MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "getPedSkin";
tmpDef.description = deprecatedText + "Please use getElementModel";
tmpDef.returnType = "int";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen instead.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool frozen"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addPlayerClothes";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "attachElementToElement";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "banSerial";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPlayerBeKnockedOffBike";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPlayerUseFunction";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "detachElementFromElement";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "doesPlayerHaveJetPack";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineImportCOL";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineUnloadModel";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLCreateTable";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLDelete";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLDropTable";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLInsert";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLSelect";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLUpdate";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountClient";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBansXML";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanUsername";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraFixedModeTarget";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraMode";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraPosition";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientAccount";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientIP";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientName";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMTAVersion";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectModel";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedSkin";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerACInfo";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerAmmoInClip";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerArmor";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerClothes";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerContactElement";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerFightingStyle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerFromNick";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerGravity";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerOccupiedVehicle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerOccupiedVehicleSeat";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerSimplestTask";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerSkin";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerStat";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTarget";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetCollision";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetEnd";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetStart";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTask";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTotalAmmo";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerWeapon";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerWeaponSlot";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleID";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleIDFromName";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNameFromID";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePlayerJetPack";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "giveWeaponAmmo";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetCaratIndex";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoSetCaratIndex";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "handlingGetSuspensionAntidiveMultiplier";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isObjectStatic";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedFrozen";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedInWater";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerChoking";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDead";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDoingTask";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDucked";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerInVehicle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerInWater";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerOnGround";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleFrozen";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "killPlayer";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "makePedUseGun";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "onClientChangeNick";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "onClientLogout";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "randFloat";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "randInt";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerClothes";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerFromTeam";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerFromVehicle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerJetPack";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "rotateCameraRight";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "rotateCameraUp";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraLookAt";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraMode";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraPosition";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setClientName";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectModel";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectStatic";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAudioType";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFrozen";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedSkin";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerArmor";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerCanBeKnockedOffBike";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerChoking";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerFightingStyle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerGravity";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerSkin";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerStat";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerWeaponSlot";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleFrozen";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleGunsEnabled";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleModel";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleRotation";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "showPlayerHudComponent";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "takeWeaponAmmo";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleCameraFixedMode";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "unbanIP";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "unbanSerial";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "warpPlayerIntoVehicle";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlCreateSubNode";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlFindSubNode";
tmpDef.description = deprecatedText + "Please use ???";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
DeprecatedDefinitions.push(tmpDef);