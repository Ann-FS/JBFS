// let clear = false;
// let numOfTrains = 2;

whereToGo(1);
alert(whereToGo(2));

 
function whereToGo(numOfTrains){
    let direction;
    
    if(numOfTrains < 2) {
        direction = "Straight"; 
    } else {
        direction = "Right"
    }
    
    go(direction);
    
    return direction;
}


function go(direction) {
    console.log(`Going ${direction}`);
}

