// document.getElementsByTagName("title")[0].innerHTML = "Hello world";
// document.querySelector('body').addEventListener('load', runScript);

function runScript(){
document.getElementsByTagName("h1")[0].innerHTML = "Hello world";


document.getElementsByTagName("h1")[0].addEventListener('click', handledClick)
}

function handledClick(){
    console.log('yos');
}