lodash-mixins
=============

Some useful mixins for [lodash](http://lodash.com/).

###`_.trim()`

Removes leading and trailing whitespace from a string.

####Arguments

 1. value _(string)_: The string to trim.

####Returns

_(string)_: Returns trimmed string if the value was a string, else initial value.

####Example

    _.trim(" hi ");
    // → "hi"
    
    _.trim("hello world");
    // → "hello world"
    
    _.trim([1, 2, 3]);
    // → [1, 2, 3]
    
---

###`_.isNullOrWhiteSpace()`

Checks if a string is empty or consists of whitespace only. 

####Arguments

 1. value _(string)_: The string to inspect.

####Returns

_(boolean)_: Returns `true` if the value is empty or whitespace only, else `false`.

####Example

    _.isNullOrWhiteSpace("hi");
    // → false
    
    _.isNullOrWhiteSpace(" ");
    // → true
    
    _.isNullOrWhiteSpace(null);
    // → true