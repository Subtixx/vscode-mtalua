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
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen instead.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool frozen"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addPlayerClothes";
tmpDef.description = deprecatedText + "Please use addPedClothes";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string clothesTexture", "string clothesModel", "int clothesType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "attachElementToElement";
tmpDef.description = deprecatedText + "Please use attachElements";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element theAttachToElement", "[ float xPosOffset", "float yPosOffset", "float zPosOffset", "float xRotOffset", "float yRotOffset", "float zRotOffset ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "banSerial";
tmpDef.description = deprecatedText + "Please use addBan";
tmpDef.returnType = "bool";
tmpDef.args = ["string theSerial"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPlayerBeKnockedOffBike";
tmpDef.description = deprecatedText + "Please use canPedBeKnockedOffBike";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPlayerUseFunction";
tmpDef.description = deprecatedText + "Please use hasObjectPermissionTo";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string functionName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "detachElementFromElement";
tmpDef.description = deprecatedText + "Please use detachElements";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "[ element theAttachToElement ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "doesPlayerHaveJetPack";
tmpDef.description = deprecatedText + "Please use isPedWearingJetpack";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineImportCOL";
tmpDef.description = deprecatedText + "Please use engineReplaceCOL";
tmpDef.returnType = "bool";
tmpDef.args = ["col", "int model_id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineUnloadModel";
tmpDef.description = deprecatedText + "Please use engineRestoreModel";
tmpDef.returnType = "bool";
tmpDef.args = ["int model_id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLCreateTable";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "bool";
tmpDef.args = ["string tableName", "string definition"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLDelete";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "bool";
tmpDef.args = ["string tableName", "string conditions"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLDropTable";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "bool";
tmpDef.args = ["string tableName string tableName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLInsert";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "bool";
tmpDef.args = [" string tableName", "string values", "( [string columns] ) string tableName", "string values", "( [string columns] )"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLSelect";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "table";
tmpDef.args = ["string tableName", "string fields", "[ string conditions", "int limit ]string tableName", "string fields", "[ string conditions", "int limit ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLUpdate";
tmpDef.description = deprecatedText + "Please use executeSQLQuery";
tmpDef.returnType = "bool";
tmpDef.args = [" string tableName", "string set", "[ string conditions ] string tableName", "string set", "[ string conditions ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountClient";
tmpDef.description = deprecatedText + "Please use getAccountPlayer";
tmpDef.returnType = "client";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBansXML";
tmpDef.description = deprecatedText + "Please use getBans";
tmpDef.returnType = "xmlnode";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanUsername";
tmpDef.description = deprecatedText + "Please use getBanNick";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraFixedModeTarget";
tmpDef.description = deprecatedText + "Please use getCameraTarget/getCameraMatrix";
tmpDef.returnType = "";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraMode";
tmpDef.description = deprecatedText + "Please use getCameraMatrix";
tmpDef.returnType = "stringfloat x", "float y", "float z";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraPosition";
tmpDef.description = deprecatedText + "Please use getCameraMatrix";
tmpDef.returnType = "float x", "float y", "float z";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientAccount";
tmpDef.description = deprecatedText + "Please use getPlayerAccount";
tmpDef.returnType = "account";
tmpDef.args = ["client theClient"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientIP";
tmpDef.description = deprecatedText + "Please use getPlayerIP";
tmpDef.returnType = "string";
tmpDef.args = ["client theClient"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClientName";
tmpDef.description = deprecatedText + "Please use getPlayerName";
tmpDef.returnType = "string";
tmpDef.args = ["client theClient"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMTAVersion";
tmpDef.description = deprecatedText + "Please use getVersion";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectModel";
tmpDef.description = deprecatedText + "Please use getElementModel";
tmpDef.returnType = "int";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectRotation";
tmpDef.description = deprecatedText + "Please use getElementRotation";
tmpDef.returnType = "float float float";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedRotation";
tmpDef.description = deprecatedText + "Please use getElementRotation";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerACInfo";
tmpDef.description = deprecatedText + "Please use onPlayerACInfo";
tmpDef.returnType = "table";
tmpDef.args = ["element thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerAmmoInClip";
tmpDef.description = deprecatedText + "Please use getPedAmmoInClip";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer", "int weaponSlot"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerArmor";
tmpDef.description = deprecatedText + "Please use getPedArmor";
tmpDef.returnType = "float";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerClothes";
tmpDef.description = deprecatedText + "Please use getPedClothes";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer", "int clothesType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerContactElement";
tmpDef.description = deprecatedText + "Please use getPedContactElement";
tmpDef.returnType = "element";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerFightingStyle";
tmpDef.description = deprecatedText + "Please use getPedFightingStyle";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerFromNick";
tmpDef.description = deprecatedText + "Please use getPlayerFromName";
tmpDef.returnType = "player";
tmpDef.args = ["string playerName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerGravity";
tmpDef.description = deprecatedText + "Please use getPedGravity";
tmpDef.returnType = "float";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerOccupiedVehicle";
tmpDef.description = deprecatedText + "Please use getPedOccupiedVehicle";
tmpDef.returnType = "vehicle";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerOccupiedVehicleSeat";
tmpDef.description = deprecatedText + "Please use getPedOccupiedVehicleSeat";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerRotation";
tmpDef.description = deprecatedText + "Please use getElementRotation";
tmpDef.returnType = "float";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerSimplestTask";
tmpDef.description = deprecatedText + "Please use getPedSimplestTask";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerSkin";
tmpDef.description = deprecatedText + "Please use getElementModel";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerStat";
tmpDef.description = deprecatedText + "Please use getPedStat";
tmpDef.returnType = "float";
tmpDef.args = ["player thePlayer", "int stat"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTarget";
tmpDef.description = deprecatedText + "Please use getPedTarget";
tmpDef.returnType = "element";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetCollision";
tmpDef.description = deprecatedText + "Please use getPedTargetCollision";
tmpDef.returnType = "float float float";
tmpDef.args = ["player targetingPlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetEnd";
tmpDef.description = deprecatedText + "Please use getPedTargetEnd";
tmpDef.returnType = "float float float";
tmpDef.args = ["player targetingPlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTargetStart";
tmpDef.description = deprecatedText + "Please use getPedTargetStart";
tmpDef.returnType = "float float float";
tmpDef.args = ["player targetingPlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTask";
tmpDef.description = deprecatedText + "Please use getPedTask";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer", "string priority", "int taskType", "[int index = 0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTotalAmmo";
tmpDef.description = deprecatedText + "Please use getPedTotalAmmo";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer [", "int weaponSlot = current ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerWeapon";
tmpDef.description = deprecatedText + "Please use getPedWeapon";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer", "[ int weaponSlot = current ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerWeaponSlot";
tmpDef.description = deprecatedText + "Please use getPedWeaponSlot";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleID";
tmpDef.description = deprecatedText + "Please use getElementModel";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleIDFromName";
tmpDef.description = deprecatedText + "Please use getVehicleModelFromName";
tmpDef.returnType = "int";
tmpDef.args = ["string name"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNameFromID";
tmpDef.description = deprecatedText + "Please use getVehicleNameFromModel";
tmpDef.returnType = "string";
tmpDef.args = ["int id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleRotation";
tmpDef.description = deprecatedText + "Please use getElementRotation";
tmpDef.returnType = "float float float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePlayerJetPack";
tmpDef.description = deprecatedText + "Please use setPedWearingJetpack";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "giveWeaponAmmo";
tmpDef.description = deprecatedText + "Please use giveWeapon";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int weapon", "int ammo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetCaratIndex";
tmpDef.description = deprecatedText + "Please use guiEditSetCaretIndex";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoSetCaratIndex";
tmpDef.description = deprecatedText + "Please use guiMemoSetCaretIndex";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-memo theMemo", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "handlingGetSuspensionAntidiveMultiplier";
tmpDef.description = deprecatedText + "Please use getVehicleHandling";
tmpDef.returnType = "float";
tmpDef.args = ["handling theHandling/int vehicleI"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isObjectStatic";
tmpDef.description = deprecatedText + "Please use isElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedInWater";
tmpDef.description = deprecatedText + "Please use isElementInWater";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerChoking";
tmpDef.description = deprecatedText + "Please use isPedChoking";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDead";
tmpDef.description = deprecatedText + "Please use isPedDead";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDoingTask";
tmpDef.description = deprecatedText + "Please use isPedDoingTask";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string taskName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerDucked";
tmpDef.description = deprecatedText + "Please use isPedDucked";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerInVehicle";
tmpDef.description = deprecatedText + "Please use isPedInVehicle";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerInWater";
tmpDef.description = deprecatedText + "Please use isElementInWater";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerOnGround";
tmpDef.description = deprecatedText + "Please use isPedOnGround";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleFrozen";
tmpDef.description = deprecatedText + "Please use isElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "killPlayer";
tmpDef.description = deprecatedText + "Please use killPed";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "[ player theKiller = nil", "int weapon=255", "int bodyPart=255 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "makePedUseGun";
tmpDef.description = deprecatedText + "Please use setPedControlState";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int useType", "element target"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "randFloat";
tmpDef.description = deprecatedText + "Please use math.random ";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "randInt";
tmpDef.description = deprecatedText + "Please use math.random";
tmpDef.returnType = "int";
tmpDef.args = ["int lowerbound", "int upperbound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerClothes";
tmpDef.description = deprecatedText + "Please use removePedClothes";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int clothesType", "[ string clothesTexture", "string clothesModel ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerFromTeam";
tmpDef.description = deprecatedText + "Please use setPlayerTeam";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerFromVehicle";
tmpDef.description = deprecatedText + "Please use removePedFromVehicle";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePlayerJetPack";
tmpDef.description = deprecatedText + "Please use setPedWearingJetpack";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "rotateCameraRight";
tmpDef.description = deprecatedText + "Please use ??? ";
tmpDef.returnType = "";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "rotateCameraUp";
tmpDef.description = deprecatedText + "Please use setCameraMatrix ";
tmpDef.returnType = "";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraLookAt";
tmpDef.description = deprecatedText + "Please use setCameraMatrix";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraMode";
tmpDef.description = deprecatedText + "Please use setCameraTarget";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string mode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraPosition";
tmpDef.description = deprecatedText + "Please use setCameraMatrix";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setClientName";
tmpDef.description = deprecatedText + "Please use setPlayerName";
tmpDef.returnType = "bool";
tmpDef.args = ["client theClient", "string newName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectModel";
tmpDef.description = deprecatedText + "Please use setElementModel";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "int id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectRotation";
tmpDef.description = deprecatedText + "Please use setElementRotation";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "float rotX", "float rotY", "float rotZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectStatic";
tmpDef.description = deprecatedText + "Please use setElementFrozen";
tmpDef.returnType = "";
tmpDef.args = ["object theObject", "bool toggle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAudioType";
tmpDef.description = deprecatedText + "Please use setPedVoice";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string audio"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedRotation";
tmpDef.description = deprecatedText + "Please use setElementRotation";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float rotation [", "bool conformPedRotation = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedSkin";
tmpDef.description = deprecatedText + "Please use setElementModel";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int skinID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerArmor";
tmpDef.description = deprecatedText + "Please use setPedArmor";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "float playerArmor"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerCanBeKnockedOffBike";
tmpDef.description = deprecatedText + "Please use setPedCanBeKnockedOffBike";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "bool canBeKnockedOffBike"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerChoking";
tmpDef.description = deprecatedText + "Please use setPedChoking";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "bool choking"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerFightingStyle";
tmpDef.description = deprecatedText + "Please use setPedFightingStyle";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int style"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerGravity";
tmpDef.description = deprecatedText + "Please use setPedGravity";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "float level"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerRotation";
tmpDef.description = deprecatedText + "Please use setElementRotation";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "float rotation"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerSkin";
tmpDef.description = deprecatedText + "Please use setElementModel";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int skinID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerStat";
tmpDef.description = deprecatedText + "Please use setPedStat";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int stat", "float value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerWeaponSlot";
tmpDef.description = deprecatedText + "Please use setPedWeaponSlot";
tmpDef.returnType = "bool";
tmpDef.args = ["player theplayer", "int weapon_slot"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleFrozen";
tmpDef.description = deprecatedText + "Please use setElementFrozen";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool freezeStatus"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleGunsEnabled";
tmpDef.description = deprecatedText + "Please use ToggleControl";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool gunsEnabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleModel";
tmpDef.description = deprecatedText + "Please use setElementModel";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int model"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleRotation";
tmpDef.description = deprecatedText + "Please use setElementRotation";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "rx", "ry", "rz"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "showPlayerHudComponent";
tmpDef.description = deprecatedText + "Please use setPlayerHudComponentVisible";
tmpDef.returnType = "bool";
tmpDef.args = ["[player thePlayer]", "string component", "bool show"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "takeWeaponAmmo";
tmpDef.description = deprecatedText + "Please use takeWeapon";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int weapon", "int ammo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleCameraFixedMode";
tmpDef.description = deprecatedText + "Please use setCameraPosition and setCameraLookAt functions respectively";
tmpDef.returnType = "bool";
tmpDef.args = ["bool fixed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "unbanIP";
tmpDef.description = deprecatedText + "Please use removeBan";
tmpDef.returnType = "bool";
tmpDef.args = ["string ipToUnban", "[player unbanningPlayer = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "unbanSerial";
tmpDef.description = deprecatedText + "Please use removeBan";
tmpDef.returnType = "bool";
tmpDef.args = ["string serialToUnban"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "warpPlayerIntoVehicle";
tmpDef.description = deprecatedText + "Please use warpPedIntoVehicle";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "vehicle theVehicle", "[ int seat=0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlCreateSubNode";
tmpDef.description = deprecatedText + "Please use xmlCreateChild";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["xmlnode parentNode", "string tagname"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlFindSubNode";
tmpDef.description = deprecatedText + "Please use xmlFindChild";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["xmlnode parent", "string subnode", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

// 1.5.6

tmpDef = new MTAFunction;
tmpDef.label = "givePedJetPack";
tmpDef.description = deprecatedText + "Please use setPedWearingJetpack after 1.5.6";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePedJetPack";
tmpDef.description = deprecatedText + "Please use setPedWearingJetpack after 1.5.6";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "doesPedHaveJetPack";
tmpDef.description = deprecatedText + "Please use isPedWearingJetpack after 1.5.6";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleTurnVelocity";
tmpDef.description = deprecatedText + "Please use getElementTurnVelocity after 1.5.6";
tmpDef.returnType = "float float float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleTurnVelocity";
tmpDef.description = deprecatedText + "Please use setElementTurnVelocity after 1.5.6";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float rx", "float ry", "float rz"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleDirtLevel";
tmpDef.description = "Function has been disabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"," int dirtLevel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
tmpDef.deprecated = true;
DeprecatedDefinitions.push(tmpDef);


// tmpDef = new MTAFunction;
// tmpDef.label = "onClientChangeNick";
// tmpDef.description = deprecatedText + "Please use ??? ";
// tmpDef.returnType = "";
// tmpDef.args = [""];
// tmpDef.argDescs = {};
// tmpDef.scriptSide = ScriptSide.Shared;
//tmpDef.deprecated = true;
// DeprecatedDefinitions.push(tmpDef);

// tmpDef = new MTAFunction;
// tmpDef.label = "onClientLogout";
// tmpDef.description = deprecatedText + "Please use ??? ";
// tmpDef.returnType = "";
// tmpDef.args = [""];
// tmpDef.argDescs = {};
// tmpDef.scriptSide = ScriptSide.Shared;
//tmpDef.deprecated = true;
// DeprecatedDefinitions.push(tmpDef);