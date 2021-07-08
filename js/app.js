"use strict";
let name = prompt('what is you name ??')
alert('welcome '+ name +' lets play a guessing game .')
let score = 0;
function question1(){
let me = prompt('Is my name Mohammad altaeab ??')
me = me.toLowerCase(me);
if(me ==='yes' || me ==='y' ){
    alert('yes '+name+ ' you are correct');
score++
}
else if(me ==='no' || me ==='n'){
    alert(name +' Unfortunately your answer is wrong');
}
else{
    alert('that not answer you should answer yes or no');
}
}
question1();
function question2(){
let study = prompt('Did I study mechanical engineering? ??')
study=study.toLowerCase();
if(study ==='yes' || study ==='y' ){
    alert('yes '+name+ ' you are correct I\'m mechanical engineer');
score++
}
else if(study ==='no' || study ==='n'){
    alert(name +' incorrect I\'m mechanical engineer');
}
else{
    alert('that not answer you should answer yes or no');
}
}
question2();
function question3(){
let grad = prompt('Did I graduate lasr year?? ??')
grad=grad.toUpperCase();
if(grad ==='YES' || grad ==='Y' ){
    alert(name+ ' Unfortunately your answer is wrong');

}
else if(grad ==='NO' || grad ==='N'){
    alert(name  +' you are correct');
    score++
}
else{
    alert('that not answer you should answer yes or no');}
}
question3();
function question4(){
let solid = prompt('do I have skills in solidworks programme ??')
solid=solid.toLowerCase();
if(solid ==='yes' || solid==='y' ){
    alert('yes '+name+ ' you are correct');
    score++

}
else if(solid ==='no' || solid==='n'){
    alert('Unfortunately your answer is wrong');
}
else{
    alert('that not answer you should answer yes or no');
}
}
question4();
function question5(){
let asac = prompt('Did I take a programming course from ASAC ??')
asac=asac.toUpperCase();
    if(asac ==='YES' || asac==='Y' ){
        alert('yes '+name+ ' you are correct');
        score++
    }
    else if(asac ==='NO' || asac==='N'){
        alert(name +'Unfortunately your answer is wrong');
    }
    else{
        alert('that not answer you should answer yes or no');
    }
}
question5();
     function question6(){
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
 }
 else if  (num >10 && num < 16){
         num =prompt('the number is high than,  you have'+ i +"to try");
 }
  else if (num <10 && num > 5){
         num =prompt('the number is low than,   you have'+ i +"to try");
  }
 else if (num >= 16){
         num =prompt('the number is too high ,you have'+ i +"to try");
 }
 else{

   num= prompt('please write a nimber between 1-16 you have '+i+' try');
 }
num = parseInt(num)
switch(i){
    case 1 :
        alert('the right answer was 10')
        break;
   }
}
     }
     question6();
     function question7(){
   let fo=prompt('guess the name of University in jordan ?')
   let un=['just','University of Jordan','Hashemite','Yarmouk'];
loop1:
   for(let y=6;y>0;y--){
loop2:
    for(let x=0;x<un.length;x++){
        if(un[x] == fo){
            alert("you are right this is the names"+un+' , ')
            score++
            break loop1;
        }
    }
     fo=prompt('you are wrong ,guess the name of University in jordan ? there left '+y+'try')
     switch(y){
        case 1:
                alert('the right answer was '+ un+' , ');
            break;
    }
}
}
question7();
alert('your score is '+score+'/7');