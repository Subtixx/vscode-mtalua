'use strict';

import {LuaFunction, MTAFunction, ScriptSide} from "./defs";

import { GuiFunctionDefinitions } from "./client/gui";
import { DxFunctionDefinitions } from "./client/dx";

export var ClientDefinitions = new Array<MTAFunction>();

for(let i in GuiFunctionDefinitions)
    ClientDefinitions.push(GuiFunctionDefinitions[i]);
for(let i in DxFunctionDefinitions)
    ClientDefinitions.push(DxFunctionDefinitions[i]);

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "setWindowFlashing";
tmpDef.description = "This function allows the window to flash in the Windows taskbar.";
tmpDef.returnType = "bool";
tmpDef.args = [" bool shouldFlash", "[int count = 10]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canBrowserNavigateBack";
tmpDef.description = "This function checks if the browser can return to the previous page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "navigateBrowserBack";
tmpDef.description = "Returns the browser to the previous page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "navigateBrowserForward";
tmpDef.description = "This function takes the browser to the next page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "reloadBrowserPage";
tmpDef.description = "This function reloads the current browser's page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resizeBrowser";
tmpDef.description = "Allows resizing of CEF browsers at runtime.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "float width", "float height"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleWindowOpen";
tmpDef.description = " This function sets the vehicle window state.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int window", "bool open"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createTrayNotification";
tmpDef.description = "This functions creates a notification ballon on the desktop.";
tmpDef.returnType = "";
tmpDef.args = ["string notificationText", "[string iconType = \"default\"", "bool useSound = true]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrayNotificationEnabled";
tmpDef.description = "This function returns a boolean value whether the client has enabled tray notifications in his settings or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWorldSpecialPropertyEnabled";
tmpDef.description = "Enables or disables a special world property.";
tmpDef.returnType = "bool";
tmpDef.args = ["string propertyName", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleModelExhaustFumesPosition";
tmpDef.description = "This function returns the position of the exhaust fumes the vehicle model emits.";
tmpDef.returnType = "float X", "float Y", "float Z";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehiclesLODDistance";
tmpDef.description = "Sets the distance of vehicles LOD.";
tmpDef.returnType = "bool";
tmpDef.args = ["float vehiclesDistance", "[float trainsAndPlanesDistance = vehiclesDistance * 2.14]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehiclesLODDistance";
tmpDef.description = "Returns the distance of vehicles LOD. ";
tmpDef.returnType = "float mostVehicles", "float trains/planes";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleModelExhaustFumesPosition";
tmpDef.description = "This function sets the position of the exhaust fumes the vehicle model emits.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID", "float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadIFP";
tmpDef.description = "This function loads an animation library (IFP) file into GTA with a custom block name.";
tmpDef.returnType = "ifp";
tmpDef.args = ["string IfpFilePath", "string CustomBlockName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceAnimation";
tmpDef.description = "This function replaces a specific internal (default) animation with a custom one that has been loaded using engineLoadIFP function.";
tmpDef.returnType = "bool";
tmpDef.args = ["thePed", "InternalBlockName", "InternalAnimName", "CustomBlockName", "CustomAnimName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreAnimation";
tmpDef.description = "This function restores internal (default) animations that were replaced using engineReplaceAnimation function.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "[ string InternalBlockName", "string InternalAnimName]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundEffects";
tmpDef.description = "Returns the states of all effects of a sound.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadioChannel";
tmpDef.description = "This function retrieves the ID of the currently active radio channel.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundLevelData";
tmpDef.description = "This function gets the left/right level from a sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "int, int";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerMapVisible";
tmpDef.description = "This function checks if the local player has their map showing";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMetaTags";
tmpDef.description = "Used to get the meta tags attached to a sound. These provide information about the sound, for instance the title or the artist.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createProjectile";
tmpDef.description = "This function creates a projectile of the specified type on the specified coordinates.";
tmpDef.returnType = "projectile";
tmpDef.args = ["element creator", "int weaponType [", "float posX", "float posY", "float posZ", "float force = 1.0", "element target = nil", "float rotX", "float rotY", "float rotZ", "float velX", "float velY", "float velZ", "int model ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundFFTData";
tmpDef.description = "This function gets the fast fourier transform data for an audio stream which is a table of floats representing the current audio frame.This allows things like visualisations.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound", "int iSamples [", "int iBands = 0 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundBPM";
tmpDef.description = "This function gets the beats per minute of a specific sound element.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMaxDistance";
tmpDef.description = "Gets a custom sound max distance at which the sound stops.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCursorPosition";
tmpDef.description = "This function gets the current position of the mouse cursor. Note that for performance reasons, the world position returned is always 300 units away. If you want the exact world point (similar to onClientClick), use processLineOfSight between the camera position and the worldX/Y/Z result of this function.";
tmpDef.returnType = "float float float float float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundLength";
tmpDef.description = "This function is used to return the playback length of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSFXStatus";
tmpDef.description = "This function checks if a big sound container is available to use or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string audioContainer"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getRadioChannelName";
tmpDef.description = "This function gets the given radio channel name.";
tmpDef.returnType = "string";
tmpDef.args = ["int id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundWaveData";
tmpDef.description = "This function gets the wave form data for an audio stream which is a table of floats representing the current audio frame as a wave.This allows things like visualisations.";
tmpDef.returnType = "table";
tmpDef.args = ["element sound", "int iSamples"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundSpeed";
tmpDef.description = "This function is used to return the playback speed of the specified sound element.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isSoundPaused";
tmpDef.description = "This function is used to return the current pause state of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundVolume";
tmpDef.description = "This function is used to return the volume level of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSound";
tmpDef.description = "Creates a sound element and plays it immediately after creation for the local player. Note: The only supported audio formats are MP3, WAV, OGG, RIFF, MOD, XM, IT, S3M and PLS(e.g. Webstream).";
tmpDef.returnType = "element";
tmpDef.args = ["string soundPath", "[ bool looped = false", "bool throttled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundPan";
tmpDef.description = "This function is used to get the pan level of the specified sound element.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "executeBrowserJavascript";
tmpDef.description = "This function executes a Javascript string to the specified browser. Works only with local browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string jsCode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundProperties";
tmpDef.description = "This function gets the properties of a specific sound.";
tmpDef.returnType = "float, float, float, bool";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "focusBrowser";
tmpDef.description = "This function will attempt to focus the browser or unfocus all browsers. The browser that is focused will retrieve keyboard input.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCamera";
tmpDef.description = "This function returns an element that corresponds to the game camera";
tmpDef.returnType = "element";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementDistanceFromCentreOfMassToBaseOfModel";
tmpDef.description = "This function is used to retrieve the distance between a element's centre of mass to the base of the model. This can be used to calculate the position the element has to be set to, to have it on ground level.";
tmpDef.returnType = "float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedTargetingMarkerEnabled";
tmpDef.description = "This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundSpeed";
tmpDef.description = "This function can be used to change the playback speed of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSound3D";
tmpDef.description = "Creates a sound element in the GTA world and plays it immediately after creation for the local player. setElementPosition can be used to move the sound element around after it has been created. Remember to use setElementDimension after creating the sound to play it outside of dimension 0.";
tmpDef.returnType = "element";
tmpDef.args = ["string soundPath", "float x", "float y", "float z", "[ bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isSoundPanningEnabled";
tmpDef.description = "This function checks whether panning is enabled in a sound element or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundMaxDistance";
tmpDef.description = "Sets a custom sound max distance at which the sound stops.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "int distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundMinDistance";
tmpDef.description = "Gets a custom sound Minimum distance at which the sound stops getting louder.";
tmpDef.returnType = "int";
tmpDef.args = ["element sound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSFX";
tmpDef.description = "This function plays a sound from GTA's big sound containers.";
tmpDef.returnType = "element";
tmpDef.args = ["string containerName", "int bankId", "int soundId [", "bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSoundPosition";
tmpDef.description = "This function is used to return the current seek position of the specified sound element.If the element is a player, this function will use the players voice.";
tmpDef.returnType = "float";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "playSFX3D";
tmpDef.description = "This function plays a sound in the GTA world from GTA's big sound containers.";
tmpDef.returnType = "element";
tmpDef.args = ["string containerName", "int bankId", "int soundId", "float x", "float y", "float z [", "bool looped = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPanningEnabled";
tmpDef.description = "This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPosition";
tmpDef.description = "This function is used to change the seek position of the specified sound element.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float pos"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPaused";
tmpDef.description = "This function is used to either pause or unpause the playback of the specified sound element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "bool paused"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "stopSound";
tmpDef.description = "Stops the sound playback for specified sound element. The sound element is also destroyed.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAimTarget";
tmpDef.description = "This function allows you to set a ped's aim target to a specific point. If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedCameraRotation";
tmpDef.description = "This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with setCameraMatrix, because that function is designed for fixed (scripted) camera moves. ";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float cameraRotation"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPedDoingTask";
tmpDef.description = "This function checks if the specified ped is carrying out a certain task.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string taskName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundMinDistance";
tmpDef.description = "Sets a custom sound Minimum distance at which the sound stops getting louder.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "int distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundPan";
tmpDef.description = "This function is used to change the pan level of the specified sound element. ";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float pan"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBulletImpact";
tmpDef.description = "Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int smokeSize=1", "int sparkCount=1", "float smokeIntensity=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundEffectEnabled";
tmpDef.description = "Used to enable or disable specific sound effects.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "string effectName", "bool bEnable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddDebris";
tmpDef.description = "Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "[int colorR=255", "int colorG=0", "int colorB=0", "int colorA=255", "float scale=1.0", "int count=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundVolume";
tmpDef.description = "This function is used to change the volume level of the specified sound element.Use a player element to control a players voice with this function.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theSound", "float volume"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddTankFire";
tmpDef.description = "This function creates a tank firing particle effect";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddFootSplash";
tmpDef.description = "This function creates a foot splash particle effect, normally created when walking into water.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBulletSplash";
tmpDef.description = "This function creates a bullet splash particle effect, normally created when shooting into water.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSoundProperties";
tmpDef.description = "This function edit's the properties of a specific sound.";
tmpDef.returnType = "bool";
tmpDef.args = ["element sound", "float fSampleRate", "float fTempo", "float fPitch", "bool bReverse"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddSparks";
tmpDef.description = "Creates a number of sparks originating from a point or along a line.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[float force=1", "int count=1", "float acrossLineX=0", "float acrossLineY=0", "float acrossLineZ=0", "bool blur=false", "float spread=1", "float life=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRadioChannel";
tmpDef.description = "This function sets the heard radio channel, even while not in a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["int ID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedVoice";
tmpDef.description = "Gets the current voice of a ped.";
tmpDef.returnType = "string string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedWeaponMuzzlePosition";
tmpDef.description = "Returns the world position of the muzzle of the weapon that a ped is currently carrying. The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out. The position may not be accurate if the ped is off screen.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPlayerMapBoundingBox";
tmpDef.description = "This function gets the GUI bounding box of the radar map texture.";
tmpDef.returnType = "int, int, int, int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canPedBeKnockedOffBike";
tmpDef.description = "This function checks if the given ped can fall off bikes.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementLocal";
tmpDef.description = "This function checks whether a clientside element is local to the client (doesn't exist in the server) or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePedWeapon";
tmpDef.description = "This function gives the specified weapon to the specified ped. This function can't be used on players, use giveWeapon for that.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int weapon [", "int ammo=30", "bool setAsCurrent=false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceModel";
tmpDef.description = "This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF. This function supports vehicles, objects, peds and players.";
tmpDef.returnType = "bool";
tmpDef.args = ["dff theModel", "int modelID ", "[bool alphaTransparency = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementSyncer";
tmpDef.description = "This function checks whether an element is synced by the local player or not. Accepted elements are peds and vehicles.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

// TODO: Issue
tmpDef = new MTAFunction;
tmpDef.label = "tocolor";
tmpDef.description = "Draws an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).Image files should ideally have dimensions that are a power of two, to prevent possible blurring.Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...";
tmpDef.returnType = "bool dxDrawImage ( float posX, float posY, float width, float height, mixed image, [ float rotation = 0, float rotationCenterOffsetX = 0, float rotationCenterOffsetY = 0, int color =";
tmpDef.args = ["255,255,255,255"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddTyreBurst";
tmpDef.description = "Creates a tyre burst particle effect (a small white smoke puff).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCursorPosition";
tmpDef.description = "This function sets the current position of the mouse cursor.";
tmpDef.returnType = "bool";
tmpDef.args = ["int cursorX", "int cursorY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWaterHydrant";
tmpDef.description = "This function creates a water hydrant particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEffectDensity";
tmpDef.description = "This function gets the density of certain effect.";
tmpDef.returnType = "float";
tmpDef.args = ["effect theEffect"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddGlass";
tmpDef.description = "This function creates a glass particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "[int colorR=255", "int colorG=0", "int colorB=0", "int colorA=255", "float scale=1.0", "int count=1]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementBoundingBox";
tmpDef.description = "This function returns the minimum and maximum coordinates of an element's bounding box.";
tmpDef.returnType = "float float float float float float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createBrowser";
tmpDef.description = "This function creates a new web browser element.";
tmpDef.returnType = "element";
tmpDef.args = ["int width", "int height", "bool isLocal [", "bool transparent = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWood";
tmpDef.description = "Creates a wood splinter particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int count=1", "float brightness=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddGunshot";
tmpDef.description = "This function creates a gunshot particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[bool includeSparks=true]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddBlood";
tmpDef.description = "Creates a blood splatter particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ", "[int count=1", "float brightness=1.0]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddWaterSplash";
tmpDef.description = "This function creates a water splash particle effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetCollision";
tmpDef.description = "This function allows retrieval of where a ped's target is blocked. It will only be blocked if there is an obstacle within a ped's target range.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createFire";
tmpDef.description = "Creates a patch of fire that will spread a bit and die out after a while.";
tmpDef.returnType = "bool";
tmpDef.args = ["float x", "float y", "float z [", "float size = 1.8 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fxAddPunchImpact";
tmpDef.description = "Creates a punch impact particle effect (a small dust cloud).";
tmpDef.returnType = "bool";
tmpDef.args = ["float posX", "float posY", "float posZ", "float dirX", "float dirY", "float dirZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setEffectSpeed";
tmpDef.description = "This function sets the speed of a specified effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["effect theEffect", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createEffect";
tmpDef.description = "Creates an effect on specified position.";
tmpDef.returnType = "effect";
tmpDef.args = ["string name", "float x", "float y", "float z [", "float rX", "float rY", "float rZ", "float drawDistance = 0", "soundEnabled = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTask";
tmpDef.description = "This function is used to get any simple or complex task of a certain type for a ped.";
tmpDef.returnType = "string, string, string, string";
tmpDef.args = ["ped thePed", "string priority", "int taskType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getObjectMass";
tmpDef.description = "This function returns the mass of a specified object.";
tmpDef.returnType = "float";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedOxygenLevel";
tmpDef.description = "This function allows you to set the oxygen level of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float oxygen"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGroundPosition";
tmpDef.description = "This function gets the Z level of the highest ground below a point.";
tmpDef.returnType = "float";
tmpDef.args = ["float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setProjectileCounter";
tmpDef.description = "This function changes the projectile counter timer which depending on the projectile type will do different things.";
tmpDef.returnType = "bool";
tmpDef.args = ["projectile projectile", "int timeToDetonate"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGarageBoundingBox";
tmpDef.description = "This function outputs the bounding box of a garage. Checks if the player is inside the bounding box of the garage and outputs the result to the chat";
tmpDef.returnType = "float, float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePedWeapon";
tmpDef.description = "This function gives the specified weapon to the specified ped. This function can't be used on players, use giveWeapon for that.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int weapon [", "int ammo=30", "bool setAsCurrent=false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementCollidableWith";
tmpDef.description = "This function can be used to set an element to collide with another element. An element with collisions disabled does not interact physically with the other element.Note: You can only use this function with the element types listed below.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element withElement", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedAnimation";
tmpDef.description = "Gets the animation of a player or ped that was set using setPedAnimation.";
tmpDef.returnType = "string string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getElementRadius";
tmpDef.description = "This function gets the radius of an element. Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.";
tmpDef.returnType = "float";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedFootBloodEnabled";
tmpDef.description = "This function makes a players foot prints bloody.";
tmpDef.returnType = "bool";
tmpDef.args = ["element thePlayer", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementStreamedIn";
tmpDef.description = "This function checks whether an element is currently streamed in (not virtualized) and are actual GTA objects in the world. You can force an element to be streamed in using setElementStreamable.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setEffectDensity";
tmpDef.description = "This function sets the density of a specified effect.";
tmpDef.returnType = "bool";
tmpDef.args = ["effect theEffect", "float density"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getEffectSpeed";
tmpDef.description = "This function gets the speed of a specified effect.";
tmpDef.returnType = "float";
tmpDef.args = ["effect theEffect"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementWaitingForGroundToLoad";
tmpDef.description = "The next code snippet outputs a message when a vehicle respawns far away from players, above an object.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "triggerServerEvent";
tmpDef.description = "This function triggers an event previously registered on the server. This is the primary means of passing information between the client and the server. Servers have a similar triggerClientEvent function that can do the reverse. You can treat this function as if it was an asynchronous function call, using triggerClientEvent to pass back any returned information if necessary.";
tmpDef.returnType = "bool";
tmpDef.args = ["string event", "element theElement", "[arguments...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightRadius";
tmpDef.description = "This function sets the radius for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["Light theLight", "float radius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetVisibleTextureNames";
tmpDef.description = "This function returns a list of the world textures which are being used to draw the current scene.";
tmpDef.returnType = "table";
tmpDef.args = ["[ string nameFilter = \"*\"", "string modelId = \"\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementStreamable";
tmpDef.description = "This function checks whether an element is streamable as set by setElementStreamable or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedTargetingMarkerEnabled";
tmpDef.description = "This function is used to toggle the health target marker on top of all pedestrians.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLocalPlayer";
tmpDef.description = "This function gets the player element of the client running the current script.";
tmpDef.returnType = "player";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedControlState";
tmpDef.description = "This function makes a ped press or release a certain control. It doesn't work with the local player, so use setControlState instead.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementCollidableWith";
tmpDef.description = "This function can be used to check whether specified element is collidable with another element.Note: You can only use this function with the element types listed below.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "element withElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightEndPosition";
tmpDef.description = " This function gets the end position of a searchlight element.";
tmpDef.returnType = "float float float";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAnalogControlState";
tmpDef.description = "This sets the analog control state of a control for the local player.";
tmpDef.returnType = "bool";
tmpDef.args = ["string controlName [", "float state]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightEndRadius";
tmpDef.description = " This function gets the end radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileTarget";
tmpDef.description = "This function returns the target of the specified projectile.";
tmpDef.returnType = "element";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetStart";
tmpDef.description = "This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleObjectRespawn";
tmpDef.description = "This function is used to toggle if an object should respawn after it got destroyed";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "bool respawn"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedControlState";
tmpDef.description = "Checks whether a ped has a certain control pressed.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "triggerLatentServerEvent";
tmpDef.description = "This function is the same as triggerServerEvent except the transmission rate of the data contained in the arguments can be limited and other network traffic is not blocked while the data is being transferred.";
tmpDef.returnType = "bool";
tmpDef.args = ["string event", "[int bandwidth=5000", "bool persist=false,] element theElement", "[arguments...]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedTargetEnd";
tmpDef.description = "This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped targetingPed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementStreamable";
tmpDef.description = "This function can be used to disable streaming for an element. This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as players, peds, vehicles and objects.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "bool streamable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadCOL";
tmpDef.description = "This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can then be used to provide collisions for in-game objects.";
tmpDef.returnType = "col";
tmpDef.args = ["string col_file / string raw_data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectMass";
tmpDef.description = "This function sets the mass of a specified object. Changing the mass leads to a different movement behavior for especially dynamic objects.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "float mass"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedVoice";
tmpDef.description = "Changes the voice of a ped.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string voiceType", "string voiceName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setElementMatrix";
tmpDef.description = "This function sets the matrix of an element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "table theMatrix"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRemoveShaderFromWorldTexture";
tmpDef.description = "This function removes a shader from one or more world textures.";
tmpDef.returnType = "bool";
tmpDef.args = ["element shader", "string textureName [", "element targetElement = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isElementOnScreen";
tmpDef.description = "This function will check if an element is on the screen. Elements behind objects but still in the camera view count as being on screen.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineImportTXD";
tmpDef.description = "engineImportTXD";
tmpDef.returnType = "bool";
tmpDef.args = ["txd texture", "int model_id"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelTextureNames";
tmpDef.description = "This function returns a table of the world textures which are applied to the specified model.";
tmpDef.returnType = "table";
tmpDef.args = ["string modelId = \"\""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getHelicopterRotorSpeed";
tmpDef.description = "Retrieves the speed at which the rotor of a helicopter rotates.";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle heli"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightStartPosition";
tmpDef.description = "This function sets the start position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight", "float startX", "float startY", "float startZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileType";
tmpDef.description = "This function returns the type of the specified projectile.";
tmpDef.returnType = "int";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isPlayerHudComponentVisible";
tmpDef.description = "This function can be used to check whether an hud component is visable or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string component"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getInteriorFurnitureEnabled";
tmpDef.description = "This function will tell you if interior furniture are enabled or disabled in a specified room ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int roomID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightDirection";
tmpDef.description = "This function sets the direction for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["light theLight", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedAnalogControlState";
tmpDef.description = "This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed", "string controlName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBirdsEnabled";
tmpDef.description = "This function will tell you if the birds are enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getHeliBladeCollisionsEnabled";
tmpDef.description = "This function gets the state of the helicopter blades collisions on the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getInteriorSoundsEnabled";
tmpDef.description = "This function checks to see if the music played by default in clubs is disabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGaragePosition";
tmpDef.description = "This function outputs X, Y and Z position of given garage.This element has to create a blip at the nearest garage and removes it in 10 seconds.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelLODDistance";
tmpDef.description = "This function gets the LOD distance for any object / model ID.";
tmpDef.returnType = "float";
tmpDef.args = ["int model"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetAsynchronousLoading";
tmpDef.description = "This function enables or disables asynchronous model loading. Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time. However, it can cause the new models to appear slightly later than they might have otherwise.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enable", "bool force"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreCOL";
tmpDef.description = "This function restores the original collision model of the given model ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadTXD";
tmpDef.description = "This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture dictionary can then be used to provide textures.";
tmpDef.returnType = "txd";
tmpDef.args = ["string txd_file / string raw_data [", "bool filteringEnabled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineReplaceCOL";
tmpDef.description = "This function replaces the collision file of the given model id to the collision file passed. Use engineLoadCOL to load the collision file first.";
tmpDef.returnType = "bool";
tmpDef.args = ["col theCol", "int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineLoadDFF";
tmpDef.description = "This function loads a RenderWare Model (DFF) file into GTA.";
tmpDef.returnType = "dff";
tmpDef.args = ["string dff_file / string raw_data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedMoveState";
tmpDef.description = "This function returns the current move state for the specified ped.";
tmpDef.returnType = "string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelNameFromID";
tmpDef.description = "This function gets the model name of an object model from model ID.";
tmpDef.returnType = "string";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineRestoreModel";
tmpDef.description = "This function restores the visual DFF model of the given model ID. This restores the result of engineLoadIFP.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineApplyShaderToWorldTexture";
tmpDef.description = "This function applies a shader to one or more world textures.";
tmpDef.returnType = "bool";
tmpDef.args = ["element shader", "string textureName [", "element targetElement = nil", "bool appendLayers = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getChatboxLayout";
tmpDef.description = "Returns information about how the chatbox looks.";
tmpDef.returnType = "bool/int/table";
tmpDef.args = ["[ string CVar ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineGetModelIDFromName";
tmpDef.description = "This function gets the model ID of an object model from object name. This function is the inverse of engineGetModelNameFromID";
tmpDef.returnType = "int";
tmpDef.args = ["string modelName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "engineSetModelLODDistance";
tmpDef.description = "This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.";
tmpDef.returnType = "bool";
tmpDef.args = ["int model", "float distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createSWATRope";
tmpDef.description = "Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.";
tmpDef.returnType = "bool";
tmpDef.args = ["float fx", "float fy", "float fZ", "int duration"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getGarageSize";
tmpDef.description = "This function outputs the size of garage.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["int garageID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBoundKeys";
tmpDef.description = "Returns a list of key names that are bound to the specified game control or console command.";
tmpDef.returnType = "table";
tmpDef.args = ["string command/control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyState";
tmpDef.description = "This function determines if a certain key is pressed or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string keyName"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setLightColor";
tmpDef.description = "This function sets the color for a light element.";
tmpDef.returnType = "bool";
tmpDef.args = ["light theLight", "float r", "float g", "float b"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createLight";
tmpDef.description = "This function creates a 3D light in the world.";
tmpDef.returnType = "light";
tmpDef.args = ["int lightType", "float posX", "float posY", "float posZ [", "float radius = 3", "int r = 255", "int g = 0", "int b = 0", "float dirX = 0", "float dirY = 0", "float dirZ = 0", "bool createsShadow = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isChatBoxInputActive";
tmpDef.description = "This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileCreator";
tmpDef.description = "This function returns the creator of the specified projectile.";
tmpDef.returnType = "element";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setDebugViewActive";
tmpDef.description = "This function enables or disables the debug window.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightType";
tmpDef.description = "This function returns the type for a light element.";
tmpDef.returnType = "int";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightDirection";
tmpDef.description = "This function returns the direction for a light element.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightRadius";
tmpDef.description = "This function returns the radius for a light element.";
tmpDef.returnType = "float";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLightColor";
tmpDef.description = "This function returns the color for a light element.";
tmpDef.returnType = "int, int, int";
tmpDef.args = ["light theLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isMTAWindowActive";
tmpDef.description = "This function returns whether any system windows that take focus are active. This includes:";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedOxygenLevel";
tmpDef.description = "This function returns the current oxygen level of the specified ped.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightEndPosition";
tmpDef.description = "This function sets the end position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight", "float endX", "float endY", "float endZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightStartRadius";
tmpDef.description = "This function gets the start radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightStartRadius";
tmpDef.description = "This function sets the start radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchlight", "float startRadius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isConsoleActive";
tmpDef.description = "This function returns whether the ingame console window is visible or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isMainMenuActive";
tmpDef.description = "This function returns whether the user is in the mainmenu or not.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createSearchLight";
tmpDef.description = "This function creates a searchlight. A searchlight is a spotlight which looks like the one available in the Police Maverick.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ", "float startRadius", "float endRadius [", "bool renderSpot = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isDebugViewActive";
tmpDef.description = "This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the \"debugscript <level>\" command.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setSearchLightEndRadius";
tmpDef.description = "This function sets the end radius of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchlight", "float endRadius"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileCounter";
tmpDef.description = "Get the time left before a projectile detonates.";
tmpDef.returnType = "int";
tmpDef.args = ["projectile projectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getProjectileForce";
tmpDef.description = "This function returns the force of the specified projectile.";
tmpDef.returnType = "float";
tmpDef.args = ["projectile theProjectile"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getSearchLightStartPosition";
tmpDef.description = " This function gets the start position of a searchlight element.";
tmpDef.returnType = "searchlight";
tmpDef.args = ["searchlight theSearchLight"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedCanBeKnockedOffBike";
tmpDef.description = "This function controls if a ped can fall of his bike by accident - namely by banging into a wall.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "bool canBeKnockedOffBike"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedAnalogControlState";
tmpDef.description = "Sets an analog state of a specified ped's control, as if they pressed or released it.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "string control", "float state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPedLookAt";
tmpDef.description = "Makes a ped turn his head and look at a specific world position or element.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "float x", "float y", "float z [", "int time = 3000 [", "int blend = 1000 ]", "element target = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTransferBoxActive";
tmpDef.description = "This function returns whether the file downloading dialog box is active or not. This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedBonePosition";
tmpDef.description = "Returns the 3D world coordinates of a specific bone of a given ped.";
tmpDef.returnType = "float float float";
tmpDef.args = ["ped thePed", "int bone"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setObjectBreakable";
tmpDef.description = "This function sets an object to be breakable/unbreakable.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject", "bool breakable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "breakObject";
tmpDef.description = "This function breaks a specific object.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedCameraRotation";
tmpDef.description = "This function gets the current camera rotation of a ped.";
tmpDef.returnType = "float";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isObjectBreakable";
tmpDef.description = "This function checks if an object is breakable.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "respawnObject";
tmpDef.description = "This function respawns a specific object.";
tmpDef.returnType = "bool";
tmpDef.args = ["object theObject"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getPedSimplestTask";
tmpDef.description = "This function is used to get the name of a specified ped's current simplest task.";
tmpDef.returnType = "string";
tmpDef.args = ["ped thePed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setPlayerHudComponentVisible";
tmpDef.description = "This function will show or hide a part of the player's HUD. ";
tmpDef.returnType = "bool";
tmpDef.args = ["string component", "bool show"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserDomainBlocked";
tmpDef.description = "This function checks if the specified URL is blocked from being loaded.";
tmpDef.returnType = "bool";
tmpDef.args = ["string address [", "bool isURL = false]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserFocused";
tmpDef.description = "This function checks if a browser is focused.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isBrowserLoading";
tmpDef.description = "This function checks if a browser is currently loading a website.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserProperty";
tmpDef.description = "This function gets a given property of a specified browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser theBrowser", "string key"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserSettings";
tmpDef.description = "This function returns a table containing the browser settings.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserTitle";
tmpDef.description = "This function returns the title of the passed browser.";
tmpDef.returnType = "string";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserURL";
tmpDef.description = "This function returns the URL of the specified browser.";
tmpDef.returnType = "string";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseDown";
tmpDef.description = "This function injects a mouse click (state: down).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string mouseButton"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseMove";
tmpDef.description = "This function injects a mouse movement.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "int posX", "int posY"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseUp";
tmpDef.description = "This function injects a mouse click (state: up).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string mouseButton"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "injectBrowserMouseWheel";
tmpDef.description = "This function injects mouse wheel events.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "int verticalScroll", "int horizontalScroll"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "loadBrowserURL";
tmpDef.description = "This function loads the specified URL.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string url [", "string postData = \"\"", "bool urlEncoded = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "canBrowserNavigateForward";
tmpDef.description = "This function checks if the browser can go to the next page.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserProperty";
tmpDef.description = "This function sets a given property of a specified browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser theBrowser", "string key", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserRenderingPaused";
tmpDef.description = "This function sets the rendering state of a browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "bool paused"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserVolume";
tmpDef.description = "This function sets either a specific browser's volume, or the overall volume for browsers.";
tmpDef.returnType = "bool";
tmpDef.args = ["[browser webBrowser]", "float volume"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "requestBrowserDomains";
tmpDef.description = "This function opens a request window in order to accept the requested remote URLs.";
tmpDef.returnType = "bool";
tmpDef.args = ["table pages [", "bool parseAsURL = false", "function callback ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBrowserAjaxHandler";
tmpDef.description = "This function provides a requestable ajax resource for Lua/Javascript communication for a browser.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "string url [", "function handler]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getBrowserSource";
tmpDef.description = "This function can be used to retrieve the source code of a website (asynchronously). The size of the source code is limited to 2 MiB (remaining bytes are cut).";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "function callback"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "toggleBrowserDevTools";
tmpDef.description = "This function toggles the visibility of the developer tools pane.";
tmpDef.returnType = "bool";
tmpDef.args = ["browser webBrowser", "bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraClip";
tmpDef.description = "This function checks if the camera will \"collide\" with any objects or vehicles in its way. Read more about this here.";
tmpDef.returnType = "bool, bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraGoggleEffect";
tmpDef.description = "This function returns what goggle effect is currently affecting the camera.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraViewMode";
tmpDef.description = "This function allows you to get the camera's view mode. This indicates at what distance the camera will follow the player.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraFieldOfView";
tmpDef.description = "This function returns the field of view of the dynamic camera as set by setCameraFieldOfView.";
tmpDef.returnType = "float";
tmpDef.args = ["string cameraMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCameraShakeLevel";
tmpDef.description = "This function gets the camera shake level set by setCameraShakeLevel.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraClip";
tmpDef.description = "This function sets if the camera will \"collide\" with any objects or vehicles in its way. This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.";
tmpDef.returnType = "bool";
tmpDef.args = ["[ bool objects = true", "bool vehicles = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraGoggleEffect";
tmpDef.description = "This function allows you to set the camera's current goggle effect. This means you can activate nightvision or infrared effects by script";
tmpDef.returnType = "bool";
tmpDef.args = ["string goggleEffect [", "bool noiseEnabled = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraViewMode";
tmpDef.description = "This function allows you to set the camera's view mode if you are inside a vehicle. This indicates at what distance the camera will follow the player.";
tmpDef.returnType = "bool";
tmpDef.args = ["int viewMode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraFieldOfView";
tmpDef.description = "This function sets the field of view of the dynamic camera - this is the field of view of the non-fixed camera - yes, the camera that the user can control whilst on foot or in a vehicle. The higher the field of view angle, the more you will be able to see to your sides.";
tmpDef.returnType = "bool";
tmpDef.args = ["string cameraMode", "float fieldOfView"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCameraShakeLevel";
tmpDef.description = "This function sets the camera shake level (as seen on the Are you going to San Fierro? singleplayer mission).";
tmpDef.returnType = "bool";
tmpDef.args = ["int shakeLevel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setCursorAlpha";
tmpDef.description = "This function is used to change alpha (transparency) from the client's cursor.";
tmpDef.returnType = "bool";
tmpDef.args = ["int alpha"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCursorAlpha";
tmpDef.description = "This function is used to get alpha (transparency) from the client's cursor.";
tmpDef.returnType = "int";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getCommandsBoundToKey";
tmpDef.description = "Gets the commands bound to a key.";
tmpDef.returnType = "table";
tmpDef.args = ["string theKey", "string keyState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getKeyBoundToCommand";
tmpDef.description = "This function allow you get first key bound to command.";
tmpDef.returnType = "string";
tmpDef.args = ["string command"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getAnalogControlState";
tmpDef.description = "This retrieves the analog control state of a control.  This is useful for detecting sensitive controls, such as those used on a joypad.";
tmpDef.returnType = "float";
tmpDef.args = ["string control"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isChatVisible";
tmpDef.description = "This function checks if player's chat is visible.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getResourceGUIElement";
tmpDef.description = "This function retrieves a resource's GUI element. The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource. It has a predefined variable called guiRoot, and each resource has one of these. You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).";
tmpDef.returnType = "element";
tmpDef.args = ["[ resource theResource = getThisResource("];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getLocalization";
tmpDef.description = "This function gets the player's localization setting as set in the MTA client.";
tmpDef.returnType = "table";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setClipboard";
tmpDef.description = "This function sets the players clipboard text (what appears when you paste with CTRL + V) Note that there is no getClipBoard function for safety reasons.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theText"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleAdjustableProperty";
tmpDef.description = "Use this to get the value of a vehicles adjustable property. This property relates to movable parts of a model, for example hydra jets or dump truck tray.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponents";
tmpDef.description = "This function gets a table of the components currently on a vehicle.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentPosition";
tmpDef.description = "This function gets the component position of a vehicle.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["vehicle theVehicle", "string theComponent [", "string base = \"root\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentRotation";
tmpDef.description = "This function gets the component rotation of a vehicle.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["vehicle theVehicle", "string theComponent [", "string base = \"parent\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentVisible";
tmpDef.description = "This function get component visibility for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleGravity";
tmpDef.description = "Retrieves the current gravity vector of a vehicle. This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.";
tmpDef.returnType = "float float float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNitroCount";
tmpDef.description = "This function gets the nitro count of the vehicle.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNitroLevel";
tmpDef.description = "This function gets the nitro level of the vehicle.";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleCurrentGear";
tmpDef.description = "Gets the specified vehicle's current gear.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleNitroRecharging";
tmpDef.description = "This function checks if nitro is recharging on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleNitroActivated";
tmpDef.description = "This function checks if nitro is activated on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleWindowOpen";
tmpDef.description = "This function gets the vehicle window state.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int window"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleComponentPosition";
tmpDef.description = "This function reset to default component position for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleComponentRotation";
tmpDef.description = "This function reset to default component rotation for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setHeliBladeCollisionsEnabled";
tmpDef.description = "This function changes the state of the helicopter blades collisions on the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool collisions"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setHelicopterRotorSpeed";
tmpDef.description = "Sets the rotor speed of a helicopter.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle heli", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleAdjustableProperty";
tmpDef.description = "This function is used for adjusting the movable parts of a model, for example hydra jets or dump truck tray.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theVehicle", "int value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentPosition";
tmpDef.description = "This function sets the component position of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "float posX", "float posY", "float posZ [", "string base = \"root\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentRotation";
tmpDef.description = "This function sets the component rotation of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "float rotX", "float rotY", "float rotZ [", "string base = \"parent\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentVisible";
tmpDef.description = "This function sets component visibility for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleGravity";
tmpDef.description = "Sets the gravity vector of a vehicle. The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroActivated";
tmpDef.description = "This function activates or deactivates the nitro on the specified vehicle, like if a player pressed the button for activating nitro.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroCount";
tmpDef.description = "This function sets how many times a player can activate the nitro on a specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int count"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroLevel";
tmpDef.description = "This function sets the nitro level of the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float level"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWaterLevel";
tmpDef.description = "This function allows you to retrieve the water level from a certain location. The water level is 0 in most places though it can vary (e.g. it's higher near the dam).";
tmpDef.returnType = "float";
tmpDef.args = ["float posX", "float posY", "float posZ [ ", "bool bCheckWaves = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWaterDrawnLast";
tmpDef.description = "This function determines whether water is drawn last in the rendering order.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWaterDrawnLast";
tmpDef.description = "This function changes the water rendering order.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool bEnabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "givePedWeapon ";
tmpDef.description = "This function gives the specified weapon to the specified ped. This function can't be used on players, use giveWeapon for that.";
tmpDef.returnType = "bool";
tmpDef.args = ["ped thePed", "int weapon [", "int ammo=30", "bool setAsCurrent=false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "createWeapon";
tmpDef.description = "Creates a custom weapon that can fire bullets. Do not confuse this with player held weapons.";
tmpDef.returnType = "weapon";
tmpDef.args = ["string theType", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "fireWeapon";
tmpDef.description = "Fires one shot from a custom weapon.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponState";
tmpDef.description = "This function gets the state of a custom weapon.";
tmpDef.returnType = "string";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponTarget";
tmpDef.description = "This functions gets the target of a custom weapon.";
tmpDef.returnType = "nil/element/float";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponOwner";
tmpDef.description = "This function gets the owner of a custom weapon. Weapon ownership system was, however, disabled, so this function always returns false. Please refer to setWeaponOwner for details.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponFlags";
tmpDef.description = "This function gets the flags of a custom weapon.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theFlag"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponFiringRate";
tmpDef.description = "This gets the firing rate to be used when a custom weapon opens fire.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponAmmo";
tmpDef.description = "This function gets the total ammo a custom weapon has.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWeaponClipAmmo";
tmpDef.description = "This function gets the amount of ammo left in a custom weapon's magazine/clip.";
tmpDef.returnType = "int";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWeaponFiringRate";
tmpDef.description = "This function resets the firing rate of a custom weapon to the default one.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponState";
tmpDef.description = "This function sets a custom weapon's state.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theState"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponTarget";
tmpDef.description = "This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "element theTarget [", "int theComponent = 255]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponFlags";
tmpDef.description = "This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "string theFlag", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponFiringRate";
tmpDef.description = "This function sets the firing rate to be used when a custom weapon is in firing state.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "int firingRate"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWeaponClipAmmo";
tmpDef.description = "This function sets the ammo left in a custom weapon's magazine/clip.";
tmpDef.returnType = "bool";
tmpDef.args = ["weapon theWeapon", "int clipAmmo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getNearClipDistance";
tmpDef.description = "This function gets the distance from the camera at which the world starts rendering. For more information about this please refer to setNearClipDistance.";
tmpDef.returnType = "float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getScreenFromWorldPosition";
tmpDef.description = "This function gets the screen position of a point in the world. This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use processLineOfSight for that).";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["float x", "float y", "float z [", "float edgeTolerance = 0.0", "bool relative = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getWorldFromScreenPosition";
tmpDef.description = "This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["float x", "float y", "float depth"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isAmbientSoundEnabled";
tmpDef.description = "This function allows you to check if some background sound effects are enabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theType"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isLineOfSightClear";
tmpDef.description = "This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements. Use processLineOfSight if you want more information about what the ray hits.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWorldSoundEnabled";
tmpDef.description = "This function allows you to check if certain world sound effects have not been disabled by setWorldSoundEnabled";
tmpDef.returnType = "bool";
tmpDef.args = ["int group", "[ int index = -1 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isWorldSpecialPropertyEnabled";
tmpDef.description = "Checks if a special world property (cheat) is enabled or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["string propname"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "processLineOfSight";
tmpDef.description = "This function casts a ray between two points in the world, and tells you information about the point that was hit, if any. The two positions must be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.";
tmpDef.returnType = "bool               --";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetAmbientSounds";
tmpDef.description = "This function is used to reset the background sounds to the default setting.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehiclesLODDistance";
tmpDef.description = "Resets the distance of vehicles LOD to default. Default values depends on client setting. If client has enabled high detail vehicles in video options, value will be reset to (500, 500) - otherwise to (70, 150). You can check value of this option using dxGetStatus (SettingHighDetailVehicles).";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetWorldSounds";
tmpDef.description = "This function is used to reset the world sounds to the default setting.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setAmbientSoundEnabled";
tmpDef.description = "This function allows you to disable some background sound effects.";
tmpDef.returnType = "bool";
tmpDef.args = ["string theType", "bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setBirdsEnabled";
tmpDef.description = "This function allows you to disable the flying birds.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enable"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setInteriorFurnitureEnabled";
tmpDef.description = "This function toggles furniture generation in interiors with the specified room ID.";
tmpDef.returnType = "bool";
tmpDef.args = ["int roomID", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setNearClipDistance";
tmpDef.description = "This function sets the distance from the camera at which the world starts rendering. Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems. It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.";
tmpDef.returnType = "bool";
tmpDef.args = ["float distance"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setWorldSoundEnabled";
tmpDef.description = "This function allows you to disable world sounds. A world sound is a sound effect which has not been caused by playSound or playSound3D.";
tmpDef.returnType = "bool";
tmpDef.args = ["int group", "[ int index = -1", "] bool enable [", "bool immediate = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "testLineAgainstWater";
tmpDef.description = "This function checks to see if a line between two points collides with the water. This is similar to processLineOfSight, but only collides with water. Waves are taken into account when testing the line.";
tmpDef.returnType = "bool float float float";
tmpDef.args = ["float startX", "float startY", "float startZ", "float endX", "float endY", "float endZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrainChainEngine";
tmpDef.description = "This function checks if a train is a chain engine (moves the rest of the chain's carriages) or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theTrain"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
ClientDefinitions.push(tmpDef);