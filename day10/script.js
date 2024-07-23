document.querySelector('button').addEventListener('click',()=> {
    document.querySelector('.change').innerText = 'hey this is 30 days challenge'
});

document.querySelector('img').addEventListener('dblclick',()=>{
    document.querySelector('img').classList.add('hide');
})

// acitivity 2

document.querySelector('.mouseover').addEventListener('mouseover',()=> {
    document.querySelector('.mouseover').style.backgroundColor= "blue";
})

document.querySelector('.mouseover').addEventListener('mouseout',()=>{
    document.querySelector('.mouseover').style.backgroundColor = "green";
})

// acitivity 3
document.querySelector('input').addEventListener('keydown',(key)=> {
    console.log(key);
})

document.querySelector('input').addEventListener('keyup',()=> {
    document.querySelector('.task6').innerText = document.querySelector('input').value;
})

// acitivity 4

document.querySelector('.submit').addEventListener('click',(evt)=> {
    evt.preventDefault();
    console.log('Username:' ,document.querySelector('.username').value);
    console.log('Email:' ,document.querySelector('.email').value);
})

// activity 5

document.getElementById('fruits').addEventListener('click',(e)=> {
    console.log(`you clicked on fruit: ${e.target.innerText}`);
});


const parent = document.getElementById("parent");
const addButtons = document.getElementById("addButton");
parent.addEventListener("click",(e)=>{
    e.target.tagName == "BUTTON" && alert("button clicked")
});
addButtons.addEventListener("click",()=> {
    const newButton = document.createElement("button");
    newButton.textContent = "New Button";
    document.getElementById("parent").appendChild(newButton);
})








