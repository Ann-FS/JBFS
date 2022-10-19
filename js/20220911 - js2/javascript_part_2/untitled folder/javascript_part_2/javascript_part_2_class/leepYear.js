checkLeapYear(2002);
checkLeapYear(2004);
checkLeapYear(1900);
checkLeapYear(2000);

isLeapYear2(2002);
isLeapYear2(2004);
isLeapYear2(1900);
isLeapYear2(2000);


function checkLeapYear(year) {
    const result  = isLeapYear(year);

    const message = `Is ${year} a Leap Year? ${result}`

    console.log(message);
}


function isLeapYear(year){
    //  check if year % 4  -> TRUE
    if(year % 4 == 0) {
        //  check if year % 100 -> FALSE
        if(year % 100 != 0){
                return true; 
            //  chek if year % 400 -> TRUE
        } else if(year % 400 == 0){
                return true;
        }
    }
    // return Is leap year or not 
    return false;
}


function isLeapYear2 (year) {
    if(year% 4 != 0 || (year%100 ==0 && year% 400 != 0)){
        console.log(`${year} Is not a leap year`);
    }else{
         console.log( `${year} Is a leap year`)
    }
}






/