console.log("connected button");

// question 1
const nameBtn = document.getElementById('nameBtn');
nameBtn.addEventListener('click', handleClickName);

function handleClickName(){
	alert('Ann');
}

// question 2
const colorBtn = document.getElementById('backgroundColorBtn');
colorBtn.addEventListener('click', handleClickColor);

function handleClickColor(){
    document.querySelector("body").style.backgroundColor = "blue";
}

// Ann's addition q2
const origColorBtn = document.getElementById('originalColorBtn');
origColorBtn.addEventListener('click', handleClickOrigColor);

function handleClickOrigColor(){
    document.querySelector("body").style.backgroundColor = "white";
}

// question 3
const input = document.querySelector('#headerChanger');
const header = document.querySelector('.header');
input.addEventListener('input', handleInputChange);

function handleInputChange(){
    header.innerHTML = input.value;
}

// question 4
// const inputColor = document.querySelector('#inputColorChanger');
// inputColor.addEventListener('keydown',handleInputColor);

// headerColorChanger
const colorCharInput = document.querySelector('#colorChar');
colorCharInput.addEventListener('keydown', handleColorChar);
colorCharInput.classList.add('blue');
console.log(document.querySelector(input));

function handleColorChar(event) {
  colorCharInput.classList.toggle('red');
  colorCharInput.classList.toggle('blue');