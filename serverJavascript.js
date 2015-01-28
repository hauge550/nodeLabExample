// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.addingTwo = function(arg1, arg2){
    return (arg1 + arg2);
};

exports.GPACalculator = function(arg1, arg2, arg3, arg4, arg5, arg6){
    var gradeOne = switchFunction(arg1);
    var gradeTwo = switchFunction(arg3);
    var gradeThree = switchFunction(arg5);

    toReturn = ((gradeOne * Number(arg2)) + (gradeTwo * Number(arg4)) + (gradeThree * Number(arg6)))/(Number(arg2) + Number(arg4) + Number(arg6));
    return toReturn;
};

var switchFunction = function(arg1){
    var result = -1;
    switch(arg1){
        case 'A':
            return 4.0;
            break;
        case 'B':
            return 3.0;
            break;
        case 'C':
            return 2.0;
            break;
        case 'D':
            return 1.0;
            break;
        case 'F':
            return 0.0;
            break;
        default:
            return -1;
            break;
    }
    //   return(result);
};
exports.ifFunction = function(arg1){
    if (arg1=='A'){
        return 4.0;
    }else if (arg1=='B'){
        return 3.0;
    }else if (arg1=='C'){
        return 2.0;
    }else if (arg1=='D'){
        return 1.0;
    }else if (arg1=='F'){
        return 0.0;
    }else{
        return -1;
    }
};