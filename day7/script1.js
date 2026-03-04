var a="Getter program : A getter allows you to define a function that will be called whenever the property is accessed.This can be useful when you want to compute or transform the value dynamically";
console.log(a);
//type1: Data Properties
var obj={
    firstName: "harsha",
    lastName: "bethi",
    get fullName(){
        return this.firstNamen+" "+this.lastName;
    }

}
console.log(obj.fullName);
"use strict"
var obj={
    name: "harsha"
}
console.log(obj);
Object.defineProperty(obj,"age",{
    value: 23
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
console.log(Object.getOwnPropertyDescriptor(obj,"age"));
"use strict"
var obj = {
    name: "Krishna"
};
console.log(obj);
Object.defineProperties(obj, {
    "age": {
        configurable: true,
        value: 23
    },
    "course": {
        writable: true,
        value: "FRONT END"
    }
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptors(obj));