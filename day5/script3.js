//Assignment 3: Students with Total Marks & Average %
var student = {
    name: "Siddu",
    marks: [60, 70, 80, 90, 50],
    getTotalMarks: function () {
        var total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    },
    getAverage: function () {
        return this.getTotalMarks() / this.marks.length;
    }
};
console.log("Total Marks:", student.getTotalMarks());
console.log("Average %:", student.getAverage());