// Getter program : A getter allows you to define a function that will be called whenever the property is accessed.This can be useful when you want to compute or transform the value dynamically
//type1: Data Properties
var obj={
    firstName: "Bhavitha",
    lastName: "Mandala",
    get fullName(){
        return this.firstNamen+" "+this.lastName;
    }

}
console.log(obj.fullName);// we calling with the property 


//To change any attribute of a property, we can use object.defineProperty() method.
/*The Object.defineProperty() method accepts 3 arguments :

1. An Object

2. A Property name of the object

3. A Property Descriptor object that has 4 attributes :

(configurable, enumerable, writable,value)*/
//code 1:
"use strict"
var obj={
    name: "Bhavitha"
}
console.log(obj);
Object.defineProperty(obj,"age",{
   /* configurable: true,// fixed the value and default true
    writable: false,//default is true*/
    value: 23
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
console.log(Object.getOwnPropertyDescriptor(obj,"age"));
// code 2:
"use strict"   // strict mode

var obj = {
    name: "Bhavitha"
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