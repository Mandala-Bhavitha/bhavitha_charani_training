//Assignment 2: Student Object – getResult and getTotalMarks
var student = {
    firstName: "Siddu",
    lastName: "Bhavitha",
    age: 21,
    marks: [30, 40, 50, 60, 70],

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    getTotalMarks: function () {
        var total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    },

    getResult: function () {
        var average = this.getTotalMarks() / this.marks.length;
        if (average >= 40) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
};
console.log(student);
console.log(student.getFullName());
console.log("Total Marks:", student.getTotalMarks());
console.log("Result:", student.getResult());