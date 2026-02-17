//Topic: Accessor Properties (Getter & Setter)
//Assignment an Accessor Properties
console.log("Assignment an Accessor Properties");
var person = {
    firstName: "Bhavitha",
    lastName: "Mandala",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing getter-enumerable getter are use the for...in loop 
console.log(person.fullName);

var student = {
    marks: [60, 70, 80],

    get totalMarks() {
        return this.marks[0] + this.marks[1] + this.marks[2];
    }
};

for (var key in student) {
    console.log(key);
}

// code 3: Example Using Object.defineProperty()
var person = {
    birthYear: 2002
};

Object.defineProperty(person, "age", {
    get: function () {
        return 2025 - this.birthYear;
    },
    enumerable: true,
    configurable: true
});

console.log(person.age);