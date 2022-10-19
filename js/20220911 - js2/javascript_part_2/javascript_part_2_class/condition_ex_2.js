// get number from user
const input = prompt("Please inset number");
const number = Math.trunc(input);
// check if number is odd or even

oddOrEeven(number);


function oddOrEeven(number){
    
    let message; 

    if(number == 0){
         message = "Zero";
    } else if(number % 2 == 0){
        message = "Even";
    } else {
         message = "odd";
    }

    alert(message);
}