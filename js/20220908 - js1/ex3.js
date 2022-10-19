// get at least 4 digits number
const atleastFourDigits = prompt("Plese insert atleast 4 digit number and get the right digit");
console.log(atleastFourDigits);
//  get the last char 
const lastDigit = atleastFourDigits.substring(atleastFourDigits.length -1);
console.log(lastDigit);

// another way
const convetedNumber = Number(atleastFourDigits);
const lastDigit2 = convetedNumber % 10;
console.log("2nd way resaults is: " + lastDigit2); 
