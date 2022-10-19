//  We want to let the user comment on things but not above 100 chars. 

//  get user comment
const userInput = prompt("Please insert comment (not above 100 chars)");
console.log("User input is :" + userInput);
// check number of chars 
const inputLength = userInput.length; 
// show only 100 chars.
const message = userInput.slice(0 , 100); 
alert("Your comment is: \n" + message);
console.log(message.length);