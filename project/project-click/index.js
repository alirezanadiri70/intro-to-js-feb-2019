// we need colors to change the button to 
const colors = ['blue','green','yellow','purple'];
colors.push('orange');
// we need a color to start with 
let currentColor = 0;
let nextColor = 1;
// we need a button to click
const button = document.getElementsByTagName('button')[0];

//we need to tell the button what to do when click it

button.addEventListener('click',whenClicked);
function whenClicked(){
    setTimeout( () => {
         button.style.backgroundColor = colors[currentColor];
         currentColor++;
         if(currentColor>=colors.length){
            currentColor = 0;
         }
    },1000);
}
const button_1 = document.getElementById('bt-next')[1];
button_1.addEventListener('click',clickedNext);
function clickedNext(){
    setTimeout( () => {
         button_1.style.backgroundColor = colors[nextColor];
         nextColor++;
         if (nextColor >= colors.length){
          currentColor = 0;
        }
    },1000);
}