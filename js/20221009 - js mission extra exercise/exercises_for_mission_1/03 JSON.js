console.log('connected');
const books = [];

let book1 = {
	ID: "1",
	Name: "Before the sunrise",
	Author: "Dan Cohen",
    Price: "79"
};

const book2 = {
	ID: "2",
	Name: "Midnight",
	Author: "Roee Cohen",
    Price: "67"
};

const book3 = {
	ID: "3",
	Name: "After the sunset",
	Author: "Nimrod Cohen",
    Price: "85"
};

books.push(book1,book2,book3);

const jText = JSON.stringify(books);
alert(jText);

const items = JSON.parse(jText);

books.forEach(book => {
    (Object.keys(book)).forEach(key => {
        //console.log(key + ":" + book[key]);
    });
});

items.forEach(element => {

    Object.keys(element).forEach(key => {
       // console.log(key + ":" + element[key]);
    });
    
});

runBooks(items);

function runBooks(items){
    items.forEach(item => {
        addBookToPage(item);
    });
}

function addBookToPage(book){
    Object.keys(book).forEach(key => {
        const elemDiv = document.createElement('div');
            elemDiv.classList.add('elemDiv');
            elemDiv.innerHTML = `
                <p class="elemDiv-text">Book ${key}: ${book[key]}</p>
            `    
        document.querySelector('body').appendChild(elemDiv);

        console.log(key);

    });
    

        //             const elemDiv = document.createElement('div');
        //             elemDiv.classList.add('elemDiv');
        //             elemDiv.innerHTML = `
        //                 <p class="elemDiv-text">"Book ${key}: ${element[key]}"</p></br>
        //             `    

}
// //function showBooks(items){
//     items.forEach(element => {
//         Object.keys(element).forEach(key => {
//             const elemDiv = document.createElement('div');
//             elemDiv.classList.add('elemDiv');
//             elemDiv.innerHTML = `
//                 <p class="elemDiv-text">"Book ${key}: ${element[key]}"</p></br>
//             `
//             console.log(key + ":" + element[key]);
//         });
//     });
// //};


    
    // function showBooks(items){
    //     items.forEach(element => {
    //         Object.keys(element).forEach(key => {
    //             const bookDiv = document.body.createElement('div');
    //             bookDiv.classList.add('bookDiv');
    //             bookDiv.innerHTML = `
    //                 <p class="bookDiv-text">"Book ID: ${element.ID}"</p></br>
    //                 <p class="bookDiv-text">"Book Name: ${element.Name}"</p></br>
    //                 <p class="bookDiv-text">"Book Author: ${element.Author}"</p></br>
    //                 <p class="bookDiv-text">"Book Price: ${element.Price}"</p></br>
    //             `
    //             console.log(key + ":" + element[key]);
    //         });
    //     });
    // };







