document.getElementById('id').innerText = 'this is avinash';
document.querySelector('.color').style.backgroundColor = "red";

const div = document.createElement('div');
div.append('this div is append');
document.querySelector('body').appendChild(div);

const li = document.createElement('li');
li.append('Appended')

const ul = document.createElement('ul')[0];
if(ul){
    ul.appendChild(li);
}

// 
let remove = document.querySelector('.removelast')
lastElement.lastElementChild.remove();

// 
document.querySelector('img').setAttribute('src','https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
document.getElementById('text').style.color = 'green';


// 

document.querySelector('button').addEventListener('click',()=> {
    document.querySelector('.change').innerText = 'change the approch for better learning';
})

let box = document.querySelector('.box');
box.addEventListener('mouseover',()=>{
    box.style.border = '2px solid green';
})
box.addEventListener('mouseout', ()=> {
    box.style.border = '2px solid black'
})

