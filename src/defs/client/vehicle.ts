'use strict';

import {MTAFunction, ScriptSide} from "../defs";

export var VehicleFunctionDefinitions = new Array<MTAFunction>();

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleWindowOpen";
tmpDef.description = " This function sets the vehicle window state.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int window", "bool open"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleModelExhaustFumesPosition";
tmpDef.description = "This function returns the position of the exhaust fumes the vehicle model emits.";
tmpDef.returnType = "float X", "float Y", "float Z";
tmpDef.args = ["int modelID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehiclesLODDistance";
tmpDef.description = "Sets the distance of vehicles LOD.";
tmpDef.returnType = "bool";
tmpDef.args = ["float vehiclesDistance", "[float trainsAndPlanesDistance = vehiclesDistance * 2.14]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehiclesLODDistance";
tmpDef.description = "Returns the distance of vehicles LOD. ";
tmpDef.returnType = "float mostVehicles", "float trains/planes";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleModelExhaustFumesPosition";
tmpDef.description = "This function sets the position of the exhaust fumes the vehicle model emits.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID", "float posX", "float posY", "float posZ"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setRadioChannel";
tmpDef.description = "This function sets the heard radio channel, even while not in a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["int ID"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getHelicopterRotorSpeed";
tmpDef.description = "Retrieves the speed at which the rotor of a helicopter rotates.";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle heli"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getHeliBladeCollisionsEnabled";
tmpDef.description = "This function gets the state of the helicopter blades collisions on the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleAdjustableProperty";
tmpDef.description = "Use this to get the value of a vehicles adjustable property. This property relates to movable parts of a model, for example hydra jets or dump truck tray.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponents";
tmpDef.description = "This function gets a table of the components currently on a vehicle.";
tmpDef.returnType = "table";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentPosition";
tmpDef.description = "This function gets the component position of a vehicle.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["vehicle theVehicle", "string theComponent [", "string base = \"root\" ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentRotation";
tmpDef.description = "This function gets the component rotation of a vehicle.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["vehicle theVehicle", "string theComponent [", "string base = \"parent\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentVisible";
tmpDef.description = "This function get component visibility for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleGravity";
tmpDef.description = "Retrieves the current gravity vector of a vehicle. This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.";
tmpDef.returnType = "float float float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNitroCount";
tmpDef.description = "This function gets the nitro count of the vehicle.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleNitroLevel";
tmpDef.description = "This function gets the nitro level of the vehicle.";
tmpDef.returnType = "float";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleCurrentGear";
tmpDef.description = "Gets the specified vehicle's current gear.";
tmpDef.returnType = "int";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleNitroRecharging";
tmpDef.description = "This function checks if nitro is recharging on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleNitroActivated";
tmpDef.description = "This function checks if nitro is activated on the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isVehicleWindowOpen";
tmpDef.description = "This function gets the vehicle window state.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int window"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleComponentPosition";
tmpDef.description = "This function reset to default component position for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleComponentRotation";
tmpDef.description = "This function reset to default component rotation for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setHeliBladeCollisionsEnabled";
tmpDef.description = "This function changes the state of the helicopter blades collisions on the specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool collisions"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setHelicopterRotorSpeed";
tmpDef.description = "Sets the rotor speed of a helicopter.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle heli", "float speed"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleAdjustableProperty";
tmpDef.description = "This function is used for adjusting the movable parts of a model, for example hydra jets or dump truck tray.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theVehicle", "int value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentPosition";
tmpDef.description = "This function sets the component position of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "float posX", "float posY", "float posZ [", "string base = \"root\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentRotation";
tmpDef.description = "This function sets the component rotation of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "float rotX", "float rotY", "float rotZ [", "string base = \"parent\"]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentVisible";
tmpDef.description = "This function sets component visibility for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string theComponent", "bool visible"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleGravity";
tmpDef.description = "Sets the gravity vector of a vehicle. The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float x", "float y", "float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroActivated";
tmpDef.description = "This function activates or deactivates the nitro on the specified vehicle, like if a player pressed the button for activating nitro.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroCount";
tmpDef.description = "This function sets how many times a player can activate the nitro on a specified vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "int count"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleNitroLevel";
tmpDef.description = "This function sets the nitro level of the vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "float level"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehiclesLODDistance";
tmpDef.description = "Resets the distance of vehicles LOD to default. Default values depends on client setting. If client has enabled high detail vehicles in video options, value will be reset to (500, 500) - otherwise to (70, 150). You can check value of this option using dxGetStatus (SettingHighDetailVehicles).";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "isTrainChainEngine";
tmpDef.description = "This function checks if a train is a chain engine (moves the rest of the chain's carriages) or not.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theTrain"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

// 1.5.6
tmpDef = new MTAFunction;
tmpDef.label = "isVehicleWheelOnGround";
tmpDef.description = "This function returns a boolean whether the vehicle's wheel is on ground (true) or in air (false).";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle", "string|int wheel"];
/*
wheel The wheel name or number, see list below:

"front_left" or 0
"rear_left" or 1
"front_right" or 2
"rear_right" or 3
*/
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "areVehicleLightsOn";
tmpDef.description = "This function is used to find out whether the lights of the vehicle are on.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleComponentScale";
tmpDef.description = "This function gets the component scale of a vehicle.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["vehicle theVehicle"," string theComponent ["," string base = 'root' ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "getVehicleModelDummyPosition";
tmpDef.description = "This function gets position of the dummies contained in a vehicle model.";
tmpDef.returnType = "float, float, float";
tmpDef.args = ["int modelID"," string dummy"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "resetVehicleComponentScale";
tmpDef.description = "This function reset to default component scale for vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"," string theComponent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleComponentScale";
tmpDef.description = "This function sets the component scale of a vehicle.";
tmpDef.returnType = "bool";
tmpDef.args = ["vehicle theVehicle"," string theComponent"," float scaleX"," float scaleY"," float scaleZ ["," string base = 'root']"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "setVehicleModelDummyPosition";
tmpDef.description = "This function sets the position of the dummies contained in a vehicle model. Use setVehicleComponentPosition to adjust the vehicle component positions.";
tmpDef.returnType = "bool";
tmpDef.args = ["int modelID"," string dummy"," float x"," float y"," float z"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
VehicleFunctionDefinitions.push(tmpDef);