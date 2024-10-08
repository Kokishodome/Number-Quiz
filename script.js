console.log(11);
let secretNumber=Math.floor(Math.random()*10+1)
let hint=document.getElementById('hint')
let hp=3
let playerInput=document.getElementById('playerInput')
console.log(hp);
let nickname='Hawglast1'
let hpTitle=document.getElementById('hpTitle')
console.log(nickname+' is at 100lv');
console.log(nickname+' has 5 friends');
let submitButton=document.getElementById('submitButton')
console.log(submitButton);
hpTitle.innerHTML='❇️ '.repeat(hp)
submitButton.onclick=function(){
    if(playerInput.value==secretNumber){
        console.log('YAY you win!');
        hpTitle.innerHTML=('🎉🎉🎉')
    }
    else{
        console.log('Oh no! You got it wrong!');
        hp=hp-1
        if(hp==0){
        hpTitle.innerHTML=('👁👄👁...bruh')
        submitButton.disabled=true
        }
        
        else{
            hpTitle.innerHTML='❇️ '.repeat(hp)

        }
        if(secretNumber>playerInput.value){
            hint.innerHTML='secret number is bigger'
            
        }
        else{
            hint.innerHTML='secret number is smaller'
        }
    }
    
}

