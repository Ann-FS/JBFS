
const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('change', handleChange);



function handleChange(event) {
    console.log(event.target);
    const {name,value} = event.target
    console.log({[name]: value});
}

// FormData API solution
function handleSubmit(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
}