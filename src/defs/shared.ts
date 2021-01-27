'use strict';

import {LuaFunction, MTAFunction, ScriptSide, LuaClass, LuaMethod} from "./defs";

export var SharedDefinitions = new Array<MTAFunction>();
export var SharedModuleDefinitions = new Array<LuaClass>();

let tmpDef = new MTAFunction;
tmpDef.label = "getUserdataType";
tmpDef.description = "This function gets the type of a userdata value, which is not always a element in the element tree.";
tmpDef.returnType = "string";
tmpDef.args = ["userdata value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "passwordHash";
tmpDef.description = "This function creates a new password hash using a specified hashing algorithm.";
tmpDef.returnType = "string";
tmpDef.args = ["string password", "string algorithm", "table options = {}", "[function callback]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "passwordVerify";
tmpDef.description = "This function verifies whether a password matches a password hash.";
tmpDef.returnType = "bool";
tmpDef.args = ["string password", "string hash", "[function callback]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "Vector2";
tmpDef.description = "This is default constructor for the Vector2 class and returns a Vector2 object.";
tmpDef.returnType = "vector2";
tmpDef.args = ["[ float x = 0", "float y = 0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "Vector3";
tmpDef.description = "This is default constructor for the Vector3 class and returns a Vector3 object. ";
tmpDef.returnType = "vector3";
tmpDef.args = ["[ float x = 0", "float y = 0", "float z = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "Vector4";
tmpDef.description = "This is default constructor for the Vector4 class and returns a Vector4 object. ";
tmpDef.returnType = "vector4";
tmpDef.args = ["[ float x = 0", "float y = 0", "float z = 0", "float w = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "Matrix";
tmpDef.description = "Matrices are one of the most powerful features of MTA OOP. We did have a presence of Matrices before with getElementMatrix, but we were given an ugly disgusting table to play with. Now, with the new Matrix class, we can make and magically manipulate Matrices.";
tmpDef.returnType = "matrix";
tmpDef.args = ["Vector3 position[", "Vector3 rotation]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "debugSleep";
tmpDef.description = "WARNING: ONLY USE THIS FUNCTION IF YOU KNOW WHAT YOU ARE DOING! debugSleep freezes the client/server for the specified time. This means that all synchronization, rendering and script execution will stop except HTTP processing invoked by fetchRemote.";
tmpDef.returnType = "bool";
tmpDef.args = ["int miliseconds"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getDevelopmentMode";
tmpDef.description = "This function is used to get the development mode of the client. For more information see setDevelopmentMode.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setDevelopmentMode";
tmpDef.description = "This function is used to set the development mode. Setting development mode allows access to special commands which can assist with script debugging.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enable", "[bool enableWeb = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlLoadFile";
tmpDef.description = "This function provides an alternative way to load XML files to getResourceConfig.This function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.Print error if something wrong with xml.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath", "[bool readOnly] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeSetAttribute";
tmpDef.description = "This function is used to edit an attribute of a node in a configuration file.In a gamemode, we want a command to change the marker color in the configuration file and remove a deprecated attribute.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node", "string name", "string/float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAircraftMaxHeight";
tmpDef.description = "This function gets the maximum height at which aircraft can fly without their engines turning off.This example returns the max aircraft height to a player if they use the command 'aircraftmaxheight'.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetValue";
tmpDef.description = "In this example a sample value is returned from a XML file. This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createVehicle";
tmpDef.description = "This example creates a vehicle five units to the right of a player when they type createvehicle and its name in the console:This script spawns a Rhino on top of one lucky individual.This example adds a /spveh command to spawn a car model in the provided coordinates. If any car created by this command gets blown up, it will respawn where it was created.This script spawns a Rhino on top of the local player.This is an example of how this function is executed in an OOP environment.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" int model", "float x", "float y", "float z [", "float rx", "float ry", "float rz", "string numberplate", "bool bDirection", "int variant1", "int variant2 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createBlip";
tmpDef.description = "This function creates a blip element, which is displayed as an icon on the client's radar.Example 1: This example creates a radar blip at a random player's position and makes it so that it is only visible to that player.";
tmpDef.returnType = "blip";
tmpDef.args = [" float x", "float y", "float z [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAttachedElements";
tmpDef.description = "This function returns a table of all the elements attached to the specified element";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPickupAmount";
tmpDef.description = "This function retrieves the amount of health or armor given from a pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlipColor";
tmpDef.description = "This function will tell you what color a blip is. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "int int int int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlipSize";
tmpDef.description = "This function sets the size of a blip's icon.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int iconSize "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerNametagColor";
tmpDef.description = "This allows you to change the RGB color mixture in the name tags of players.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int r", "int g", "int b "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlipColor";
tmpDef.description = "This function will let you change the color of a blip. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int red", "int green", "int blue", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPickupWeapon";
tmpDef.description = "This function retrieves the weapon ID of a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlipIcon";
tmpDef.description = "This function returns the icon a blip currently has.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addPedClothes";
tmpDef.description = "This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "string clothesTexture", "string clothesModel", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlipOrdering";
tmpDef.description = "This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a lower value. The default value for all blips is 0.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createBlipAttachedTo";
tmpDef.description = "This function creates a blip that is attached to an element. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.This example creates a radar blip attached to a random player, visible to everyone. The blip will follow the player around as they move. This could be used for manhunt, to emphasise a random player.";
tmpDef.returnType = "blip";
tmpDef.args = [" element elementToAttachTo [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "detachElements";
tmpDef.description = "This function detaches attached elements from one another.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ element theAttachToElement ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementAlpha";
tmpDef.description = "This example outputs whether the player is invisible.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementAttachedOffsets";
tmpDef.description = "This function returns the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "float, float, float, float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fadeCamera";
tmpDef.description = "When a player gets damaged, place a quick fade-to-red effect on his screen.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool fadeIn", "[ float timeToFade = 1.0", "int red = 0", "int green = 0", "int blue = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerName";
tmpDef.description = "This function returns a string containing the name of the specified player.This example outputs the local player name to the chatbox.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTypeIndexFromClothes";
tmpDef.description = "This function is used to get the clothes type and index from the texture and model.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "int int";
tmpDef.args = [" string clothesTexture", "string clothesModel "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClothesByTypeIndex";
tmpDef.description = "This function is used to get the texture and model of clothes by the clothes type and index.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "string string";
tmpDef.args = [" int clothesType", "int clothesIndex "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlipSize";
tmpDef.description = "This function gets the size of a blip.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBodyPartName";
tmpDef.description = "This function is used to get the name of a body part on a player.";
tmpDef.returnType = "string";
tmpDef.args = [" int bodyPartID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerNametagText";
tmpDef.description = "This will change the text of a player's nickname in the world to something besides the nickname he chose. This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).This console command lets you change the name tag of lamers.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string text "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementID";
tmpDef.description = "This function sets the ID of an element to a string. This can be anything from an identifying number, to a name.You can only change the ID of an element clientside if that element has been created clientside as well.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVoiceEnabled";
tmpDef.description = "Added to client side.This function allows you to make the server reveal whether or not voice is currently enabled.This example shows how to forbid use voice for muted (in chat) players";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlipOrdering";
tmpDef.description = "This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or below other blips.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int ordering "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerWantedLevel";
tmpDef.description = "This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.This example finds which players in the server have a wanted level:This script output your wanted level when you type /wanted.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedClothes";
tmpDef.description = "This example prints the model and texture of the current clothing on the player who enters the \"clothes\" command. For example: \"clothes 3\" for the shoes.";
tmpDef.returnType = "string string";
tmpDef.args = [" ped thePed", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSoundFrontEnd";
tmpDef.description = "This example plays a sound when a player spawns.This example plays a sound when the player types the command '/sound'.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int sound "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getClothesTypeName";
tmpDef.description = "This function is used to get the name of a certain clothes type.";
tmpDef.returnType = "string";
tmpDef.args = [" int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColSphere";
tmpDef.description = "This function creates a collision sphere. This is a shape that has a position and a radius. See Wikipedia for a definition of a sphere.Example 1: This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColCircle";
tmpDef.description = "This function creates a collision circle. This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence. Events will be triggered when a player enters or leaves it.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float radius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColRectangle";
tmpDef.description = "This function creates a collision rectangle. This is a shape that has a position and a width and a depth. See Rectangle for a definition of a rectangle. XY marks on the south west corner of the colshape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fWidth", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isCursorShowing";
tmpDef.description = "This function is used to determine whether or not a player's cursor is showing.This serverside function toggles a player's cursor state.With little of tweaking this can also be used clientside";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "showCursor";
tmpDef.description = "This function is used to show or hide a player's cursor.This example shows the cursor for a player named \"Dave\", then outputs a message if it was shown successfully.This example shows the cursor all the time";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool show", "[ bool toggleControls = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeEventHandler";
tmpDef.description = "This functions removes a handler function from an event, so that the function is not called anymore when the event is triggered. See event system for more information on how the event system works.This example shows how to toggle a message on/off a screen with a command.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element attachedTo", "function functionVar "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetAttribute";
tmpDef.description = "This function is used to return an attribute of a node in a configuration file.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode node", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlDestroyNode";
tmpDef.description = "This function destroys a XML node from the XML node tree.This example will add a command called '/delnode' and it will create an xml file called 'test.xml'.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "triggerEvent";
tmpDef.description = "This function will trigger a named event on a specific element in the element tree. See event system for more information on how the event system works.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element baseElement", "[ var argument1", "... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementDimension";
tmpDef.description = "This function allows you to retrieve the dimension of any element. The dimension determines what/who the element is visible to.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementAttachedOffsets";
tmpDef.description = "This function updates the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ float xPosOffset", "float yPosOffset", "float zPosOffset", "float xRotOffset", "float yRotOffset", "float zRotOffset ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementVelocity";
tmpDef.description = "This example adds a function which copies the speed of a random player to another random player. If there are less than 2 players it returns false.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float speedX", "float speedY", "float speedZ "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEventHandlers";
tmpDef.description = "This function gets the attached functions from the event and attached element from current lua script.";
tmpDef.returnType = "table";
tmpDef.args = [" string eventName", "element attachedTo "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileExists";
tmpDef.description = "This functions checks whether a specified file exists inside a resource.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerTarget";
tmpDef.description = "This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers. For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing. You can set this target with setMarkerTarget.";
tmpDef.returnType = "float float float";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "cancellatentevent";
tmpDef.description = "Stops a latent event from completing";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMarkerType";
tmpDef.description = "This function changes a marker's type. The type controls how the marker is displayed in the game. It's important that you use marker types that users are used to from the single player game. For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string markerType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColTube";
tmpDef.description = "This function creates a collision tube. This is a shape that has a position and a 2D (X/Y) radius and a height. See Cylinder for a definition of a tube. A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileClose";
tmpDef.description = "Closes a file handle obtained by fileCreate or fileOpen.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileDelete";
tmpDef.description = "Deletes the specified file.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementAttached";
tmpDef.description = "This functions checks whether or not an element is attached to another element.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "takePlayerMoney";
tmpDef.description = "This function subtracts money from a player's current money amount.This example takes money from a player when he types \"takecash number\" in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createObject";
tmpDef.description = "This example creates an object when the resource starts:This example creates an object near player who write createObject:";
tmpDef.returnType = "object";
tmpDef.args = [" int modelid", "float x", "float y", "float z", "[ float rx", "float ry", "float rz", "bool isLowLOD = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMarkerTarget";
tmpDef.description = "This function sets the 'target' for a marker. Only the checkpoint and ring marker types can have a target.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float x", "float y", "float z "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileCopy";
tmpDef.description = "This example copies a file called 'test.txt' and called it 'test1.txt'.This example copies a file called 'test.txt' and called it 'test1.txt'.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath", "string copyToFilePath [", "bool overwrite = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLatentEventHandles";
tmpDef.description = "Gets the currently queued latent events. The last one in the table is always the latest event queued. Each returned handle can be used with getLatentEventStatus or cancelLatentEvent.";
tmpDef.returnType = "table";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "cancelEvent";
tmpDef.description = "This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the onPickupUse event. This example stops the player huntedPlayer from entering a vehicle:This example prevents any damage to a player clientside by making cancelEvent an event handler for the onClientPlayerDamage event.";
tmpDef.returnType = "bool";
tmpDef.args = [" [ bool cancel = true", "string reason = \"\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColCuboid";
tmpDef.description = "This function creates a collision cuboid. This is a shape that has a position, width, depth and height. See Wikipedia for a definition of a cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fWidth", "float fDepth", "float fHeight "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementType";
tmpDef.description = "This function is used to retrieve the type of an element.";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "attachElements";
tmpDef.description = "This function attaches one element to another, so that the first one follows the second whenever it moves. Example 1: This example attaches a marker to the player who steals the Mr. Whoopee:Example 3: This function adds a tank on top of a player (for extra defense), clientside. This means it will be invisible to other players.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element theAttachToElement", "[ float xPosOffset = 0", "float yPosOffset = 0", "float zPosOffset = 0", "float xRotOffset = 0", "float yRotOffset = 0", "float zRotOffset = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePedClothes";
tmpDef.description = "This function is used to remove the current clothes of a certain type on a ped. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int clothesType", "[ string clothesTexture", "string clothesModel ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getlatenteventstatus";
tmpDef.description = "Gets the status of one queued latent event.The example starts a latent event and outputs the status of the transfer to the client console";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementInterior";
tmpDef.description = "In this example, if a player were to type /interior 1, they would be teleported into this interiorIn this example, if a player were to type /interior 1, they would be teleported into this interior";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int interior [", "float x", "float y", "float z] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementChildren";
tmpDef.description = "This function is used to retrieve a list of the child elements of a given parent element. Note that it will only return direct children and not elements that are further down the element tree.";
tmpDef.returnType = "table";
tmpDef.args = [" element parent [", "string theType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createElement";
tmpDef.description = "This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world. A common use for this function is for creating custom elements, such as a Flag or a Base.";
tmpDef.returnType = "element";
tmpDef.args = [" string elementType", "[ string elementID = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTrainDirection";
tmpDef.description = "Gets the direction in which a train is driving (clockwise or counterclockwise).";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle train "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileCreate";
tmpDef.description = "Creates a new file in a directory of a resource. If there already exists a file with the specified name, it is overwritten with an empty file.";
tmpDef.returnType = "file";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementCallPropagationEnabled";
tmpDef.description = "This function enables/disables call propagation on a certain element. Look at the example for a practical application.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "destroyElement";
tmpDef.description = "This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc). Player elements cannot be destroyed using this function. A player can only be removed from the hierarchy when they quit or are kicked. The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.";
tmpDef.returnType = "bool";
tmpDef.args = [" element elementToDestroy "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSlotFromWeapon";
tmpDef.description = "This function allows you to identify the weapon slot that a weapon belongs to.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponid "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getOriginalHandling";
tmpDef.description = "This example creates a new function called getVehicleOriginalProperty, which simulates the previous syntax of this function.";
tmpDef.returnType = "table";
tmpDef.args = [" int modelID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createWater";
tmpDef.description = "Example code for creating a water area to cover the entire San Andreas Map (flood the cities). Also, setWaterLevel is used to raise the existing rivers and lakes.This example creates water at the given coordinates and sets the height of the water level to 20 for when the client joins.This example fills the Easter Basin with water.";
tmpDef.returnType = "water";
tmpDef.args = [" int x1", "int y1", "float z1", "int x2", "int y2", "float z2", "int x3", "int y3", "float z3 [", "int x4", "int y4", "float z4 ] [", "bool bShallow = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createExplosion";
tmpDef.description = "Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.Example 1: This code will create an explosion at the player's position when they spawn.Example 1: This code will create an explosion for the local player when they spawn.";
tmpDef.returnType = "bool";
tmpDef.args = [" float x", "float y", "float z", "int theType [", "player creator = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementByID";
tmpDef.description = "This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.";
tmpDef.returnType = "element";
tmpDef.args = [" string id [", "int index = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementModel";
tmpDef.description = "This example destroys a haystack when a player targets it.This example prints out a message when a Shamal or AT-400 is entered by a player.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementCollisionsEnabled";
tmpDef.description = "This function indicates if a specific element is set to have collisions disabled. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementData";
tmpDef.description = "This function retrieves element data attached to an element under a certain key.";
tmpDef.returnType = "var";
tmpDef.args = [" element theElement", "string key [", "inherit = true] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLowLODElement";
tmpDef.description = "This function assigns a low LOD element to an element. The low LOD element is displayed when its associated element is not fully visible. If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.This example shows how to create and link a normal and low LOD object:This example shows how to create and link a composite objectChanging the draw distance for a model has to be done on the client:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element lowLODElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addEvent";
tmpDef.description = "This function allows you to register a custom event. Custom events function exactly like the built-in events. See event system for more information on the event system.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName [", "bool allowRemoteTrigger = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementAttachedTo";
tmpDef.description = "This example defines a console command that outputs the type of the element that the player is attached to.";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "wasEventCancelled";
tmpDef.description = "This function checks if the last completed event was cancelled. This is mainly useful for custom events created by scripts.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addEventHandler";
tmpDef.description = "This serverside example sends a message to everyone in the server when a player spawns.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element attachedTo", "function handlerFunction", "[ bool getPropagated = true", "string priority = \"normal\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementHealth";
tmpDef.description = "This example outputs the health of the player who enters the command 'showhealth', and their vehicle's health.";
tmpDef.returnType = "float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementData";
tmpDef.description = "This function stores element data under a certain key, attached to an element. Element data set using this is then synced with all clients and the server. The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.\n\nAs element data is synced to all clients, it can generate a lot of network traffic and consume server CPU. Events are much more efficient for sending data from a client to the server only, or from the server to a specific client.\n\nA subscription mode has been introduced for setElementData serverside. When setting data in subscription mode, only clients that are added through addElementDataSubscriber will receive the data, which is good for performance. Note this mode only works when setting element data serverside. Setting data clientside still sends the update to all clients if 'synchronize' is set to true.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string key", "var value [", "bool synchronize = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementChild";
tmpDef.description = "This function returns one of the child elements of a given parent element. The child element is selected by its index (0 for the first child, 1 for the second and so on).";
tmpDef.returnType = "element";
tmpDef.args = [" element parent", "int index "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileFlush";
tmpDef.description = "Forces pending disk writes to be executed. fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk. Call this function if you need the data written right now without closing the file. This is useful for log files that might want to be read while the resource is still executing. fileFlush can be called after each log entry is written. Without this, the file may appear empty or outdated to the user.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileWrite";
tmpDef.description = "Writes one or more strings to a given file, starting at the current read/write position. Advances the position over the number of bytes that were written.";
tmpDef.returnType = "int";
tmpDef.args = ["file theFile", "string string1", "[string string2", "string string3 ...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileSetPos";
tmpDef.description = "Sets the current read/write position in the file.";
tmpDef.returnType = "int";
tmpDef.args = ["file theFile", "int offset"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileGetPath";
tmpDef.description = "This function retrieves the path of the given file.";
tmpDef.returnType = "string";
tmpDef.args = ["file theFile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileGetSize";
tmpDef.description = "Returns the total size in bytes of the given file.";
tmpDef.returnType = "int";
tmpDef.args = ["file theFile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileIsEOF";
tmpDef.description = "Checks if the file position is at the end of the file.";
tmpDef.returnType = "bool";
tmpDef.args = ["file theFile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileOpen";
tmpDef.description = "Opens an existing file for reading and writing.";
tmpDef.returnType = "file";
tmpDef.args = [" string filePath", "[bool readOnly = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileRead";
tmpDef.description = "Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.";
tmpDef.returnType = "string";
tmpDef.args = ["file theFile", "int count"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileRename";
tmpDef.description = "Renames the specified file.";
tmpDef.returnType = "bool";
tmpDef.args = ["string filePath", "string newFilePath"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerCount";
tmpDef.description = "Returns the number of markers that currently exist in the world.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerSize";
tmpDef.description = "This function returns a float containing the size of the specified marker.";
tmpDef.returnType = "float";
tmpDef.args = [" marker myMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMarkerIcon";
tmpDef.description = "This function allows changing the icon of a checkpoint marker. ";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bindKey";
tmpDef.description = "This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This example will bind a player's 'F1' key and 'fire' control to 1 input function.This example will bind a player's 'F1' key and 'fire' control to 1 input function, clientside.This example says how cool is the MTA:SA is if players wants to move.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string key", "string keyState", "function handlerFunction", "[ var arguments", "... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedChoking";
tmpDef.description = "This function checks if the specified ped is choking (coughing) or not. This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can. This example checks if a random player is choking or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementParent";
tmpDef.description = "Consider the following map file:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementMatrix";
tmpDef.description = "This function gets an element's transform matrix. This contains 16 float values that multiplied to a point will give you the point transformed. It is most useful for matrix calculations such as calculating offsets.";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement [", "bool legacy = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementsWithinColShape";
tmpDef.description = "This function is used to retrieve a list of all elements in a colshape, of the specified type. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape";
tmpDef.returnType = "table";
tmpDef.args = [" colshape shape", "[ string elemType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedWalkingStyle";
tmpDef.description = "Sets the walking style of a ped. A walking style consists of a set of animations that are used for walking, running etc.Changes the walking style of the player to Drunkman when the resource is started";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int style "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementColShape";
tmpDef.description = "This example creates a marker inside Toreno's house and adds a command to check whether you are standing on it.";
tmpDef.returnType = "colshape";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMarkerSize";
tmpDef.description = "This function sets the size of the specified marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerColor";
tmpDef.description = "This function returns the color and transparency for a marker element. Not all marker types support transparency.This example script fully heals players who hit a white marker, and kills players who hit a red one.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createMarker";
tmpDef.description = "This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.This example creates a marker next to the player when they type 'createmarker':";
tmpDef.returnType = "marker";
tmpDef.args = [" float x", "float y", "float z [", "string theType = \"checkpoint\"", "float size = 4.0", "int r = 0", "int g = 0", "int b = 255", "int a = 255", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "stopObject";
tmpDef.description = "This will allow you to stop an object that is currently moving.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theobject "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "unbindKey";
tmpDef.description = "Removes an existing key bind from the specified player.This function binds the player's F1 key to a function goMoo which outputs a chat message when pressed. The key is then unbound so that it can effectively only be used once per life.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer"," string key ["," string keyState"," function handler ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "moveObject";
tmpDef.description = "This function will smoothly move an object from its current position to a specified rotation and position.Example 1: This example moves every object in the game up 100 units in ten seconds.Example 2: This example created a model (of a bed) near a player called someguy, if they exist in the game. It will then move the model towards the player over 3 seconds.Example 3: This example creates a ball moving (in front of CJ's house in Grove Street) using easing functions. Test command is \"/smove\" for instance \"/smove OutBounce\". This example is a serverside code but the same could be done clientside (adapting the command handler)Example 4: This example move a gate with easing.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theObject", "int time", "float targetx", "float targety", "float targetz", "[ float moverx", "float movery", "float moverz", "string strEasingType", "float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectScale";
tmpDef.description = "This function changes the visible size of an object.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theObject", "float scale [", "float scaleY", "float scaleZ ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedAmmoInClip";
tmpDef.description = "This function returns an integer that contains the ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed [", "int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerType";
tmpDef.description = "This function returns a marker's type.This function creates a default marker at a given position and outputs its type.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createPed";
tmpDef.description = "Creates a Ped in the GTA world.This example creates an ped when the resource starts:This example creates a ped, and makes it damage proof:";
tmpDef.returnType = "ped";
tmpDef.args = [" int modelid", "float x", "float y", "float z [", "float rot = 0.0", "bool synced = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAnimation";
tmpDef.description = "This example creates a ped, rotates him, and makes him walk:This example makes the player sit down and remain seated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string block=nil", "string anim=nil", "int time=-1", "bool loop=true", "bool updatePosition=true", "bool interruptable=true", "bool freezeLastFrame=true", "int blendTime=250"," bool retainPedState = false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedDucked";
tmpDef.description = "This function checks if the specified ped is ducked (crouched) or not.This example checks if a random player is ducked or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTeamName";
tmpDef.description = "This function gets the team name of a team object.";
tmpDef.returnType = "string";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTrainSpeed";
tmpDef.description = "This example outputs how fast a player is going if they're in a train. The command is \"/speed\".";
tmpDef.returnType = "float";
tmpDef.args = [" vehicle train "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTeamFriendlyFire";
tmpDef.description = "This function tells you if friendly fire is turned on for the specified team.";
tmpDef.returnType = "bool";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTeamFromName";
tmpDef.description = "This function finds a team object by the team's name.";
tmpDef.returnType = "team";
tmpDef.args = [" string teamName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "base64Decode";
tmpDef.description = "This function returns the decrypted data from base64 representation of the encrypted block";
tmpDef.returnType = "string";
tmpDef.args = ["string data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "outputDebugString";
tmpDef.description = "This script notifies when its resource has been loaded using a debug message:";
tmpDef.returnType = "bool";
tmpDef.args = [" string text", "[ int level=3", "int red=255", "int green=255", "int blue=255 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "outputConsole";
tmpDef.description = "This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.";
tmpDef.returnType = "bool";
tmpDef.args = [" string text "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCloudsEnabled";
tmpDef.description = "This function will tell you if clouds are enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponNameFromID";
tmpDef.description = "This function allows you to retrieve the name of a weapon from an ID. Note it also allows you to retrieve the name of other methods of death, such as Fall and Rammed.This example displays a death message in the format of \"* Killer killed dead (Weapon)\"";
tmpDef.returnType = "string";
tmpDef.args = [" int id "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "killPed";
tmpDef.description = "This function kills the specified ped.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "[ ped theKiller = nil", "int weapon=255", "int bodyPart=255", "bool stealth = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectScale";
tmpDef.description = "This function returns the visible size of an object.This example adds a command get_scale which create object and prints out a scale of the object.";
tmpDef.returnType = "float";
tmpDef.args = [" object theObject "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPickupType";
tmpDef.description = "This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.";
tmpDef.returnType = "bool";
tmpDef.args = [" pickup thePickup", "int theType", "int amount/weapon/model", "[ int ammo ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removePedFromVehicle";
tmpDef.description = "This function removes a ped from a vehicle immediately. This works for drivers and passengers. Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerNametagShowing";
tmpDef.description = "This function allows you to set whether a player's nametag visibility both clientside and serverside";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool showing "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "showChat";
tmpDef.description = "This function is used to show or hide the player's chat.This example toggle's the player's chat when they press the \"i\" key.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool show "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAnimationProgress";
tmpDef.description = "Sets the current animation progress of a player or ped.This example creates a ped, apply animation to it, and \"freeze\" the animation at half of overall animation time.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string anim", "float progress] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createRadarArea";
tmpDef.description = "This function can be used to create custom radar areas on the radar.This example creates a radar area for the King of the hill script, and a colsquare. When the player enters the radar area it flashes, and stops flashing when a player leaves it.";
tmpDef.returnType = "radararea";
tmpDef.args = [" float startPosX", "float startPosY", "float sizeX", "float sizeY", "[ int r = 255", "int g = 0", "int b = 0", "int a = 255", "element visibleTo = getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedOccupiedVehicle";
tmpDef.description = "This function gets the vehicle that the ped is currently in or is trying to enter, if any.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTotalAmmo";
tmpDef.description = "This function returns an integer that contains the total ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedStat";
tmpDef.description = "This function allows you to set the value of a specific statistic for a ped. When this function is used client side, it can only be used on client side created peds.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int stat", "float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedContactElement";
tmpDef.description = "This function detects the element a ped is standing on. This can be a vehicle or an object.This clientside function outputs the name of the vehicle the specified player is standing on, or a message saying he isn't on one.";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementWithinMarker";
tmpDef.description = "This function is used to determine if an element is within a marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedOnFire";
tmpDef.description = "This function checks if the specified ped is on fire or not.This example checks if a random player is on fire, and if so gives him a fire extinguisher.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addVehicleUpgrade";
tmpDef.description = "This function adds an upgrade to an existing vehicle, eg: nos, hyrdraulics.This serverside function allows the user to get an upgrade by typing a command:This client-side script gives vehicles a nitro upgrade whenever they pass through a certain collision shape:";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "int upgrade "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedWeapon";
tmpDef.description = "This function tells you which weapon type is in a certain weapon slot of a ped. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMarkerColor";
tmpDef.description = "This function sets the color of the specified marker by modifying the values for red, green and blue.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "int r", "int g", "int b", "int a "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fixVehicle";
tmpDef.description = "This function will set a vehicle's health to full and fix its damage model. If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedWeaponSlot";
tmpDef.description = "This function gets a ped's selected weapon slot.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "doesPedHaveJetPack";
tmpDef.description = "Checks whether or not a ped currently has a jetpack.Example 1: This examples adds a \"jetpack\" console command, which gives or removes a jetpack from the player.Example 2: This example provides a check to see if players have a jetpack when they enter a particular marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedInVehicle";
tmpDef.description = "Checks whether or not a given ped is currently in a vehicle. This also returns true if they're trying to enter a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementsByType";
tmpDef.description = "This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type \"flag\" (e.g. <flag />) in the .map file, the using \"flag\" as the type argument would find it.";
tmpDef.returnType = "table";
tmpDef.args = [" string theType", "[ element startat=getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementChildrenCount";
tmpDef.description = "This function returns the number of children an element has. Note that only the direct children are counted and not elements that are further down the element tree.";
tmpDef.returnType = "int";
tmpDef.args = [" element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementRotation";
tmpDef.description = "Retrieve the rotation of elements.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement [", "string rotOrder = \"default\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementInterior";
tmpDef.description = "This function allows you to retrieve the interior of any element. An interior is the current loaded place, 0 being outside.This example shows a player if he is outside or not, when he enters the command 'AmIOutside'.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementID";
tmpDef.description = "This function gets the ID of an element. This is the \"id\" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRootElement";
tmpDef.description = "This function returns the root node of the element tree, called root. This node contains every other element: all resource root elements, players and remote clients. It is never destroyed and cannot be destroyed using destroyElement.";
tmpDef.returnType = "element";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementCallPropagationEnabled";
tmpDef.description = "This functions checks if certain element has call propagation enabled.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponIDFromName";
tmpDef.description = "This function will obtain the ID of a particular weapon from its name.This example will give the player the weapon they specify 20 ammo whenever they type \"weapon name\" into the console.";
tmpDef.returnType = "int";
tmpDef.args = [" string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementPosition";
tmpDef.description = "The getElementPosition function allows you to retrieve the position coordinates of an element. This can be any real world element, including:";
tmpDef.returnType = "float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementFrozen";
tmpDef.description = "This function checks if element has been frozen.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementInWater";
tmpDef.description = "This function checks whether an element is submerged in water.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedOnGround";
tmpDef.description = "This function is used to determine whether or not a ped is on the ground. This is for on-foot usage only.This example checks if the player who enters the 'amiflying' command is on the ground and outputs a message.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElement";
tmpDef.description = "This function checks if a value is an element or not.This serverside function kills a player when it's passed his name or his element.";
tmpDef.returnType = "bool";
tmpDef.args = [" var theValue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getValidPedModels";
tmpDef.description = "This function returns all valid ped models.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedOccupiedVehicleSeat";
tmpDef.description = "This function is now available client side.This function gets the seat that a specific ped is sitting in in a vehicle.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTarget";
tmpDef.description = "This function is used to get the element a ped is currently targeting.This example blows up any vehicle a player targets (aims at).";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedStat";
tmpDef.description = "This function returns the value of the specified statistic of a specific ped.This example announces whether a player is fat upon spawn";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed", "int stat "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLowLODElement";
tmpDef.description = "This function return the low LOD element that an element is associated with.This example is not done yet:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementVelocity";
tmpDef.description = "This example retrieves, calculates, and displays the speed of a random player.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementDoubleSided";
tmpDef.description = "This function checks whether an element is double-sided as set by setElementDoubleSided or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementWithinColShape";
tmpDef.description = "This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "colshape theShape "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementCollisionsEnabled";
tmpDef.description = "This function can disable or enable an element's collisions. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementLowLOD";
tmpDef.description = "This function reveals if an element is low LOD.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementAlpha";
tmpDef.description = "This example makes the player invisible.This example lets you toggle invisibility when you write /invis.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementPosition";
tmpDef.description = "This function sets the position of an element to the specified coordinates.This example adds a \"setpos\" command to console, which allows setting of a player's position.This example adds a \"setpos\" command to console, which allows setting of the local player's position.This example enables a player to type /warpto <playername> to warp to them. If the player being warped to is in a vehicle with a free passenger seat, it will warp into the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float x", "float y", "float z [", "bool warp = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementParent";
tmpDef.description = "This example sets the parent of each spawnpoint to a dummy element:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementHealth";
tmpDef.description = "This example adds a 'hpslap' console command that lets players \"slap\" others (doing 20 damage).This example setting health by a command.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float newHealth "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementRotation";
tmpDef.description = "Sets the rotation of elements according to the world (does not work with players that are on the ground).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float rotX", "float rotY", "float rotZ [", "string rotOrder = \"default\"", "bool conformPedRotation = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedHeadless";
tmpDef.description = "With this function, you can check if a ped has a head or not.Add a command to check whether the player is a zombie or notAdd a command to check whether a player is a zombie or not";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementDoubleSided";
tmpDef.description = "This example shows how to set the double-sidedness of an object in a map file.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enable "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementFrozen";
tmpDef.description = "This function freezes an element (stops it in its position and disables movement) or unfreezes it.This example binds the \"p\" key to a function to freeze/unfreeze the player's current vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool freezeStatus "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementModel";
tmpDef.description = "This will continually change an object model every 2.5 seconds at the location -1084.52, -1634.81, 76.36 (Truth's farm).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int model "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getJetpackMaxHeight";
tmpDef.description = "This function gets the maximum height at which your jetpack can fly without failing to go higher.This example returns the max jetpack height to a player if they use the command 'jetpackmaxheight'.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerTeam";
tmpDef.description = "This example finds the team a player is on, and then changes its name.";
tmpDef.returnType = "team";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeSetValue";
tmpDef.description = "In this example a sample value is inserted into a XML file.This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode", "string value [", "bool setCDATA = false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlSaveFile";
tmpDef.description = "This function saves a loaded XML file.This example allows a player to use the command 'createfile' to create an .xml file.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode rootNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerMapForced";
tmpDef.description = "This function checks if the specified player's radar map has been forced on or not.This example forces a players radar map on for 10 seconds if it hasn't been already.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getFarClipDistance";
tmpDef.description = "This function will tell you what is the current render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "detonateSatchels";
tmpDef.description = "This function can be used to detonate a players satchels.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedHeadless";
tmpDef.description = "With this function, you can set if a ped has a head or not.This example enables a player to behead themselves, and give them their head back.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool headState "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "areTrafficLightsLocked";
tmpDef.description = "Gets whether the traffic lights are currently locked or not. If the lights are locked, it means they won't change unless you do setTrafficLightState.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayersInTeam";
tmpDef.description = "This function retrieves all the players of the specified team.Find and kill all the players in the specified team (for example 'killTeam Red').This example will show all players in a team when a player types the 'showTeam TeamName' command.";
tmpDef.returnType = "table";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponProperty";
tmpDef.description = "This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getOriginalWeaponProperty";
tmpDef.description = "This function gets the original weapon property of the specified weapons specified weapon type.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerNametagColor";
tmpDef.description = "This function gets the current color of a player's name tag as RGB values. These are in the range 0-255.This console command will tell the player what his tag color is. The color is composed of a red, a green and a blue component, each ranging from 0-255.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "forcePlayerMap";
tmpDef.description = "This function is used to forcefully show a player's radar map.OOP Syntax Help! I don't understand this!OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool forceOn "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMinuteDuration";
tmpDef.description = "Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is 1000.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlUnloadFile";
tmpDef.description = "Unloads an XML document from memory.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "detachTrailerFromVehicle";
tmpDef.description = "This function detaches an already attached trailer from a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle [", "vehicle theTrailer = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlCreateFile";
tmpDef.description = "This function creates a new XML document, which can later be saved to a file by using xmlSaveFile. This function will overwrite the file specified if it already exists.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath", "string rootNodeName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerPing";
tmpDef.description = "This function returns the ping of a specified player. The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.This example checks every players ping every 5 seconds and if it's over 500 they get kicked.This example checks the ping of every player entering the 'ping' command and warns him if it's over 100.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedOnFire";
tmpDef.description = "This function can be used to set a ped on fire or extinguish a fire on it.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool isOnFire "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerMoney";
tmpDef.description = "Returns the amount of money a player currently has.When a player types '/checkMoney' this example retrieves the player's money and outputs a message according to the value.";
tmpDef.returnType = "int/bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerMoney";
tmpDef.description = "Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount [", "bool instant = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementDimension";
tmpDef.description = "In this example the player's dimension is set to ID 1 when they enter a vehicle, and set back to dimension 0 when they exit the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int dimension "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "warpPedIntoVehicle";
tmpDef.description = "This function is used to warp or force a ped into a vehicle. There are no animations involved when this happens.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "vehicle theVehicle", "[ int seat=0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "blowVehicle";
tmpDef.description = "This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.This example will blow up every vehicle in the game.This example will blow a player's vehicle when he enters the car, like a carbomb.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle vehicleToBlow", "[ bool explode=true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedArmor";
tmpDef.description = "This function returns the current armor of the specified ped.This example defines a \"showarmor\" console command that shows the player that executes it how much armor he has.";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedDead";
tmpDef.description = "This function checks if the specified ped is dead or not.This example allows a player to use the command 'amidead' to see if they are dead or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "attachTrailerToVehicle";
tmpDef.description = "This function attaches a trailer type vehicle to a trailer-towing-type vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "vehicle theTrailer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWindVelocity";
tmpDef.description = "This function changes the wind velocity. The wind shakes the vegetation and makes particles fly in a direction. The intensity and direction of the effect deppends of the wind velocity in each axis.This example shows how to make a simple /windVelocity command.";
tmpDef.returnType = "bool";
tmpDef.args = [" float velocityX", "float velocityY", "float velocityZ "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSunColor";
tmpDef.description = "This function is used to set the color of the sun.";
tmpDef.returnType = "bool";
tmpDef.args = [" int aRed", "int aGreen", "int aBlue", "int bRed", "int bGreen", "int bBlue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSunColor";
tmpDef.description = "This function is used to get the color of the sun.";
tmpDef.returnType = "int, int, int, int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getFogDistance";
tmpDef.description = "This function will tell you what is the current fog render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetSunColor";
tmpDef.description = "This function is used to reset the color of the sun to its normal color.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRainLevel";
tmpDef.description = "This function sets the rain level to any weather available in GTA. Use resetRainLevel to undo the changes.This example will make it rain when you enter a vehicle and stop it when you leave the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" float level "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setFogDistance";
tmpDef.description = "This example makes any weather very clear when the resource that contains it starts.";
tmpDef.returnType = "bool";
tmpDef.args = [" float distance "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMoonSize";
tmpDef.description = "This function returns the moon size. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will tell the moon size to everyone when the resource is started.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlCopyFile";
tmpDef.description = "This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.The new file will not be saved to file system until xmlSaveFile() is called";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" xmlnode nodeToCopy", "string newFilePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedWalkingStyle";
tmpDef.description = "Returns the walking style ID of a ped. This ID determines the set of animations that is used for walking, running etc.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceFromName";
tmpDef.description = "This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.";
tmpDef.returnType = "call (";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePlayerMoney";
tmpDef.description = "This function adds money to a player's current money amount. To set absolute values, setPlayerMoney can be used.This example gives a player money when using \"givecash\" command.This example gives a player one thousand dollars, as a reward for killing another player.This example Creates money Money (dollar symbol) pickup and gives 30,000 dollars on Pick up hit.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraMatrix";
tmpDef.description = "This function gets the position of the camera and the position of the point it is facing.";
tmpDef.returnType = "float float float float float float float float";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerNametagText";
tmpDef.description = "This will allow you to retrieve the name tag a player is currently using.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPickupAmmo";
tmpDef.description = "This function retrieves the amount of ammo in a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "countPlayersInTeam";
tmpDef.description = "This function is for returning the number of players in the specified team.This example adds a command in the console to find out how many players are on your team.This example adds a command in the console to find out how many players are on your team, clientsideThis example balances a gamemode, to ensure equal number of players between the \"grove\" and \"ballas\" teams. This could be triggered when a player joins the server, or for all players currently in the server when the gamemode starts.";
tmpDef.returnType = "int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerNametagShowing";
tmpDef.description = "This function will allow you to determine if a player's name tag is currently showing.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createPickup";
tmpDef.description = "This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon. This example creates a pickup after a player dies so that he drops his weapon.This example creates a custom pickup(money) after a player dies and sets it's value.";
tmpDef.returnType = "pickup";
tmpDef.args = [" float x", "float y", "float z", "int theType", "int amount/weapon/model", "[ int respawnTime = 30000", "int ammo = 50 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAircraftMaxVelocity";
tmpDef.description = "This function returns the maximum velocity at which aircrafts could fly. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will increase or decrease the max velocity by pressing numpad keys + or -.This example will tell the max velocity to everyone when the resource is started.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerFromName";
tmpDef.description = "This function returns a player element for the player with the name passed to the function.";
tmpDef.returnType = "player";
tmpDef.args = [" string playerName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTeamColor";
tmpDef.description = "This example defines a console command that outputs the player's team name and colors if he is on a team.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getHeatHaze";
tmpDef.description = "This function will return the current heat haze effect settings.This example outputs current heat haze settings to the chat when player uses command 'get_haze'.";
tmpDef.returnType = "int, int, int, int, int, int, int, int, bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeatherBlended";
tmpDef.description = "This function will change the current weather to another in a smooth manner, over the period of 2 in-game hours (unlike setWeather, which sets a new weather instantly). To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weatherID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setGarageOpen";
tmpDef.description = "This function opens or closes the specified garage door in the world.This example opens a garage door when a player enters a collision shape near it, and closes it when they leave:";
tmpDef.returnType = "bool";
tmpDef.args = [" int garageID", "bool open "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGameSpeed";
tmpDef.description = "This example adds a 'gamespeed' console command that prints the game speed to the chatbox.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPickupType";
tmpDef.description = "This function retrieves the type of a pickup, either a health, armour or weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlipIcon";
tmpDef.description = "This function sets the icon for an existing blip element.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraInterior";
tmpDef.description = "Returns the interior of the local camera (independent of the interior of the local player).";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeather";
tmpDef.description = "This function returns the current Weather ID.\n\nReturns two integers indicating the weather type that is currently active. The first integer says what weather is currently considered to be active. The second integer is the weather id that is being blended into if any, otherwise it is nil.";
tmpDef.returnType = "int, int";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setHeatHaze";
tmpDef.description = "This function changes the heat haze effect.";
tmpDef.returnType = "bool";
tmpDef.args = [" int intensity", "[ int randomShift = 0", "int speedMin = 12", "int speedMax = 18", "int scanSizeX = 75", "int scanSizeY = 80", "int renderSizeX = 80", "int renderSizeY = 85", "bool bShowInside = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraTarget";
tmpDef.description = "This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:This syntax mantains the player targeted by the camera, but makes the camera look at the specified coordinates. It has no effect when the camera doesn't have a target.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer [", "player target = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraMatrix";
tmpDef.description = "This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it \"looks at\").";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "float positionX", "float positionY", "float positionZ [", "float lookAtX", "float lookAtY", "float lookAtZ", "float roll = 0", "float fov = 70 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "inspect";
tmpDef.description = "This example draws the contents of a table and its data type:";
tmpDef.returnType = "string";
tmpDef.args = [" mixed var [", "table options] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraTarget";
tmpDef.description = "This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following). OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "element";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getFunctionsBoundToKey";
tmpDef.description = "This loops through all the keys and outputs the keyname and the function bound to that key.This loops through all the keys and outputs the keyname and the function bound to that key.";
tmpDef.returnType = "table";
tmpDef.args = [" player thePlayer ", "string theKey "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isControlEnabled";
tmpDef.description = "This example uses a command handler to allow a player to toggle whether he can use vehicle weapons by disabling or enabling the primary and secondary vehicle fire keys. The command handler is trigged with 'toggleweapons'";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string control "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeather";
tmpDef.description = "This function sets the current weather to the given valid value. To change the weather gradually, see setWeatherBlended.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weatherID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setGameSpeed";
tmpDef.description = "This function sets the game speed to the given value.";
tmpDef.returnType = "bool";
tmpDef.args = [" float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceExportedFunctions";
tmpDef.description = "Returns a table containing the names of the functions that a resource exports. It will return the exports of the current resource if there is no argument passed in.";
tmpDef.returnType = "table|false";
tmpDef.args = [" [ resource res ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrafficLightsLocked";
tmpDef.description = "Toggles whether you want the traffic lights to be locked. If the lights are locked, it means they won't change unless you do setTrafficLightState.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool toggle "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMoonSize";
tmpDef.description = "This function sets the moon size. Using this function server-side will overwrite the value that was previously set client-side.This example change moon size to looks more realistic for everyone when the resource is started.";
tmpDef.returnType = "bool";
tmpDef.args = [" int size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWindVelocity";
tmpDef.description = "This function resets the wind velocity in San Andreas to its default state.This example returns the wind velocity to a player if they use the command 'resetwindvelocity'.This example returns the wind velocity for all players if they use the command 'resetwindvelocity'.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeVehicleUpgrade";
tmpDef.description = "This script defines a 'nos' console command that adds a NOS upgrade to the vehicle that the player who executes the command is sitting in. It also adds a 'removenos' command which allows removal of a player's nos.This script defines a 'nos' console command that adds a NOS upgrade to the vehicle that the player who executes the command is sitting in. It also adds a 'removenos' command which allows removal of a player's nos. This example is clientside and may cause desync.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "int upgrade "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getNetworkUsageData";
tmpDef.description = "This function returns a table containing network usage information about inbound and outbound packets.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleAllControls";
tmpDef.description = "Enables or disables the use of all GTA controls for a specified player.This function will disable the use of all controls in order to freeze a player, which will be used every time someone enters a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool enabled", "[ bool gtaControls = true", "bool mtaControls = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "iprint";
tmpDef.description = "This example prints some sample debug messages, assuming the server is running a typical freeroam/play environment:";
tmpDef.returnType = "bool";
tmpDef.args = [" mixed var1[", "mixed var2", "mixed var3...] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getDistanceBetweenPoints2D";
tmpDef.description = "This example gets the distance between two vehicles, stored in variables vehicle1 and vehicle2.";
tmpDef.returnType = "float";
tmpDef.args = [" float x1", "float y1", "float x2", "float y2 "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setMinuteDuration";
tmpDef.description = "Sets the real-world duration of an ingame minute. The GTA default is 1000.";
tmpDef.returnType = "bool";
tmpDef.args = [" int milliseconds "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "restoreWorldModel";
tmpDef.description = "This function allows restoring of world object,which was removed with RemoveWorldModel.";
tmpDef.returnType = "bool";
tmpDef.args = [" int modelID", "float radius", "float x", "float y", "float z [", "int iInterior = -1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeWorldModel";
tmpDef.description = "This function is used to remove a world object.";
tmpDef.returnType = "bool";
tmpDef.args = [" int modelID", "float radius", "float x", "float y", "float z [", "int interior = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetFogDistance";
tmpDef.description = "This function resets the fog render distance to its default state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleControl";
tmpDef.description = "Enables or disables the use of a GTA control for a specific player.This function will disable the use of the vehicle secondary-fire key for anyone in a Hydra, consequently removing the ability to fire rockets.This function will disable the use of the vehicle secondary-fire key for anyone in a Hydra, consequently removing the ability to fire rockets.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string control", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetFarClipDistance";
tmpDef.description = "This function resets the far clip distance to its default state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setFarClipDistance";
tmpDef.description = "This example adjusts the visibility range of the game world.This example adjusts the visibility range of the game world.";
tmpDef.returnType = "bool";
tmpDef.args = [" float distance "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getDistanceBetweenPoints3D";
tmpDef.description = "This function returns the distance between two 3 dimensional points using the pythagorean theorem.";
tmpDef.returnType = "float";
tmpDef.args = [" float x1", "float y1", "float z1", "float x2", "float y2", "float z2 "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColorFromString";
tmpDef.description = "This example will set the blip attached to a player to a color they specify by typing set_my_color [color] in the console.";
tmpDef.returnType = "int int int int";
tmpDef.args = [" string theColor "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isGarageOpen";
tmpDef.description = "This function checks whether or not a specific garage door is open.This example opens a garage door when a player enters a collision shape near it, and closes it when they leave:";
tmpDef.returnType = "bool";
tmpDef.args = [" int garageID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getNetworkStats";
tmpDef.description = "This function returns network status information.This example outputs the local players network status information to their console when using the /netstatus command";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTime";
tmpDef.description = "This function sets the current GTA time to the given time.This serverside function sets the time and notifies players.This example freeze the time.";
tmpDef.returnType = "bool";
tmpDef.args = [" int hour", "int minute "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRainLevel";
tmpDef.description = "This function is used to get the current rain level.Example: Sets the rain (So it can detect it) before returning it. (In this case, when resource starts.)Example: Sets the rain (So it can detect it) before returning it. (In this case, when resource starts.)";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "interpolateBetween";
tmpDef.description = "This clientside example uses interpolateBetween to create position and color interpolation(with effect) on a marker.The command to test it is \"/marker\".The position is interpolated with \"OutBounce\" as strEasingType to make the marker bounce off the ground and \"Linear\" interpolation for the color.This clientside example uses interpolateBetween to create size and position interpolation (with effect) on a gui-window.The command to test it is \"/window\".When the window pops up it uses \"OutElastic\" as the strEasingType to create the bouncing/elastic effect.When it fades away, it uses \"InQuad\" to have an accelerating fading.This clientside example uses interpolateBetween to create and position interpolation (with effect) on a camera.The command to test it is \"/ccam\".When the camera pops up it uses \"OutQuad\" as the strEasingType to create the slow down effect.";
tmpDef.returnType = "float float float";
tmpDef.args = [" float x1", "float y1", "float z1", "float x2", "float y2", "float z2", "float fProgress", "string strEasingType", "[ float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSunSize";
tmpDef.description = "This function is used to set the size of the sun.";
tmpDef.returnType = "bool";
tmpDef.args = [" int Size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPerformanceStats";
tmpDef.description = "This function returns performance information.";
tmpDef.returnType = "table table";
tmpDef.args = [" string category [", "string options = \"\"", "string filter = \"\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "geteasingvalue";
tmpDef.description = "This clientside example uses getEasingValue to make a custom camera fade.The command to test it is \"/fade\".The fading out is done with \"InQuad\" to have a slow fading which then accelerates and \"OutQuad\" is used for fading in to have a smooth end of the fading.In this example interpolateBetween could have been used directly to interpolate the alpha between 0 and 255 and then 255 and 0 but is example is just to illustrate the use of getEasingValue by itself.";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraInterior";
tmpDef.description = "Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in. This example make a command to change your cam interior to a selected one. This example make a command to change your cam interior to a selected one.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int interior "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTime";
tmpDef.description = "This function is used to get the current time in the game. If you want to get the real server time, use getRealTime.";
tmpDef.returnType = "int int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSkyGradient";
tmpDef.description = "This function changes the sky color to a two-color gradient.";
tmpDef.returnType = "bool";
tmpDef.args = [" [ int topRed = 0", "int topGreen = 0", "int topBlue = 0", "int bottomRed = 0", "int bottomGreen = 0", "int bottomBlue = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTimerDetails";
tmpDef.description = "This function is for getting the details of a running timer.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" timer theTimer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getrealtime";
tmpDef.description = "This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's clock) use getTime.";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTickCount";
tmpDef.description = "This function returns amount of time that your system has been running in milliseconds. By comparing two values of getTickCount, you can determine how much time has passed (in milliseconds) between two events. This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrafficLightState";
tmpDef.description = "Sets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.";
tmpDef.returnType = "bool";
tmpDef.args = [" int state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getMarkerIcon";
tmpDef.description = "This function returns the icon name for a marker.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGravity";
tmpDef.description = "This function returns the current gravity level for the context in which it is called (server or client).This serverside command outputs the serverside gravity level.";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setInteriorSoundsEnabled";
tmpDef.description = "This example disables the dancing club ambient music, without disabling other interiors' ambient sounds.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getZoneName";
tmpDef.description = "This function allows you to retrieve the zone name of a certain location.Example 1: This example shows you how to return a zone name by doing /loc x y z in the chatbox or just loc x y z in console ( replace x, y and z with the co-ords you wanna check, eg /loc 1200 523 12.3 )";
tmpDef.returnType = "string";
tmpDef.args = [" float x", "float y", "float z", "[bool citiesonly=false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetRainLevel";
tmpDef.description = "This function resets the rain level of the current weather to its default.This example will make it rain when you enter a vehicle and stop it when you leave the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSunSize";
tmpDef.description = "This function is used to get the size of the sun.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "base64Encode";
tmpDef.description = "This function returns the base64 representation of the encoded block of data";
tmpDef.returnType = "string";
tmpDef.args = [" string data "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceRootElement";
tmpDef.description = "This example retrieves the current resource's root element and attaches it to an onResourceStart event handler. This causes the event handler to get called only when the current resource is started rather than when any resource is started, thereby reducing unnecessary overhead.";
tmpDef.returnType = "element";
tmpDef.args = [" [resource theResource=getThisResource()] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetSunSize";
tmpDef.description = "This function is used to reset the size of the sun to its normal size.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRadarAreaColor";
tmpDef.description = "Sets the color of an existing radar area.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadarArea", "int r", "int g", "int b", "int a "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRadarAreaFlashing";
tmpDef.description = "This function makes an existing radar area flash in transparency.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadarArea", "bool flash "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadarAreaSize";
tmpDef.description = "This function is used for getting the X and Y size of an existing radar area.";
tmpDef.returnType = "float, float";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVersion";
tmpDef.description = "This function gives you various version information about MTA and the operating system.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getFPSLimit";
tmpDef.description = "This function retrieves the maximum FPS (Frames per second) that players on the server can run their game at.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fromJSON";
tmpDef.description = "This function is available client-side in 1.2 and onwards.";
tmpDef.returnType = "var";
tmpDef.args = [" string json "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isRadarAreaFlashing";
tmpDef.description = "This function allows detection of whether a radar area is flashing or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRadarAreaSize";
tmpDef.description = "This function changes the size of an existing radar area.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadararea", "float x", "float y "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedWeaponSlot";
tmpDef.description = "This function changes the selected weapon slot of a ped.This example allows the player to type the command 'giveweapons', which gives the player a weapon for every slot. Instead of equipping the last given weapon, the script randomly decides which weapon to equip after all the weapons are given.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int weaponSlot "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTimers";
tmpDef.description = "This function returns a table of all active timers that the resource that calls it has created. Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.";
tmpDef.returnType = "table";
tmpDef.args = [" [ theTime = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getOcclusionsEnabled";
tmpDef.description = "This function is used to get \"occlusions enabled\" state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceName";
tmpDef.description = "This simple example outputs a message in the console whenever a resource starts, stating the name of the resource.";
tmpDef.returnType = "string";
tmpDef.args = [" resource res "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadarAreaColor";
tmpDef.description = "This function can be used to retrieve the current color of a radar area.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "gettok";
tmpDef.description = "This function splits a string using the given separating character and returns one specified substring.This example retrieves the startskin and endskin for spawning a player from a string of two numbers \"a,b\"";
tmpDef.returnType = "string";
tmpDef.args = [" string text", "int tokenNumber", "string / int separatingCharacter "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWindVelocity";
tmpDef.description = "This function gets the wind velocity in San Andreas.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isInsideRadarArea";
tmpDef.description = "This function checks if a 2D position is inside a radar area or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theArea", "float posX", "float posY "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceState";
tmpDef.description = "This function returns the state of a given resource";
tmpDef.returnType = "string";
tmpDef.args = [" resource theResource "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "restoreAllWorldModels";
tmpDef.description = "This function allows restoring of all world objects,which were removed with RemoveWorldModel.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getThisResource";
tmpDef.description = "This function retrieves the resource from which the function call was made.";
tmpDef.returnType = "resource";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addCommandHandler";
tmpDef.description = "This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.";
tmpDef.returnType = "bool";
tmpDef.args = [" string commandName", "function handlerFunction", "[bool restricted = false", "bool caseSensitive = true] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceConfig";
tmpDef.description = "This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file. An alternative way to load XML files is to use xmlLoadFile.This example opens a configuration file and prints the value of the 'attr' attribute of the first 'group' node.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setOcclusionsEnabled";
tmpDef.description = "This function is used to enable or disable occlusions. Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAircraftMaxVelocity";
tmpDef.description = "This function sets the maximum velocity at which aircrafts could fly. Using this function server-side will overwrite the value that was previously set client-side.This example will increase or decrease the max velocity by pressing numpad keys + or -.This example will double the max velocity for everyone when the resource is started.";
tmpDef.returnType = "bool";
tmpDef.args = [" float velocity "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setGravity";
tmpDef.description = "This function sets the server's gravity level.";
tmpDef.returnType = "bool";
tmpDef.args = [" float level "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fetchRemote";
tmpDef.description = "This function allows you to post and receive data from HTTP servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.Example sending email via a web service (adopted from examples on https://documentation.mailgun.com/user_manual.html)";
tmpDef.returnType = "bool";
tmpDef.args = [" string URL[", "string queueName = \"default\" ][", "int connectionAttempts = 10", "int connectTimeout = 10000 ]", "function callbackFunction", "[ string postData = \"\"", "bool postIsBinary = false", "[ arguments... ] ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeCommandHandler";
tmpDef.description = "This example defines a command handler for the command createmarker (which creates a red marker at the caller's position). It then creates a second command handler createmarker2 which will call the first one.";
tmpDef.returnType = "bool";
tmpDef.args = [" string commandName", "player thePlayer", "[ string args ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetMoonSize";
tmpDef.description = "This function is used to reset the size of the moon to its normal size.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponAmmo";
tmpDef.description = "Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.Set the ammo of a custom weapon which was created through createWeapon. By default, a custom weapon has 9999 ammo (which means infinite ammo).";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int weapon", "int totalAmmo", "[int ammoInClip = 0] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceDynamicElementRoot";
tmpDef.description = "This function retrieves the dynamic element root of a specified resource. The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.";
tmpDef.returnType = "element";
tmpDef.args = [" resource theResource "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetHeatHaze";
tmpDef.description = "This function restores the default heat haze.";
tmpDef.returnType = "bool";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTrafficLightState";
tmpDef.description = "Gets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetSkyGradient";
tmpDef.description = "This function allows restoring of a changed sky gradient as a result of setSkyGradient.";
tmpDef.returnType = "bool";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCloudsEnabled";
tmpDef.description = "This function will enable or disable clouds. This is useful for race maps which are placed high up as clouds can cause low FPS.This example Disables clouds for all players";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSkyGradient";
tmpDef.description = "This function will return the current sky color.";
tmpDef.returnType = "int, int, int, int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponProperty";
tmpDef.description = "This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property", "int/float theValue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAircraftMaxHeight";
tmpDef.description = "This function changes the maximum flying height of aircraft.";
tmpDef.returnType = "bool";
tmpDef.args = ["float Height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setJetpackMaxHeight";
tmpDef.description = "This function changes the maximum flying height of jetpack.";
tmpDef.returnType = "bool";
tmpDef.args = ["float Height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBlipVisibleDistance";
tmpDef.description = "This function will tell you what visible distance a blip has. ";
tmpDef.returnType = "float";
tmpDef.args = ["blip theBlip"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBlipVisibleDistance";
tmpDef.description = "This function will set the visible distance of a blip.";
tmpDef.returnType = "bool";
tmpDef.args = ["blip theBlip", "float theDistance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createColPolygon";
tmpDef.description = "This function creates a collision polygon. See Wikipedia for a definition of a polygon. The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can. It should be noted this shape is 2D. There should be at least 3 bound points set. ";
tmpDef.returnType = "colshape";
tmpDef.args = ["float fX", "float fY", "float fX1", "float fY1", "float fX2", "float fY2", "float fX3", "float fY3", "..."];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLatentEventStatus";
tmpDef.description = "Gets the status of one queued latent event.";
tmpDef.returnType = "table";
tmpDef.args = ["player thePlayer", "int handle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "cancelLatentEvent";
tmpDef.description = "Stops a latent event from completing";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "int handle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fileGetPos";
tmpDef.description = "Returns the current read/write position in the given file.";
tmpDef.returnType = "int";
tmpDef.args = ["file theFile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyBoundToFunction";
tmpDef.description = "getKeyBoundToFunction allows retrieval of the first key bound to a function.";
tmpDef.returnType = "string";
tmpDef.args = ["player thePlayer", "function theFunction"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "call";
tmpDef.description = "This function is used to call a function from another resource (which must be running).";
tmpDef.returnType = "";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeCommandHandler";
tmpDef.description = "This function removes a command handler, that is one that has been added using addCommandHandler. This function can only remove command handlers that were added by the resource that it is called in.";
tmpDef.returnType = "bool";
tmpDef.args = ["string commandName [", "function handler]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setFPSLimit";
tmpDef.description = "This function sets the maximum FPS (Frames per second) that players on the server can run their game at.  ";
tmpDef.returnType = "bool";
tmpDef.args = ["int fpsLimit"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toJSON";
tmpDef.description = "Available client side in 1.2 and onwards.";
tmpDef.returnType = "string";
tmpDef.args = ["var value", "[ bool compact = false ][", "string prettyType = \"none\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEasingValue";
tmpDef.description = "Used for custom Lua based interpolation, returns the easing value (animation time to use in your custom interpolation) given a progress and an easing function.";
tmpDef.returnType = "float";
tmpDef.args = ["float fProgress", "string strEasingType [", "float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRealTime";
tmpDef.description = "This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's clock) use getTime.";
tmpDef.returnType = "table";
tmpDef.args = ["[ int seconds = current", "bool localTime = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "hash";
tmpDef.description = "This function returns a hash of the specified string in the specified algorithm.";
tmpDef.returnType = "string";
tmpDef.args = ["string algorithm", "string dataToHash"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "killTimer";
tmpDef.description = "This function allows you to kill/halt existing timers.";
tmpDef.returnType = "bool";
tmpDef.args = ["timer theTimer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetTimer";
tmpDef.description = "This function allows you to reset the elapsed time in existing timers to zero. The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.";
tmpDef.returnType = "bool";
tmpDef.args = ["timer theTimer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTimer";
tmpDef.description = "This function allows you to trigger a function after a number of milliseconds have elapsed. You can call one of your own functions or a built-in function. For example, you could set a timer to spawn a player after a number of seconds have elapsed.";
tmpDef.returnType = "timer";
tmpDef.args = ["function theFunction", "int timeInterval", "int timesToExecute", "[ var arguments... ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "split";
tmpDef.description = "This function splits a string into substrings. You specify a character that will act as a separating character; this will determine where to split the sub-strings. For example, it can split the string \"Hello World\" into two strings containing the two words, by spliting using a space as a separator.";
tmpDef.returnType = "table";
tmpDef.args = ["string stringToSplit", "string / int separatingChar"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTimer";
tmpDef.description = "This function checks if a variable is a timer.";
tmpDef.returnType = "bool";
tmpDef.args = ["timer theTimer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "md5";
tmpDef.description = "Calculates the MD5 hash of the specified string and returns its hexadecimal representation.";
tmpDef.returnType = "string";
tmpDef.args = ["string str"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "sha256";
tmpDef.description = "Calculates the sha256 hash of the specified string.";
tmpDef.returnType = "string";
tmpDef.args = ["string str"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "teaEncode";
tmpDef.description = "This functions performs the Tiny Encryption Algorithm on the given string and returns the base64 representation of the encrypted string.";
tmpDef.returnType = "string";
tmpDef.args = ["string text ", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "teaDecode";
tmpDef.description = "This function decrypts given base64 representation of encrypted data using the Tiny Encryption Algorithm.";
tmpDef.returnType = "string";
tmpDef.args = ["string data", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "utfChar";
tmpDef.description = "The function returns the string of the specified UTF code.";
tmpDef.returnType = "string";
tmpDef.args = ["int characterCode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "utfCode";
tmpDef.description = "The function returns the UTF codes of the given string.";
tmpDef.returnType = "int";
tmpDef.args = ["string theString"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "utfLen";
tmpDef.description = "The function gets the real length of a string, in characters.";
tmpDef.returnType = "int";
tmpDef.args = ["string theString"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "utfSeek";
tmpDef.description = "The function returns the byte position at specified character position.";
tmpDef.returnType = "int";
tmpDef.args = ["string theString", "int position"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "utfSub";
tmpDef.description = "The function returns a sub string, from the specified positions on a character.";
tmpDef.returnType = "string";
tmpDef.args = ["string theString", "int Start", "int End"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "pregFind";
tmpDef.description = "This function stops at the first occurrence of the pattern in the input string and returns the result of the search.";
tmpDef.returnType = "bool";
tmpDef.args = ["string subject", "string pattern [", "int/string flags ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "pregReplace";
tmpDef.description = "This function performs a regular expression search and replace and returns the replaced string.";
tmpDef.returnType = "string";
tmpDef.args = ["string subject", "string pattern", "string replacement [", "int/string flags ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "pregMatch";
tmpDef.description = "This function returns all matches.";
tmpDef.returnType = "table";
tmpDef.args = ["string base", "string pattern [", "int/string flags = 0", "int maxResults = 100000 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitAnd";
tmpDef.description = "This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var1", "uint var2", "..."];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitNot";
tmpDef.description = "This function performs a bitwise NOT on an (unsigned) 32-bit integer. See Bitwise operation for more details.";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitOr";
tmpDef.description = "This function performs a bitwise OR-conjunction on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var1", "uint var2", "..."];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitXor";
tmpDef.description = "This function performs a bitwise XOR-conjunction (exclusive OR) on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var1", "uint var2", "..."];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitTest";
tmpDef.description = "This function performs an AND-conjunction on two or more (unsigned) 32-bit integers and checks, whether the conjuncted value is zero or not. See Bitwise operation for more details.";
tmpDef.returnType = "bool";
tmpDef.args = ["uint var1", "uint var2", "..."];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitLRotate";
tmpDef.description = "This functions performs a bitwise circular left-rotation on the integer value by integer n positions.";
tmpDef.returnType = "int";
tmpDef.args = ["int value", "int n"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitRRotate";
tmpDef.description = "This functions performs a bitwise circular right-rotation on the integer value by integer n positions.";
tmpDef.returnType = "int";
tmpDef.args = ["int value", "int n"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitLShift";
tmpDef.description = "This functions performs a logical left shift on the integer value by integer n positions. In a logical shift, zeros are shifted in to replace the discarded bits.";
tmpDef.returnType = "int";
tmpDef.args = ["int value", "int n"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitRShift";
tmpDef.description = "This functions performs a logical right shift on the integer value by integer n positions. In a logical shift, zeros are shifted in to replace the discarded bits.";
tmpDef.returnType = "int";
tmpDef.args = ["int value", "int n"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitArShift";
tmpDef.description = "This functions performs an arithmetic shift on the integer value by integer n positions. In an arithmetic shift, zeros are shifted in to replace the discarded bits. In a right arithmetic shift, the sign bit is shifted in on the left, thus preserving the sign of the operand.";
tmpDef.returnType = "int";
tmpDef.args = ["int value", "int n"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitExtract";
tmpDef.description = "This function returns the unsigned number formed by the bits field to field + width - 1 (range: 0-31).";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var", "int field [", "int width = 1 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "bitReplace";
tmpDef.description = "This function returns the unsigned number formed by var value with replacement specified at bits field to field + width - 1";
tmpDef.returnType = "uint";
tmpDef.args = ["uint var", "uint replaceValue", "int field", "int width = 1"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "addDebugHook";
tmpDef.description = "This function allows tracing of MTA functions and events. It should only be used when debugging scripts as it may degrade script performance.";
tmpDef.returnType = "bool";
tmpDef.args = ["string hookType", "function callbackFunction [", "table nameList ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeDebugHook";
tmpDef.description = "This function removes hooks added by addDebugHook";
tmpDef.returnType = "bool";
tmpDef.args = ["string hookType", "function callbackFunction"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrainDerailable";
tmpDef.description = "This function will check if a train or tram is derailable.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle vehicleToCheck"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrainDerailed";
tmpDef.description = "This function will check if a train or tram is derailed.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle vehicleToCheck"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleBlown";
tmpDef.description = "This function allows you to determine whether a vehicle is blown or still intact.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleTaxiLightOn";
tmpDef.description = "This function will get the taxi light state of a taxi (vehicle IDs 420 and 438)";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle taxi"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleDamageProof";
tmpDef.description = "This function checks if a vehicle is damage proof (set with setVehicleDamageProof).";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleFuelTankExplodable";
tmpDef.description = "This will tell you if a vehicle's petrol tank is explodable.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleLocked";
tmpDef.description = "This will tell you if a vehicle is locked.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleOnGround";
tmpDef.description = "Checks to see if a vehicle has contact with the ground.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTrainTrack";
tmpDef.description = "Gets the track of a train";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle train"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getTrainPosition";
tmpDef.description = "Gets the position the train is currently on the track";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle train"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleColor";
tmpDef.description = "This function returns the color of the specified vehicle. A vehicle can have up to four colors.";
tmpDef.returnType = "int int int int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleCompatibleUpgrades";
tmpDef.description = "This function returns a table of all the compatible upgrades (or all for a specified slot, optionally) for a specifed vehicle.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle", "[ int slot ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleController";
tmpDef.description = "This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.";
tmpDef.returnType = "player";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleDoorState";
tmpDef.description = "This function returns the current state of the specifed door on the vehicle.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle", "int door"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleEngineState";
tmpDef.description = "This function returns a vehicle's engine state (on or off).";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleLandingGearDown";
tmpDef.description = "This function is used to check whether a vehicle's landing gear is down or not. Only planes can be used with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleLightState";
tmpDef.description = "This function returns the current state of the specified light on the vehicle.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle", "int light"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleMaxPassengers";
tmpDef.description = "This function returns the maximum number of passengers that a specified vehicle can hold. Only passenger seats are counted, the driver seat is excluded.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle / int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleName";
tmpDef.description = "This function returns a string containing the name of the vehicle";
tmpDef.returnType = "string";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleOccupant";
tmpDef.description = "This function gets the player sitting/trying to enter the specified vehicle.";
tmpDef.returnType = "player";
tmpDef.args = ["vehicle theVehicle", "[ int seat=0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleOccupants";
tmpDef.description = "This function gets all players sitting in the specified vehicle.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleOverrideLights";
tmpDef.description = "This function is used to find out the current state of the override-lights setting of a vehicle.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehiclePaintjob";
tmpDef.description = "This function gets the current paintjob on the specified vehicle. ";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehiclePanelState";
tmpDef.description = "This function returns the current state of a specifed panel on the vehicle. A vehicle can have up to 7 panels.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle", "int panel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehiclePlateText";
tmpDef.description = "This function is used to retrieve the text on the number plate of a specified vehicle.";
tmpDef.returnType = "string";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleSirensOn";
tmpDef.description = "This function returns whether the sirens are turned on for the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleTowedByVehicle";
tmpDef.description = "This function is used to get the vehicle being towed by another.";
tmpDef.returnType = "vehicle";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleTowingVehicle";
tmpDef.description = "This function is used to get the vehicle that is towing another.";
tmpDef.returnType = "vehicle";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleTurnVelocity";
tmpDef.description = "This function is used to retrieve a vehicle's turning velocity for each axis.";
tmpDef.returnType = "float float float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleTurretPosition";
tmpDef.description = "This function gets the position of a vehicle's turret, if it has one. Vehicles with turrets include firetrucks and tanks.";
tmpDef.returnType = "float, float";
tmpDef.args = ["vehicle turretVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleType";
tmpDef.description = "This function retrieves the type of a vehicle (such as if it is a car or a boat).";
tmpDef.returnType = "string";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleUpgradeOnSlot";
tmpDef.description = "This function returns the current upgrade id on the specified vehicle's 'upgrade slot'";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle", "int slot"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleUpgrades";
tmpDef.description = "This function returns a table of all the upgrades on a specifed vehicle.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleUpgradeSlotName";
tmpDef.description = "This function returns the name of an upgrade slot name (e.g. roof, spoiler).";
tmpDef.returnType = "string";
tmpDef.args = ["int slot/upgrade"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleWheelStates";
tmpDef.description = "This function returns the current states of all the wheels on the vehicle.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleDoorOpenRatio";
tmpDef.description = "This function tells you how open a door is (the 'open ratio'). Doors include boots/trunks and bonnets on vehicles that have them.";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle theVehicle", "int door"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleHandling";
tmpDef.description = "This function returns a table of the current vehicle handling data.";
tmpDef.returnType = "table";
tmpDef.args = ["element theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleHeadLightColor";
tmpDef.description = "This function will get the headlight color of a vehicle.";
tmpDef.returnType = "int, int, int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleModelFromName";
tmpDef.description = "This function retrieves the model ID of a vehicle as an integer value from its name.";
tmpDef.returnType = "int";
tmpDef.args = ["string name"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNameFromModel";
tmpDef.description = "Gets the name of a vehicle by its model ID.";
tmpDef.returnType = "string";
tmpDef.args = ["int model"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleVariant";
tmpDef.description = "This function gets the variant of a specified vehicle. In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike. For the default GTA SA variant list see: Vehicle variants";
tmpDef.returnType = "int, int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleSirenParams";
tmpDef.description = "This function get the parameters of a vehicles siren.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleSirens";
tmpDef.description = "This function gets the properties of a vehicle's sirens.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainDerailable";
tmpDef.description = "This function will set a train or tram as derailable. This is, if it can derail when it goes above the maximum speed.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle derailableVehicle", "bool derailable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainDerailed";
tmpDef.description = "This function will set a train or tram as derailed.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle vehicleToDerail", "bool derailed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainDirection";
tmpDef.description = "Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle train", "bool clockwise"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainSpeed";
tmpDef.description = "Sets the on-track speed of a train.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle train", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainTrack";
tmpDef.description = "Sets the track of a train";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle train", "int track"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTrainPosition";
tmpDef.description = "Sets the position the train is currently on the track";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle train", "float position"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleColor";
tmpDef.description = "This function will set the color of a vehicle. Colors are in RGB format, vehicles can have up to 4 colors. Most vehicles have 2 colors only.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int r1", "int g1", "int b1", "[int r2", "int g2", "int b2", "int r3", "int g3", "int b3", "int r4", "int g4", "int b4]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleDamageProof";
tmpDef.description = "This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire. A damage proof's vehicle health can still be changed via script.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool damageProof"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleDoorState";
tmpDef.description = "This function sets the state of the specified door on a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int door", "int state ["," bool spawnFlyingComponent = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleDoorsUndamageable";
tmpDef.description = "This function makes a vehicle's doors undamageable, so they won't fall off when they're hit. Note that the vehicle has to be locked using setVehicleLocked for this setting to have any effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleEngineState";
tmpDef.description = "This function turns a vehicle's engine on or off. Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool engineState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleFuelTankExplodable";
tmpDef.description = "This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank. This function will have no effect on vehicles with tanks that cannot be shot in single player.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool explodable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleLandingGearDown";
tmpDef.description = "This function is used to set the landing gear state of certain vehicles.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool gearState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleLightState";
tmpDef.description = "This function sets the state of the light on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int light", "int state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleLocked";
tmpDef.description = "This function can be used to set a vehicle to be locked or unlocked.  Locking a vehicle restricts access to all doors of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool locked"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleOverrideLights";
tmpDef.description = "This function changes the light overriding setting on a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehiclePaintjob";
tmpDef.description = "This function changes the paintjob on the specified vehicle. ";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehiclePanelState";
tmpDef.description = "This function allows you to change the state of one of the six panels vehicle's can have. When executed on the server-side resources, the damage will be synched for all players, whereas the change is only client-side if the function is used in a client resource. ";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int panelID", "int state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehiclePlateText";
tmpDef.description = "This function can be used to set the numberplate text of a car.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theVehicle", "string numberplate"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleSirensOn";
tmpDef.description = "This function changes the state of the sirens on the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle ", "bool sirensOn"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleTurretPosition";
tmpDef.description = "This function sets the position of a vehicle's turret, if it has one. This can be used to influence the turret's rotation, so it doesn't follow the camera. Vehicles with turrets include firetrucks and tanks.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle turretVehicle", "float positionX", "float positionY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleDoorOpenRatio";
tmpDef.description = "This function sets how much a vehicle's door is open. Doors include the boot/trunk and the bonnet of the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int door", "float ratio [", "int time = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleTurnVelocity";
tmpDef.description = "Sets the angular velocity of a vehicle. Basically applies a spin to it.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float rx", "float ry", "float rz"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleWheelStates";
tmpDef.description = "This function sets the state of wheels on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int frontLeft", "[ int rearLeft = -1", "int frontRight = -1", "int rearRight = -1 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleHeadLightColor";
tmpDef.description = "This function will set the headlight color of a vehicle. valid Red Green and Blue arguments range from 0-255";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int red", "int green", "int blue"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleTaxiLightOn";
tmpDef.description = "This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle taxi", "bool LightState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleSirens";
tmpDef.description = "This function changes the properties of a vehicles siren point.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int sirenPoint", "float posX", "float posY", "float posZ", "float red", "float green", "float blue", "[float alpha = 255", "float minAlpha = 0.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWaterColor";
tmpDef.description = "This function returns the water color of the GTA world.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWaterVertexPosition";
tmpDef.description = "Gets the world position of a vertex (i.e. corner) of a water area. Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.";
tmpDef.returnType = "int, int, float";
tmpDef.args = ["water theWater", "int vertexIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWaveHeight";
tmpDef.description = "This function returns the current wave height.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWaterColor";
tmpDef.description = "This function reset the water color of the GTA world to default.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaterColor";
tmpDef.description = "This function changes the water color of the GTA world.";
tmpDef.returnType = "bool";
tmpDef.args = ["int red", "int green", "int blue", "[ int alpha = 200 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaterLevel";
tmpDef.description = "Sets the height of some or all the water in the game world.";
tmpDef.returnType = "bool";
tmpDef.args = ["float level ["," bool includeWaterFeatures = true"," bool includeWaterElements = true"," bool includeWorldSea = true"," bool includeOutsideWorld = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaterVertexPosition";
tmpDef.description = "Sets the world position of a corner point of a water area.";
tmpDef.returnType = "bool";
tmpDef.args = ["water theWater", "int vertexIndex", "int x", "int y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaveHeight";
tmpDef.description = "This function sets the wave height to the desired value, the default is 0.";
tmpDef.returnType = "bool";
tmpDef.args = ["float height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWaterLevel";
tmpDef.description = "This function resets the water of the GTA world back to its default level. Water elements are not affected.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlCreateChild";
tmpDef.description = "This function creates a new child node under an XML node.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["xmlnode parentNode", "string tagName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlFindChild";
tmpDef.description = "This function returns a named child node of an XML node.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["xmlnode parent", "string tagName", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetAttributes";
tmpDef.description = "Returns all the attributes of a specific XML node.";
tmpDef.returnType = "table";
tmpDef.args = ["xmlnode node"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetChildren";
tmpDef.description = "This function returns all children of a particular XML node, or a particular child node.";
tmpDef.returnType = "table/xmlnode";
tmpDef.args = ["xmlnode parent", "[ int index ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetName";
tmpDef.description = "Gets the tag name of the specified XML node.";
tmpDef.returnType = "string";
tmpDef.args = ["xmlnode node"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeGetParent";
tmpDef.description = "Returns the parent node of an xml node.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["xmlnode node"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlNodeSetName";
tmpDef.description = "Sets the tag name of the specified XML node.";
tmpDef.returnType = "bool";
tmpDef.args = ["xmlnode node", "string name"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

// 1.5.6
tmpDef = new MTAFunction;
tmpDef.label = "isPedWearingJetpack";
tmpDef.description = "Checks whether or not a ped is currently wearing a jetpack. ";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleHandling";
tmpDef.description = "This function is used to change the handling data of a vehicle.\nImplemented also for client-sided vehicles. ";
tmpDef.returnType = "bool";
tmpDef.args = ["element theVehicle", "string property", "var value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "encodeString";
tmpDef.description = "This function encodes a string using the specified algorithm. The counterpart of this function is decodeString. ";
tmpDef.returnType = "string";
tmpDef.args = ["string algorithm", "string input", "table options ["," function callback ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "decodeString";
tmpDef.description = "This function decodes an encoded string using the specified algorithm. The counterpart of this function is encodeString. ";
tmpDef.returnType = "string";
tmpDef.args = ["string algorithm", "string input", "table options ["," function callback ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColShapeType";
tmpDef.description = "This function is used to retrieve the type of an colshape.";
tmpDef.returnType = "int";
tmpDef.args = ["colshape shape"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementAngularVelocity";
tmpDef.description = "Gets the current angular velocity of a specified, supported element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementAngularVelocity";
tmpDef.description = "Sets the angular velocity of a specified, supported element (Applies a spin to it).";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "float rx", "float ry", "float rz"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementsWithinRange";
tmpDef.description = "This function is used to retrieve a list of all elements of specified type within a range of 3D coordinates. Note: This function checks if elements are in a box, not in a sphere. Z argument isn't in use currently, but make your scripts like it is for future compatibility reasons. This function doesn't work with elements which is created by createElement.";
tmpDef.returnType = "table";
tmpDef.args = ["float x", "float y", "float z", "float range [", "string elemType = \"\", int interior = nil"," int dimension = nil ] ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isInsideColShape";
tmpDef.description = "This function checks if a 3D position is inside a colshape or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape theShape", "float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAnimationSpeed";
tmpDef.description = "Sets the current animation speed of a player or ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed ["," string anim = \"\"", "float speed = 1.0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "addColPolygonPoin";
tmpDef.description = "This function is used to add a new point to an existing colshape polygon.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape"," float fX"," float fY ["," int index = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColShapeRadius";
tmpDef.description = "This function is used to get the radius of a colshape. Valid types are circle, sphere and tube.";
tmpDef.returnType = "float";
tmpDef.args = ["colshape shape"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColShapeSize";
tmpDef.description = "This function is used to get the size of a colshape. Valid types are rectangle, cuboid and tube.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["colshape shape"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setColShapeRadius";
tmpDef.description = "This function is used to set the radius of a colshape. Valid types are circle, sphere and tube.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape"," float radius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setColShapeSize";
tmpDef.description = "This function is used to set the size of a colshape. Valid types are rectangle, cuboid and tube.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape["," float width"," float depth"," float height]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "hasElementData";
tmpDef.description = "This function checks if an element has element data available under a certain key.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"," string key ["," bool inherit = true]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCommandHandlers";
tmpDef.description = "This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).";
tmpDef.returnType = "table";
tmpDef.args = ["[resource theResource]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedFightingStyle";
tmpDef.description = "Retrieves the fighting style a player/ped is currently using.";
tmpDef.returnType = "int";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedArmor";
tmpDef.description = "This function allows you to set the armor value of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float armor"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFightingStyle";
tmpDef.description = "Changes a ped's fighting style. Most styles only change the 'special attack' which is done using the Aim and Enter keys.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int style"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "usePickup";
tmpDef.description = "This function is used to simulate the player using a pickup";
tmpDef.returnType = "bool";
tmpDef.args = ["pickup thePickup"," player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerHudComponentVisible";
tmpDef.description = "This function will show or hide a part of the player's HUD.";
tmpDef.returnType = "bool";
tmpDef.args = ["player thePlayer", "string component", "bool show"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRemoteRequests";
tmpDef.description = "Gets all fetchRemote and callRemote requests currently running.";
tmpDef.returnType = "table";
tmpDef.args = ["[ resource theResource = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRemoteRequestInfo";
tmpDef.description = "Gets informations of an fetchRemote or callRemote request info.";
tmpDef.returnType = "table";
tmpDef.args = ["request theRequest["," int postDataLength = 0["," bool includeHeaders = false]]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "abortRemoteRequest";
tmpDef.description = "Aborts a fetchRemote or callRemote request.";
tmpDef.returnType = "bool";
tmpDef.args = ["request theRequest"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "deref";
tmpDef.description = "This function will take a reference and returns its Lua element.";
tmpDef.returnType = "mixed";
tmpDef.args = ["int reference"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isOOPEnabled";
tmpDef.description = "This function checks whether OOP (Object Oriented Programming) is enabled in the current resource or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "ref";
tmpDef.description = "This function will create a reference to the given argument.";
tmpDef.returnType = "int";
tmpDef.args = ["mixed objectToReference"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "tocolor";
tmpDef.description = "This function retrieves the hex number of a specified color, useful for the dx functions.";
tmpDef.returnType = "int";
tmpDef.args = ["int red", "int green", "int blue [", "int alpha = 255 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "xmlLoadString";
tmpDef.description = "This function creates an Xmlnode from a string input.";
tmpDef.returnType = "xmlnode";
tmpDef.args = ["string xmlString"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementMatrix";
tmpDef.description = "This function sets the matrix of an element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "table theMatrix"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resourceRoot";
tmpDef.description = "returns a resource root element of the resource the snippet was executed in";
tmpDef.returnType = "resource";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColPolygonPoints";
tmpDef.description = "This function is used to get all bound points in a colshape polygon.";
tmpDef.returnType = "table";
tmpDef.args = ["colshape shape"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColPolygonPointPosition";
tmpDef.description = "This function is used to get the position of a bound point in a colshape polygon.";
tmpDef.returnType = "Vector2";
tmpDef.args = ["colshape shape"," int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "removeColPolygonPoint";
tmpDef.description = "This function is used to remove a point from an existing colshape polygon.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape"," int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setColPolygonPointPosition";
tmpDef.description = "This function is used to set the position of a bound point in a colshape polygon.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape"," int index"," float fX"," float fY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

//1.5.8
tmpDef = new MTAFunction;
tmpDef.label = "setVehicleVariant";
tmpDef.description = "This function sets the variant of a specified vehicle. In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle [", "int variant1", "int variant2 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTransferBoxVisible";
tmpDef.description = "Determines if the transfer box should be visible.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setTransferBoxVisible";
tmpDef.description = "Determines whether or not the transferbox should appear to players.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setColPolygonHeight";
tmpDef.description = "This function is used to change height of an existing colshape polygon. By default, a colshape polygon is infinitely tall.";
tmpDef.returnType = "bool";
tmpDef.args = ["colshape shape"," float floor"," float ceil"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getColPolygonHeight";
tmpDef.description = "This function is used to get the height of an existing colshape polygon. By default, a colshape polygon is infinitely tall.";
tmpDef.returnType = "table";
tmpDef.args = ["colshape shape"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

let tmpModuleDef = new LuaClass("utf8", "");
tmpModuleDef.methods.push(new LuaMethod("title", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("width", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("remove", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("gmatch", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("match", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("next", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("escape", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("sub", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("insert", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("len", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("fold", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("gsub", "Returns a copy of the original input string with replaced matches from the pattern by the replacement value.", ["string input", "string pattern", "mixed replace", "[, int match_limit = utf8.len( input ) ]"], {["input"]: "A string character sequence",["pattern"]: "A string match pattern",["replace"]: "A string literal OR an integer value OR a function (see examples below) OR a table ({ match = replacement })",}, ""));
tmpModuleDef.methods.push(new LuaMethod("char", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("byte", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("charpos", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("find", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("ncasecmp", "", [], {}, ""));
tmpModuleDef.methods.push(new LuaMethod("reverse", "", [], {}, ""));
SharedModuleDefinitions.push(tmpModuleDef);