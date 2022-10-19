// get 2 numbers from the user
const num1 = prompt("Please insert num 1");
const num2 = prompt("Please insert num 2");

const x = Number(num1);
const y = Number(num2);
// check if y > x 

if( y > x) {
    print("Growing")
}


function print(message){
    alert(message);
    console.log(message);
    document.write(message);
}