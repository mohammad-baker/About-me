"use strict";
let name = prompt('what is you name ??')
alert('welcome '+ name +' lets play a guessing game .')
console.log('his name is ',name);
let score = 0;
//1 my name
let me = prompt('Is my name Mohammad altaeab ??')
me=me.toLowerCase();
if(me ==='yes' || me ==='y' ){
    console.log('yes ',name, ' you are correct');
    alert('yes '+name+ ' you are correct');
score++
}
else if(me ==='no' || me ==='n'){
    console.log('Unfortunately your answer is wrong');
    alert(name +' Unfortunately your answer is wrong');
}
else{
    alert('that not answer you should answer yes or no');
    console.log('try something else');
}
//2 my study 
let study = prompt('Did I study mechanical engineering? ??')
study=study.toLowerCase();
if(study ==='yes' || study ==='y' ){
    console.log('yes ',name, ' you are correct');
    alert('yes '+name+ ' you are correct I\'m mechanical engineer');
score++
}
else if(study ==='no' || study ==='n'){
    console.log('Unfortunately your answer is wrong');
    alert(name +' incorrect I\'m mechanical engineer');
}
else{
    alert('that not answer you should answer yes or no');
    console.log('try something else');
}
//3my garduat 2021
let grad = prompt('Did I graduate lasr year?? ??')
grad=grad.toUpperCase();
if(grad ==='YES' || grad ==='Y' ){
    console.log(name, ' Unfortunately your answer is wrong');
    alert(name+ ' Unfortunately your answer is wrong');

}
else if(grad ==='NO' || grad ==='N'){
    console.log('you are correct');
    alert(name  +' you are correct');
    score++
}
else{
    alert('that not answer you should answer yes or no');
    console.log('try something else');
}
//4
let solid = prompt('do I have skills in solidworks programme ??')
solid=solid.toLowerCase();
if(solid ==='yes' || solid==='y' ){
    console.log('yes ',name, ' you are correct');
    alert('yes '+name+ ' you are correct');
    score++

}
else if(solid ==='no' || solid==='n'){
    alert('Unfortunately your answer is wrong');
    console.log(name +'Unfortunately your answer is wrong I have this skills in solidworks');
}
else{
    alert('that not answer you should answer yes or no');
    console.log('try something else');
}
//5 acas 
let asac = prompt('Did I take a programming course from ASAC ??')
asac=asac.toUpperCase();
    if(asac ==='YES' || asac==='Y' ){
        console.log('yes ',name, ' you are correct');
        alert('yes '+name+ ' you are correct');
        score++
    
    }
    else if(asac ==='NO' || asac==='N'){
        console.log();('Unfortunately your answer is wrong');
        alert(name +'Unfortunately your answer is wrong');
    }
    else{
        alert('that not answer you should answer yes or no');
        console.log('try something else');
    }
    //6th guess a number.
     
    let num = prompt('hey'+name+'can guess a number between (1 to -16) yuo four opportunities to get the correct answer');
     num = parseInt(num)
     
    for (let i=4 ;i>0;i--) {
           if  (num == 10){
        alert("these is the right answer"+num)
        score++;
        break;
        num = parseInt(num)
    }    
 else if(num <= 5){
         num =prompt('the numberis too low, you have'+ i +"to try");
        console.log('the number is too low, you have'+ i +"to try");
 }
    
 else if  (num >10 && num < 16){
         num =prompt('the number is high than,  you have'+ i +"to try");
        console.log('the number is low you have'+ i +"to try");
 }

    
  else if (num <10 && num > 5){
         num =prompt('the number is low than,   you have'+ i +"to try");
        console.log('the number is low you have'+ i +"to try");
  }
    
 else if (num >= 16){
         num =prompt('the number is too high ,you have'+ i +"to try");
        console.log('the number is too high ,you have'+ i +"to try");
 }
 else{
   num= prompt('please write a nimber between 1-16');
   console.log('please write a nimber between 1-16');
 }
console.log(i);
num = parseInt(num)
console.log(typeof num)
switch(i){
    case 1 :
        alert('the right answer was 10')
        break;
   }
}

   let fo=prompt('guess the name of University in jordan ?')
   let un=['just','University of Jordan','Hashemite','Yarmouk'];
loop1:
   for(let y=6;y>0;y--){
loop2:
    for(let x=0;x<un.length;x++){
        console.log(un[x]);
        if(un[x] == fo){
            
            alert("you are right")
            score++
            break loop1;
        }
    }
    
     fo=prompt('guess the name of University in jordan ? there left '+y+'try')
     switch(y){
        case 1:
            for(let v=0;v<un.length;v++)
            {
                console.log(un[v]);
                alert(un[v]);
            }
            break;
    }
}
alert('your score is '+score+'/7');