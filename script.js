let increament = document.querySelector("#increment");
let decreament = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener('click', ()=>{
    counter++;
    counterValue.innerText = counter;
    if(counterValue.innerText > 0) {
        counterValue.style.color = '#3ddcef'; 
    }
    else if(counterValue.innerText == 0) {
        counterValue.style.color = '#000';
    } else {
        counterValue.style.color = 'red';
    }
    counterValue.animate([
        {
            opacity: '0.5'
        },
        {
            opacity: '1,0'
        }
    ], {duration: 1000, fill: 'forwards'});
});

decrement.addEventListener('click', ()=>{
    counter--;
    counterValue.innerText = counter;
    if(counterValue.innerText > 0) {
        counterValue.style.color = '#3ddcef'; 
    }
    else if(counterValue.innerText == 0) {
        counterValue.style.color = '#000';
    } else {
        counterValue.style.color = 'red';
    }
    counterValue.animate([
        {
            opacity: '0.5'
        },
        {
            opacity: '1,0'
        }
    ], {duration: 1000, fill: 'forwards'});
});

reset.addEventListener('click', ()=>{
    counter = 0;
    counterValue.innerText = counter;
    if(counterValue.innerText > 0) {
        counterValue.style.color = '#3ddcef'; 
    }
    else if(counterValue.innerText == 0) {
        counterValue.style.color = '#000';
    } else {
        counterValue.style.color = 'red';
    }
    counterValue.animate([
        {
            opacity: '0.5'
        },
        {
            opacity: '1,0'
        }
    ], {duration: 1000, fill: 'forwards'});
});

