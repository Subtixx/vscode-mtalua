'use strict';

import {LuaFunction, ScriptSide} from "./defs";

export var SharedDefinitions = new Array<LuaFunction>();

var tmpDef = new LuaFunction;
tmpDef.label = "xmlLoadFile";
tmpDef.description = "This function provides an alternative way to load XML files to getResourceConfig.This function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.Print error if something wrong with xml.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeSetAttribute";
tmpDef.description = "This function is used to edit an attribute of a node in a configuration file.In a gamemode, we want a command to change the marker color in the configuration file and remove a deprecated attribute.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node", "string name", "string/float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerIcon";
tmpDef.description = "This function returns the icon name for a marker.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.ncasecmp";
tmpDef.description = "This example shows a simple comparsion of two different strings.This example shows how to greet a player, when he write 'hello' into the chat.";
tmpDef.returnType = "int";
tmpDef.args = [" string a", "string b "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.reverse";
tmpDef.description = "This example shows how to reverse a UTF-8 string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipIcon";
tmpDef.description = "This function sets the icon for an existing blip element.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getAircraftMaxHeight";
tmpDef.description = "This function gets the maximum height at which aircraft can fly without their engines turning off.This example returns the max aircraft height to a player if they use the command 'aircraftmaxheight'.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeGetValue";
tmpDef.description = "In this example a sample value is returned from a XML file. This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createVehicle";
tmpDef.description = "This example creates a vehicle five units to the right of a player when they type createvehicle and its name in the console:This script spawns a Rhino on top of one lucky individual.This example adds a /spveh command to spawn a car model in the provided coordinates. If any car created by this command gets blown up, it will respawn where it was created.This script spawns a Rhino on top of the local player.This is an example of how this function is executed in an OOP environment.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" int model", "float x", "float y", "float z [", "float rx", "float ry", "float rz", "string numberplate", "bool bDirection", "int variant1", "int variant2 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createBlip";
tmpDef.description = "This function creates a blip element, which is displayed as an icon on the client's radar.Example 1: This example creates a radar blip at a random player's position and makes it so that it is only visible to that player.";
tmpDef.returnType = "blip";
tmpDef.args = [" float x", "float y", "float z [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getAttachedElements";
tmpDef.description = "This function returns a table of all the elements attached to the specified element";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupAmount";
tmpDef.description = "This function retrieves the amount of health or armor given from a pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipColor";
tmpDef.description = "This function will tell you what color a blip is. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "int int int int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipSize";
tmpDef.description = "This function sets the size of a blip's icon.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int iconSize "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPlayerNametagColor";
tmpDef.description = "This allows you to change the RGB color mixture in the name tags of players.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int r", "int g", "int b "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipColor";
tmpDef.description = "This function will let you change the color of a blip. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int red", "int green", "int blue", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupWeapon";
tmpDef.description = "This function retrieves the weapon ID of a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipIcon";
tmpDef.description = "This function returns the icon a blip currently has.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addPedClothes";
tmpDef.description = "This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "string clothesTexture", "string clothesModel", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipOrdering";
tmpDef.description = "This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a lower value. The default value for all blips is 0.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createBlipAttachedTo";
tmpDef.description = "This function creates a blip that is attached to an element. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.This example creates a radar blip attached to a random player, visible to everyone. The blip will follow the player around as they move. This could be used for manhunt, to emphasise a random player.";
tmpDef.returnType = "blip";
tmpDef.args = [" element elementToAttachTo [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detachElements";
tmpDef.description = "This function detaches attached elements from one another.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ element theAttachToElement ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAlpha";
tmpDef.description = "This example outputs whether the player is invisible.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAttachedOffsets";
tmpDef.description = "This function returns the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "float, float, float, float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fadeCamera";
tmpDef.description = "When a player gets damaged, place a quick fade-to-red effect on his screen.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool fadeIn", "[ float timeToFade = 1.0", "int red = 0", "int green = 0", "int blue = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerName";
tmpDef.description = "This function returns a string containing the name of the specified player.This example outputs the local player name to the chatbox.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTypeIndexFromClothes";
tmpDef.description = "This function is used to get the clothes type and index from the texture and model.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "int int";
tmpDef.args = [" string clothesTexture", "string clothesModel "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getClothesByTypeIndex";
tmpDef.description = "This function is used to get the texture and model of clothes by the clothes type and index.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "string string";
tmpDef.args = [" int clothesType", "int clothesIndex "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipSize";
tmpDef.description = "This function gets the size of a blip.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBodyPartName";
tmpDef.description = "This function is used to get the name of a body part on a player.";
tmpDef.returnType = "string";
tmpDef.args = [" int bodyPartID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPlayerNametagText";
tmpDef.description = "This will change the text of a player's nickname in the world to something besides the nickname he chose. This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).This console command lets you change the name tag of lamers.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string text "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementID";
tmpDef.description = "This function sets the ID of an element to a string. This can be anything from an identifying number, to a name.You can only change the ID of an element clientside if that element has been created clientside as well.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isVoiceEnabled";
tmpDef.description = "Added to client side.This function allows you to make the server reveal whether or not voice is currently enabled.This example shows how to forbid use voice for muted (in chat) players";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipOrdering";
tmpDef.description = "This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or below other blips.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int ordering "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerWantedLevel";
tmpDef.description = "This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.This example finds which players in the server have a wanted level:This script output your wanted level when you type /wanted.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedClothes";
tmpDef.description = "This example prints the model and texture of the current clothing on the player who enters the \"clothes\" command. For example: \"clothes 3\" for the shoes.";
tmpDef.returnType = "string string";
tmpDef.args = [" ped thePed", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "playSoundFrontEnd";
tmpDef.description = "This example plays a sound when a player spawns.This example plays a sound when the player types the command '/sound'.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int sound "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getClothesTypeName";
tmpDef.description = "This function is used to get the name of a certain clothes type.";
tmpDef.returnType = "string";
tmpDef.args = [" int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColSphere";
tmpDef.description = "This function creates a collision sphere. This is a shape that has a position and a radius. See Wikipedia for a definition of a sphere.Example 1: This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColCircle";
tmpDef.description = "This function creates a collision circle. This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence. Events will be triggered when a player enters or leaves it.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float radius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColRectangle";
tmpDef.description = "This function creates a collision rectangle. This is a shape that has a position and a width and a depth. See Rectangle for a definition of a rectangle. XY marks on the south west corner of the colshape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fWidth", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isCursorShowing";
tmpDef.description = "This function is used to determine whether or not a player's cursor is showing.This serverside function toggles a player's cursor state.With little of tweaking this can also be used clientside";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "showCursor";
tmpDef.description = "This function is used to show or hide a player's cursor.This example shows the cursor for a player named \"Dave\", then outputs a message if it was shown successfully.This example shows the cursor all the time";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool show", "[ bool toggleControls = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removeEventHandler";
tmpDef.description = "This functions removes a handler function from an event, so that the function is not called anymore when the event is triggered. See event system for more information on how the event system works.This example shows how to toggle a message on/off a screen with a command.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element attachedTo", "function functionVar "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeGetAttribute";
tmpDef.description = "This function is used to return an attribute of a node in a configuration file.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode node", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlDestroyNode";
tmpDef.description = "This function destroys a XML node from the XML node tree.This example will add a command called '/delnode' and it will create an xml file called 'test.xml'.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "triggerEvent";
tmpDef.description = "This function will trigger a named event on a specific element in the element tree. See event system for more information on how the event system works.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element baseElement", "[ var argument1", "... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementDimension";
tmpDef.description = "This function allows you to retrieve the dimension of any element. The dimension determines what/who the element is visible to.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementAttachedOffsets";
tmpDef.description = "This function updates the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ float xPosOffset", "float yPosOffset", "float zPosOffset", "float xRotOffset", "float yRotOffset", "float zRotOffset ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementVelocity";
tmpDef.description = "This example adds a function which copies the speed of a random player to another random player. If there are less than 2 players it returns false.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float speedX", "float speedY", "float speedZ "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getEventHandlers";
tmpDef.description = "This function gets the attached functions from the event and attached element from current lua script.";
tmpDef.returnType = "table";
tmpDef.args = [" string eventName", "element attachedTo "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileExists";
tmpDef.description = "This functions checks whether a specified file exists inside a resource.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerTarget";
tmpDef.description = "This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers. For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing. You can set this target with setMarkerTarget.";
tmpDef.returnType = "float float float";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "cancellatentevent";
tmpDef.description = "Stops a latent event from completing";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerType";
tmpDef.description = "This function changes a marker's type. The type controls how the marker is displayed in the game. It's important that you use marker types that users are used to from the single player game. For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string markerType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColTube";
tmpDef.description = "This function creates a collision tube. This is a shape that has a position and a 2D (X/Y) radius and a height. See Cylinder for a definition of a tube. A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileClose";
tmpDef.description = "Closes a file handle obtained by fileCreate or fileOpen.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileDelete";
tmpDef.description = "Deletes the specified file.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementAttached";
tmpDef.description = "This functions checks whether or not an element is attached to another element.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "takePlayerMoney";
tmpDef.description = "This function subtracts money from a player's current money amount.This example takes money from a player when he types \"takecash number\" in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createObject";
tmpDef.description = "This example creates an object when the resource starts:This example creates an object near player who write createObject:";
tmpDef.returnType = "object";
tmpDef.args = [" int modelid", "float x", "float y", "float z", "[ float rx", "float ry", "float rz", "bool isLowLOD = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerTarget";
tmpDef.description = "This function sets the 'target' for a marker. Only the checkpoint and ring marker types can have a target.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float x", "float y", "float z "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileCopy";
tmpDef.description = "This example copies a file called 'test.txt' and called it 'test1.txt'.This example copies a file called 'test.txt' and called it 'test1.txt'.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath", "string copyToFilePath [", "bool overwrite = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getLatentEventHandles";
tmpDef.description = "";
tmpDef.returnType = "table";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "cancelEvent";
tmpDef.description = "This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the onPickupUse event. This example stops the player huntedPlayer from entering a vehicle:This example prevents any damage to a player clientside by making cancelEvent an event handler for the onClientPlayerDamage event.";
tmpDef.returnType = "bool";
tmpDef.args = [" [ bool cancel = true", "string reason = \"\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColCuboid";
tmpDef.description = "This function creates a collision cuboid. This is a shape that has a position, width, depth and height. See Wikipedia for a definition of a cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fWidth", "float fDepth", "float fHeight "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementType";
tmpDef.description = "This example destroys a haystack when a player targets it";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "attachElements";
tmpDef.description = "This function attaches one element to another, so that the first one follows the second whenever it moves. Example 1: This example attaches a marker to the player who steals the Mr. Whoopee:Example 3: This function adds a tank on top of a player (for extra defense), clientside. This means it will be invisible to other players.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element theAttachToElement", "[ float xPosOffset = 0", "float yPosOffset = 0", "float zPosOffset = 0", "float xRotOffset = 0", "float yRotOffset = 0", "float zRotOffset = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removePedClothes";
tmpDef.description = "This function is used to remove the current clothes of a certain type on a ped. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int clothesType", "[ string clothesTexture", "string clothesModel ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getlatenteventstatus";
tmpDef.description = "Gets the status of one queued latent event.The example starts a latent event and outputs the status of the transfer to the client console";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementInterior";
tmpDef.description = "In this example, if a player were to type /interior 1, they would be teleported into this interiorIn this example, if a player were to type /interior 1, they would be teleported into this interior";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int interior [", "float x", "float y", "float z] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChildren";
tmpDef.description = "This function is used to retrieve a list of the child elements of a given parent element. Note that it will only return direct children and not elements that are further down the element tree.";
tmpDef.returnType = "table";
tmpDef.args = [" element parent [", "string theType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createElement";
tmpDef.description = "This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world. A common use for this function is for creating custom elements, such as a Flag or a Base.";
tmpDef.returnType = "element";
tmpDef.args = [" string elementType", "[ string elementID = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTrainDirection";
tmpDef.description = "Gets the direction in which a train is driving (clockwise or counterclockwise).";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle train "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileCreate";
tmpDef.description = "Creates a new file in a directory of a resource. If there already exists a file with the specified name, it is overwritten with an empty file.";
tmpDef.returnType = "file";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementCallPropagationEnabled";
tmpDef.description = "This function enables/disables call propagation on a certain element. Look at the example for a practical application.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "destroyElement";
tmpDef.description = "This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc). Player elements cannot be destroyed using this function. A player can only be removed from the hierarchy when they quit or are kicked. The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.";
tmpDef.returnType = "bool";
tmpDef.args = [" element elementToDestroy "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getSlotFromWeapon";
tmpDef.description = "This function allows you to identify the weapon slot that a weapon belongs to.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponid "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getOriginalHandling";
tmpDef.description = "This example creates a new function called getVehicleOriginalProperty, which simulates the previous syntax of this function.";
tmpDef.returnType = "table";
tmpDef.args = [" int modelID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createWater";
tmpDef.description = "Example code for creating a water area to cover the entire San Andreas Map (flood the cities). Also, setWaterLevel is used to raise the existing rivers and lakes.This example creates water at the given coordinates and sets the height of the water level to 20 for when the client joins.This example fills the Easter Basin with water.";
tmpDef.returnType = "water";
tmpDef.args = [" int x1", "int y1", "float z1", "int x2", "int y2", "float z2", "int x3", "int y3", "float z3 [", "int x4", "int y4", "float z4 ] [", "bool bShallow = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createExplosion";
tmpDef.description = "Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.Example 1: This code will create an explosion at the player's position when they spawn.Example 1: This code will create an explosion for the local player when they spawn.";
tmpDef.returnType = "bool";
tmpDef.args = [" float x", "float y", "float z", "int theType [", "player creator = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementByID";
tmpDef.description = "This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.";
tmpDef.returnType = "element";
tmpDef.args = [" string id [", "int index = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementModel";
tmpDef.description = "This example destroys a haystack when a player targets it.This example prints out a message when a Shamal or AT-400 is entered by a player.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementCollisionsEnabled";
tmpDef.description = "This function indicates if a specific element is set to have collisions disabled. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementData";
tmpDef.description = "This function retrieves element data attached to an element under a certain key.";
tmpDef.returnType = "var";
tmpDef.args = [" element theElement", "string key [", "inherit = true] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setLowLODElement";
tmpDef.description = "This function assigns a low LOD element to an element. The low LOD element is displayed when its associated element is not fully visible. If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.This example shows how to create and link a normal and low LOD object:This example shows how to create and link a composite objectChanging the draw distance for a model has to be done on the client:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element lowLODElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addEvent";
tmpDef.description = "This function allows you to register a custom event. Custom events function exactly like the built-in events. See event system for more information on the event system.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName [", "bool allowRemoteTrigger = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAttachedTo";
tmpDef.description = "This example defines a console command that outputs the type of the element that the player is attached to.";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "wasEventCancelled";
tmpDef.description = "This function checks if the last completed event was cancelled. This is mainly useful for custom events created by scripts.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addEventHandler";
tmpDef.description = "This serverside example sends a message to everyone in the server when a player spawns.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element attachedTo", "function handlerFunction", "[ bool getPropagated = true", "string priority = \"normal\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementHealth";
tmpDef.description = "This example outputs the health of the player who enters the command 'showhealth', and their vehicle's health.";
tmpDef.returnType = "float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementData";
tmpDef.description = "This example allows a player to add a custom tag onto their nickname, and also reverts it back to normal if they wish.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string key", "var value [", "bool synchronize = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChild";
tmpDef.description = "This function returns one of the child elements of a given parent element. The child element is selected by its index (0 for the first child, 1 for the second and so on).";
tmpDef.returnType = "element";
tmpDef.args = [" element parent", "int index "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileFlush";
tmpDef.description = "Forces pending disk writes to be executed. fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk. Call this function if you need the data written right now without closing the file. This is useful for log files that might want to be read while the resource is still executing. fileFlush can be called after each log entry is written. Without this, the file may appear empty or outdated to the user.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerCount";
tmpDef.description = "Returns the number of markers that currently exist in the world.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerSize";
tmpDef.description = "This function returns a float containing the size of the specified marker.";
tmpDef.returnType = "float";
tmpDef.args = [" marker myMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerIcon";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "bindKey";
tmpDef.description = "This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This example will bind a player's 'F1' key and 'fire' control to 1 input function.This example will bind a player's 'F1' key and 'fire' control to 1 input function, clientside.This example says how cool is the MTA:SA is if players wants to move.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string key", "string keyState", "function handlerFunction", "[ var arguments", "... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedChoking";
tmpDef.description = "This function checks if the specified ped is choking (coughing) or not. This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can. This example checks if a random player is choking or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementParent";
tmpDef.description = "Consider the following map file:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementMatrix";
tmpDef.description = "-- create a Ped (0, 0, 5, 0) and put the player to 10 m of distance, front to front";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement [", "bool legacy = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementsWithinColShape";
tmpDef.description = "This function is used to retrieve a list of all elements in a colshape, of the specified type. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape";
tmpDef.returnType = "table";
tmpDef.args = [" colshape shape", "[ string elemType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedWalkingStyle";
tmpDef.description = "Sets the walking style of a ped. A walking style consists of a set of animations that are used for walking, running etc.Changes the walking style of the player to Drunkman when the resource is started";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int style "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementColShape";
tmpDef.description = "This example creates a marker inside Toreno's house and adds a command to check whether you are standing on it.";
tmpDef.returnType = "colshape";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerSize";
tmpDef.description = "This function sets the size of the specified marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerColor";
tmpDef.description = "This function returns the color and transparency for a marker element. Not all marker types support transparency.This example script fully heals players who hit a white marker, and kills players who hit a red one.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createMarker";
tmpDef.description = "This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.This example creates a marker next to the player when they type 'createmarker':";
tmpDef.returnType = "marker";
tmpDef.args = [" float x", "float y", "float z [", "string theType = \"checkpoint\"", "float size = 4.0", "int r = 0", "int g = 0", "int b = 255", "int a = 255", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "stopObject";
tmpDef.description = "This will allow you to stop an object that is currently moving.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theobject "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "unbindKey";
tmpDef.description = "Removes an existing key bind from the specified player.This function binds the player's F1 key to a function goMoo which outputs a chat message when pressed. The key is then unbound so that it can effectively only be used once per life.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string key", "string keyState", "string command "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "moveObject";
tmpDef.description = "This function will smoothly move an object from its current position to a specified rotation and position.Example 1: This example moves every object in the game up 100 units in ten seconds.Example 2: This example created a model (of a bed) near a player called someguy, if they exist in the game. It will then move the model towards the player over 3 seconds.Example 3: This example creates a ball moving (in front of CJ's house in Grove Street) using easing functions. Test command is \"/smove\" for instance \"/smove OutBounce\". This example is a serverside code but the same could be done clientside (adapting the command handler)Example 4: This example move a gate with easing.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theObject", "int time", "float targetx", "float targety", "float targetz", "[ float moverx", "float movery", "float moverz", "string strEasingType", "float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setObjectScale";
tmpDef.description = "This function changes the visible size of an object.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theObject", "float scale [", "float scaleY", "float scaleZ ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedAmmoInClip";
tmpDef.description = "This function returns an integer that contains the ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed [", "int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerType";
tmpDef.description = "This function returns a marker's type.This function creates a default marker at a given position and outputs its type.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createPed";
tmpDef.description = "Creates a Ped in the GTA world.This example creates an ped when the resource starts:This example creates a ped, and makes it damage proof:";
tmpDef.returnType = "ped";
tmpDef.args = [" int modelid", "float x", "float y", "float z [", "float rot = 0.0", "bool synced = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedAnimation";
tmpDef.description = "This example creates a ped, rotates him, and makes him walk:This example makes the player sit down and remain seated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string block=nil", "string anim=nil", "int time=-1", "bool loop=true", "bool updatePosition=true", "bool interruptable=true", "bool freezeLastFrame=true", "int blendTime=250] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDucked";
tmpDef.description = "This function checks if the specified ped is ducked (crouched) or not.This example checks if a random player is ducked or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamName";
tmpDef.description = "This function gets the team name of a team object.";
tmpDef.returnType = "string";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.escape";
tmpDef.description = "This example escapes two byte-string literals to UTF-8 format by using the utf8.escape function.";
tmpDef.returnType = "string";
tmpDef.args = [" string input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.byte";
tmpDef.description = "This example will print every codepoint in the input string to the server console.This example will print the codepoint of the first character (read: 'M') in the string literal.";
tmpDef.returnType = "int,...";
tmpDef.args = [" string input [", "int i=1", "int j=1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.charpos";
tmpDef.description = "This example takes the second codepoint character and shows the byte-string position and the codepoint character code.This example extracts the first character by calculating the character length with the UTF8 functions and the inbuilt Lua function string.sub, which processes byte strings.";
tmpDef.returnType = "int, int";
tmpDef.args = [" string input [[", "int charpos = 0 ]", "int offset = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.find";
tmpDef.description = "This example shows how to search for parts of a string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "string pattern [", "int startpos = 1", "boolean plain = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTrainSpeed";
tmpDef.description = "This example outputs how fast a player is going if they're in a train. The command is \"/speed\".";
tmpDef.returnType = "float";
tmpDef.args = [" vehicle train "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamFriendlyFire";
tmpDef.description = "This function tells you if friendly fire is turned on for the specified team.";
tmpDef.returnType = "bool";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamFromName";
tmpDef.description = "This function finds a team object by the team's name.";
tmpDef.returnType = "team";
tmpDef.args = [" string teamName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "base64decode";
tmpDef.description = "This function returns the decrypted data from base64 representation of the encrypted block";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "adddebughook";
tmpDef.description = "This function allows tracing of MTA functions and events. It should only be used when debugging scripts as it may degrade script performance.This example shows how to disable addDebugHook";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "outputDebugString";
tmpDef.description = "This script notifies when its resource has been loaded using a debug message:";
tmpDef.returnType = "bool";
tmpDef.args = [" string text", "[ int level=3", "int red=255", "int green=255", "int blue=255 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.gsub";
tmpDef.description = "This example shows how to remove color codes from a string and how to uppercase each single character in a string.This example uses a table to replace specific words in the input string by an other value.This example shows a simple bad word filter, which censors the word 'ugly' in the input string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "string pattern", "mixed replace [", "int match_limit = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "outputConsole";
tmpDef.description = "This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.";
tmpDef.returnType = "bool";
tmpDef.args = [" string text "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.char";
tmpDef.description = "This example separates an input string into single codepoints and then joins these back together, representing the original input string.This example takes three code points to generate the string \"MTA\".This example takes the first five code points from the input string and then joins them back together.";
tmpDef.returnType = "string";
tmpDef.args = [" [ int codepoints... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getCloudsEnabled";
tmpDef.description = "This function will tell you if clouds are enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponNameFromID";
tmpDef.description = "This function allows you to retrieve the name of a weapon from an ID. Note it also allows you to retrieve the name of other methods of death, such as Fall and Rammed.This example displays a death message in the format of \"* Killer killed dead (Weapon)\"";
tmpDef.returnType = "string";
tmpDef.args = [" int id "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "killPed";
tmpDef.description = "This function kills the specified ped.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "[ ped theKiller = nil", "int weapon=255", "int bodyPart=255", "bool stealth = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getObjectScale";
tmpDef.description = "This function returns the visible size of an object.This example adds a command get_scale which create object and prints out a scale of the object.";
tmpDef.returnType = "float";
tmpDef.args = [" object theObject "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPickupType";
tmpDef.description = "This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.";
tmpDef.returnType = "bool";
tmpDef.args = [" pickup thePickup", "int theType", "int amount/weapon/model", "[ int ammo ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removePedFromVehicle";
tmpDef.description = "This function removes a ped from a vehicle immediately. This works for drivers and passengers. Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPlayerNametagShowing";
tmpDef.description = "This function allows you to set whether a player's nametag visibility both clientside and serverside";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool showing "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "showChat";
tmpDef.description = "This function is used to show or hide the player's chat.This example toggle's the player's chat when they press the \"i\" key.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool show "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedAnimationProgress";
tmpDef.description = "Sets the current animation progress of a player or ped.This example creates a ped, apply animation to it, and \"freeze\" the animation at half of overall animation time.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string anim", "float progress] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createRadarArea";
tmpDef.description = "This function can be used to create custom radar areas on the radar.This example creates a radar area for the King of the hill script, and a colsquare. When the player enters the radar area it flashes, and stops flashing when a player leaves it.";
tmpDef.returnType = "radararea";
tmpDef.args = [" float startPosX", "float startPosY", "float sizeX", "float sizeY", "[ int r = 255", "int g = 0", "int b = 0", "int a = 255", "element visibleTo = getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedOccupiedVehicle";
tmpDef.description = "This function gets the vehicle that the ped is currently in or is trying to enter, if any.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedTotalAmmo";
tmpDef.description = "This function returns an integer that contains the total ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedStat";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int stat", "float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedContactElement";
tmpDef.description = "This function detects the element a ped is standing on. This can be a vehicle or an object.This clientside function outputs the name of the vehicle the specified player is standing on, or a message saying he isn't on one.";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementWithinMarker";
tmpDef.description = "This function is used to determine if an element is within a marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.sub";
tmpDef.description = "This example shows how to extract a substring from a UTF-8 string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input [", "int i = 1", "int j = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedOnFire";
tmpDef.description = "This function checks if the specified ped is on fire or not.This example checks if a random player is on fire, and if so gives him a fire extinguisher.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedSkin";
tmpDef.description = "";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addVehicleUpgrade";
tmpDef.description = "This function adds an upgrade to an existing vehicle, eg: nos, hyrdraulics.This serverside function allows the user to get an upgrade by typing a command:This client-side script gives vehicles a nitro upgrade whenever they pass through a certain collision shape:";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "int upgrade "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedClothes";
tmpDef.description = "This example prints the model and texture of the current clothing on the player who enters the \"clothes\" command. For example: \"clothes 3\" for the shoes.";
tmpDef.returnType = "string string";
tmpDef.args = [" ped thePed", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedWeapon";
tmpDef.description = "This function tells you which weapon type is in a certain weapon slot of a ped. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.insert";
tmpDef.description = "This example shows a command handler for '/insert [something]', which will concatenate the '[something]' after the 'hello ' string in 2 ways.";
tmpDef.returnType = "string";
tmpDef.args = [" string input [", "int insert_pos = utf8.len( input ) + 1 ]", "string substring "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerColor";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "int r", "int g", "int b", "int a "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fixVehicle";
tmpDef.description = "This function will set a vehicle's health to full and fix its damage model. If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedWeaponSlot";
tmpDef.description = "This function gets a ped's selected weapon slot.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "doesPedHaveJetPack";
tmpDef.description = "Checks whether or not a ped currently has a jetpack.Example 1: This examples adds a \"jetpack\" console command, which gives or removes a jetpack from the player.Example 2: This example provides a check to see if players have a jetpack when they enter a particular marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.len";
tmpDef.description = "This example calculates the length of the input of the command /length and shows it in the chatbox.";
tmpDef.returnType = "int";
tmpDef.args = [" string input [", "int i = 1", "int j = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedInVehicle";
tmpDef.description = "Checks whether or not a given ped is currently in a vehicle. This also returns true if they're trying to enter a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementInterior";
tmpDef.description = "This function allows you to retrieve the interior of any element. An interior is the current loaded place, 0 being outside.This example shows a player if he is outside or not, when he enters the command 'AmIOutside'.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementsByType";
tmpDef.description = "This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type \"flag\" (e.g. <flag />) in the .map file, the using \"flag\" as the type argument would find it.";
tmpDef.returnType = "table";
tmpDef.args = [" string theType", "[ element startat=getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChildrenCount";
tmpDef.description = "This function returns the number of children an element has. Note that only the direct children are counted and not elements that are further down the element tree.";
tmpDef.returnType = "int";
tmpDef.args = [" element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementRotation";
tmpDef.description = "Retrieve the rotation of elements.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement [", "string rotOrder = \"default\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementID";
tmpDef.description = "This function gets the ID of an element. This is the \"id\" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRootElement";
tmpDef.description = "This function returns the root node of the element tree, called root. This node contains every other element: all resource root elements, players and remote clients. It is never destroyed and cannot be destroyed using destroyElement.";
tmpDef.returnType = "element";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementCallPropagationEnabled";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponIDFromName";
tmpDef.description = "This function will obtain the ID of a particular weapon from its name.This example will give the player the weapon they specify 20 ammo whenever they type \"weapon name\" into the console.";
tmpDef.returnType = "int";
tmpDef.args = [" string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementPosition";
tmpDef.description = "The getElementPosition function allows you to retrieve the position coordinates of an element. This can be any real world element, including:";
tmpDef.returnType = "float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementFrozen";
tmpDef.description = "This example binds the \"p\" key to a function to freeze/unfreeze the player's current vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementInWater";
tmpDef.description = "This function checks whether an element is submerged in water.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedOnGround";
tmpDef.description = "This function is used to determine whether or not a ped is on the ground. This is for on-foot usage only.This example checks if the player who enters the 'amiflying' command is on the ground and outputs a message.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElement";
tmpDef.description = "This function checks if a value is an element or not.This serverside function kills a player when it's passed his name or his element.";
tmpDef.returnType = "bool";
tmpDef.args = [" var theValue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getValidPedModels";
tmpDef.description = "This function returns all valid ped models.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedOccupiedVehicleSeat";
tmpDef.description = "This function is now available client side.This function gets the seat that a specific ped is sitting in in a vehicle.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedTarget";
tmpDef.description = "This function is used to get the element a ped is currently targeting.This example blows up any vehicle a player targets (aims at).";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedStat";
tmpDef.description = "This function returns the value of the specified statistic of a specific ped.This example announces whether a player is fat upon spawn";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed", "int stat "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getLowLODElement";
tmpDef.description = "This function return the low LOD element that an element is associated with.This example is not done yet:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementVelocity";
tmpDef.description = "This example retrieves, calculates, and displays the speed of a random player.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementDoubleSided";
tmpDef.description = "This function checks whether an element is double-sided as set by setElementDoubleSided or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementWithinColShape";
tmpDef.description = "This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "colshape theShape "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementCollisionsEnabled";
tmpDef.description = "This function can disable or enable an element's collisions. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementLowLOD";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementAlpha";
tmpDef.description = "This example makes the player invisible.This example lets you toggle invisibility when you write /invis.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementPosition";
tmpDef.description = "This function sets the position of an element to the specified coordinates.This example adds a \"setpos\" command to console, which allows setting of a player's position.This example adds a \"setpos\" command to console, which allows setting of the local player's position.This example enables a player to type /warpto <playername> to warp to them. If the player being warped to is in a vehicle with a free passenger seat, it will warp into the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float x", "float y", "float z [", "bool warp = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementParent";
tmpDef.description = "This example sets the parent of each spawnpoint to a dummy element:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementHealth";
tmpDef.description = "This example adds a 'hpslap' console command that lets players \"slap\" others (doing 20 damage).This example setting health by a command.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float newHealth "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementRotation";
tmpDef.description = "Sets the rotation of elements according to the world (does not work with players that are on the ground).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float rotX", "float rotY", "float rotZ [", "string rotOrder = \"default\"", "bool conformPedRotation = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedHeadless";
tmpDef.description = "With this function, you can check if a ped has a head or not.Add a command to check whether the player is a zombie or notAdd a command to check whether a player is a zombie or not";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementDoubleSided";
tmpDef.description = "This example shows how to set the double-sidedness of an object in a map file.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enable "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementFrozen";
tmpDef.description = "This function freezes an element (stops it in its position and disables movement) or unfreezes it.This example binds the \"p\" key to a function to freeze/unfreeze the player's current vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool freezeStatus "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementModel";
tmpDef.description = "This will continually change an object model every 2.5 seconds at the location -1084.52, -1634.81, 76.36 (Truth's farm).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int model "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getJetpackMaxHeight";
tmpDef.description = "This function gets the maximum height at which your jetpack can fly without failing to go higher.This example returns the max jetpack height to a player if they use the command 'jetpackmaxheight'.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerTeam";
tmpDef.description = "This example finds the team a player is on, and then changes its name.";
tmpDef.returnType = "team";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeSetValue";
tmpDef.description = "In this example a sample value is inserted into a XML file.This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode", "string value [", "bool setCDATA = false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlSaveFile";
tmpDef.description = "This function saves a loaded XML file.This example allows a player to use the command 'createfile' to create an .xml file.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode rootNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPlayerMapForced";
tmpDef.description = "This function checks if the specified player's radar map has been forced on or not.This example forces a players radar map on for 10 seconds if it hasn't been already.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFarClipDistance";
tmpDef.description = "This function will tell you what is the current render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detonateSatchels";
tmpDef.description = "This function can be used to detonate a players satchels.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedHeadless";
tmpDef.description = "With this function, you can set if a ped has a head or not.This example enables a player to behead themselves, and give them their head back.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool headState "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "areTrafficLightsLocked";
tmpDef.description = "Gets whether the traffic lights are currently locked or not. If the lights are locked, it means they won't change unless you do setTrafficLightState.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.fold";
tmpDef.description = "This example shows how to convert a string to lowercase, which can be used to compare with other folded strings.";
tmpDef.returnType = "string|int utf8.lower ( string|int input )string|int";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayersInTeam";
tmpDef.description = "This function retrieves all the players of the specified team.Find and kill all the players in the specified team (for example 'killTeam Red').This example will show all players in a team when a player types the 'showTeam TeamName' command.";
tmpDef.returnType = "table";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.title";
tmpDef.description = "This example shows how to convert a string to uppercase.";
tmpDef.returnType = "string utf8.upper ( string|int input )string";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponProperty";
tmpDef.description = "This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getOriginalWeaponProperty";
tmpDef.description = "This function gets the original weapon property of the specified weapons specified weapon type.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerNametagColor";
tmpDef.description = "This function gets the current color of a player's name tag as RGB values. These are in the range 0-255.This console command will tell the player what his tag color is. The color is composed of a red, a green and a blue component, each ranging from 0-255.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "forcePlayerMap";
tmpDef.description = "This function is used to forcefully show a player's radar map.OOP Syntax Help! I don't understand this!OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool forceOn "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMinuteDuration";
tmpDef.description = "Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is 1000.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlUnloadFile";
tmpDef.description = "Unloads an XML document from memory.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detachTrailerFromVehicle";
tmpDef.description = "This function detaches an already attached trailer from a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle [", "vehicle theTrailer = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlCreateFile";
tmpDef.description = "This function creates a new XML document, which can later be saved to a file by using xmlSaveFile. This function will overwrite the file specified if it already exists.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath", "string rootNodeName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerPing";
tmpDef.description = "This function returns the ping of a specified player. The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.This example checks every players ping every 5 seconds and if it's over 500 they get kicked.This example checks the ping of every player entering the 'ping' command and warns him if it's over 100.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedOnFire";
tmpDef.description = "This function can be used to set a ped on fire or extinguish a fire on it.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool isOnFire "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerMoney";
tmpDef.description = "Returns the amount of money a player currently has.When a player types '/checkMoney' this example retrieves the player's money and outputs a message according to the value.";
tmpDef.returnType = "int/bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPlayerMoney";
tmpDef.description = "Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount [", "bool instant = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementDimension";
tmpDef.description = "In this example the player's dimension is set to ID 1 when they enter a vehicle, and set back to dimension 0 when they exit the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int dimension "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "warpPedIntoVehicle";
tmpDef.description = "This function is used to warp or force a ped into a vehicle. There are no animations involved when this happens.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "vehicle theVehicle", "[ int seat=0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "blowVehicle";
tmpDef.description = "This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.This example will blow up every vehicle in the game.This example will blow a player's vehicle when he enters the car, like a carbomb.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle vehicleToBlow", "[ bool explode=true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.title";
tmpDef.description = "This example shows how to convert a string to uppercase.";
tmpDef.returnType = "string utf8.upper ( string|int input )string";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedArmor";
tmpDef.description = "This function returns the current armor of the specified ped.This example defines a \"showarmor\" console command that shows the player that executes it how much armor he has.";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDead";
tmpDef.description = "This function checks if the specified ped is dead or not.This example allows a player to use the command 'amidead' to see if they are dead or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColCircle";
tmpDef.description = "This function creates a collision circle. This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence. Events will be triggered when a player enters or leaves it.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float radius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "attachTrailerToVehicle";
tmpDef.description = "This function attaches a trailer type vehicle to a trailer-towing-type vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "vehicle theTrailer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.width";
tmpDef.description = "This example shows the difference when ambi_is_double is set to false or true.";
tmpDef.returnType = "int";
tmpDef.args = [" string|int input [", "bool ambi_is_double = false", "int default_width = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setWindVelocity";
tmpDef.description = "This function changes the wind velocity. The wind shakes the vegetation and makes particles fly in a direction. The intensity and direction of the effect deppends of the wind velocity in each axis.This example shows how to make a simple /windVelocity command.";
tmpDef.returnType = "bool";
tmpDef.args = [" float velocityX", "float velocityY", "float velocityZ "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setSunColor";
tmpDef.description = "This function is used to set the color of the sun.";
tmpDef.returnType = "bool";
tmpDef.args = [" int aRed", "int aGreen", "int aBlue", "int bRed", "int bGreen", "int bBlue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getSunColor";
tmpDef.description = "This function is used to get the color of the sun.";
tmpDef.returnType = "int, int, int, int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFogDistance";
tmpDef.description = "This function will tell you what is the current fog render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetSunColor";
tmpDef.description = "This function is used to reset the color of the sun to its normal color.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setRainLevel";
tmpDef.description = "This function sets the rain level to any weather available in GTA. Use resetRainLevel to undo the changes.This example will make it rain when you enter a vehicle and stop it when you leave the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" float level "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getLowLODElement";
tmpDef.description = "This function return the low LOD element that an element is associated with.This example is not done yet:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColSphere";
tmpDef.description = "This function creates a collision sphere. This is a shape that has a position and a radius. See Wikipedia for a definition of a sphere.Example 1: This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isCursorShowing";
tmpDef.description = "This function is used to determine whether or not a player's cursor is showing.This serverside function toggles a player's cursor state.With little of tweaking this can also be used clientside";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setFogDistance";
tmpDef.description = "This example makes any weather very clear when the resource that contains it starts.";
tmpDef.returnType = "bool";
tmpDef.args = [" float distance "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColRectangle";
tmpDef.description = "This function creates a collision rectangle. This is a shape that has a position and a width and a depth. See Rectangle for a definition of a rectangle. XY marks on the south west corner of the colshape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fWidth", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementCallPropagationEnabled";
tmpDef.description = "This function enables/disables call propagation on a certain element. Look at the example for a practical application.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColTube";
tmpDef.description = "This function creates a collision tube. This is a shape that has a position and a 2D (X/Y) radius and a height. See Cylinder for a definition of a tube. A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fRadius", "float fHeight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createColCuboid";
tmpDef.description = "This function creates a collision cuboid. This is a shape that has a position, width, depth and height. See Wikipedia for a definition of a cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.This example displays a chat message when a player enters the colshape and allows the colshape to be created using a console function set_zone.";
tmpDef.returnType = "colshape";
tmpDef.args = [" float fX", "float fY", "float fZ", "float fWidth", "float fDepth", "float fHeight "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMoonSize";
tmpDef.description = "This function returns the moon size. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will tell the moon size to everyone when the resource is started.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlCopyFile";
tmpDef.description = "This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.The new file will not be saved to file system until xmlSaveFile() is called";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" xmlnode nodeToCopy", "string newFilePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.remove";
tmpDef.description = "This example shows how to remove substrings from strings.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "int start = 1 [", "int stop = -1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementVelocity";
tmpDef.description = "This example retrieves, calculates, and displays the speed of a random player.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElement";
tmpDef.description = "This function checks if a value is an element or not.This serverside function kills a player when it's passed his name or his element.";
tmpDef.returnType = "bool";
tmpDef.args = [" var theValue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementRotation";
tmpDef.description = "Sets the rotation of elements according to the world (does not work with players that are on the ground).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float rotX", "float rotY", "float rotZ [", "string rotOrder = \"default\"", "bool conformPedRotation = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementType";
tmpDef.description = "This example destroys a haystack when a player targets it";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getValidPedModels";
tmpDef.description = "This function returns all valid ped models.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementParent";
tmpDef.description = "Consider the following map file:";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedTarget";
tmpDef.description = "This function is used to get the element a ped is currently targeting.This example blows up any vehicle a player targets (aims at).";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedWalkingStyle";
tmpDef.description = "Returns the walking style ID of a ped. This ID determines the set of animations that is used for walking, running etc.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementsWithinColShape";
tmpDef.description = "This function is used to retrieve a list of all elements in a colshape, of the specified type. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape";
tmpDef.returnType = "table";
tmpDef.args = [" colshape shape", "[ string elemType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceFromName";
tmpDef.description = "This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.";
tmpDef.returnType = "call (";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerType";
tmpDef.description = "This function changes a marker's type. The type controls how the marker is displayed in the game. It's important that you use marker types that users are used to from the single player game. For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string markerType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "givePlayerMoney";
tmpDef.description = "This function adds money to a player's current money amount. To set absolute values, setPlayerMoney can be used.This example gives a player money when using \"givecash\" command.This example gives a player one thousand dollars, as a reward for killing another player.This example Creates money Money (dollar symbol) pickup and gives 30,000 dollars on Pick up hit.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementPosition";
tmpDef.description = "The getElementPosition function allows you to retrieve the position coordinates of an element. This can be any real world element, including:";
tmpDef.returnType = "float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPlayerBlurLevel";
tmpDef.description = "This example allows the player to set their blur level via a command";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int level "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getCameraMatrix";
tmpDef.description = "This function gets the position of the camera and the position of the point it is facing.";
tmpDef.returnType = "float float float float float float float float";
tmpDef.args = ["player thePlayer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementsByType";
tmpDef.description = "This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type \"flag\" (e.g. <flag />) in the .map file, the using \"flag\" as the type argument would find it.";
tmpDef.returnType = "table";
tmpDef.args = [" string theType", "[ element startat=getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerNametagText";
tmpDef.description = "This will allow you to retrieve the name tag a player is currently using.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupAmmo";
tmpDef.description = "This function retrieves the amount of ammo in a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "countPlayersInTeam";
tmpDef.description = "This function is for returning the number of players in the specified team.This example adds a command in the console to find out how many players are on your team.This example adds a command in the console to find out how many players are on your team, clientsideThis example balances a gamemode, to ensure equal number of players between the \"grove\" and \"ballas\" teams. This could be triggered when a player joins the server, or for all players currently in the server when the gamemode starts.";
tmpDef.returnType = "int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "showPlayerHudComponent";
tmpDef.description = "This example hides the ammo and weapon displays for players when they join.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string component", "bool show "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPlayerNametagShowing";
tmpDef.description = "This function will allow you to determine if a player's name tag is currently showing.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFogDistance";
tmpDef.description = "This function will tell you what is the current fog render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createPickup";
tmpDef.description = "This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon. This example creates a pickup after a player dies so that he drops his weapon.This example creates a custom pickup(money) after a player dies and sets it's value.";
tmpDef.returnType = "pickup";
tmpDef.args = [" float x", "float y", "float z", "int theType", "int amount/weapon/model", "[ int respawnTime = 30000", "int ammo = 50 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.gmatch";
tmpDef.description = "This example prints every word in the UTF-8 string";
tmpDef.returnType = "iterator";
tmpDef.args = [" string input", "string pattern "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getAircraftMaxVelocity";
tmpDef.description = "This function returns the maximum velocity at which aircrafts could fly. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will increase or decrease the max velocity by pressing numpad keys + or -.This example will tell the max velocity to everyone when the resource is started.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerFromName";
tmpDef.description = "This function returns a player element for the player with the name passed to the function.";
tmpDef.returnType = "player";
tmpDef.args = [" string playerName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.match";
tmpDef.description = "This example shows how to extract values from an input string by using a pattern to match the value parts.";
tmpDef.returnType = "string,...";
tmpDef.args = [" string input", "string pattern [", "int index = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.width";
tmpDef.description = "This example";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" string input", "int location [", "bool ambi_is_double = false", "int default_width = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.next";
tmpDef.description = "This example shows how to traverse a UTF-8 string the proper way without running into problems as in byte strings.";
tmpDef.returnType = "int, int";
tmpDef.args = [" string input [[", "int charpos = 0 ]", "int offset = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamColor";
tmpDef.description = "This example defines a console command that outputs the player's team name and colors if he is on a team.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createElement";
tmpDef.description = "This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world. A common use for this function is for creating custom elements, such as a Flag or a Base.";
tmpDef.returnType = "element";
tmpDef.args = [" string elementType", "[ string elementID = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.escape";
tmpDef.description = "This example escapes two byte-string literals to UTF-8 format by using the utf8.escape function.";
tmpDef.returnType = "string";
tmpDef.args = [" string input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getHeatHaze";
tmpDef.description = "This function will return the current heat haze effect settings.This example outputs current heat haze settings to the chat when player uses command 'get_haze'.";
tmpDef.returnType = "int, int, int, int, int, int, int, int, bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setWeatherBlended";
tmpDef.description = "This function will change the current weather to another in a smooth manner, over the period of 2 in-game hours (unlike setWeather, which sets a new weather instantly). To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weatherID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "areTrafficLightsLocked";
tmpDef.description = "Gets whether the traffic lights are currently locked or not. If the lights are locked, it means they won't change unless you do setTrafficLightState.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setGarageOpen";
tmpDef.description = "This function opens or closes the specified garage door in the world.This example opens a garage door when a player enters a collision shape near it, and closes it when they leave:";
tmpDef.returnType = "bool";
tmpDef.args = [" int garageID", "bool open "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createWater";
tmpDef.description = "Example code for creating a water area to cover the entire San Andreas Map (flood the cities). Also, setWaterLevel is used to raise the existing rivers and lakes.This example creates water at the given coordinates and sets the height of the water level to 20 for when the client joins.This example fills the Easter Basin with water.";
tmpDef.returnType = "water";
tmpDef.args = [" int x1", "int y1", "float z1", "int x2", "int y2", "float z2", "int x3", "int y3", "float z3 [", "int x4", "int y4", "float z4 ] [", "bool bShallow = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.fold";
tmpDef.description = "This example shows how to convert a string to lowercase, which can be used to compare with other folded strings.";
tmpDef.returnType = "string|int utf8.lower ( string|int input )string|int";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getGameSpeed";
tmpDef.description = "This example adds a 'gamespeed' console command that prints the game speed to the chatbox.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerBlurLevel";
tmpDef.description = "This example adds a command blurlevel with which you can check your current blur level.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupType";
tmpDef.description = "This function retrieves the type of a pickup, either a health, armour or weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementCollisionsEnabled";
tmpDef.description = "This function can disable or enable an element's collisions. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementInterior";
tmpDef.description = "In this example, if a player were to type /interior 1, they would be teleported into this interiorIn this example, if a player were to type /interior 1, they would be teleported into this interior";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int interior [", "float x", "float y", "float z] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementWithinColShape";
tmpDef.description = "This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "colshape theShape "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipColor";
tmpDef.description = "This function will tell you what color a blip is. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "int int int int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipIcon";
tmpDef.description = "This function returns the icon a blip currently has.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createBlipAttachedTo";
tmpDef.description = "This function creates a blip that is attached to an element. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.This example creates a radar blip attached to a random player, visible to everyone. The blip will follow the player around as they move. This could be used for manhunt, to emphasise a random player.";
tmpDef.returnType = "blip";
tmpDef.args = [" element elementToAttachTo [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getClothesByTypeIndex";
tmpDef.description = "This function is used to get the texture and model of clothes by the clothes type and index.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "string string";
tmpDef.args = [" int clothesType", "int clothesIndex "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipIcon";
tmpDef.description = "This function sets the icon for an existing blip element.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getCameraInterior";
tmpDef.description = "Returns the interior of the local camera (independent of the interior of the local player).";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBodyPartName";
tmpDef.description = "This function is used to get the name of a body part on a player.";
tmpDef.returnType = "string";
tmpDef.args = [" int bodyPartID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipSize";
tmpDef.description = "This function gets the size of a blip.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementFrozen";
tmpDef.description = "This function freezes an element (stops it in its position and disables movement) or unfreezes it.This example binds the \"p\" key to a function to freeze/unfreeze the player's current vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool freezeStatus "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementDimension";
tmpDef.description = "In this example the player's dimension is set to ID 1 when they enter a vehicle, and set back to dimension 0 when they exit the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int dimension "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detachElements";
tmpDef.description = "This function detaches attached elements from one another.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ element theAttachToElement ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementHealth";
tmpDef.description = "This example adds a 'hpslap' console command that lets players \"slap\" others (doing 20 damage).This example setting health by a command.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float newHealth "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRootElement";
tmpDef.description = "This function returns the root node of the element tree, called root. This node contains every other element: all resource root elements, players and remote clients. It is never destroyed and cannot be destroyed using destroyElement.";
tmpDef.returnType = "element";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setLowLODElement";
tmpDef.description = "This function assigns a low LOD element to an element. The low LOD element is displayed when its associated element is not fully visible. If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.This example shows how to create and link a normal and low LOD object:This example shows how to create and link a composite objectChanging the draw distance for a model has to be done on the client:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element lowLODElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileClose";
tmpDef.description = "Closes a file handle obtained by fileCreate or fileOpen.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementLowLOD";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addEventHandler";
tmpDef.description = "This serverside example sends a message to everyone in the server when a player spawns.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName", "element attachedTo", "function handlerFunction", "[ bool getPropagated = true", "string priority = \"normal\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addEvent";
tmpDef.description = "This function allows you to register a custom event. Custom events function exactly like the built-in events. See event system for more information on the event system.";
tmpDef.returnType = "bool";
tmpDef.args = [" string eventName [", "bool allowRemoteTrigger = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementInWater";
tmpDef.description = "This function checks whether an element is submerged in water.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedAmmoInClip";
tmpDef.description = "This function returns an integer that contains the ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed [", "int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedOnGround";
tmpDef.description = "This function is used to determine whether or not a ped is on the ground. This is for on-foot usage only.This example checks if the player who enters the 'amiflying' command is on the ground and outputs a message.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createObject";
tmpDef.description = "This example creates an object when the resource starts:This example creates an object near player who write createObject:";
tmpDef.returnType = "object";
tmpDef.args = [" int modelid", "float x", "float y", "float z", "[ float rx", "float ry", "float rz", "bool isLowLOD = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getClothesTypeName";
tmpDef.description = "This function is used to get the name of a certain clothes type.";
tmpDef.returnType = "string";
tmpDef.args = [" int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getControlState";
tmpDef.description = "This example starts a repeating check when a player spawns, if a player presses the fire key, they'll be killed.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string controlName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getkeyboundtofunction";
tmpDef.description = "getKeyBoundToFunction allows retrieval of the first key bound to a function./key command gives bounded key to our chat function";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedContactElement";
tmpDef.description = "This function detects the element a ped is standing on. This can be a vehicle or an object.This clientside function outputs the name of the vehicle the specified player is standing on, or a message saying he isn't on one.";
tmpDef.returnType = "element";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createExplosion";
tmpDef.description = "Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.Example 1: This code will create an explosion at the player's position when they spawn.Example 1: This code will create an explosion for the local player when they spawn.";
tmpDef.returnType = "bool";
tmpDef.args = [" float x", "float y", "float z", "int theType [", "player creator = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupAmmo";
tmpDef.description = "This function retrieves the amount of ammo in a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeather";
tmpDef.description = "This function returns the current Weather ID.";
tmpDef.returnType = "int, int";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setHeatHaze";
tmpDef.description = "This function changes the heat haze effect.";
tmpDef.returnType = "bool";
tmpDef.args = [" int intensity", "[ int randomShift = 0", "int speedMin = 12", "int speedMax = 18", "int scanSizeX = 75", "int scanSizeY = 80", "int renderSizeX = 80", "int renderSizeY = 85", "bool bShowInside = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.char";
tmpDef.description = "This example separates an input string into single codepoints and then joins these back together, representing the original input string.This example takes three code points to generate the string \"MTA\".This example takes the first five code points from the input string and then joins them back together.";
tmpDef.returnType = "string";
tmpDef.args = [" [ int codepoints... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedHeadless";
tmpDef.description = "With this function, you can check if a ped has a head or not.Add a command to check whether the player is a zombie or notAdd a command to check whether a player is a zombie or not";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipOrdering";
tmpDef.description = "This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or below other blips.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int ordering "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getBlipOrdering";
tmpDef.description = "This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a lower value. The default value for all blips is 0.";
tmpDef.returnType = "int";
tmpDef.args = [" blip theBlip "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileDelete";
tmpDef.description = "Deletes the specified file.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileExists";
tmpDef.description = "This functions checks whether a specified file exists inside a resource.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileCopy";
tmpDef.description = "This example copies a file called 'test.txt' and called it 'test1.txt'.This example copies a file called 'test.txt' and called it 'test1.txt'.";
tmpDef.returnType = "bool";
tmpDef.args = [" string filePath", "string copyToFilePath [", "bool overwrite = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeSetValue";
tmpDef.description = "In this example a sample value is inserted into a XML file.This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode", "string value [", "bool setCDATA = false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setCameraTarget";
tmpDef.description = "This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:This syntax mantains the player targeted by the camera, but makes the camera look at the specified coordinates. It has no effect when the camera doesn't have a target.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer [", "player target = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlCreateFile";
tmpDef.description = "This function creates a new XML document, which can later be saved to a file by using xmlSaveFile. This function will overwrite the file specified if it already exists.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath", "string rootNodeName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setCameraMatrix";
tmpDef.description = "This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it \"looks at\").";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "float positionX", "float positionY", "float positionZ [", "float lookAtX", "float lookAtY", "float lookAtZ", "float roll = 0", "float fov = 70 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipSize";
tmpDef.description = "This function sets the size of a blip's icon.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int iconSize "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "inspect";
tmpDef.description = "This example draws the contents of a table and its data type:";
tmpDef.returnType = "string";
tmpDef.args = [" mixed var [", "table options] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getCameraTarget";
tmpDef.description = "This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following). OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "element";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "bindKey";
tmpDef.description = "This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This alternative syntax allows you to bind a key with a command. This will also allow users to customize the control in their Settings menu. Use in conjunction with addCommandHandler to add handler functions to the keybind.This example will bind a player's 'F1' key and 'fire' control to 1 input function.This example will bind a player's 'F1' key and 'fire' control to 1 input function, clientside.This example says how cool is the MTA:SA is if players wants to move.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string key", "string keyState", "function handlerFunction", "[ var arguments", "... ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlSaveFile";
tmpDef.description = "This function saves a loaded XML file.This example allows a player to use the command 'createfile' to create an .xml file.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode rootNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createBlip";
tmpDef.description = "This function creates a blip element, which is displayed as an icon on the client's radar.Example 1: This example creates a radar blip at a random player's position and makes it so that it is only visible to that player.";
tmpDef.returnType = "blip";
tmpDef.args = [" float x", "float y", "float z [", "int icon = 0", "int size = 2", "int r = 255", "int g = 0", "int b = 0", "int a = 255", "int ordering = 0", "float visibleDistance = 99999.0", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFunctionsBoundToKey";
tmpDef.description = "This loops through all the keys and outputs the keyname and the function bound to that key.This loops through all the keys and outputs the keyname and the function bound to that key.";
tmpDef.returnType = "table";
tmpDef.args = [" player thePlayer ", "string theKey "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isControlEnabled";
tmpDef.description = "This example uses a command handler to allow a player to toggle whether he can use vehicle weapons by disabling or enabling the primary and secondary vehicle fire keys. The command handler is trigged with 'toggleweapons'";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string control "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlCopyFile";
tmpDef.description = "This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.The new file will not be saved to file system until xmlSaveFile() is called";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" xmlnode nodeToCopy", "string newFilePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setBlipColor";
tmpDef.description = "This function will let you change the color of a blip. This color is only applicable to the default blip icon (, or ). All other icons will ignore this.";
tmpDef.returnType = "bool";
tmpDef.args = [" blip theBlip", "int red", "int green", "int blue", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDucked";
tmpDef.description = "This function checks if the specified ped is ducked (crouched) or not.This example checks if a random player is ducked or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTypeIndexFromClothes";
tmpDef.description = "This function is used to get the clothes type and index from the texture and model.(Scans through the list of clothes for the specific type).";
tmpDef.returnType = "int int";
tmpDef.args = [" string clothesTexture", "string clothesModel "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "killPed";
tmpDef.description = "This function kills the specified ped.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "[ ped theKiller = nil", "int weapon=255", "int bodyPart=255", "bool stealth = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createVehicle";
tmpDef.description = "This example creates a vehicle five units to the right of a player when they type createvehicle and its name in the console:This script spawns a Rhino on top of one lucky individual.This example adds a /spveh command to spawn a car model in the provided coordinates. If any car created by this command gets blown up, it will respawn where it was created.This script spawns a Rhino on top of the local player.This is an example of how this function is executed in an OOP environment.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" int model", "float x", "float y", "float z [", "float rx", "float ry", "float rz", "string numberplate", "bool bDirection", "int variant1", "int variant2 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "playSoundFrontEnd";
tmpDef.description = "This example plays a sound when a player spawns.This example plays a sound when the player types the command '/sound'.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int sound "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.fold";
tmpDef.description = "This example shows how to convert a string to lowercase, which can be used to compare with other folded strings.";
tmpDef.returnType = "string|int utf8.lower ( string|int input )string|int";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setWeather";
tmpDef.description = "This function sets the current weather to the given valid value. To change the weather gradually, see setWeatherBlended.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weatherID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setGameSpeed";
tmpDef.description = "This function sets the game speed to the given value.";
tmpDef.returnType = "bool";
tmpDef.args = [" float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceExportedFunctions";
tmpDef.description = "Returns a table containing the names of the functions that a resource exports. It will return the exports of the current resource if there is no argument passed in.";
tmpDef.returnType = "table|false";
tmpDef.args = [" [ resource res ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setTrafficLightsLocked";
tmpDef.description = "Toggles whether you want the traffic lights to be locked. If the lights are locked, it means they won't change unless you do setTrafficLightState.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool toggle "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceFromName";
tmpDef.description = "This function is used to retrieve a resource from its name. A resource's name is the same as its folder or file archive name on the server (without the extension).This example prints out a message to the chatbox when a resource named playerblips is started.";
tmpDef.returnType = "resource";
tmpDef.args = [" string resourceName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getAircraftMaxVelocity";
tmpDef.description = "This function returns the maximum velocity at which aircrafts could fly. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will increase or decrease the max velocity by pressing numpad keys + or -.This example will tell the max velocity to everyone when the resource is started.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMoonSize";
tmpDef.description = "This function sets the moon size. Using this function server-side will overwrite the value that was previously set client-side.This example change moon size to looks more realistic for everyone when the resource is started.";
tmpDef.returnType = "bool";
tmpDef.args = [" int size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.ncasecmp";
tmpDef.description = "This example shows a simple comparsion of two different strings.This example shows how to greet a player, when he write 'hello' into the chat.";
tmpDef.returnType = "int";
tmpDef.args = [" string a", "string b "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.title";
tmpDef.description = "This example shows how to convert a string to uppercase.";
tmpDef.returnType = "string utf8.upper ( string|int input )string";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.insert";
tmpDef.description = "This example shows a command handler for '/insert [something]', which will concatenate the '[something]' after the 'hello ' string in 2 ways.";
tmpDef.returnType = "string";
tmpDef.args = [" string input [", "int insert_pos = utf8.len( input ) + 1 ]", "string substring "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.match";
tmpDef.description = "This example shows how to extract values from an input string by using a pattern to match the value parts.";
tmpDef.returnType = "string,...";
tmpDef.args = [" string input", "string pattern [", "int index = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.len";
tmpDef.description = "This example calculates the length of the input of the command /length and shows it in the chatbox.";
tmpDef.returnType = "int";
tmpDef.args = [" string input [", "int i = 1", "int j = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.gsub";
tmpDef.description = "This example shows how to remove color codes from a string and how to uppercase each single character in a string.This example uses a table to replace specific words in the input string by an other value.This example shows a simple bad word filter, which censors the word 'ugly' in the input string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "string pattern", "mixed replace [", "int match_limit = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setControlState";
tmpDef.description = "This example will disable the use of the accelerate, brake/reverse and handbrake keys, then force the accelerate on for any player who enters a vehicle. This example will disable the use of the accelerate, brake/reverse and handbrake keys, then force the accelerate on for any player who enters a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string control", "bool state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetWindVelocity";
tmpDef.description = "This function resets the wind velocity in San Andreas to its default state.This example returns the wind velocity to a player if they use the command 'resetwindvelocity'.This example returns the wind velocity for all players if they use the command 'resetwindvelocity'.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removeVehicleUpgrade";
tmpDef.description = "This script defines a 'nos' console command that adds a NOS upgrade to the vehicle that the player who executes the command is sitting in. It also adds a 'removenos' command which allows removal of a player's nos.This script defines a 'nos' console command that adds a NOS upgrade to the vehicle that the player who executes the command is sitting in. It also adds a 'removenos' command which allows removal of a player's nos. This example is clientside and may cause desync.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "int upgrade "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.sub";
tmpDef.description = "This example shows how to extract a substring from a UTF-8 string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input [", "int i = 1", "int j = utf8.len( input ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getNetworkUsageData";
tmpDef.description = "This function returns a table containing network usage information about inbound and outbound packets.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "toggleAllControls";
tmpDef.description = "Enables or disables the use of all GTA controls for a specified player.This function will disable the use of all controls in order to freeze a player, which will be used every time someone enters a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool enabled", "[ bool gtaControls = true", "bool mtaControls = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "iprint";
tmpDef.description = "This example prints some sample debug messages, assuming the server is running a typical freeroam/play environment:";
tmpDef.returnType = "bool";
tmpDef.args = [" mixed var1[", "mixed var2", "mixed var3...] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getDistanceBetweenPoints2D";
tmpDef.description = "This example gets the distance between two vehicles, stored in variables vehicle1 and vehicle2.";
tmpDef.returnType = "float";
tmpDef.args = [" float x1", "float y1", "float x2", "float y2 "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamColor";
tmpDef.description = "This example defines a console command that outputs the player's team name and colors if he is on a team.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMinuteDuration";
tmpDef.description = "Sets the real-world duration of an ingame minute. The GTA default is 1000.";
tmpDef.returnType = "bool";
tmpDef.args = [" int milliseconds "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerName";
tmpDef.description = "This function returns a string containing the name of the specified player.This example outputs the local player name to the chatbox.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "restoreWorldModel";
tmpDef.description = "This function allows restoring of world object,which was removed with RemoveWorldModel.";
tmpDef.returnType = "bool";
tmpDef.args = [" int modelID", "float radius", "float x", "float y", "float z [", "int iInterior = -1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removeWorldModel";
tmpDef.description = "This function is used to remove a world object.";
tmpDef.returnType = "bool";
tmpDef.args = [" int modelID", "float radius", "float x", "float y", "float z [", "int interior = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removePedClothes";
tmpDef.description = "This function is used to remove the current clothes of a certain type on a ped. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int clothesType", "[ string clothesTexture", "string clothesModel ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementHealth";
tmpDef.description = "This example outputs the health of the player who enters the command 'showhealth', and their vehicle's health.";
tmpDef.returnType = "float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetFogDistance";
tmpDef.description = "This function resets the fog render distance to its default state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementDoubleSided";
tmpDef.description = "This function checks whether an element is double-sided as set by setElementDoubleSided or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementAttached";
tmpDef.description = "This functions checks whether or not an element is attached to another element.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementID";
tmpDef.description = "This function sets the ID of an element to a string. This can be anything from an identifying number, to a name.You can only change the ID of an element clientside if that element has been created clientside as well.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerNametagColor";
tmpDef.description = "This function gets the current color of a player's name tag as RGB values. These are in the range 0-255.This console command will tell the player what his tag color is. The color is composed of a red, a green and a blue component, each ranging from 0-255.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFarClipDistance";
tmpDef.description = "This function will tell you what is the current render distance.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "toggleControl";
tmpDef.description = "Enables or disables the use of a GTA control for a specific player.This function will disable the use of the vehicle secondary-fire key for anyone in a Hydra, consequently removing the ability to fire rockets.This function will disable the use of the vehicle secondary-fire key for anyone in a Hydra, consequently removing the ability to fire rockets.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string control", "bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetFarClipDistance";
tmpDef.description = "This function resets the far clip distance to its default state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedAnimationProgress";
tmpDef.description = "Sets the current animation progress of a player or ped.This example creates a ped, apply animation to it, and \"freeze\" the animation at half of overall animation time.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string anim", "float progress] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedFrozen";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool frozen "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerTarget";
tmpDef.description = "This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers. For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing. You can set this target with setMarkerTarget.";
tmpDef.returnType = "float float float";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createMarker";
tmpDef.description = "This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.This example creates a marker next to the player when they type 'createmarker':";
tmpDef.returnType = "marker";
tmpDef.args = [" float x", "float y", "float z [", "string theType = \"checkpoint\"", "float size = 4.0", "int r = 0", "int g = 0", "int b = 255", "int a = 255", "visibleTo = getRootElement( ) ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setFarClipDistance";
tmpDef.description = "This example adjusts the visibility range of the game world.This example adjusts the visibility range of the game world.";
tmpDef.returnType = "bool";
tmpDef.args = [" float distance "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getDistanceBetweenPoints3D";
tmpDef.description = "";
tmpDef.returnType = "float";
tmpDef.args = [" float x1", "float y1", "float z1", "float x2", "float y2", "float z2 "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getColorFromString";
tmpDef.description = "This example will set the blip attached to a player to a color they specify by typing set_my_color [color] in the console.";
tmpDef.returnType = "int int int int";
tmpDef.args = [" string theColor "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileFlush";
tmpDef.description = "Forces pending disk writes to be executed. fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk. Call this function if you need the data written right now without closing the file. This is useful for log files that might want to be read while the resource is still executing. fileFlush can be called after each log entry is written. Without this, the file may appear empty or outdated to the user.";
tmpDef.returnType = "bool";
tmpDef.args = [" file theFile "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isGarageOpen";
tmpDef.description = "This function checks whether or not a specific garage door is open.This example opens a garage door when a player enters a collision shape near it, and closes it when they leave:";
tmpDef.returnType = "bool";
tmpDef.args = [" int garageID "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getAttachedElements";
tmpDef.description = "This function returns a table of all the elements attached to the specified element";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementInterior";
tmpDef.description = "This function allows you to retrieve the interior of any element. An interior is the current loaded place, 0 being outside.This example shows a player if he is outside or not, when he enters the command 'AmIOutside'.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getNetworkStats";
tmpDef.description = "This function returns network status information.This example outputs the local players network status information to their console when using the /netstatus command";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setTime";
tmpDef.description = "This function sets the current GTA time to the given time.This serverside function sets the time and notifies players.This example freeze the time.";
tmpDef.returnType = "bool";
tmpDef.args = [" int hour", "int minute "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRainLevel";
tmpDef.description = "This function is used to get the current rain level.Example: Sets the rain (So it can detect it) before returning it. (In this case, when resource starts.)Example: Sets the rain (So it can detect it) before returning it. (In this case, when resource starts.)";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAlpha";
tmpDef.description = "This example outputs whether the player is invisible.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "interpolateBetween";
tmpDef.description = "This clientside example uses interpolateBetween to create position and color interpolation(with effect) on a marker.The command to test it is \"/marker\".The position is interpolated with \"OutBounce\" as strEasingType to make the marker bounce off the ground and \"Linear\" interpolation for the color.This clientside example uses interpolateBetween to create size and position interpolation (with effect) on a gui-window.The command to test it is \"/window\".When the window pops up it uses \"OutElastic\" as the strEasingType to create the bouncing/elastic effect.When it fades away, it uses \"InQuad\" to have an accelerating fading.This clientside example uses interpolateBetween to create and position interpolation (with effect) on a camera.The command to test it is \"/ccam\".When the camera pops up it uses \"OutQuad\" as the strEasingType to create the slow down effect.";
tmpDef.returnType = "float float float";
tmpDef.args = [" float x1", "float y1", "float z1", "float x2", "float y2", "float z2", "float fProgress", "string strEasingType", "[ float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "destroyElement";
tmpDef.description = "This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc). Player elements cannot be destroyed using this function. A player can only be removed from the hierarchy when they quit or are kicked. The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.";
tmpDef.returnType = "bool";
tmpDef.args = [" element elementToDestroy "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerSize";
tmpDef.description = "This function returns a float containing the size of the specified marker.";
tmpDef.returnType = "float";
tmpDef.args = [" marker myMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "unbindKey";
tmpDef.description = "Removes an existing key bind from the specified player.This function binds the player's F1 key to a function goMoo which outputs a chat message when pressed. The key is then unbound so that it can effectively only be used once per life.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "string key", "string keyState", "string command "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setSunSize";
tmpDef.description = "This function is used to set the size of the sun.";
tmpDef.returnType = "bool";
tmpDef.args = [" int Size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerColor";
tmpDef.description = "This function returns the color and transparency for a marker element. Not all marker types support transparency.This example script fully heals players who hit a white marker, and kills players who hit a red one.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerIcon";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "string icon "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDoingGangDriveby";
tmpDef.description = "This example turns on driveby mode when the local player types driveby in the console.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedStat";
tmpDef.description = "This function returns the value of the specified statistic of a specific ped.This example announces whether a player is fat upon spawn";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed", "int stat "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerSize";
tmpDef.description = "This function sets the size of the specified marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float size "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementByID";
tmpDef.description = "This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.";
tmpDef.returnType = "element";
tmpDef.args = [" string id [", "int index = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPerformanceStats";
tmpDef.description = "This function returns performance information.";
tmpDef.returnType = "table table";
tmpDef.args = [" string category [", "string options = \"\"", "string filter = \"\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementCollisionsEnabled";
tmpDef.description = "This function indicates if a specific element is set to have collisions disabled. An element without collisions does not interact with the physical environment and remains static.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fadeCamera";
tmpDef.description = "When a player gets damaged, place a quick fade-to-red effect on his screen.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool fadeIn", "[ float timeToFade = 1.0", "int red = 0", "int green = 0", "int blue = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "geteasingvalue";
tmpDef.description = "This clientside example uses getEasingValue to make a custom camera fade.The command to test it is \"/fade\".The fading out is done with \"InQuad\" to have a slow fading which then accelerates and \"OutQuad\" is used for fading in to have a smooth end of the fading.In this example interpolateBetween could have been used directly to interpolate the alpha between 0 and 255 and then 255 and 0 but is example is just to illustrate the use of getEasingValue by itself.";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setCameraInterior";
tmpDef.description = "Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in. This example make a command to change your cam interior to a selected one. This example make a command to change your cam interior to a selected one.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int interior "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTime";
tmpDef.description = "This function is used to get the current time in the game. If you want to get the real server time, use getRealTime.";
tmpDef.returnType = "int int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setSkyGradient";
tmpDef.description = "This function changes the sky color to a two-color gradient.";
tmpDef.returnType = "bool";
tmpDef.args = [" [ int topRed = 0", "int topGreen = 0", "int topBlue = 0", "int bottomRed = 0", "int bottomGreen = 0", "int bottomBlue = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTimerDetails";
tmpDef.description = "This function is for getting the details of a running timer.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" timer theTimer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getrealtime";
tmpDef.description = "This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's clock) use getTime.";
tmpDef.returnType = "????";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTickCount";
tmpDef.description = "This function returns amount of time that your system has been running in milliseconds. By comparing two values of getTickCount, you can determine how much time has passed (in milliseconds) between two events. This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerCount";
tmpDef.description = "Returns the number of markers that currently exist in the world.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setTrafficLightState";
tmpDef.description = "Sets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.";
tmpDef.returnType = "bool";
tmpDef.args = [" int state "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerIcon";
tmpDef.description = "This function returns the icon name for a marker.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementWithinMarker";
tmpDef.description = "This function is used to determine if an element is within a marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fileCreate";
tmpDef.description = "Creates a new file in a directory of a resource. If there already exists a file with the specified name, it is overwritten with an empty file.";
tmpDef.returnType = "file";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getGravity";
tmpDef.description = "This function returns the current gravity level for the context in which it is called (server or client).This serverside command outputs the serverside gravity level.";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChild";
tmpDef.description = "This function returns one of the child elements of a given parent element. The child element is selected by its index (0 for the first child, 1 for the second and so on).";
tmpDef.returnType = "element";
tmpDef.args = [" element parent", "int index "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAttachedOffsets";
tmpDef.description = "This function returns the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "float, float, float, float, float, float";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementRotation";
tmpDef.description = "Retrieve the rotation of elements.";
tmpDef.returnType = "float float float";
tmpDef.args = [" element theElement [", "string rotOrder = \"default\" ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementData";
tmpDef.description = "This function retrieves element data attached to an element under a certain key.";
tmpDef.returnType = "var";
tmpDef.args = [" element theElement", "string key [", "inherit = true] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementAttachedTo";
tmpDef.description = "This example defines a console command that outputs the type of the element that the player is attached to.";
tmpDef.returnType = "element";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "stopObject";
tmpDef.description = "This will allow you to stop an object that is currently moving.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theobject "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementColShape";
tmpDef.description = "This example creates a marker inside Toreno's house and adds a command to check whether you are standing on it.";
tmpDef.returnType = "colshape";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementPosition";
tmpDef.description = "This function sets the position of an element to the specified coordinates.This example adds a \"setpos\" command to console, which allows setting of a player's position.This example adds a \"setpos\" command to console, which allows setting of the local player's position.This example enables a player to type /warpto <playername> to warp to them. If the player being warped to is in a vehicle with a free passenger seat, it will warp into the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float x", "float y", "float z [", "bool warp = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setInteriorSoundsEnabled";
tmpDef.description = "This example disables the dancing club ambient music, without disabling other interiors' ambient sounds.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChildrenCount";
tmpDef.description = "This function returns the number of children an element has. Note that only the direct children are counted and not elements that are further down the element tree.";
tmpDef.returnType = "int";
tmpDef.args = [" element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.width";
tmpDef.description = "This example";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" string input", "int location [", "bool ambi_is_double = false", "int default_width = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMarkerType";
tmpDef.description = "This function returns a marker's type.This function creates a default marker at a given position and outputs its type.";
tmpDef.returnType = "string";
tmpDef.args = [" marker theMarker "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addPedClothes";
tmpDef.description = "This example adds a 'moto' helmet to a player when he gets on a nrg bike, and removes it when he gets off.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "string clothesTexture", "string clothesModel", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getZoneName";
tmpDef.description = "This function allows you to retrieve the zone name of a certain location.Example 1: This example shows you how to return a zone name by doing /loc x y z in the chatbox or just loc x y z in console ( replace x, y and z with the co-ords you wanna check, eg /loc 1200 523 12.3 )";
tmpDef.returnType = "string";
tmpDef.args = [" float x", "float y", "float z", "[bool citiesonly=false] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addVehicleUpgrade";
tmpDef.description = "This function adds an upgrade to an existing vehicle, eg: nos, hyrdraulics.This serverside function allows the user to get an upgrade by typing a command:This client-side script gives vehicles a nitro upgrade whenever they pass through a certain collision shape:";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "int upgrade "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerTarget";
tmpDef.description = "This function sets the 'target' for a marker. Only the checkpoint and ring marker types can have a target.";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "float x", "float y", "float z "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detachTrailerFromVehicle";
tmpDef.description = "This function detaches an already attached trailer from a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle [", "vehicle theTrailer = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetRainLevel";
tmpDef.description = "This function resets the rain level of the current weather to its default.This example will make it rain when you enter a vehicle and stop it when you leave the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createPed";
tmpDef.description = "Creates a Ped in the GTA world.This example creates an ped when the resource starts:This example creates a ped, and makes it damage proof:";
tmpDef.returnType = "ped";
tmpDef.args = [" int modelid", "float x", "float y", "float z [", "float rot = 0.0", "bool synced = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementMatrix";
tmpDef.description = "-- create a Ped (0, 0, 5, 0) and put the player to 10 m of distance, front to front";
tmpDef.returnType = "table";
tmpDef.args = [" element theElement [", "bool legacy = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getSunSize";
tmpDef.description = "This function is used to get the size of the sun.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "moveObject";
tmpDef.description = "This function will smoothly move an object from its current position to a specified rotation and position.Example 1: This example moves every object in the game up 100 units in ten seconds.Example 2: This example created a model (of a bed) near a player called someguy, if they exist in the game. It will then move the model towards the player over 3 seconds.Example 3: This example creates a ball moving (in front of CJ's house in Grove Street) using easing functions. Test command is \"/smove\" for instance \"/smove OutBounce\". This example is a serverside code but the same could be done clientside (adapting the command handler)Example 4: This example move a gate with easing.";
tmpDef.returnType = "bool";
tmpDef.args = [" object theObject", "int time", "float targetx", "float targety", "float targetz", "[ float moverx", "float movery", "float moverz", "string strEasingType", "float fEasingPeriod", "float fEasingAmplitude", "float fEasingOvershoot ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedInWater";
tmpDef.description = "This example shows all players that are in water in a list to the player who enters the 'playersInWater' command.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "base64Encode";
tmpDef.description = "This function returns the base64 representation of the encoded block of data";
tmpDef.returnType = "string";
tmpDef.args = [" string data "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayersInTeam";
tmpDef.description = "This function retrieves all the players of the specified team.Find and kill all the players in the specified team (for example 'killTeam Red').This example will show all players in a team when a player types the 'showTeam TeamName' command.";
tmpDef.returnType = "table";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.gmatch";
tmpDef.description = "This example prints every word in the UTF-8 string";
tmpDef.returnType = "iterator";
tmpDef.args = [" string input", "string pattern "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceRootElement";
tmpDef.description = "This example retrieves the current resource's root element and attaches it to an onResourceStart event handler. This causes the event handler to get called only when the current resource is started rather than when any resource is started, thereby reducing unnecessary overhead.";
tmpDef.returnType = "element";
tmpDef.args = [" [resource theResource=getThisResource()] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.remove";
tmpDef.description = "This example shows how to remove substrings from strings.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "int start = 1 [", "int stop = -1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setMarkerColor";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" marker theMarker", "int r", "int g", "int b", "int a "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.fold";
tmpDef.description = "This example shows how to convert a string to lowercase, which can be used to compare with other folded strings.";
tmpDef.returnType = "string|int utf8.lower ( string|int input )string|int";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.byte";
tmpDef.description = "This example will print every codepoint in the input string to the server console.This example will print the codepoint of the first character (read: 'M') in the string literal.";
tmpDef.returnType = "int,...";
tmpDef.args = [" string input [", "int i=1", "int j=1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupWeapon";
tmpDef.description = "This function retrieves the weapon ID of a weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlUnloadFile";
tmpDef.description = "Unloads an XML document from memory.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetSunSize";
tmpDef.description = "This function is used to reset the size of the sun to its normal size.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setRadarAreaColor";
tmpDef.description = "Sets the color of an existing radar area.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadarArea", "int r", "int g", "int b", "int a "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setRadarAreaFlashing";
tmpDef.description = "This function makes an existing radar area flash in transparency.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadarArea", "bool flash "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRadarAreaSize";
tmpDef.description = "This function is used for getting the X and Y size of an existing radar area.";
tmpDef.returnType = "float, float";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createRadarArea";
tmpDef.description = "This function can be used to create custom radar areas on the radar.This example creates a radar area for the King of the hill script, and a colsquare. When the player enters the radar area it flashes, and stops flashing when a player leaves it.";
tmpDef.returnType = "radararea";
tmpDef.args = [" float startPosX", "float startPosY", "float sizeX", "float sizeY", "[ int r = 255", "int g = 0", "int b = 0", "int a = 255", "element visibleTo = getRootElement() ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerNametagText";
tmpDef.description = "This will allow you to retrieve the name tag a player is currently using.";
tmpDef.returnType = "string";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPickupType";
tmpDef.description = "This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.";
tmpDef.returnType = "bool";
tmpDef.args = [" pickup thePickup", "int theType", "int amount/weapon/model", "[ int ammo ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementDimension";
tmpDef.description = "This function allows you to retrieve the dimension of any element. The dimension determines what/who the element is visible to.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "forcePlayerMap";
tmpDef.description = "This function is used to forcefully show a player's radar map.OOP Syntax Help! I don't understand this!OOP Syntax Help! I don't understand this!";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "bool forceOn "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getVersion";
tmpDef.description = "This function gives you various version information about MTA and the operating system.";
tmpDef.returnType = "table";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getFPSLimit";
tmpDef.description = "This function retrieves the maximum FPS (Frames per second) that players on the server can run their game at.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerBlurLevel";
tmpDef.description = "This example adds a command blurlevel with which you can check your current blur level.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerTeam";
tmpDef.description = "This example finds the team a player is on, and then changes its name.";
tmpDef.returnType = "team";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedOnFire";
tmpDef.description = "This function checks if the specified ped is on fire or not.This example checks if a random player is on fire, and if so gives him a fire extinguisher.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPlayerMapForced";
tmpDef.description = "This function checks if the specified player's radar map has been forced on or not.This example forces a players radar map on for 10 seconds if it hasn't been already.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceFromName";
tmpDef.description = "This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.This extract shows adding of a \"kills\" column to the scoreboard resource. This then sets the gameShowKills variable to true, telling the rest of the script to start outputting kills.";
tmpDef.returnType = "call (";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isVoiceEnabled";
tmpDef.description = "Added to client side.This function allows you to make the server reveal whether or not voice is currently enabled.This example shows how to forbid use voice for muted (in chat) players";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fromJSON";
tmpDef.description = "This function is available client-side in 1.2 and onwards.";
tmpDef.returnType = "var";
tmpDef.args = [" string json "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isRadarAreaFlashing";
tmpDef.description = "This function allows detection of whether a radar area is flashing or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedOccupiedVehicleSeat";
tmpDef.description = "This function is now available client side.This function gets the seat that a specific ped is sitting in in a vehicle.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedAnimation";
tmpDef.description = "This example creates a ped, rotates him, and makes him walk:This example makes the player sit down and remain seated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed [", "string block=nil", "string anim=nil", "int time=-1", "bool loop=true", "bool updatePosition=true", "bool interruptable=true", "bool freezeLastFrame=true", "int blendTime=250] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "detonateSatchels";
tmpDef.description = "This function can be used to detonate a players satchels.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerFromName";
tmpDef.description = "This function returns a player element for the player with the name passed to the function.";
tmpDef.returnType = "player";
tmpDef.args = [" string playerName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedOccupiedVehicle";
tmpDef.description = "This function gets the vehicle that the ped is currently in or is trying to enter, if any.";
tmpDef.returnType = "vehicle";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerMoney";
tmpDef.description = "Returns the amount of money a player currently has.When a player types '/checkMoney' this example retrieves the player's money and outputs a message according to the value.";
tmpDef.returnType = "int/bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setRadarAreaSize";
tmpDef.description = "This function changes the size of an existing radar area.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theRadararea", "float x", "float y "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getOriginalWeaponProperty";
tmpDef.description = "This function gets the original weapon property of the specified weapons specified weapon type.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedChoking";
tmpDef.description = "This function checks if the specified ped is choking (coughing) or not. This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can. This example checks if a random player is choking or not, and if so displays a message in the chat box.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementData";
tmpDef.description = "This example allows a player to add a custom tag onto their nickname, and also reverts it back to normal if they wish.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "string key", "var value [", "bool synchronize = true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedWeaponSlot";
tmpDef.description = "This function changes the selected weapon slot of a ped.This example allows the player to type the command 'giveweapons', which gives the player a weapon for every slot. Instead of equipping the last given weapon, the script randomly decides which weapon to equip after all the weapons are given.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int weaponSlot "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerPing";
tmpDef.description = "This function returns the ping of a specified player. The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.This example checks every players ping every 5 seconds and if it's over 500 they get kicked.This example checks the ping of every player entering the 'ping' command and warns him if it's over 100.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "removePedFromVehicle";
tmpDef.description = "This function removes a ped from a vehicle immediately. This works for drivers and passengers. Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fixVehicle";
tmpDef.description = "This function will set a vehicle's health to full and fix its damage model. If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.charpos";
tmpDef.description = "This example takes the second codepoint character and shows the byte-string position and the codepoint character code.This example extracts the first character by calculating the character length with the UTF8 functions and the inbuilt Lua function string.sub, which processes byte strings.";
tmpDef.returnType = "int, int";
tmpDef.args = [" string input [[", "int charpos = 0 ]", "int offset = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.find";
tmpDef.description = "This example shows how to search for parts of a string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input", "string pattern [", "int startpos = 1", "boolean plain = false ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTimers";
tmpDef.description = "This function returns a table of all active timers that the resource that calls it has created. Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.";
tmpDef.returnType = "table";
tmpDef.args = [" [ theTime = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getOcclusionsEnabled";
tmpDef.description = "This function is used to get \"occlusions enabled\" state.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupAmount";
tmpDef.description = "This function retrieves the amount of health or armor given from a pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceName";
tmpDef.description = "This simple example outputs a message in the console whenever a resource starts, stating the name of the resource.";
tmpDef.returnType = "string";
tmpDef.args = [" resource res "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedHeadless";
tmpDef.description = "With this function, you can set if a ped has a head or not.This example enables a player to behead themselves, and give them their head back.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool headState "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRadarAreaColor";
tmpDef.description = "This function can be used to retrieve the current color of a radar area.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [" radararea theRadararea "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementFrozen";
tmpDef.description = "This example binds the \"p\" key to a function to freeze/unfreeze the player's current vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedTotalAmmo";
tmpDef.description = "This function returns an integer that contains the total ammo in a specified ped's weapon. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "gettok";
tmpDef.description = "This function splits a string using the given separating character and returns one specified substring.This example retrieves the startskin and endskin for spawning a player from a string of two numbers \"a,b\"";
tmpDef.returnType = "string";
tmpDef.args = [" string text", "int tokenNumber", "string / int separatingCharacter "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerWantedLevel";
tmpDef.description = "This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.This example finds which players in the server have a wanted level:This script output your wanted level when you type /wanted.";
tmpDef.returnType = "int";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "createPickup";
tmpDef.description = "This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon. This example creates a pickup after a player dies so that he drops his weapon.This example creates a custom pickup(money) after a player dies and sets it's value.";
tmpDef.returnType = "pickup";
tmpDef.args = [" float x", "float y", "float z", "int theType", "int amount/weapon/model", "[ int respawnTime = 30000", "int ammo = 50 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWindVelocity";
tmpDef.description = "This function gets the wind velocity in San Andreas.";
tmpDef.returnType = "int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementAlpha";
tmpDef.description = "This example makes the player invisible.This example lets you toggle invisibility when you write /invis.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int alpha "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedOnFire";
tmpDef.description = "This function can be used to set a ped on fire or extinguish a fire on it.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "bool isOnFire "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPlayerNametagShowing";
tmpDef.description = "This function will allow you to determine if a player's name tag is currently showing.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getHeatHaze";
tmpDef.description = "This function will return the current heat haze effect settings.This example outputs current heat haze settings to the chat when player uses command 'get_haze'.";
tmpDef.returnType = "int, int, int, int, int, int, int, int, bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementChildren";
tmpDef.description = "This function is used to retrieve a list of the child elements of a given parent element. Note that it will only return direct children and not elements that are further down the element tree.";
tmpDef.returnType = "table";
tmpDef.args = [" element parent [", "string theType = nil ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isInsideRadarArea";
tmpDef.description = "This function checks if a 2D position is inside a radar area or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" radararea theArea", "float posX", "float posY "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceState";
tmpDef.description = "This function returns the state of a given resource";
tmpDef.returnType = "string";
tmpDef.args = [" resource theResource "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "countPlayersInTeam";
tmpDef.description = "This function is for returning the number of players in the specified team.This example adds a command in the console to find out how many players are on your team.This example adds a command in the console to find out how many players are on your team, clientsideThis example balances a gamemode, to ensure equal number of players between the \"grove\" and \"ballas\" teams. This could be triggered when a player joins the server, or for all players currently in the server when the gamemode starts.";
tmpDef.returnType = "int";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "givePlayerMoney";
tmpDef.description = "This function adds money to a player's current money amount. To set absolute values, setPlayerMoney can be used.This example gives a player money when using \"givecash\" command.This example gives a player one thousand dollars, as a reward for killing another player.This example Creates money Money (dollar symbol) pickup and gives 30,000 dollars on Pick up hit.";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int amount "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlDestroyNode";
tmpDef.description = "This function destroys a XML node from the XML node tree.This example will add a command called '/delnode' and it will create an xml file called 'test.xml'.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeGetAttribute";
tmpDef.description = "This function is used to return an attribute of a node in a configuration file.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode node", "string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedStat";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int stat", "float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isElementCallPropagationEnabled";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeGetValue";
tmpDef.description = "In this example a sample value is returned from a XML file. This shows an example of a clientside XML file. You can use this to store user preferences and load them the next time the script loads. Almost always, you should have an options GUI for clients to interact with to set these values. Since the XML will change, it should NOT be included in the resource's meta.xml file. MTA will think that file is corrupted and will download it again from the server. Instead, you should create the XML within the script, and then load it within the script on future script runs if it exists.";
tmpDef.returnType = "string";
tmpDef.args = [" xmlnode theXMLNode "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getSlotFromWeapon";
tmpDef.description = "This function allows you to identify the weapon slot that a weapon belongs to.";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponid "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlLoadFile";
tmpDef.description = "This function provides an alternative way to load XML files to getResourceConfig.This function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.Print error if something wrong with xml.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "restoreAllWorldModels";
tmpDef.description = "This function allows restoring of all world objects,which were removed with RemoveWorldModel.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementModel";
tmpDef.description = "This example destroys a haystack when a player targets it.This example prints out a message when a Shamal or AT-400 is entered by a player.";
tmpDef.returnType = "int";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementParent";
tmpDef.description = "This example sets the parent of each spawnpoint to a dummy element:";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element parent "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedWeapon";
tmpDef.description = "This function tells you which weapon type is in a certain weapon slot of a ped. See Weapon Info";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed", "[ int weaponSlot = current ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementModel";
tmpDef.description = "This will continually change an object model every 2.5 seconds at the location -1084.52, -1634.81, 76.36 (Truth's farm).";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "int model "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getThisResource";
tmpDef.description = "This function retrieves the resource from which the function call was made.";
tmpDef.returnType = "resource";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "addCommandHandler";
tmpDef.description = "Example 1: This example defines a command handler for the command createmarker. This will create a red marker at the position of the player player who uses it.Example 2: This example makes use of Lua's vararg expression to implement a check_parameters command to count the number of parameters passed, merge them all into a single string and output it. This is also shows you how you can use table.concat to merge all the passed arguments. This is particularly useful when you want to read in a sentence of text passed from the user. Example 3: This example shows using a single function to handle multiple command handlers. This isn't advised for general usage, as it makes code harder to understand, but where multiple command handlers share some logic, it can be a useful way of reducing duplicated code. Generally, it would be preferable to put this shared logic in a separate function instead, as this gives you more control over the flow.Example 1: This example warps the local player to a random nearby location (useful for when a player gets stuck somewhere).";
tmpDef.returnType = "bool";
tmpDef.args = [" string commandName", "function handlerFunction", "[bool restricted = false", "bool caseSensitive = true] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "blowVehicle";
tmpDef.description = "This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.This example will blow up every vehicle in the game.This example will blow a player's vehicle when he enters the car, like a carbomb.This script will create an Infernus at the center (0, 0, 3) of San Andreas upon execution.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle vehicleToBlow", "[ bool explode=true ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getCloudsEnabled";
tmpDef.description = "This function will tell you if clouds are enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPickupType";
tmpDef.description = "This function retrieves the type of a pickup, either a health, armour or weapon pickup.";
tmpDef.returnType = "int";
tmpDef.args = [" pickup thePickup "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamName";
tmpDef.description = "This function gets the team name of a team object.";
tmpDef.returnType = "string";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponProperty";
tmpDef.description = "This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).";
tmpDef.returnType = "int";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getGravity";
tmpDef.description = "This function returns the current gravity level for the context in which it is called (server or client).This serverside command outputs the serverside gravity level.";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceConfig";
tmpDef.description = "This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file. An alternative way to load XML files is to use xmlLoadFile.This example opens a configuration file and prints the value of the 'attr' attribute of the first 'group' node.";
tmpDef.returnType = "xmlnode";
tmpDef.args = [" string filePath "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setOcclusionsEnabled";
tmpDef.description = "This function is used to enable or disable occlusions. Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementVelocity";
tmpDef.description = "This example adds a function which copies the speed of a random player to another random player. If there are less than 2 players it returns false.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "float speedX", "float speedY", "float speedZ "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setAircraftMaxVelocity";
tmpDef.description = "This function sets the maximum velocity at which aircrafts could fly. Using this function server-side will overwrite the value that was previously set client-side.This example will increase or decrease the max velocity by pressing numpad keys + or -.This example will double the max velocity for everyone when the resource is started.";
tmpDef.returnType = "bool";
tmpDef.args = [" float velocity "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setGravity";
tmpDef.description = "This function sets the server's gravity level.";
tmpDef.returnType = "bool";
tmpDef.args = [" float level "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedArmor";
tmpDef.description = "This function returns the current armor of the specified ped.This example defines a \"showarmor\" console command that shows the player that executes it how much armor he has.";
tmpDef.returnType = "float";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "fetchRemote";
tmpDef.description = "This function allows you to post and receive data from HTTP servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.Example sending email via a web service (adopted from examples on https://documentation.mailgun.com/user_manual.html)";
tmpDef.returnType = "bool";
tmpDef.args = [" string URL[", "string queueName = \"default\" ][", "int connectionAttempts = 10", "int connectTimeout = 10000 ]", "function callbackFunction", "[ string postData = \"\"", "bool postIsBinary = false", "[ arguments... ] ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "executeCommandHandler";
tmpDef.description = "This example defines a command handler for the command createmarker (which creates a red marker at the caller's position). It then creates a second command handler createmarker2 which will call the first one.";
tmpDef.returnType = "bool";
tmpDef.args = [" string commandName", "player thePlayer", "[ string args ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPlayerTeam";
tmpDef.description = "This example finds the team a player is on, and then changes its name.";
tmpDef.returnType = "team";
tmpDef.args = [" player thePlayer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getElementID";
tmpDef.description = "This function gets the ID of an element. This is the \"id\" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.";
tmpDef.returnType = "string";
tmpDef.args = [" element theElement "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementAttachedOffsets";
tmpDef.description = "This function updates the offsets of an element that has been attached to another element using attachElements.Example: This example creates a car with a minigun";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "[ float xPosOffset", "float yPosOffset", "float zPosOffset", "float xRotOffset", "float yRotOffset", "float zRotOffset ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetMoonSize";
tmpDef.description = "This function is used to reset the size of the moon to its normal size.";
tmpDef.returnType = "bool";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setWeaponAmmo";
tmpDef.description = "Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.Set the ammo of a custom weapon which was created through createWeapon. By default, a custom weapon has 9999 ammo (which means infinite ammo).";
tmpDef.returnType = "bool";
tmpDef.args = [" player thePlayer", "int weapon", "int totalAmmo", "[int ammoInClip = 0] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedWeaponSlot";
tmpDef.description = "This function gets a ped's selected weapon slot.";
tmpDef.returnType = "int";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getResourceDynamicElementRoot";
tmpDef.description = "This function retrieves the dynamic element root of a specified resource. The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.";
tmpDef.returnType = "element";
tmpDef.args = [" resource theResource "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "xmlNodeSetAttribute";
tmpDef.description = "This function is used to edit an attribute of a node in a configuration file.In a gamemode, we want a command to change the marker color in the configuration file and remove a deprecated attribute.";
tmpDef.returnType = "bool";
tmpDef.args = [" xmlnode node", "string name", "string/float value "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.width";
tmpDef.description = "This example shows the difference when ambi_is_double is set to false or true.";
tmpDef.returnType = "int";
tmpDef.args = [" string|int input [", "bool ambi_is_double = false", "int default_width = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponNameFromID";
tmpDef.description = "This function allows you to retrieve the name of a weapon from an ID. Note it also allows you to retrieve the name of other methods of death, such as Fall and Rammed.This example displays a death message in the format of \"* Killer killed dead (Weapon)\"";
tmpDef.returnType = "string";
tmpDef.args = [" int id "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.next";
tmpDef.description = "This example shows how to traverse a UTF-8 string the proper way without running into problems as in byte strings.";
tmpDef.returnType = "int, int";
tmpDef.args = [" string input [[", "int charpos = 0 ]", "int offset = 1 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "doesPedHaveJetPack";
tmpDef.description = "Checks whether or not a ped currently has a jetpack.Example 1: This examples adds a \"jetpack\" console command, which gives or removes a jetpack from the player.Example 2: This example provides a check to see if players have a jetpack when they enter a particular marker.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getWeaponIDFromName";
tmpDef.description = "This function will obtain the ID of a particular weapon from its name.This example will give the player the weapon they specify 20 ammo whenever they type \"weapon name\" into the console.";
tmpDef.returnType = "int";
tmpDef.args = [" string name "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedFrozen";
tmpDef.description = "";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedInVehicle";
tmpDef.description = "Checks whether or not a given ped is currently in a vehicle. This also returns true if they're trying to enter a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMoonSize";
tmpDef.description = "This function returns the moon size. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.This example will tell the moon size to everyone when the resource is started.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "attachElements";
tmpDef.description = "This function attaches one element to another, so that the first one follows the second whenever it moves. Example 1: This example attaches a marker to the player who steals the Mr. Whoopee:Example 3: This function adds a tank on top of a player (for extra defense), clientside. This means it will be invisible to other players.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "element theAttachToElement", "[ float xPosOffset = 0", "float yPosOffset = 0", "float zPosOffset = 0", "float xRotOffset = 0", "float yRotOffset = 0", "float zRotOffset = 0 ] "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "isPedDead";
tmpDef.description = "This function checks if the specified ped is dead or not.This example allows a player to use the command 'amidead' to see if they are dead or not.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getGameSpeed";
tmpDef.description = "This example adds a 'gamespeed' console command that prints the game speed to the chatbox.";
tmpDef.returnType = "float";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getPedClothes";
tmpDef.description = "This example prints the model and texture of the current clothing on the player who enters the \"clothes\" command. For example: \"clothes 3\" for the shoes.";
tmpDef.returnType = "string string";
tmpDef.args = [" ped thePed", "int clothesType "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setElementDoubleSided";
tmpDef.description = "This example shows how to set the double-sidedness of an object in a map file.";
tmpDef.returnType = "bool";
tmpDef.args = [" element theElement", "bool enable "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.reverse";
tmpDef.description = "This example shows how to reverse a UTF-8 string.";
tmpDef.returnType = "string";
tmpDef.args = [" string input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getJetpackMaxHeight";
tmpDef.description = "This function gets the maximum height at which your jetpack can fly without failing to go higher.This example returns the max jetpack height to a player if they use the command 'jetpackmaxheight'.";
tmpDef.returnType = "float";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "utf8.title";
tmpDef.description = "This example shows how to convert a string to uppercase.";
tmpDef.returnType = "string utf8.upper ( string|int input )string";
tmpDef.args = [" string|int input "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "attachTrailerToVehicle";
tmpDef.description = "This function attaches a trailer type vehicle to a trailer-towing-type vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = [" vehicle theVehicle", "vehicle theTrailer "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setPedWeaponSlot";
tmpDef.description = "This function changes the selected weapon slot of a ped.This example allows the player to type the command 'giveweapons', which gives the player a weapon for every slot. Instead of equipping the last given weapon, the script randomly decides which weapon to equip after all the weapons are given.";
tmpDef.returnType = "bool";
tmpDef.args = [" ped thePed", "int weaponSlot "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamFromName";
tmpDef.description = "This function finds a team object by the team's name.";
tmpDef.returnType = "team";
tmpDef.args = [" string teamName "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTeamFriendlyFire";
tmpDef.description = "This function tells you if friendly fire is turned on for the specified team.";
tmpDef.returnType = "bool";
tmpDef.args = [" team theTeam "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getMinuteDuration";
tmpDef.description = "Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is 1000.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetHeatHaze";
tmpDef.description = "This function restores the default heat haze.";
tmpDef.returnType = "bool";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getTrafficLightState";
tmpDef.description = "Gets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.";
tmpDef.returnType = "int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "resetSkyGradient";
tmpDef.description = "This function allows restoring of a changed sky gradient as a result of setSkyGradient.";
tmpDef.returnType = "bool";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setCloudsEnabled";
tmpDef.description = "This function will enable or disable clouds. This is useful for race maps which are placed high up as clouds can cause low FPS.This example Disables clouds for all players";
tmpDef.returnType = "bool";
tmpDef.args = [" bool enabled "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getSkyGradient";
tmpDef.description = "This function will return the current sky color.";
tmpDef.returnType = "int, int, int, int, int, int";
tmpDef.args = [" "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "setWeaponProperty";
tmpDef.description = "This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.";
tmpDef.returnType = "bool";
tmpDef.args = [" int weaponID/string weaponName", "string weaponSkill", "string property", "int/float theValue "];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);

tmpDef = new LuaFunction;
tmpDef.label = "getRootElement";
tmpDef.description = "Example 1: This example displays a chat message to all users.";
tmpDef.returnType = "";
tmpDef.args = [];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Shared;
SharedDefinitions.push(tmpDef);