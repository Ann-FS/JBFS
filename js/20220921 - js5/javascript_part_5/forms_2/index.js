// get user email, get user password
const loginForm = document.querySelector("#loginForm");

// add eventListener for form values
loginForm.addEventListener('submit', handleSubmit);

// add function to handle submit.
function handleSubmit(event) {
    event.preventDefault();
    const loginData = {};
    const target = event.target;
    for (let index = 0; index < target.length; index++) {
        const element = target[index];
        loginData[element.name] = element.value;
    }
    console.log(loginData);
}