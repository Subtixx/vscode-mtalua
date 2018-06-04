import * as vscode from 'vscode';

import { LuaFunction, LuaMethod, LuaClass, LuaConst } from './defs';

export var luaFunctions = new Array<LuaMethod>();
export var luaClasses = new Array<LuaClass>();
export var luaConsts = new Array<LuaConst>();

var tmpClass = new LuaClass("coroutine");
tmpClass.methods.push(new LuaMethod("create"));
tmpClass.methods.push(new LuaMethod("resume"));
tmpClass.methods.push(new LuaMethod("running"));
tmpClass.methods.push(new LuaMethod("status"));
tmpClass.methods.push(new LuaMethod("wrap"));
tmpClass.methods.push(new LuaMethod("yield"));

/** 
 * #####################
 * LUA LIBRARY FUNCTIONS
 * #####################
 */

tmpClass = new LuaClass("string");
tmpClass.methods.push(new LuaMethod("byte", "Returns the internal numeric codes of the characters s[i], s[i+1], ..., s[j]. The default value for i is 1; the default value for j is i. These indices are corrected following the same rules of function string.sub."));
tmpClass.methods.push(new LuaMethod("char", "Receives zero or more integers. Returns a string with length equal to the number of arguments, in which each character has the internal numeric code equal to its corresponding argument."));
tmpClass.methods.push(new LuaMethod("dump", "Returns a string containing a binary representation (a binary chunk) of the given function, so that a later load on this string returns a copy of the function (but with new upvalues). If strip is a true value, the binary representation may not include all debug information about the function, to save space."));
tmpClass.methods.push(new LuaMethod("find", "Looks for the first match of pattern (see §6.4.1) in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends; otherwise, it returns nil. A third, optional numeric argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain \"find substring\" operation, with no characters in pattern being considered magic. Note that if plain is given, then init must be given as well."));
tmpClass.methods.push(new LuaMethod("format", "Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). The format string follows the same rules as the ISO C function sprintf. The only differences are that the options/modifiers *, h, L, l, n, and p are not supported and that there is an extra option, q."));
tmpClass.methods.push(new LuaMethod("gmatch", "Returns an iterator function that, each time it is called, returns the next captures from pattern (see §6.4.1) over the string s. If pattern specifies no captures, then the whole match is produced in each call."));
tmpClass.methods.push(new LuaMethod("gsub", "Returns a copy of s in which all (or the first n, if given) occurrences of the pattern (see §6.4.1) have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred. The name gsub comes from Global SUBstitution."));
tmpClass.methods.push(new LuaMethod("len", "Receives a string and returns its length. The empty string has length 0. Embedded zeros are counted."));
tmpClass.methods.push(new LuaMethod("lower", "Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. All other characters are left unchanged. The definition of what an uppercase letter is depends on the current locale."));
tmpClass.methods.push(new LuaMethod("match", "Looks for the first match of pattern (see §6.4.1) in the string s. If it finds one, then match returns the captures from the pattern; otherwise it returns nil. If pattern specifies no captures, then the whole match is returned. A third, optional numeric argument init specifies where to start the search; its default value is 1 and can be negative. "));
tmpClass.methods.push(new LuaMethod("rep", "Returns a string that is the concatenation of n copies of the string s separated by the string sep. The default value for sep is the empty string (that is, no separator). Returns the empty string if n is not positive."));
tmpClass.methods.push(new LuaMethod("reverse", "Returns a string that is the string s reversed. "));
tmpClass.methods.push(new LuaMethod("sub", "Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). In particular, the call string.sub(s,1,j) returns a prefix of s with length j, and string.sub(s, -i) (for a positive i) returns a suffix of s with length i."));
tmpClass.methods.push(new LuaMethod("upper", "Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. The definition of what a lowercase letter is depends on the current locale."));
luaClasses.push(tmpClass);

tmpClass = new LuaClass("table");
tmpClass.methods.push(new LuaMethod("concat", "Given a list where all elements are strings or numbers, returns the string list[i]..sep..list[i+1] ··· sep..list[j]. The default value for sep is the empty string, the default for i is 1, and the default for j is #list. If i is greater than j, returns the empty string.", ["list", "[sep]", "[i]", "[j]"]));
tmpClass.methods.push(new LuaMethod("insert", "Inserts element value at position pos in list, shifting up the elements list[pos], list[pos+1], ···, list[#list]. The default value for pos is #list+1, so that a call table.insert(t,x) inserts x at the end of list t.", ["list", "[pos]", "value"]));
tmpClass.methods.push(new LuaMethod("remove", "Removes from list the element at position pos, returning the value of the removed element. When pos is an integer between 1 and #list, it shifts down the elements list[pos+1], list[pos+2], ···, list[#list] and erases element list[#list]; The index pos can also be 0 when #list is 0, or #list + 1; in those cases, the function erases the element list[pos].", ["list", "[pos]"]));
tmpClass.methods.push(new LuaMethod("sort", "Sorts list elements in a given order, in-place, from list[1] to list[#list]. If comp is given, then it must be a function that receives two list elements and returns true when the first element must come before the second in the final order (so that, after the sort, i < j implies not comp(list[j],list[i])). If comp is not given, then the standard Lua operator < is used instead.", ["list", "[comp]"]));
luaClasses.push(tmpClass);

tmpClass = new LuaClass("math");
tmpClass.methods.push(new LuaMethod("abs", "Returns the absolute value of x. (integer/float)", ["x"]));
tmpClass.methods.push(new LuaMethod("acos", "Returns the arc cosine of x (in radians).", ["x"]));
tmpClass.methods.push(new LuaMethod("asin", "Returns the arc sine of x (in radians).", ["x"]));
tmpClass.methods.push(new LuaMethod("atan", "Returns the arc tangent of y/x (in radians), but uses the signs of both parameters to find the quadrant of the result. (It also handles correctly the case of x being zero.)", ["y", "[x]"]));
tmpClass.methods.push(new LuaMethod("ceil", "Returns the smallest integral value larger than or equal to x.", ["x"]));
tmpClass.methods.push(new LuaMethod("cos", "Returns the cosine of x (assumed to be in radians).", ["x"]));
tmpClass.methods.push(new LuaMethod("deg", "Converts the angle x from radians to degrees.", ["x"]));
tmpClass.methods.push(new LuaMethod("exp", "Returns the value ex (where e is the base of natural logarithms).", ["x"]));
tmpClass.methods.push(new LuaMethod("floor", "Returns the largest integral value smaller than or equal to x.", ["x"]));
tmpClass.methods.push(new LuaMethod("fmod", "Returns the remainder of the division of x by y that rounds the quotient towards zero. (integer/float)", ["x", "y"]));
tmpClass.methods.push(new LuaMethod("log", "Returns the logarithm of x in the given base. The default for base is e (so that the function returns the natural logarithm of x).", ["x", "[base]"]));
tmpClass.methods.push(new LuaMethod("max", "Returns the argument with the maximum value, according to the Lua operator <. (integer/float)", ["x", "..."]));
tmpClass.methods.push(new LuaMethod("min", "Returns the argument with the minimum value, according to the Lua operator <. (integer/float)", ["x", "..."]));
tmpClass.methods.push(new LuaMethod("modf", "Returns the integral part of x and the fractional part of x. Its second result is always a float.", ["x"]));
tmpClass.methods.push(new LuaMethod("rad", "Converts the angle x from degrees to radians.", ["x"]));
tmpClass.methods.push(new LuaMethod("random", "When called without arguments, returns a pseudo-random float with uniform distribution in the range [0,1). When called with two integers m and n, math.random returns a pseudo-random integer with uniform distribution in the range [m, n]. (The value n-m cannot be negative and must fit in a Lua integer.) The call math.random(n) is equivalent to math.random(1,n).", ["[m]", "[n]"]));
tmpClass.methods.push(new LuaMethod("randomseed", "Sets x as the \"seed\" for the pseudo-random generator: equal seeds produce equal sequences of numbers.", ["x"]));
tmpClass.methods.push(new LuaMethod("sin", "Returns the sine of x (assumed to be in radians).", ["x"]));
tmpClass.methods.push(new LuaMethod("sqrt", "Returns the square root of x. (You can also use the expression x^0.5 to compute this value.)", ["x"]));
tmpClass.methods.push(new LuaMethod("tan", "Returns the tangent of x (assumed to be in radians).", ["x"]));

tmpClass.fields.push(new LuaConst("pi", ""));
tmpClass.fields.push(new LuaConst("huge", ""));
luaClasses.push(tmpClass);

tmpClass = new LuaClass("io");
tmpClass.methods.push(new LuaMethod("close"));
tmpClass.methods.push(new LuaMethod("flush"));
tmpClass.methods.push(new LuaMethod("input"));
tmpClass.methods.push(new LuaMethod("lines"));
tmpClass.methods.push(new LuaMethod("open"));
tmpClass.methods.push(new LuaMethod("output"));
tmpClass.methods.push(new LuaMethod("popen"));
tmpClass.methods.push(new LuaMethod("read"));
tmpClass.methods.push(new LuaMethod("tmpfile"));
tmpClass.methods.push(new LuaMethod("type"));
tmpClass.methods.push(new LuaMethod("write"));
luaClasses.push(tmpClass);

tmpClass = new LuaClass("os");
tmpClass.methods.push(new LuaMethod("clock"));
tmpClass.methods.push(new LuaMethod("date"));
tmpClass.methods.push(new LuaMethod("difftime"));
tmpClass.methods.push(new LuaMethod("execute"));
tmpClass.methods.push(new LuaMethod("exit"));
tmpClass.methods.push(new LuaMethod("getenv"));
tmpClass.methods.push(new LuaMethod("remove"));
tmpClass.methods.push(new LuaMethod("rename"));
tmpClass.methods.push(new LuaMethod("setlocale"));
tmpClass.methods.push(new LuaMethod("time"));
tmpClass.methods.push(new LuaMethod("tmpname"));
luaClasses.push(tmpClass);

tmpClass = new LuaClass("package");
tmpClass.methods.push(new LuaMethod("cpath"));
tmpClass.methods.push(new LuaMethod("loaded"));
tmpClass.methods.push(new LuaMethod("loadlib"));
tmpClass.methods.push(new LuaMethod("path"));
tmpClass.methods.push(new LuaMethod("preload"));
tmpClass.methods.push(new LuaMethod("seeall"));
luaClasses.push(tmpClass);

luaFunctions.push(new LuaMethod("assert"));
luaFunctions.push(new LuaMethod("print", "Receives any number of arguments and prints their values to stdout, using the tostring function to convert each argument to a string. print is not intended for formatted output, but only as a quick way to show a value, for instance for debugging. For complete control over the output, use string.format and io.write.", ["..."]));
luaFunctions.push(new LuaMethod("tonumber"));
luaFunctions.push(new LuaMethod("tostring"));
luaFunctions.push(new LuaMethod("type"));
luaFunctions.push(new LuaMethod("unpack"));
luaFunctions.push(new LuaMethod("ipairs", "Returns three values (an iterator function, the table t, and 0) so that the construction\n\n`for i,v in ipairs(t) do body end`\n\nwill iterate over the key–value pairs (1,t[1]), (2,t[2]), ..., up to the first nil value.", ["Table t"]));
luaFunctions.push(new LuaMethod("pairs", "If t has a metamethod __pairs, calls it with t as argument and returns the first three results from the call.\n\nOtherwise, returns three values: the next function, the table t, and nil, so that the construction\n\n`for k,v in pairs(t) do body end`\n\nwill iterate over all key–value pairs of table t.\n\nSee function next for the caveats of modifying the table during its traversal.", ["Table t"]));

luaConsts.push(new LuaConst("_G", "A global variable (not a function) that holds the global environment (see §2.2). Lua itself does not use this variable; changing its value does not affect any environment, nor vice versa."));
luaConsts.push(new LuaConst("_VERSION", "A global variable (not a function) that holds a string containing the running Lua version. The current value of this variable is \"Lua 5.3\"."));
/*luaConsts.push(new LuaConst("math.pi", ""));
luaConsts.push(new LuaConst("math.huge", ""));*/
/*
coroutine\\.(create|resume|running|status|wrap|yield)|
string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|
table\\.(concat|insert|maxn|remove|sort)|
math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?)|
io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|
os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|
package\\.(cpath|loaded|loadlib|path|preload|seeall)|
debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|traceback))

*/