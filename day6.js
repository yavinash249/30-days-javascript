// activity 1

const arr = [1,2,3,4,5,6,7,8]
console.log(arr)
console.log(arr[0],arr[4])
// activity 2

arr.push(2)
arr.pop();
arr.shift();
arr.unshift(1);
console.log(arr);


// activity 3
const array1= [1,3,4,6]
const map1 = array1.map((x)=> x*2);
console.log(map1)

let filterarr = array1.filter((val)=> {
    return val % 2 === 0;
})
console.log(filterarr)


let reduceArr = array1.reduce((res,curr)=> {
    return res + curr;
})
console.log(reduceArr);



// activity 4
for(let i=0; i<array1.length; i++){
    console.log(array1[i])
}

array1.forEach(Element=> {
    console.log(Element);
})

// activity 5

let mutidimentionalArr =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(mutidimentionalArr[2][1]);