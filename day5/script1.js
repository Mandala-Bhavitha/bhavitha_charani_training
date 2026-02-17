//Assignment 1: Student Object – Total Marks, Result, Average
var student = {
    firstName: "Siddu",
    lastName: "Bhavitha",
    age: 23,
    marks: [50, 60, 70, 50, 60],

    getTotalMarks: function () {
        var total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    },

    getAverage: function () {
        return this.getTotalMarks() / this.marks.length;
    },

    getResult: function () {
        if (this.getAverage() >= 40) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
};
console.log("Total Marks:", student.getTotalMarks());
console.log("Average:", student.getAverage());
console.log("Result:", student.getResult());