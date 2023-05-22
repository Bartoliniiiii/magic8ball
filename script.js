//font-family: 'Dancing Script', cursive;
const ballImg=document.querySelector('img');
const input=document.querySelector('input');
const answer=document.querySelector('.answer');
const error=document.querySelector('.error');


const answers=[
    "Tak",
    "Nie",
    "Pewnie że tak",
    "Zdecydowanie nie",
    "Muszę pomyśleć, zapytaj mnie za chwilę jeszcze raz",
    "Nie chcesz znać odpowiedzi na to pytanie...",
    "Jeśli tego naprawdę chcesz to tak",
]
const shake=()=>{
    ballImg.classList.add('shake-animation');

    setTimeout(checkInput,1000);
    
}



const checkInput=()=>{
    if(input.value !=='' && input.value.slice(-1)==='?'){
        generateAnswer();
        error.textContent=''
    }else if(input.value !=='' && input.value.slice(-1)!=='?'){
        error.textContent='Pytanie musi być zakończone znakiem "?".';
        answer.textContent=''
    }else{
        error.textContent='Musisz zadać jakieś pytanie!';
        answer.textContent=''
    }
    ballImg.classList.remove('shake-animation')
}

const generateAnswer=()=>{

    const number=Math.floor(Math.random()*answers.length);
    answer.innerHTML=`<span>Odpowiedź:</span>' ${answers[number]}`
    
    
}



ballImg.addEventListener('click', shake)

