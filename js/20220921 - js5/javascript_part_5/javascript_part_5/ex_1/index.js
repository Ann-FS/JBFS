const text_1 = document.getElementById('text_1');
const inputText_1 = document.getElementById('inputText_1');
text_1.addEventListener('change', handleText1Change);

function handleText1Change(e){
    inputText_1.innerHTML = e.target.value;
}