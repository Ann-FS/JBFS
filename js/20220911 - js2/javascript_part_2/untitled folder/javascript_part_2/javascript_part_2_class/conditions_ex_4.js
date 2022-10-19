function evaluation(grade){
    
    if(grade >= 95){
        return "A";
    }else if(grade >= 85 ){
        return "B" 
    }else if(grade >= 75) {
        return "C"
    }

    return "D"

}

console.log(evaluation(96))
console.log(evaluation(85))
console.log(evaluation(76))
console.log(evaluation(74))