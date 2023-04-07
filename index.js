//Q1 =  
var age = parseInt(prompt("What is Your age ?"))
console.log("Your age is" + " " + age)
if (age > 17) {
  console.log("You are allowed to cast vote")
} else {
  console.log("Sorry You can not cast vote")
}

//Q2 Switches



let fruit = "apple";
let color;

switch (fruit) {
  case "banana":
    color = "yellow";
    break;
  case "apple":
    color = "red";
    break;
  case "orange":
    color = "orange";
    break;
  default:
    color = "unknown";
}

console.log(`The color of the ${fruit} is ${color}`);



//