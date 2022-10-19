
smallerFirst(1,4);
smallerFirst(8,6);
smallerFirst(0, -1);

function smallerFirst(num1, num2){
    if(num1 > num2){
        
        if(num1 == 0){
            console.log("zero");
        }
        
        const temp = num2;
        num2 = num1;
        num1 = temp;

        
    }
    
    console.log(num1, num2);
}
