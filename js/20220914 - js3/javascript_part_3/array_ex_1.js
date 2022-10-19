const arr = [];
let number;
let sum = 0;
let avg;
//  get 50 numbers and set inside the array
for (let index = 1; index <= 50; index++){
        number = Math.ceil(Math.random() * 100);
    arr.push(number);
    sum = sum + number;
}
// get the sum and the evg, avg = sum / length
 avg = sum /arr.length;

console.log("The avg is: " + avg);

// go over the array and print the number that heigher then the evg

const heigherThenAvg = [];
for(let i = 0; i < arr.length; i++ ){
    if(arr[i] > avg){
        heigherThenAvg.push(arr[i]);    
    } 
}

console.log("The following numbers are heigher then avg: \n" + heigherThenAvg);