// array of arrays
// [[1,2,3,4]]


const board = [];
for(let i=1; i <= 10; i++){
    const arr = [];
    for(let j=1; j<=10; j++){
        arr.push(j * i);
    }
    board.push(arr);
}