const books = [
  {
    id: 1,
    name: "It Ends With Us",
    author: "Colleen Hoover",
    price: 39.82,
  },
  {
    id: 2,
    name: "Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 39.95,
  },
  {
    id: 3,
    name: "Love on the Brain",
    author: "Ali Hazelwood",
    price: 38.21,
  },
];

const booksStr = JSON.stringify(books);
const items = JSON.parse(booksStr);
const root = document.querySelector("#root");

console.log("Original", books);
console.log("Parsed object", items);

items.forEach((book) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div>Book ID: ${book.id}</div>
    <div>Book Name: ${book.name}</div>
    <div>Book Author: ${book.id}</div>
    <div>Book Price: ${book.price}</div>
    <hr>`;
  root.appendChild(div);
});

// part 2

const myCat = {
  name: "Garfield",
  age: 10,
  color: "redhead",
  isSterile: true,
};

const myCatStr = JSON.stringify(myCat);
const yourCat = JSON.parse(myCatStr);

const catItem = document.createElement("div");
catItem.innerHTML = `
    <h1>Your Cat</h1>
    <div>Name: ${yourCat.name}</div>
    <div>Age: ${yourCat.age}</div>
    <div>Color: ${yourCat.color}</div>
    <div>Is Sterile: ${yourCat.isSterile}</div>
`;
root.appendChild(catItem);
