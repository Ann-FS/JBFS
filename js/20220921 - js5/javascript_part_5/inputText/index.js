// get input object, and h1 object
const input = document.querySelector('#headerChanger');
const header = document.querySelector('.header');

//  set eventListener
input.addEventListener('change', handleInputChange);

// create handleChange and change the h1

function handleInputChange(event){
  const value  = event.target.value;
  const name = event.target.name;
  const example = {
    [name]: value
} 

header.innerHTML = value;
console.log(example);
}