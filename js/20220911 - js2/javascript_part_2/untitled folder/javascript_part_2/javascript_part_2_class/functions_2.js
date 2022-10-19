

const sumTwoNumbers = getSum(2, 17);


getSum(5,10);

function getSum(x, y){
    const sum = x +y;
    
    //this line will be executed 
    console.log(`The sum of ${x} and ${y} = ${sum}`);
    
    return sum;
    // wont excute after the return 
    console.log(`The sum of ${x} and ${y} = ${sum}`);
}