// cm to inch function
function cmToIn(cm) {
    return cm / 2.54;
}

// inch to cm function
function inToCm(inch) {
    return inch * 2.54;
}

// convert function
function convert(fn, value) {
    return fn(value);
}

// Function calls
console.log(convert(cmToIn, 10));   
console.log(convert(inToCm, 10));   