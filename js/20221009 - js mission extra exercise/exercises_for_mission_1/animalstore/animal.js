const loginForm = document.querySelector('#loginForm');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const message = document.querySelector('#message');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	// event.preventDefault()
    if (firstName.value == ""){
        firstName.style.background = "pink";
        //firstName.setAttribute("background-color", "#FFAAAA");
        alert("no!");
        return false;
    }
}
