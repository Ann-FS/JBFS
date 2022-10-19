console.log('Js linked');

// targeting querySelector
const header = document.querySelector("h1");
header.style.color = "red";
header.style.backgroundColor = "yellow";

// targeting getElementsByTagName
const checkbox = document.getElementsByTagName('input')[0];
checkbox.checked = true;

// querySelector of inner item
const firstLi = document.querySelector("ul li");
console.log(firstLi);
firstLi.style.backgroundColor = "yellow";

// targeting via class names
const itemList = document.getElementsByClassName("item");
console.log(itemList);

// targeting all elements 
const listItems = document.querySelectorAll(".item");
listItems.forEach(value => value.style.color = "blue");

listItems[2].innerHTML = "Michael";

document.links 

document.anchors

document.input


let link = document.querySelector("#list a");
console.log(link);
link.href = "www.example.com";




