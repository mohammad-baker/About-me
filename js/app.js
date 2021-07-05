"use strict";
let name = prompt('what is you name ??')
alert('welcome '+ name +' lets play a guessing game .')
console.log('his name is ',name);
//1 my name
let me = prompt('Is my name Mohammad altaeab ??')
me=me.toLowerCase();
if(me ==='yes' || me ==='y' ){
    console.log('yes ',name, ' you are correct');
    alert('yes '+name+ ' you are correct');

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
let grad = prompt('Did I graduate this year(2021)?? ??')
grad=grad.toUpperCase();
if(grad ==='YES' || grad ==='Y' ){
    console.log('yes ',name, ' you are correct');
    alert('yes '+name+ ' you are correct');

}
else if(grad ==='NO' || grad ==='N'){
    console.log('Unfortunately your answer is wrong');
    alert(name +' Unfortunately I graduate in 2021 this year');
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

}
else if(asac ==='NO' || asac==='N'){
    console.log();('Unfortunately your answer is wrong');
    alert(name +'Unfortunately your answer is wrong');
}
else{
    alert('that not answer you should answer yes or no');
    console.log('try something else');
}