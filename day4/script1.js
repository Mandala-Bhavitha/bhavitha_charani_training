function doSomething(...values) {
    let result = {
        num: 0,
        bool: [],
        str: []
    };
    for (let v of values) {
        if (typeof v === "number") {
            result.num += v;
        } 
        else if (typeof v === "boolean") {
            result.bool.push(v);
        } 
        else if (typeof v === "string") {
            for (let ch of v) {
                result.str.push(ch);
            }
        }
    }
    return result;
}
console.log(doSomething(2, "hey", 4, true, "Bhavitha"));