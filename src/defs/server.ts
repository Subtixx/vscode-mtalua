'use strict';

import {LuaFunction, MTAFunction, ScriptSide} from "./defs";

export var ServerDefinitions = new Array<MTAFunction>();

let tmpDef = new MTAFunction;
tmpDef.label = "dbPrepareString";
tmpDef.description = "This function escapes arguments in the same way as dbQuery, except dbPrepareString returns the query string instead of processing the query. This allows you to safely build complex query strings from component parts and help prevent (one class of) SQL injection.";
tmpDef.returnType = "string";
tmpDef.args = ["element databaseConnection", "string query", "[var param1", "var param2 ...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resendPlayerACInfo";
tmpDef.description = "This function will force the specified player to resend their AC info, triggering the onPlayerACInfo event again.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCommandHandlers";
tmpDef.description = "[ resource theResource ]";
tmpDef.returnType = "table";
tmpDef.args = ["[resource theResource]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isResourceArchived";
tmpDef.description = "Checks whether a resource is currently archived (running from within a ZIP file).";
tmpDef.returnType = "bool";
tmpDef.args = ["resource resourceElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "copyAccountData";
tmpDef.description = "This function copies all of the data from one account to another.";
tmpDef.returnType = "bool";
tmpDef.args = ["account theAccount", "account fromAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountPlayer";
tmpDef.description = "This function returns the player element that is currently using a specified account, i.e. is logged into it. Only one player can use an account at a time.";
tmpDef.returnType = "player";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountData";
tmpDef.description = "This function retrieves a string that has been stored using setAccountData. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.";
tmpDef.returnType = "string";
tmpDef.args = ["account theAccount", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLoadedModules";
tmpDef.description = "This function returns all the currently loaded modules of the server.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getModuleInfo";
tmpDef.description = "This function returns information about the specified module.";
tmpDef.returnType = "table";
tmpDef.args = ["string moduleName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textDestroyTextItem";
tmpDef.description = "This function destroys a textitem object.";
tmpDef.returnType = "void";
tmpDef.args = ["textitem theTextitem"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeRuleValue";
tmpDef.description = "This function removes a set rule value that can be viewed by server browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRuleValue";
tmpDef.description = "This function gets a rule value. A rule value is a string that can be viewed by server browsers and used for filtering the server list.";
tmpDef.returnType = "string";
tmpDef.args = ["string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addAccount";
tmpDef.description = "This function adds an account to the list of registered accounts of the current server.";
tmpDef.returnType = "account";
tmpDef.args = ["string name", "string pass[", "bool allowCaseVariations = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountSerial";
tmpDef.description = "This function returns the last serial that logged onto the specified account.";
tmpDef.returnType = "string";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccounts";
tmpDef.description = "This function returns a table over all the accounts that exist in the server internal.db file. (Note: accounts.xml is no longer used after version 1.0.4)";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountName";
tmpDef.description = "This function retrieves the name of an account.";
tmpDef.returnType = "string";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccountsBySerial";
tmpDef.description = "This function returns a table containing all accounts that were logged onto from specified serial. If the serial is empty string, it will return all accounts that were never logged onto.";
tmpDef.returnType = "table";
tmpDef.args = ["string serial"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAccount";
tmpDef.description = "This function returns an account for a specific user. This function checks if the account mentioned exists in the internal.db database file.";
tmpDef.returnType = "account";
tmpDef.args = ["string username", "[ string password ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAllAccountData";
tmpDef.description = "This function returns a table containing all the user data for the account provided";
tmpDef.returnType = "table";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeAccount";
tmpDef.description = "This function is used to delete existing player accounts.";
tmpDef.returnType = "bool";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAccountPassword";
tmpDef.description = "This function sets the password of the specified account.";
tmpDef.returnType = "bool";
tmpDef.args = ["account theAccount", "string password[", "string passwordType=\"plaintext\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "logOut";
tmpDef.description = "This function logs the given player out of his current account.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerAccount";
tmpDef.description = "This function returns the specified player's account object.";
tmpDef.returnType = "account";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "aclReload";
tmpDef.description = "This function reloads the ACL's and the ACL groups from the ACL XML file. All ACL and ACL group elements are invalid after a call to this and should not be used anymore.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAccountData";
tmpDef.description = "This function sets a string to be stored in an account. This can then be retrieved using getAccountData. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.";
tmpDef.returnType = "bool";
tmpDef.args = ["account theAccount", "string key", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "aclList";
tmpDef.description = "This function returns a list of all the ACLs.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isGuestAccount";
tmpDef.description = "This function checks to see if an account is a guest account. A guest account is an account automatically created for a user when they join the server and deleted when they quit or login to another account. Data stored in a guest account is not stored after the player has left the server. As a consequence, this function will check if a player is logged in or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["account theAccount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "logIn";
tmpDef.description = "This functions logs the given player in to the given account. You need to provide the password needed to log into that account.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "account theAccount", "string thePassword"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanReason";
tmpDef.description = "This function will return the ban reason of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBans";
tmpDef.description = "This function will return a table containing all the bans present in the server's banlist.xml.This example lists every ban when somebody types \"/bans\". WARNING: This will spam chat (for the player that executed the command) if the server has a lot of bans.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addBan";
tmpDef.description = "This function will add a ban for the specified IP/username/serial to the server.";
tmpDef.returnType = "ban";
tmpDef.args = ["[ string IP", "string Username", "string Serial", "player responsibleElement", "string reason", "int seconds = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "aclSave";
tmpDef.description = "The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can be delayed by up to 10 seconds for performance reasons. Calling this function will force an immediate save.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanUsername";
tmpDef.description = "This function will return the username of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanAdmin";
tmpDef.description = "This function will return the responsible admin (nickname of the admin) of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanSerial";
tmpDef.description = "This function will return the serial of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanTime";
tmpDef.description = "This function will return the time the specified ban was created, in seconds.";
tmpDef.returnType = "int";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBanReason";
tmpDef.description = "This function sets the reason for the specified ban.";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan", "string theReason"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBanNick";
tmpDef.description = "This function sets a new nick for a ban.";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan", "string theNick"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanNick";
tmpDef.description = "This function will return the nickname (nickname that the player had when he was banned) of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBan";
tmpDef.description = "This function checks whether the passed value is valid ban or not.This example chechks if the passed argument is a ban or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "reloadBans";
tmpDef.description = "This function will reload the server ban list file.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getUnbanTime";
tmpDef.description = "This function will return the unbanning time of the specified ban in seconds.";
tmpDef.returnType = "int";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBanIP";
tmpDef.description = "This function will return the IP of the specified ban.";
tmpDef.returnType = "string";
tmpDef.args = ["ban theBan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGameType";
tmpDef.description = "This function retrieves the current gametype as set by setGameType. The game type is displayed in the server browser next to the server's name.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setGameType";
tmpDef.description = "This function sets a string containing a name for the game type. This should be the game-mode that is active, for example \"Capture The Flag\" or \"Deathmatch\". This is then displayed in the server browser and external server browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["string gameType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setUnbanTime";
tmpDef.description = "This function sets a new unban time of a given ban using unix timestamp (seconds since Jan 01 1970).";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan", "int theTime"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBanAdmin";
tmpDef.description = "This function sets a new admin for a ban.";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan", "string theAdmin"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "kickPlayer";
tmpDef.description = "This function will kick the specified player from the server.";
tmpDef.returnType = "bool";
tmpDef.args = ["player kickedPlayer", "[ player/string responsiblePlayer", "string reason = \"\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeBan";
tmpDef.description = "This function will remove a specific ban.";
tmpDef.returnType = "bool";
tmpDef.args = ["ban theBan [", "player responsibleElement = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMapName";
tmpDef.description = "This function retrieves the current mapname as set by setMapName.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleIdleTime";
tmpDef.description = "Resets the vehicle idle time";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementVisibleTo";
tmpDef.description = "This function can change an element's visibility. This does not work with all entities - vehicles, players and objects are exempt. This is because these objects are required for accurate sync (they're physical objects that contribute to the physics engine). This function is particularly useful for changing the visibility of markers, radar blips and radar areas.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element visibleTo", "bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "banPlayer";
tmpDef.description = "This function will ban the specified player by either IP, serial or username";
tmpDef.returnType = "ban";
tmpDef.args = ["player bannedPlayer", "[ bool IP = true", "bool Username = false", "bool Serial = false", "player/string responsiblePlayer = nil", "string reason = nil", "int seconds = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "spawnVehicle";
tmpDef.description = "With this feature, we spawn vehicle";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float x", "float y", "float z [", "float rx", "float ry", "float rz ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRuleValue";
tmpDef.description = "This function sets a rule value that can be viewed by server browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["string key", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMapName";
tmpDef.description = "This function is used to set a map name that will be visible in the server browser. In practice you should generally rely on the mapmanager to do this for you.";
tmpDef.returnType = "bool";
tmpDef.args = ["string mapName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeSQLQuery";
tmpDef.description = "This function executes an arbitrary SQL query and returns the result rows if there are any. It allows parameter binding for security (SQL injection is rendered impossible).";
tmpDef.returnType = "table";
tmpDef.args = ["string query [", "var param1 [", "var param2 ...]]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "get";
tmpDef.description = "This function gets a setting's value, or a group of settings' values, from the settings registry.";
tmpDef.returnType = "var";
tmpDef.args = ["string settingName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getServerPort";
tmpDef.description = "This function retrieves the server's port.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "set";
tmpDef.description = "This function is used to save arbitrary data under a certain name on the settings registry.";
tmpDef.returnType = "bool";
tmpDef.args = ["string settingName", "var value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getServerHttpPort";
tmpDef.description = "This function retrieves the server's http port.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getServerName";
tmpDef.description = "This function retrieves the server's name.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementVisibleTo";
tmpDef.description = "This checks if an element is visible to a player. This does not check if the player can literally see the element, just that they are aware that it exists. Some so-called per-player elements are able to be visible only to some players, as such this checks if this is the case for a particular element/player combination.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element visibleTo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeElementData";
tmpDef.description = "This function removes the element data with the given key for that element. The element data removal is synced with all the clients.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getServerPassword";
tmpDef.description = "This function returns the current password required to join the server.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "clearElementVisibleTo";
tmpDef.description = "This function clears any settings added by setElementVisibleTo and restores an element to its default visibility. This does not work with all entities - vehicles, players and objects are exempt. This is because these objects are required for accurate sync (they're physical objects). This function is particularily useful for changing the visibility of markers, radar blips and radar areas.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "cloneElement";
tmpDef.description = "This function clones (creates an exact copy of) an already existing element. The root node, and player elements, cannot be cloned. If a player element is a child of an element that is cloned, it will be skipped, along with the elements that exist as a child to the player element.";
tmpDef.returnType = "element";
tmpDef.args = ["element theElement", "[ float xPos = 0", "float yPos = 0", "float zPos = 0", "bool cloneChildren = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementSyncer";
tmpDef.description = "This function can be used to change the syncer (player) of an element. The syncer is the player who is responsible for informing the server about the state of that element - it's position, orientation and other state information. The function can be also used to remove an element's syncer.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemGetScale";
tmpDef.description = "This function allows retrieval of the scale or size of a text item.";
tmpDef.returnType = "float";
tmpDef.args = ["textitem theTextitem"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePedJetPack";
tmpDef.description = "This function is used to give a ped a jetpack, it won't work if the ped is in a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createResource";
tmpDef.description = "This function creates an new, empty resource. This creates a directory matching the name you specify on disk, then creates an empty meta.xml file with a <meta> element in it.";
tmpDef.returnType = "resource";
tmpDef.args = ["string resourceName [", "string organizationalDir ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceLastStartTime";
tmpDef.description = "Used to check the last starting time and date of a resource";
tmpDef.returnType = "int";
tmpDef.args = ["resource theResource"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addResourceConfig";
tmpDef.description = "This function adds a new empty config file to an existing resource.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["string filePath", "[ string filetype = \"server\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceInfo";
tmpDef.description = "This function retrieves the value of any attribute in a resource info tag.";
tmpDef.returnType = "string";
tmpDef.args = ["resource theResource", "string attribute"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceLoadTime";
tmpDef.description = "Gets the date and time at which a resource was last loaded in the server.";
tmpDef.returnType = "int";
tmpDef.args = ["resource res"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createTeam";
tmpDef.description = "This function is for creating a new team, which can be used to group players. Players will not join the team until they are respawned.";
tmpDef.returnType = "team";
tmpDef.args = ["string teamName", "[int colorR = 255", "int colorG = 255", "int colorB = 255]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemGetPosition";
tmpDef.description = "This function allows retrieval of the position of a text item.";
tmpDef.returnType = "float float";
tmpDef.args = ["textitem theTextItem"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTeamFriendlyFire";
tmpDef.description = "This function sets the friendly fire value for the specified team.";
tmpDef.returnType = "bool";
tmpDef.args = ["team theTeam ", "bool friendlyFire"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerTeam";
tmpDef.description = "This function adds a player to an existing team. The player will automatically be removed from his current team if he's on one.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "team theTeam"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemGetText";
tmpDef.description = "This function returns the current text of the specified textitem.";
tmpDef.returnType = "string";
tmpDef.args = ["textitem theTextitem"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTeamName";
tmpDef.description = "This function is used to set a team's name.";
tmpDef.returnType = "bool";
tmpDef.args = ["team theTeam", "string newName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemGetColor";
tmpDef.description = "This function allows you to retrieve the color of a text item.";
tmpDef.returnType = "int int int int";
tmpDef.args = ["textitem theTextItem"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAllElementData";
tmpDef.description = "Returns a table of all element data of an element.";
tmpDef.returnType = "table";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementByIndex";
tmpDef.description = "This function returns an element of the specified type with the specified index.";
tmpDef.returnType = "element";
tmpDef.args = ["string theType", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textCreateTextItem";
tmpDef.description = "This function creates a text item. A text item represents a single area of text, much like a label does in standard GUI programming. A text item can only be seen by players if it is added to a textdisplay using textDisplayAddText. Each text item can be added to multiple displays, if need be.";
tmpDef.returnType = "textitem";
tmpDef.args = ["string text", "float x", "float y", "[string priority", "int red = 255", "int green = 255", "int blue = 255", "int alpha = 255", "float scale = 1", "string alignX = \"left\"", "string alignY = \"top\"", "int shadowAlpha = 0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemGetPriority";
tmpDef.description = " This function retrieves the priority of a text item. Priority defines the rate at whihc a text item is updated.";
tmpDef.returnType = "int";
tmpDef.args = ["textitem textitemToCheck"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemSetColor";
tmpDef.description = "This function sets the color of a text item.";
tmpDef.returnType = "bool";
tmpDef.args = ["textitem theTextItem", "int r", "int g", "int b", "int a"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemSetPriority";
tmpDef.description = "This function sets the priority for a text item. Priority is the importance of sending updated text to the client.";
tmpDef.returnType = "void";
tmpDef.args = ["textitem theTextItem", "string priority"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemSetPosition";
tmpDef.description = "This function allows the setting of the position of a text item.";
tmpDef.returnType = "bool";
tmpDef.args = ["textitem theTextItem", "float x", "float y"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedFightingStyle";
tmpDef.description = "Retrieves the fighting style a player/ped is currently using.";
tmpDef.returnType = "int";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedArmor";
tmpDef.description = "This function allows you to set the armor value of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float armor"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementSyncer";
tmpDef.description = "This function gets the syncer of an element. The syncer is the player who is in control of the element.";
tmpDef.returnType = "element";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "respawnVehicle";
tmpDef.description = "This function respawns a vehicle according to its set respawn position, set by setVehicleRespawnPosition or the position and rotation it was created on. To spawn a vehicle to a specific location just once, spawnVehicle can be used.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

// TODO: ?????
/*tmpDef = new MTAFunction;
tmpDef.label = "getRootElement";
tmpDef.description = "This function is used to reset the state of a player. It is intended to restore a player to his default state as if he had just joined the server, without any scripts affecting him.";
tmpDef.returnType = "bool resetMapInfo ( [player thePlayer =";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);*/

tmpDef = new MTAFunction;
tmpDef.label = "getElementZoneName";
tmpDef.description = "This function allows you to retrieve the zone name of an element (eg. Verdant Bluffs or Ocean Docks)";
tmpDef.returnType = "string";
tmpDef.args = ["element theElement", "[bool citiesonly=false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMaxPlayers";
tmpDef.description = "This function returns the maximum number of player slots on the server.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceLoadFailureReason";
tmpDef.description = "This example checks if there's a resource that failed to load, then outputs \"Resource: 'resourceName' failed to load because 'reason'.\" .";
tmpDef.returnType = "string";
tmpDef.args = ["resource theResource"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceOrganizationalPath";
tmpDef.description = "This function returns the organizational file path (e.g. [admin]) of a resource.";
tmpDef.returnType = "string";
tmpDef.args = ["resource theResource"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemSetText";
tmpDef.description = "Overwrites a previously created text item with the specified text.";
tmpDef.returnType = "void";
tmpDef.args = ["textitem theTextitem", "string text"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "textItemSetScale";
tmpDef.description = "This function allows the setting of the scale of a text item.";
tmpDef.returnType = "bool";
tmpDef.args = ["textitem theTextitem", "float scale"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "saveMapData";
tmpDef.description = "This converts a set of elements in the element tree into XML. This is a format that can then be loaded as a map file. Each element represents a single XML node.";
tmpDef.returnType = "bool";
tmpDef.args = ["xmlnode node", "element baseElement [", "bool childrenOnly = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceMapRootElement";
tmpDef.description = "This function retrieves the root element of a certain map in a specified resource.";
tmpDef.returnType = "element";
tmpDef.args = ["resource theResource", "string mapName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isKeyBound";
tmpDef.description = "This function can be used to find out if a key has already been bound.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string key", "[ string keyState", "function handler ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "giveWeapon";
tmpDef.description = "giveWeapon gives a specified weapon to a certain player or ped. There is an optional argument to specify ammunition. For example, a melee weapon doesn't need an ammo argument.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePlayer", "int weapon [", "int ammo=30", "bool setAsCurrent=false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedChoking";
tmpDef.description = "This function can be used to force the ped to do the choking (coughing) animation until he respawns or toggled off using this function. The animation can not be cancelled by a player it's applied to, and he will not loose health.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "bool choking"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addResourceMap";
tmpDef.description = "This function adds a new empty mapfile to an existing resource.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["string filePath", "[ int dimension = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "reloadPedWeapon";
tmpDef.description = "This function makes a pedestrian reload their weapon.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "copyResource";
tmpDef.description = "This function copies a specified resource with a new name.";
tmpDef.returnType = "resource";
tmpDef.args = ["resource theResource", "string newResourceName [", "string organizationalDir ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTeamColor";
tmpDef.description = "This function is for setting the color of a specified team. This color is shown, for example, in the team players' nametags.";
tmpDef.returnType = "bool";
tmpDef.args = ["team theTeam", "int colorR", "int colorG", "int colorB"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addVehicleSirens";
tmpDef.description = "This function adds sirens to a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int sirenCount", "int sirenType", "[bool 360flag = false", "bool checkLosFlag = true", "bool useRandomiser flag = true", "bool silentFlag = false"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "takeWeapon";
tmpDef.description = "This function removes a specified weapon or ammo from a certain player's inventory.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int weaponId [", "int ammo ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeVehicleSirens";
tmpDef.description = "This function removes sirens from a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleExplosionTime";
tmpDef.description = "Resets the vehicle explosion time. This is the point in time at which the vehicle last exploded: at this time plus the vehicle's respawn delay, the vehicle is respawned. You can use this function to prevent the vehicle from respawning.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setServerConfigSetting";
tmpDef.description = "This function sets server settings which are stored in the mtaserver.conf file.";
tmpDef.returnType = "bool";
tmpDef.args = ["string name", "string value", "[ bool bSave = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getServerConfigSetting";
tmpDef.description = "This function retrieves server settings which are usually stored in the mtaserver.conf file.";
tmpDef.returnType = "string";
tmpDef.args = ["string name"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "loadMapData";
tmpDef.description = "This function is intended to load data from a loaded XML file into the element tree. This could be used for loading an external map, or part of another map.";
tmpDef.returnType = "element";
tmpDef.args = ["xmlnode node", "element parent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedGravity";
tmpDef.description = "This function returns the current gravity for the specified ped. The default gravity is 0.008.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedGravity";
tmpDef.description = "This function sets the gravity level of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float gravity"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFightingStyle";
tmpDef.description = "Changes a ped's fighting style. Most styles only change the 'special attack' which is done using the Aim and Enter keys.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int style"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePedJetPack";
tmpDef.description = "This function is used to remove a ped's jetpack.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerAnnounceValue";
tmpDef.description = "This function retrieves a players ASE announce value under a certain key.";
tmpDef.returnType = "string";
tmpDef.args = ["element thePlayer", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "takeAllWeapons";
tmpDef.description = "This function removes every weapons from a specified ped, rendering it unarmed.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleVehicleRespawn";
tmpDef.description = "This function toggles whether or not the vehicle will be respawned after blown or idle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool Respawn"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setJetpackWeaponEnabled";
tmpDef.description = "This function sets a weapon usable while using the Jetpack.";
tmpDef.returnType = "bool";
tmpDef.args = ["string weapon", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getJetpackWeaponEnabled";
tmpDef.description = "This function checks if a weapon is usable while on a Jetpack.";
tmpDef.returnType = "bool";
tmpDef.args = ["string weapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerCount";
tmpDef.description = "This function returns the number of players currently connected to the server.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerIP";
tmpDef.description = "This function returns a string containing the IP address of the player.";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerIdleTime";
tmpDef.description = "This function gets the amount of time in milliseconds that a players position has not changed.This example will kick a player if they don't move for 5 minutes and the resource has access to \"function.kickPlayer\"";
tmpDef.returnType = "int";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getDeadPlayers";
tmpDef.description = "This function returns a table of all currently dead players on the server.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResources";
tmpDef.description = "This function retrieves a table of all the resources that exist on the server.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerSerial";
tmpDef.description = "This function returns the serial for a specified player.";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerVersion";
tmpDef.description = "This example adds a command that allows players to see their own client version.";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAlivePlayers";
tmpDef.description = "This function returns a table of all the alive players on the server. Opposite function of getDeadPlayers.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "deleteResource";
tmpDef.description = "This function deletes a resource from the MTA memory and moves it to the /resources-cache/trash/ directory.";
tmpDef.returnType = "bool";
tmpDef.args = ["string resourceName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerMuted";
tmpDef.description = "Use this function to check if a player has been muted.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRandomPlayer";
tmpDef.description = "This function returns a random player.";
tmpDef.returnType = "player";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceACLRequests";
tmpDef.description = "This function retrieves the ACL request section from the meta.xml file of the given resource.";
tmpDef.returnType = "table";
tmpDef.args = ["resource theResource"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "callRemote";
tmpDef.description = "This function allows you to call functions that have been exported with HTTP access by other MTA servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the call returns.";
tmpDef.returnType = "bool";
tmpDef.args = ["string host[", "string queueName = \"default\" ][", "int connectionAttempts = 10", "int connectTimeout = 10000 ]", "string resourceName", "string functionName", "callback callbackFunction", "[ arguments... ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "redirectPlayer";
tmpDef.description = "This function redirects the player to a specified server.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string serverIP", "int serverPort", "[ string serverPassword ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerHudComponentVisible";
tmpDef.description = "This function will show or hide a part of the player's HUD. ";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string component", "bool show"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Server;
ServerDefinitions.push(tmpDef);

/*
- aclGet => Missing
- aclCreate => Missing
- aclDestroy => Missing
- aclGetName => Missing
- aclGetRight => Missing
- aclSetRight => Missing
- aclListRights => Missing
- aclRemoveRight => Missing
- aclGetGroup => Missing
- aclCreateGroup => Missing
- aclDestroyGroup => Missing
- aclGroupList => Missing
- aclGroupAddACL => Missing
- aclGroupAddObject => Missing
- aclGroupGetName => Missing
- aclGroupListACL => Missing
- aclGroupListObjects => Missing
- aclGroupRemoveACL => Missing
- aclGroupRemoveObject => Missing
- hasObjectPermissionTo => Missing
- isObjectInACLGroup => Missing
- getElementColShape => Missing
- getElementsWithinColShape => Missing
- isElementWithinColShape => Missing
- getCancelReason => Missing
- triggerClientEvent => Missing
- triggerLatentClientEvent => Missing
- httpClear => Missing
- httpRequestLogin => Missing
- httpSetResponseCode => Missing
- httpSetResponseCookie => Missing
- httpSetResponseHeader => Missing
- httpWrite => Missing
- resetMapInfo => Missing
- getPedWalkingStyle => Missing
- isPedFrozen => Missing
- isPedInWater => Missing
- setPedFrozen => Missing
- getPickupRespawnInterval => Missing
- isPickupSpawned => Missing
- setPickupRespawnInterval => Missing
- usePickup => Missing
- getPlayerACInfo => Missing
- resendPlayerModInfo => Missing
- setPlayerAnnounceValue => Missing
- setPlayerHudComponentVisible => Missing
- setPlayerMuted => Missing
- setPlayerName => Missing
- setPlayerVoiceBroadcastTo => Missing
- setPlayerVoiceIgnoreFrom => Missing
- setPlayerWantedLevel => Missing
- spawnPlayer => Missing
- takePlayerScreenShot => Missing
- refreshResources => Missing
- removeResourceFile => Missing
- renameResource => Missing
- restartResource => Missing
- setResourceInfo => Missing
- startResource => Missing
- stopResource => Missing
- updateResourceACLRequest => Missing
- isGlitchEnabled => Missing
- outputServerLog => Missing
- setGlitchEnabled => Missing
- setMaxPlayers => Missing
- setServerPassword => Missing
- shutdown => Missing
- dbConnect => Missing
- dbExec => Missing
- dbQuery => Missing
- dbPoll => Missing
- dbFree => Missing
- getPlayerTeam => Missing
- textCreateDisplay => Missing
- textDestroyDisplay => Missing
- textDisplayAddObserver => Missing
- textDisplayAddText => Missing
- textDisplayRemoveObserver => Missing
- textDisplayRemoveText => Missing
- textDisplayGetObservers => Missing
- textDisplayIsObserver => Missing
- iprint => Missing
- inspect => Missing
- isOOPEnabled => Missing
- getVehiclesOfType => Missing
- getModelHandling => Missing
- setModelHandling => Missing
- setVehicleIdleRespawnDelay => Missing
- setVehicleRespawnDelay => Missing
- setVehicleRespawnPosition => Missing
- setVehicleHandling => Missing
- setVehicleVariant => Missing
- getSkyGradient => Missing
*/