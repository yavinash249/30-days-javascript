// acitivity 1

let name = "avinash";
let age = 25;
console.log(`Hi , I am ${name} and I am ${age} years old`)
console.log(`Hi \nI am ${name} \nI am ${age} years old`)

// acitivity 2
let a, b, c, rest;
[a,b,c,rest]=[1,2,3,4,5,]
console.log(a,b)

let Book ={
    title : "concept of physics",
    author: "HC Verma",
    year: "1999",
}
let {title, author, year} = Book
console.log(`Book: ${title} \nAuthor: ${author} \nYear: ${year}`)


// acitivity 3

let arr1=[1,2,3,4,5]
let arr2= [6,7,8,9,10,]
let newarr = [...arr1, ...arr2]
console.log(newarr)


function sum(...num){
    return num.reduce((res, curr)=> res +curr,0)
}
console.log(sum(2,3,4,5))

function product(c,d=1){
    return c*d
}
console.log(product(2))
console.log(product(3,4))

// activty 5

let Books = {
    title: "physical books",
    author: "megha sharma",
    year: 2000,
    getTitleandAuthor:()=>{
        return`${Books.title}by${Books.author}`
    },

    getYear:()=>{
        return `this book was published on  ${Books.year} not in ${year}`
    },
    getString: function(){
        return `Book ${Books.title} by author ${Books.author} was published on ${Books.year}`
    }
}
console.log(Books)
console.log(Books.getString())
console.log(Books.getYear(2023))


let key1 = "name";
let key2 = "age";
let vaule1= "avinash yadav";
let vaule2 = "25 year"
let person= {
    key1: vaule1,
    key2: vaule2
}
console.log(person)
