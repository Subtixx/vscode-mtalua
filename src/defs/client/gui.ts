'use strict';

import {LuaFunction, MTAFunction, ScriptSide} from "../defs";

export var GuiFunctionDefinitions = new Array<MTAFunction>();

let tmpDef : MTAFunction;

tmpDef = new MTAFunction;
tmpDef.label = "guiMoveToBack";
tmpDef.description = "This function moves a GUI element to the very back of all other GUI elements.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetAlpha";
tmpDef.description = "This changes the alpha level (the visibleness/transparency) of a GUI element";
tmpDef.returnType = "bool";
tmpDef.args = ["element guielement", "float alpha"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateFont";
tmpDef.description = "This function creates a GUI font element that can be used in guiSetFont. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.";
tmpDef.returnType = "element";
tmpDef.args = ["string filepath[", "int size=9 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetEnabled";
tmpDef.description = "This function determines if a GUI element is enabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetInputEnabled";
tmpDef.description = "This function checks whether user input is focused on the GUI or the game.";
tmpDef.returnType = "bool";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetFont";
tmpDef.description = "This function is used to get the current font that is used to draw text in GUI elements.";
tmpDef.returnType = "string, element";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetInputMode";
tmpDef.description = "This function returns the current input mode as set by guiSetInputMode.Default mode is \"allow_binds\".";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetVisible";
tmpDef.description = "This function determines if a GUI element is visible.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetScreenSize";
tmpDef.description = "This function retrieves the local screen size according to the resolution they are using.";
tmpDef.returnType = "float float";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetCursorType";
tmpDef.description = "This function is used to get the type of the current cursor image.";
tmpDef.returnType = "string";
tmpDef.args = [""];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetPosition";
tmpDef.description = "This function allows retrieval of a GUI element's current position, relative to its parent.";
tmpDef.returnType = "float, float";
tmpDef.args = ["element guiElement", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetProperties";
tmpDef.description = "This function gets a list of the CEGUI property names and values of a GUI element. To find out what the different properties mean, check out the CEGUI properties page.";
tmpDef.returnType = "table";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetProperty";
tmpDef.description = "This function gets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the CEGUI properties page.";
tmpDef.returnType = "string";
tmpDef.args = ["element guiElement", "string property"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetText";
tmpDef.description = "This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.";
tmpDef.returnType = "string";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiBringToFront";
tmpDef.description = "This function brings a GUI element on top of others.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetInputMode";
tmpDef.description = "This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox.";
tmpDef.returnType = "bool";
tmpDef.args = ["string mode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetAlpha";
tmpDef.description = "Alpha represents the transparency of a gui element. This function allows retrieval of a gui element's current alpha.";
tmpDef.returnType = "float";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetVisible";
tmpDef.description = "This function changes the visibility state of a GUI element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetSize";
tmpDef.description = "This function sets the dimensions (size) of a GUI element. It refers to the bounding box size for GUI elements. It does not make GUI elements smaller or larger in appearance.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "float width", "float height", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetFont";
tmpDef.description = "This function sets the font of a GUI element to be used when drawing text.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "mixed font"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetSize";
tmpDef.description = "This function gets the size of a GUI element.";
tmpDef.returnType = "float float";
tmpDef.args = ["element theElement", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetEnabled";
tmpDef.description = "This function enables/disables a GUI element. A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetProperty";
tmpDef.description = "This function sets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the CEGUI properties page.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "string property", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetInputEnabled";
tmpDef.description = "This function enables or disables input focus for the GUI. This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example. In other words, keys such as t and y which activate the chatbox are disabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetText";
tmpDef.description = "This function sets the text of a GUI element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement", "string text"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetPosition";
tmpDef.description = "This function sets the position of a GUI element.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "float x", "float y", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateBrowser";
tmpDef.description = "This function creates a new CEGUI web browser element. ";
tmpDef.returnType = "gui-browser";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool isLocal", "bool isTransparent", "bool isRelative", "[ element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetBrowser";
tmpDef.description = "This function creates gets the browser element behind a gui-browser (a browser that has been created via guiCreateBrowser).";
tmpDef.returnType = "browser";
tmpDef.args = ["gui-browser theBrowser"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

/*
- guiCreateButton => Missing
- guiCheckBoxGetSelected => Missing
- guiCheckBoxSetSelected => Missing
- guiCreateCheckBox => Missing
- guiCreateComboBox => Missing
- guiComboBoxAddItem => Missing
- guiComboBoxClear => Missing
- guiComboBoxGetItemText => Missing
- guiComboBoxSetItemText => Missing
- guiComboBoxRemoveItem => Missing
- guiComboBoxGetSelected => Missing
- guiComboBoxSetSelected => Missing
- guiCreateEdit => Missing
- guiEditSetMasked => Missing
- guiEditSetMaxLength => Missing
- guiEditSetReadOnly => Missing
- guiEditSetCaretIndex => Missing
- guiEditGetCaretIndex => Missing
- guiCreateGridList => Missing
- guiGridListAddColumn => Missing
- guiGridListAddRow => Missing
- guiGridListAutoSizeColumn => Missing
- guiGridListClear => Missing
- guiGridListGetItemData => Missing
- guiGridListGetItemText => Missing
- guiGridListGetRowCount => Missing
- guiGridListGetSelectedItem => Missing
- guiGridListInsertRowAfter => Missing
- guiGridListRemoveColumn => Missing
- guiGridListRemoveRow => Missing
- guiGridListSetItemData => Missing
- guiGridListSetItemText => Missing
- guiGridListSetScrollBars => Missing
- guiGridListSetSelectedItem => Missing
- guiGridListSetSelectionMode => Missing
- guiGridListSetSortingEnabled => Missing
- guiGridListGetSelectedCount => Missing
- guiGridListGetSelectedItems => Missing
- guiGridListSetColumnWidth => Missing
- guiGridListGetColumnCount => Missing
- guiGridListGetItemColor => Missing
- guiGridListSetItemColor => Missing
- guiGridListGetColumnTitle => Missing
- guiGridListSetColumnTitle => Missing
- guiGridListGetHorizontalScrollPosition => Missing
- guiGridListSetHorizontalScrollPosition => Missing
- guiGridListGetVerticalScrollPosition => Missing
- guiGridListSetVerticalScrollPosition => Missing
- guiGridListGetColumnWidth => Missing
- guiCreateMemo => Missing
- guiMemoSetReadOnly => Missing
- guiMemoSetCaretIndex => Missing
- guiMemoGetCaretIndex => Missing
- guiCreateProgressBar => Missing
- guiProgressBarGetProgress => Missing
- guiProgressBarSetProgress => Missing
- guiCreateRadioButton => Missing
- guiRadioButtonGetSelected => Missing
- guiRadioButtonSetSelected => Missing
- guiCreateScrollBar => Missing
- guiScrollBarGetScrollPosition => Missing
- guiScrollBarSetScrollPosition => Missing
- guiCreateScrollPane => Missing
- guiScrollPaneGetHorizontalScrollPosition => Missing
- guiScrollPaneGetVerticalScrollPosition => Missing
- guiScrollPaneSetHorizontalScrollPosition => Missing
- guiScrollPaneSetScrollBars => Missing
- guiScrollPaneSetVerticalScrollPosition => Missing
- guiCreateStaticImage => Missing
- guiStaticImageGetNativeSize => Missing
- guiStaticImageLoadImage => Missing
- guiCreateTabPanel => Missing
- guiGetSelectedTab => Missing
- guiSetSelectedTab => Missing
- guiCreateTab => Missing
- guiDeleteTab => Missing
- guiCreateLabel => Missing
- guiLabelGetFontHeight => Missing
- guiLabelGetTextExtent => Missing
- guiLabelSetColor => Missing
- guiLabelSetHorizontalAlign => Missing
- guiLabelSetVerticalAlign => Missing
- guiLabelGetColor => Missing
- guiCreateWindow => Missing
- guiWindowSetMovable => Missing
- guiWindowSetSizable => Missing
*/