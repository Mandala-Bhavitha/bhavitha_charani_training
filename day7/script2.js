var a="Accessor Properties (Getter & Setter)";
console.log(a);
console.log("Assignment an Accessor Properties");
var person = {
    firstName: "harsha",
    lastName: "bethi",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
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