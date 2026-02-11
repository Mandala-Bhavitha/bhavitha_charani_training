console.log("Example of conditional statements");
var a=40;
console.log("Val of a ",a);
if(a < 30){
    console.log("a is > 30");
}
else{
    console.log("a is < 30");
}

// the Assignment 1 in Day2 
console.log("The BMI program ")
var h=1.72;
var w=70;
var bmi=w/(h*h);
console.log("The BMI value is ",bmi);
if(bmi < 18.5){
    console.log("under weight");
}else if(bmi >=18.5 && bmi <= 24.9){
    console.log("Healthy weight");
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("Over weight")
}else{
    console.log("Bmi Obesity");
}
// Switch statements 
console.log("By using the switch statemnts");
let weight = 70;   
let height = 1.75;

let bmi1 = weight / (height * height);
let category = "";

switch (true) {
  case bmi < 18.5:
    category = "Underweight";
    break;

  case bmi >= 18.5 && bmi < 25:
    category = "Normal weight";
    break;

  case bmi >= 25 && bmi < 30:
    category = "Overweight";
    break;

  case bmi >= 30:
    category = "Obesity";
    break;

  default:
    category = "Invalid BMI";
}

console.log("BMI:", bmi.toFixed(2), "-", category);



// Assignment 2
console.log("The Leap year or not");
let year = 2020;
let month = 2;
let days;

if (month === 2) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days = 29;
  } else {
    days = 28;
  }
} else if (
  month === 1 || month === 3 || month === 5 ||
  month === 7 || month === 8 || month === 10 ||
  month === 12
) {
  days = 31;
} else {
  days = 30;
}

console.log("Number of days:", days);