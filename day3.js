// Activity 1
// tast 1 and 2 if else statements

let a = 20
if(a > 0){
    console.log(a + " it is positive number")
}
else if(a < 0){
    console.log(a + " it is negative number")
}else{
    console.log(a + " it is netural number")
}

let age = 25
if(age>18){
    console.log("your are eligible to vote")
}else{
    console.log("your are not eligible to vote")
}

// Activity 2
// task 3 nested if else statements
let b = 30
let c = 45
let d = 35
if (c> b && c>d ){
    console.log(c  + " is greater ")
}else if( d>c ){
    console.log(d +"it is greater ")
}else(
    console.log(c + "it is less ")
)




// Activity 3
// task 4 and 5 switch statements

switch (9){
    case 1:
        console.log("sunday")
        break;

    case 2:
        console.log("Monday")
        break;

    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;

    default:
        console.log("Enter valid number");
        break;    
}

let marks = 100;

switch(true){
    case (marks <= 20):
        console.log("Grade D")
        break;

    case (marks <= 40):
        console.log("Grade C")
        break;

    case (marks <= 60):
        console.log("Grade B")
        break;

    case (marks <= 80):
        console.log("Grade A")
        break;
    case (marks <=100):
        console.log("Grade A+")
        break;    
}


// Activity 4
// conditional operators

let num = 4
num%2 === 0 ? console.log("Number is Even") : console.log("Number is Odd");


// Activity 5
// combing operators
let year = 2022
if (year % 4 == 0  && year % 100 !== 0  || year % 400 == 0){
    console.log(year + ' is leap year')
}else{
    console.log(year + 'is not leap year')
}