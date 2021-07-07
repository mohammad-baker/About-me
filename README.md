## Navigator: Mohammad Baker.
## Driver: Hasan Theyab

# About-me
## first 
i make loop for loop and array and try to call all array in case the number was 0 
## second
i was stuck in how can use if statmen in for loop and i face anthor issue to make the break go out from two loops
## 3
i make ul unorederd list and orederd list and try to style them in css to see the bult and number
## 4
i use a way to make score in the correct answers 

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
    //6th guess a number.
     
    let num = prompt('hey'+name+'can guess a number between (1 to -16) yuo four opportunities to get the correct answer');
     num = parseInt(num)
    if  (num == 10){
        alert("these is the right answer"+num)
         num = parseInt(num)
        break;
        
    }
    else if (num <= 5){
        let num =prompt('the number'+num+'is too low you have'+ i +"to try")
        console.log('the number'+num+'is too low you have'+ i +"to try");
         num = parseInt(num)
    }
    else if  (num >10 && num < 16) {
        let num =prompt('the number'+num+'is high that the you have'+ i +"to try")
        console.log('the number'+num+'is low you have'+ i +"to try");
         num = parseInt(num)
    }
    else if (num <10 && num > 5){
        let num =prompt('the number'+num+'is low than the  you have'+ i +"to try")
        console.log('the number'+num+'is low you have'+ i +"to try");
         num = parseInt(num)
    }
    else if(num >= 16){
        let num =prompt('the number'+num+'is too high you have'+ i +"to try")
        console.log('the number'+num+'is too high you have'+ i +"to try");
         num = parseInt(num)
    }
console.log(i);