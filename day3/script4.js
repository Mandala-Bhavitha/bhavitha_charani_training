var students=[
    {
        name: "abc",
        age:23,
        marks:[30,40,50,60]
    },
    {
        name:"bcd",
        age: 22,
        marks:[40,40,60,60]
    },
    {
        name:"cde",
        age:23,
        marks:[70,40,50,60]
    },
    {
        name:"efg",
        age:22,
        marks:[40,30,30,30]
    }
];
console.table(students);
var x=0;
while(x < students.length){
    var sum=0, y=0;
    while(y < students[x].marks.length){
        sum+=students[x].marks[y];
        y++;
    }
    students[x].totalMarks=sum;
    var avg = sum / students[x].marks.length;
    students[x].averageMarks = avg;

    // pass or fail (pass mark = 40)
    if (avg >= 40) {
        students[x].result = "Pass";
    } else {
        students[x].result = "Fail";
    }
    x++;
}
console.table(students);
    