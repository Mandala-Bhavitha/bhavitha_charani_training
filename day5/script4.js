//Assignment 4: Employee Monthly Salary (Based on Working Days)
function Employee(name, salary, designation, workingDays, month) {
    this.name = name;
    this.salary = salary;        
    this.designation = designation;
    this.workingDays = workingDays;
    this.month = month;
    // Method to calculate monthly salary based on working days
    this.getMonthlySal = function () {
        var daysInMonth = 30;                 
        var perDaySalary = this.salary / daysInMonth;
        return perDaySalary * this.workingDays;
    };
}
var emp1 = new Employee("Krishna", 1200000, "Software Engineer", 20, "Jun");
console.log("Employee Name:", emp1.name);
console.log("Designation:", emp1.designation);
console.log("Month:", emp1.month);
console.log("Salary for Working Days:", emp1.getMonthlySal());