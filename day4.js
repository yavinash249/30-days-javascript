// Activity 1
// Task 1
function number(){
    for(i=0 ; i<=10 ; i++){
        console.log(i)
    }
}
number();

function tableoffive(){
    let p = 1;
    for( let i = 1 ; i <=10 ; i++){
        p = 5 * i
        console.log(p)
    }
}
tableoffive()



// Activity 2
let sum = 0;
let num = 1
while (sum < 10){
    num += sum
    console.log(num)
    sum++
}

function tentoOne(){
    let b = 10;
    while (b>=1){
        console.log(b)
        b--;
    }
}
tentoOne();


// Activity 3

function printFivetoOne(){
    let c = 1;
    do{
        console.log(c)
        c++;
    }while(c<=5)
}
printFivetoOne()

function factorial(d){
    if(d < 0) return undefined;
    if(d ===0 || d ===1) return 1;

    let result = 1;
    let i = 2;
    do{
        result *= 1;
        i++;
    }
    while(i<=d);
    return result;
}
console.log(factorial(-3));

// Activity 4

function starpattern(a){
    for (let i=0; i<=a; i++){
        for (let j=0; j<=i-1; j++){
            print(" *")
    }
    console.log();
    }   
}
starpattern(5)


// Activity 5

function skipNum(n){
    for (let i=0; i<=n ; i++){
        if(i == 5){
            continue;
        }
        console.log(i)
    }
}
skipNum(10)


function breakNum(n){
    for(let i=0; i<=n; i++){
        if(i== 7){
            console.log(i);
            break;
        }
        console.log(i);
    }

}
breakNum(10);
