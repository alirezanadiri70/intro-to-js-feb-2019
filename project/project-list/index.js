const h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.innerText = "To Do List";
const par = document.createElement('p');
document.body.appendChild(par);
par.innerText = "What is on your list?";
const listInput = document.createElement('input');
document.body.appendChild(listInput);
const button = document.createElement('button');
document.body.appendChild(button);
const ul = document.createElement('ul');
document.body.appendChild(ul);
button.innerText = "Submit";

button.addEventListener('click',addToList);
function addToList(){
    const li = document.createElement('li')
    ul.appendChild(li);

    li.innerText = listInput.value;
    listInput.value = '';
}