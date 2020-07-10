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

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateButton";
tmpDef.description = "This function allows creation of a GUI Button, which is a clickable item as part of GUI.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool relative", "[ element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCheckBoxGetSelected";
tmpDef.description = "This function gets a checkbox's selection state.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theCheckbox"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCheckBoxSetSelected";
tmpDef.description = "This function selects (ticks) or unselects a checkbox.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theCheckbox", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateCheckBox";
tmpDef.description = "This function creates a checkbox.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool selected", "bool relative", "[element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateComboBox";
tmpDef.description = "This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string caption", "bool relative", "[ element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxAddItem";
tmpDef.description = "Adds an item to a combobox.";
tmpDef.returnType = "int";
tmpDef.args = ["element comboBox", "string value"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxClear";
tmpDef.description = "This function removes all the items from a combobox.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxGetItemText";
tmpDef.description = "This function retrieves the text from a specific combobox item.";
tmpDef.returnType = "string";
tmpDef.args = ["element comboBox", "int itemId"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxSetItemText";
tmpDef.description = "This function changes the text of a combobox item.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox", "int itemId", "string text"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxRemoveItem";
tmpDef.description = "This function removes an item from a combobox.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox", "int itemId"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxGetSelected";
tmpDef.description = "This function returns the index of the selected combobox item.";
tmpDef.returnType = "int";
tmpDef.args = ["element comboBox"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxSetSelected";
tmpDef.description = "This function sets the selected item from a combobox.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox", "int itemIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateEdit";
tmpDef.description = "This function is for creating a new GUI edit box. This is a text box in which the user can input text. Edit boxes only allow a single line of text. If you want to allow multiple lines of text create a memo box using guiCreateMemo.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool relative [", "element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetMasked";
tmpDef.description = "This function sets or removes masking (covering up the text being typed) for password text fields.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "bool status"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetMaxLength";
tmpDef.description = "This function sets the maximum text length that can be typed into an edit box.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiEdit", "int length"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetReadOnly";
tmpDef.description = "This function allows you to set or remove read-only status for an edit box. If read-only is set to true, the box is not editable.";
tmpDef.returnType = "bool";
tmpDef.args = ["element editField", "bool status"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditSetCaretIndex";
tmpDef.description = "This function sets the current position of the caret (the text cursor) within the edit box.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditGetCaretIndex";
tmpDef.description = "This function returns the caret (the text cursor) position within the editbox.";
tmpDef.returnType = "int";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateGridList";
tmpDef.description = "This function creates a grid list GUI element.  These are menu's which are designed in lists and can have multiple columns.  A good example of a gridlist element can be found in MTA's settings box, under Controls.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool relative", "[ element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListAddColumn";
tmpDef.description = "This function is used to create columns in grid lists.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList", "string title", "float width"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListAddRow";
tmpDef.description = "Adds a row to a grid list, and optionally add simple text items with your rows.  Use guiGridListSetItemText to add row headers.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList [", "int/string itemText1", "int/string itemText2", "... ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListAutoSizeColumn";
tmpDef.description = "This allows you to automatically size a column to display everything in it correctly, with the most minimal width.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListClear";
tmpDef.description = "This function clears all the data from a grid list.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetItemData";
tmpDef.description = "With this function you can retrieve the string data associated with an item in a grid list. This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.";
tmpDef.returnType = "var";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetItemText";
tmpDef.description = "This function retrieves the text from a specific grid list item.";
tmpDef.returnType = "string";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetRowCount";
tmpDef.description = "This function returns the number of rows in a grid list.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetSelectedItem";
tmpDef.description = "This function returns the row and colum indexes of the selected item in a grid list.";
tmpDef.returnType = "int, int";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListInsertRowAfter";
tmpDef.description = "This allows you to insert a new row after a specified row, and simultaneously set text. Good for inserting new rows in the middle of existing rows. To insert at the top use -1 as row index.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList", "int rowIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListRemoveColumn";
tmpDef.description = "This allows you to delete columns that exist in grid lists.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListRemoveRow";
tmpDef.description = "This allows you to delete rows that exist in grid lists.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int rowIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetItemData";
tmpDef.description = "This function sets a Item Data associated to a grid list item.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex", "var data"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetItemText";
tmpDef.description = "This function changes the text of a gridlist item.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex", "string text", "bool section", "bool number"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetScrollBars";
tmpDef.description = "This function allows a gridlist's scrollbar to be forced on, or returned to default.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist", "bool horizontalBar", "bool verticalBar"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetSelectedItem";
tmpDef.description = "This function selects an item from a gridlist. If you wish to deselect whatever item is selected, pass 0 as both the rowIndex and  columnIndex arguments.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex [", "bool bReset = true ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetSelectionMode";
tmpDef.description = "This function sets the selection mode of a gui gridlist.  For example, the MTA server browser selects a whole row, while the Controls dialog selects a single cell. To select multiple items you must be holding down 'ctrl'.";
tmpDef.returnType = "bool";
tmpDef.args = ["guiElement gridlist", "int mode"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetSortingEnabled";
tmpDef.description = "This function allows the disabling or enabling of sorting within a gridlist.  Sorting is achieved by clicking a column header.  Gridlist items will be sorted according to the clicked column.  By default, gridlists have sorting enabled.  This function will allow you to toggle this.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist", "bool enabled"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetSelectedCount";
tmpDef.description = "This function returns the amount of options selected in the specified grid list.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetSelectedItems";
tmpDef.description = "This function returns the items selected in the specified grid list.";
tmpDef.returnType = "table";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetColumnWidth";
tmpDef.description = "This allows you to set the width of an existing column in a gridlist.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int columnIndex", "number width", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetColumnCount";
tmpDef.description = "This allows you to get the count of existing columns in a gridlist.";
tmpDef.returnType = "int";
tmpDef.args = ["element gridList"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetItemColor";
tmpDef.description = "This function gets the color of a gridlist item.";
tmpDef.returnType = "int int int int";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetItemColor";
tmpDef.description = "This function changes the color of a gridlist item.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int rowIndex", "int columnIndex", "int red", "int green", "int blue [", "int alpha = 255 ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetColumnTitle";
tmpDef.description = "This function is used to get the column title of a gridlist column.";
tmpDef.returnType = "string";
tmpDef.args = ["element guiGridlist", "int columnIndex"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetColumnTitle";
tmpDef.description = "This function is used to change the column title of a gridlist column.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist", "int columnIndex", "string title"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetHorizontalScrollPosition";
tmpDef.description = "This function is used to get the horizontal scroll position from a grid list";
tmpDef.returnType = "float";
tmpDef.args = ["element guiGridlist"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetHorizontalScrollPosition";
tmpDef.description = "This function is used to set the horizontal scroll position from a grid list";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist", "float fPosition"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetVerticalScrollPosition";
tmpDef.description = "This function is used to get the vertical scroll position from a grid list";
tmpDef.returnType = "float";
tmpDef.args = ["element guiGridlist"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListSetVerticalScrollPosition";
tmpDef.description = "This function is used to set the vertical scroll position from a grid list";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist", "float fPosition"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetColumnWidth";
tmpDef.description = "This allows you to get the width of an existing column in a gridlist.";
tmpDef.returnType = "bool";
tmpDef.args = ["element gridList", "int columnIndex", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateMemo";
tmpDef.description = "This function creates a new GUI memo.  This is a multiline edit box in which the user can input text.";
tmpDef.returnType = "gui-memo";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool relative [", "element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoSetReadOnly";
tmpDef.description = "This function allows you to set or remove read-only status for a GUI memo. If read-only is set to true, the contents are not editable.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-memo theMemo", "bool status"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoSetCaretIndex";
tmpDef.description = "This function sets the current position of the caret (the text cursor) within the memo.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-memo theMemo", "int index"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoGetCaretIndex";
tmpDef.description = "This function returns the caret (the text cursor) position within the memo box.";
tmpDef.returnType = "int";
tmpDef.args = ["element theElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateProgressBar";
tmpDef.description = "This function creates a progress bar.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool relative", "[element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiProgressBarGetProgress";
tmpDef.description = "This function gets the progress of a progress bar as a percentage.";
tmpDef.returnType = "float";
tmpDef.args = ["progressBar theProgressbar"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiProgressBarSetProgress";
tmpDef.description = "This function is used to set the progress of a progressbar as a percentage.";
tmpDef.returnType = "bool";
tmpDef.args = ["progressBar theProgressbar", "float progress"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateRadioButton";
tmpDef.description = "This function creates a radio button.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool relative", "[element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiRadioButtonGetSelected";
tmpDef.description = "This function gets a radio button's selection state.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiRadioButton"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiRadioButtonSetSelected";
tmpDef.description = "This function selects or unselects a radio button.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiRadioButton", "bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateScrollBar";
tmpDef.description = "This function creates a GUI scrollbar. You can use the functions guiScrollPaneSetHorizontalScrollPosition, guiScrollPaneSetVerticalScrollPosition, guiScrollPaneGetHorizontalScrollPosition and guiScrollPaneGetVerticalScrollPosition to read and modify the scrollbar's scroll.";
tmpDef.returnType = "gui-scrollbar";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool horizontal", "bool relative", "[gui-element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollBarGetScrollPosition";
tmpDef.description = "This function gets the scroll amount of a scrollbar as a percentage.";
tmpDef.returnType = "float";
tmpDef.args = ["gui-scrollBar theScrollBar"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollBarSetScrollPosition";
tmpDef.description = "This function is used to set the scroll amount of a scrollbar as a percentage.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-scrollBar theScrollBar", "float amount"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateScrollPane";
tmpDef.description = "This creates a GUI scroll pane.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool relative", "[gui-element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollPaneGetHorizontalScrollPosition";
tmpDef.description = "This function is used to get the position of a horizontal scroll pane as a percentage.";
tmpDef.returnType = "float";
tmpDef.args = ["element horizontalScrollPane"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollPaneGetVerticalScrollPosition";
tmpDef.description = "This function is used to get the position of a vertical scroll pane as a percentage.";
tmpDef.returnType = "float";
tmpDef.args = ["element verticalScrollPane"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollPaneSetHorizontalScrollPosition";
tmpDef.description = "This function is used to set the position of a horizontal scroll pane as a percentage.";
tmpDef.returnType = "bool";
tmpDef.args = ["element horizontalScrollPane", "float position"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollPaneSetScrollBars";
tmpDef.description = "This function allows a scrollpane's scrollbars to be forced on, or returned to default.";
tmpDef.returnType = "bool";
tmpDef.args = ["element scrollPane", "bool horizontal", "bool vertical"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiScrollPaneSetVerticalScrollPosition";
tmpDef.description = "This function is used to set the position of a vertical scroll pane as a percentage.";
tmpDef.returnType = "bool";
tmpDef.args = ["element verticalScrollPane", "float position"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateStaticImage";
tmpDef.description = "This function creates a static image using a .png image in the resource.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string path", "bool relative", "[element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiStaticImageGetNativeSize";
tmpDef.description = "This function gets the native size of image. That means the original size in pixels of the image file.";
tmpDef.returnType = "int, int";
tmpDef.args = ["element theImage"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiStaticImageLoadImage";
tmpDef.description = "This function allows you to change the image in GUI static image element to another one. Tip: If you set other images as children you will have to use setElementCallPropagationEnabled to only affect the parent image.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "string filename"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateTabPanel";
tmpDef.description = "This function creates a Tab Panel, which acts as a template to create Tabs upon.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "bool relative", "[element parent = nil ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGetSelectedTab";
tmpDef.description = "This function returns the currently selected tab in the specified tab panel.";
tmpDef.returnType = "element";
tmpDef.args = ["element tabPanel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiSetSelectedTab";
tmpDef.description = "This function is used to change the currently selected tab in a tab panel.";
tmpDef.returnType = "bool";
tmpDef.args = ["element tabPanel", "element theTab"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateTab";
tmpDef.description = "This function creates a tab on a pre-existing tab panel. A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.  Tabs are sorted on a tab panel in the order that they are created.";
tmpDef.returnType = "element";
tmpDef.args = ["string text", "element parent"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiDeleteTab";
tmpDef.description = "This function deletes a tab from a tab panel.";
tmpDef.returnType = "bool";
tmpDef.args = ["element tabToDelete", "element tabPanel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateLabel";
tmpDef.description = "This function is for creating a new GUI label.  A label is simply a piece of text that cannot be edited by the user. If you would like to have a bigger text you'd have to change its font because font size is not supported.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string text", "bool relative", "[element parent = nil]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelGetFontHeight";
tmpDef.description = "This function returns the height of the font currently used in a GUI text label.";
tmpDef.returnType = "float";
tmpDef.args = ["element theLabel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelGetTextExtent";
tmpDef.description = "This function returns the extent, or width, of the current text inside a GUI text label.";
tmpDef.returnType = "float";
tmpDef.args = ["element theLabel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelSetColor";
tmpDef.description = "This function allows you to set the color of a GUI label.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "int red", "int green", "int blue"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelSetHorizontalAlign";
tmpDef.description = "This function sets the horizontal alignment of a text label.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theLabel", "string align", "[ bool wordwrap = false ]"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelSetVerticalAlign";
tmpDef.description = "This function sets the vertical alignment of a text label.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theLabel", "string align"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiLabelGetColor";
tmpDef.description = "This function gets the color of a label.";
tmpDef.returnType = "int int int";
tmpDef.args = ["gui-element theLabel"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiCreateWindow";
tmpDef.description = "This function is for creating a new GUI window.  This provides a base for other gui elements to be created within.  However, windows do not have a parent and cannot be created in any GUI elements.";
tmpDef.returnType = "element";
tmpDef.args = ["float x", "float y", "float width", "float height", "string titleBarText", "bool relative"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiWindowSetMovable";
tmpDef.description = "This function allows you to specify whether or not a user can move a GUI window.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "bool status"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiWindowSetSizable";
tmpDef.description = "This function enables or disables user resizing of a GUI window.";
tmpDef.returnType = "bool";
tmpDef.args = ["element theElement", "bool status"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

// 1.5.6
tmpDef = new MTAFunction;
tmpDef.label = "guiMemoIsReadOnly";
tmpDef.description = "This function checking if memo is read only or no.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-memo theMemo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditIsReadOnly";
tmpDef.description = "This function checks if an edit box is read-only.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-edit guiEdit"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoGetVerticalScrollPosition";
tmpDef.description = "This function is used to get the vertical scroll position of a memo as a percentage.";
tmpDef.returnType = "float";
tmpDef.args = ["gui-memo theMemo"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiMemoSetVerticalScrollPosition";
tmpDef.description = "This function is used to set the vertical scroll position of a memo as a percentage.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-memo theMemo", "float position"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditGetMaxLength";
tmpDef.description = "This function returns the maximum text length that can be typed within an edit box.";
tmpDef.returnType = "int";
tmpDef.args = ["gui-edit guiEdit"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiEditIsMasked";
tmpDef.description = "This function checks if an edit box is masked.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-edit guiEdit"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiWindowIsMovable";
tmpDef.description = "This function checks if a GUI window is movable.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-window guiWindow"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiWindowIsSizable";
tmpDef.description = "This function checks if a GUI window is sizable.";
tmpDef.returnType = "bool";
tmpDef.args = ["gui-window guiWindow"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

//1.5.7 by Vadya963
tmpDef = new MTAFunction;
tmpDef.label = "guiBlur";
tmpDef.description = "This function defocuses a focused GUI element. Used primarily for edit fields and memos.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiFocus";
tmpDef.description = "This function focuses a defocused GUI element. Used primarily for edit fields and memos.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiElement"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxGetItemCount";
tmpDef.description = "This function returns the number of items in a combo box.";
tmpDef.returnType = "int";
tmpDef.args = ["element comboBox"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxIsOpen";
tmpDef.description = "This function returns the state of combobox.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiComboBoxSetOpen";
tmpDef.description = "This function set combo box state as open or close.";
tmpDef.returnType = "bool";
tmpDef.args = ["element comboBox"," bool state"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListGetSelectionMode";
tmpDef.description = "This function retrieves the current selection mode of a gui gridlist.";
tmpDef.returnType = "int";
tmpDef.args = ["gui-Element gridlist"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);

tmpDef = new MTAFunction;
tmpDef.label = "guiGridListIsSortingEnabled";
tmpDef.description = "This function checks whether the gridlist sorting is enabled or disabled.";
tmpDef.returnType = "bool";
tmpDef.args = ["element guiGridlist"];
tmpDef.argDescs = {};
tmpDef.scriptSide = ScriptSide.Client;
GuiFunctionDefinitions.push(tmpDef);