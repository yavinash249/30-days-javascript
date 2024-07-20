//Activity 1


function checkNum(n){
    if(n % 2 == 0){
        console.log(n + " is even")
    }else{
        console.log(n + " is odd")
    }

} 
checkNum(4)

function squareNum(a){
    let square = a * a;
    console.log("square of" + a + "is" + square)
}
squareNum(6)

//Activity 2

const findmax = function findmax(a,b){
    if(a>b){
        console.log( a + " is maximum")
    }else{
        console.log(b + " is maximum")
    }
}
findmax(9,6)

const concatStr = function concatStr(str1 ,str2){
    return  str1 + str2;
}
console.log(concatStr("hello", "avinash"))


//Activity 3
const sum= (a,b) =>{
    return a + b;
}
console.log(sum(10,8))

const contain = (str,char)=>{
    return str.includes(char)
}
console.log(contain("avinash","q"))

//Activity 4

function product(a , b= 5){
    return a * b;
}
console.log(product(7))

function greet(name ,age = 25){
    console.log("hello " + name + " of age " + age)
}
greet("avinash")

//Activity 5

function callback(){
    console.log("this is me")
}
function HOF(callback,a){
    for(let i=0 ; i<=a; i++){
        callback()
    }
}
console.log(HOF(callback,3))


function higherOrderFunction(fun1, fun2, val){
    const result1 = fun1(val); 
    const result2 = fun2(result1);
    return result2; 
}
function addTwo(x){
    return x + 2;
}
function multiplyThree(x){
    return x * 3;
}

const intialValue = 5;
const finalValue = higherOrderFunction(addTwo,multiplyThree,intialValue);

console.log(finalValue);