function printEvenNumbers(num){
    let counter = 0;
    if(num > 0) {
        while(counter <= num){
            if(counter % 2 == 0){
                console.log(counter);
            }
            counter = counter +2;
        }
    }else {
        console.log("Number is negative");
    }
}