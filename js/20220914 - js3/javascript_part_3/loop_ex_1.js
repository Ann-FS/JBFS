function getSumOfNumbers(iterations){
    let sum=0;
    let number;
    for(let i = 1; i<= iterations; i++){
        // get random number
        number = Math.ceil(Math.random() * iterations);
        // add random number to sum
        console.log(`old sum = ${sum}, number = ${number}`);
        sum = sum + number
        console.log(`new sum = ${sum}`);
        
    }
    //  return sum
    return sum;
}