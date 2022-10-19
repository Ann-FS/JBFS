// get all inputs elements and submit
const inputList = document.querySelectorAll('#loginForm input');
const loginForm = document.querySelector('#loginForm');
const loginData = {};

// add event listener for all of them 
inputList.forEach(input => input.addEventListener('change', handleChange));
loginForm.addEventListener('submit', handleSubmit);
// create function for handleChange and for submit.

function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    Object.assign(loginData, {[name]: value});
}

function handleSubmit(event){
    event.preventDefault();
    console.log(loginData);
}

