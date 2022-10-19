console.log('connected');

/*
//Q1
localStorage.setItem('fName','Ann');
localStorage.setItem('lName','OEL');
// localStorage.removeItem('lName');

//Q2
fullName = window.localStorage.getItem('fName')+' '+ window.localStorage.getItem('lName');
//alert(fullName);

//Q3
localStorage.clear();

//Q4 div
const newDiv = document.createElement("div");
newDiv.classList.add('myStyle');
document.body.appendChild(newDiv);
newDiv.setAttribute('id','myDiv');
newDiv.classList.toggle('invisible');
let clsListLength = newDiv.classList.length;
console.log (clsListLength);

//Q4 img
const newImg = document.createElement("img");
newImg.src = "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg";
newImg.width = 100;
newImg.height = 100;
newDiv.appendChild(newImg);

*/

//Q5 
const form = document.querySelector('form');
const user = {};
const cardContainer = document.querySelector('.cardContainer');
// let cardImage = document.querySelector('.cardImgTop');
// let cardName = document.querySelector('.cardName');
// let cardAge = document.querySelector('.cardAge');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
	event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach(function(value,key){
        user[key] = value;
    })
    console.log(user);
    newUser(user);
    const userString = JSON.stringify(user);
    console.log(userString);
    updateStorage(userString);
    form.reset();
}

/* Q5 inner text solution
function newUser(user){
    cardImage.setAttribute('src',user["imageUrl"]);
    cardName.innerText = user["firstName"] + " "+ user["lastName"];
    cardAge.innerText = "Age: " + user["age"];
}
*/

// Q5 generic solution

function newUser(user){
	cardContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${user.imageUrl} class=”card-img-top” alt='https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg' />
            <div class=”card-body”>
                <h5 class=”card-title”>${user.firstName} ${user.lastName}</h5>
                <p class=”card-text”>Age: ${user.age}</p>
            </div>
    `
    return cardContainer;
}

function updateStorage(userString){
    //const userString = JSON.stringify(user);
    //console.log(userString);
    localStorage.setItem('user',userString);
}


