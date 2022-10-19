function isLeap(year) {
    
    var isLeap;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
}else {
    isLeap = false;
}
    
return isLeap ? "Leap year." : "Not leap year.";
}


function fibonacciGenerator (n) {

    var arr = [];
    if(n === 1){
        return [0];
    }
    if(n === 2){
        return [0,1];
    }
    
    arr.push(0);
    arr.push(1);
    for(var i=0; arr.length < n; i++){
        arr.push(arr[i] + arr[i+1]);    
    }
    
    return arr;
}