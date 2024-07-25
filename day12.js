function throwError(a,b){
    throw SyntaxError('you didnt meet the norms')
    return a + b
}
try {
    throwError(5,6)
} catch (error) {
    console.log(error.message)
}


function divide(a,b){
    if(b == 0){
        throw SyntaxError('you dont meet the norms')
    };
    return a /b;
}
try {
    console.log(divide(8,2))
} catch (error) {
        console.log(error.message)
}

// activity 2

function sum(a,b){
    if(isNan(a) || isNan(b)){
        throw Error('this is not possible')
    }
    return a+b;
}

try {
    console.log(sum(7,8))
} catch (error) {
    console.log(error.message)
}finally{
    console.log('the function is complete')
}


// activity 3
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}
function riskyFunction(){
    throw new CustomError("something went wrong in riskyFunction");
}
try {
    riskyFunction();    
} catch (error) {
    if(error instanceof CustomError){
        console.error(`CustomError caught: ${error.message}`);

    }else{
        console.error(`An unexpected error occurred : ${error.message}`);
    }
}

function check(name){
    if(name === undefined || name.length == 0){
        throw new SyntaxError('you cannot keep it empty');
    }
    return name;
}
try {
    console.log(`the name is ${check()}`);
} catch (error) {
    console.log(error.message);   
}


// Activity 4
function randomPromise(){
        return new Promise((resolve, reject) =>{
            const isSuccess = Math.random() > 0.5;

            setTimeout(()=>{
                if(isSuccess){
                    resolve('Promise resolved successfully')
                }else{
                    reject('Promise rejected');
                }
            })
        },1000)
}

async function randomPromise2(){
    return new Promise((resolve, reject) =>{
        const isSuccess = Math.random() > 0.5;
        setTimeout(()=> {
            if(isSuccess){
                resolve('Promise resolved successfully');
            }else{
                reject('Promise rejected');
            }
        })
    },1000)
}

randomPromise().then(result => console.log(result))
    .catch(error=>console.error(error));
randomPromise2().then(result => console.log(result))
    .catch(error=>console.error(error));    


// acitvity 5
let invalidUrl = 'https://invalid.com/data';

fetch(invalidUrl)
    .then(response=> {
        if(!response.ok){
            throw new Error(`Http error! status : ${response.status}`)
        }
        return response.json();
    })
    .then(data=> {
        console.log('Data',data);
    })
    .catch(error=> {
        console.log(`Fetch error: ${error.message}`)
    });

  const fetchData = async()=> {
    let invalidUrl = 'https://invalid.com/data';
    try {
        const response = await fetch(invalidUrl);
        if(!response.ok){
            throw new Error(`Http error! status : ${response.status}`)
        }
        const data = await response.json();
        console.log('Data;',data);
    }catch(err){
    console.log(`Fetching error: ${err.message}`)
}

};  


fetchData();



















































