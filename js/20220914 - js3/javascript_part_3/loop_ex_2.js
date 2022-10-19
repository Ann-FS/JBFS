function getHeighst(iterations){
    let number = 0;
    let heighstNumber = number;
    for (let i = 1; i <= iterations; i++){
        number = Math.ceil(Math.random() * iterations);
        console.log(number);

        // if(heighstNumber < number){
        //     heighstNumber = number;
        // }
        
        heighstNumber = Math.max(heighstNumber, number);
    }
    return heighstNumber;
}