// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var subtractTwo = function(arg1, arg2){
    return(arg1-arg2);
};

var GPACalculator = function(arg1, arg2, arg3, arg4, arg5, arg6){
    var gradeOne = switchFunction(arg1);
    var gradeTwo = switchFunction(arg3);
    var gradeThree = switchFunction(arg5);

    var toReturn = ((gradeOne * arg2) + (gradeTwo * arg4) + (gradeThree * arg6))/(arg2 + arg4 + arg6);
    return toReturn;
}

var switchFunction = function(arg1){
    switch(arg1){
        case arg1 = "A":
            arg1 = 4.0;
            break;

        case arg1 = "B":
            arg1 = 3.0;
            break;

        case arg1 = "C":
            arg1 = 2.0;
            break;

        case arg1 = "D":
            arg1 = 1.0;
            break;

        case arg1 = "F":
            arg1 = 0.0;
            break;
    }
    return arg1;
}