// activity 1
 new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("this is activity 1")
        resolve("success")
    },2000);
 })


 const getPromise = ()=>{
    return new Promise((resolve, reject)=> {
        console.log("this is new promise")
        reject("it is error")
    })
 }

 let promise = getPromise();
 promise.then((res)=>{
    console.log("worked",res);
 });

 promise.catch((err)=>{
    console.log(err);
 });
// activity 2

function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
            if(typeof getNextData === "function"){
                getNextData();
            }
        },2000)
    })
}
getData(1, ()=> getData(2));

// activity 3

async function getDatas(){
    console.log("fetch data 1....");
    await getData(1);
}
getDatas();

async function fetchData(){
    try {
        let result = await getDataWithError();
        console.log("Result: " , result);
    } catch (error) {
        console.log("error: " , error.message);
    }
}

function getDataWithError(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let success = Math.random()> 0.5;
            if(success) {
                resolve("Data fetched successfully")
            }else{
                reject(new Error("Failed to fetch"))
            }
        },2000);
    })
}
fetchData();
// activity 4

const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(apiUrl)
    .then(response=> {
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data=> {
        console.log('Data:',data);
    })
    .catch(error=> {
        console.log('Error:',error);
    });

  async function fetchData(){
        try {
            const response = await fetch(apiUrl);
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`)
            }
            const data = await response.json();
            console.log('Data:',data);
        } catch (error) {
            console.log('error:',error);
        }
  }  
  fetchData();

// activity 5


const apiUrl1 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const apiUrl2 = 'https://api.exchangerate-api.com/v4/latest/USD';
const apiUrl3 = 'https://api.agify.io/?name=michael'; 

const fetch1= fetch(apiUrl1).then(response = response.json());
const fetch2= fetch(apiUrl2).then(response = response.json());
const fetch3= fetch(apiUrl3).then(response = response.json());

Promise.all([fetch1, fetch2, fetch3])
        .then(result=> {
            console.log('Results: ', result);
        })
        .catch(error => {
            console.log('Error: ', error);
        })


        const apiUrl4 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const apiUrl5 = 'https://api.exchangerate-api.com/v4/latest/USD';
        const apiUrl6 = 'https://api.agify.io/?name=michael';        

const fetch4= fetch(apiUrl4).then(response => response.json());
const fetch5= fetch(apiUrl5).then(response => response.json());
const fetch6= fetch(apiUrl6).then(response => response.json());

Promise.race([fetch4, fetch5, fetch6])
.then(result => {
    console.log('First result:', result)
})
.catch(err => {
    console.log('Error:', err)
})





