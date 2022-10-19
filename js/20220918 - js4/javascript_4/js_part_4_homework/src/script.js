// question 1
document.getElementById('demo').innerHTML = "Hello";

// question 2
document.getElementsByTagName('p')[1].innerHTML = "Hey there";

// question 3
document.getElementsByClassName('test')[0].innerHTML = "Test";

// question 4
document.querySelector('#image').src ="https://media.giphy.com/media/8jE71ieOAi5SkzNFFA/giphy.gif";

// question 5
document.querySelector('input').value = "Text changed";


// question 6,7
const pElements = document.getElementsByTagName("p");

for(let i =0; i< pElements.length; i++){
  changeColor(pElements[i]);
  changeFontSize(pElements[i]);
}

// question 8
document.getElementsByTagName("p")[3].style.display = "none";

function changeColor(item){
  console.log('change color', item)
  if(item){
    item.style.color = "red";
  }
}

function changeFontSize(item){
  console.log('change color', item)
  if(item){
    item.style.fontSize = "40px";
  }
}
