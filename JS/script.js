let input = document.getElementsByClassName('sendNumber')[0];
const buttonDrawn = document.getElementsByClassName('buttonDrawn')[0];
const buttonReplay = document.getElementsByClassName('replay')[0];
const drawnNumber = document.getElementById('drawnNumber');
const backWindow = document.getElementById('backWindow');
let h3 = document.getElementsByClassName('number')[0];
const closeWindow = document.getElementsByClassName('close')[0];

function raffle(){
    return Math.floor(Math.random() * input.value); 
};

function drawnEvent(){
        raffle();
        h3.innerHTML = raffle();
};

buttonDrawn.addEventListener('click', function(){
    if(input.value == ''){
    return alert('Por favor, insira um número.');
    }
    else{
    drawnEvent();
    changeWindow();
    };
});

function changeWindow(){
    drawnNumber.classList.toggle('open');
    backWindow.classList.toggle('open');
};

closeWindow.addEventListener('click', function(){
    changeWindow();
});

buttonReplay.addEventListener('click', function(){
    drawnEvent();
});