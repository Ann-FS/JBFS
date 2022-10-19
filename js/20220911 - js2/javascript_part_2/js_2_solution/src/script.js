function increasing(x, y, z) {
  if (z > y && y > x) {
    console.log("Increasing");
  }
}

function theGreatest(x, y, z) {
  const biggest = Math.max(x, y, z);
  console.log(biggest);
  return biggest;
}

function numDigits(num) {
  length = ("" + num).length;
  console.log(length);
  return length;
}

// tax calculator
function calcTax(income) {
  let tax = 0;
  let rest = 0;

  if (income > 150000) {
    rest = income - 150000;
    tax = rest * 0.5 + calcTax(income - rest);
  } else if (income > 100000) {
    rest = income - 100000;
    tax = rest * 0.4 + calcTax(income - rest);
  } else if (income > 74000) {
    rest = income - 74000;
    tax = rest * 0.3 + calcTax(income - rest);
  } else if (income > 23000) {
    rest = income - 23000;
    tax = rest * 0.2 + calcTax(income - rest);
  } else {
    tax = income * 0.1;
  }

  return tax;
}

function calcTax_2(income) {
    let tax = 0;
    let rest;
    let userIncome = income;
    
    // income above 150000
    if(userIncome > 150000){
        rest = userIncome - 150000;
        tax += rest * 0.5;
        userIncome = userIncome - rest;
    }
    // income above 100000
    if(userIncome > 100000) {
        rest = userIncome - 100000;
        tax += rest * 0.4;
        userIncome = userIncome - rest;
    }
    // income above 74000
    if(userIncome > 74000){
        rest = userIncome - 74000;
        tax += rest * 0.3;
        userIncome = userIncome - rest;
    }
    // income above 23000
    if(userIncome > 23000){
        rest = userIncome - 23000;
        tax += rest * 0.2;
        userIncome = userIncome - rest;
    }
    // income below 23000
    if(userIncome <= 230000){
        tax += userIncome * 0.1;
    }

    return tax
}

function calcTax_3(income){
    const step1Tax = (23000 * 0.1);
    const step2Tax = (74000 - 23000) * 0.2;
    const step3Tax = (100000 - 74000) * 0.3;
    const step4Tax = (150000 - 100000) * 0.4;
    let tax;
    
    // calc income for 23000 and below
    if(income <= 23000){
        tax = income * 0.1;
    }
    // calc income for above 23000 and 74000
    else if(income > 23000 && income <= 74000){
        tax = step1Tax + (income - 23000) * 0.2;
    }
    // calc income for above 74000 and 100000
    else if(income > 74000 && income <= 100000){
        tax = step1Tax + step2Tax + (income - 74000) * 0.3;

    }
    // calc income for above 100000 and 150000
    else if(income > 100000 && income <= 150000){
        tax = step1Tax + step2Tax + step3Tax + (income - 100000) * 0.4;
    }
    // calc income for above 150000
    else {
        tax = step1Tax + step2Tax + step3Tax +step4Tax + (income - 150000) * 0.5;
    }
  
  return tax
}


function printNumbers(start, end) {
  let count = start;
  while (count <= end) {
    console.log(count);
    count++;
  }
}

function printEvenNumbers(start, end) {
  let count = start;
  while (count <= end) {
    if (count % 2 === 0) {
      console.log(count);
    }
    count++;
  }
}

function oddEvenZero(num) {
  let message = "";
  if (num == 0) {
    message = "Zero";
  } else if (num % 2 === 0) {
    message = "Even";
  } else {
    message = "Odd";
  }
  console.log(message);
}

// Question 1 on the book
function printNaturalNumbers(top) {
  let count = 1;
  while (count <= top) {
    console.log(count);
    count++;
  }
}

// Question 4 on the book
function printOnlyDen(max, den) {
  let num = den;
  while (num <= max) {
    if (num % den === 0) {
      console.log(num);
    }
    num += den;
  }
}

// question 5
function negativOnly() {
  let number = 0;
  let sum = 0;
  while (number != -99) {
    if (number < 0) {
        sum += number;
    }
    number = Number(prompt("Please insert negative number"));
  }
  console.log(`Got number  -99, sum is: ${sum}`);
  return sum;
}

// question 8
function getLowerPositive(){
    let number = Number(prompt("Please insert positive number"));
    let lower = number;
    while(number > 0){
        if(number < lower){
            lower = number;
        }
        number = Number(prompt("Please insert positive number"));
    }

    if(lower > 0){
        console.log(`Lower is: ${lower}`);
    }else {
        console.log("Invalid Number");
    }
  
    return lower;
}
// question 
function getNumDigits(num){
    return ("" + num).length;
}

// question 13
function getDigOccurrences(num, dig){
    const numString = ""+ num;
    const digString = "" + dig;
    let index = 0;
    let Occurrences = 0;
    while(index < numString.length){
        if(numString.charAt(index) === digString){
            Occurrences++;   
        }
        index++;
    }
    return Occurrences;
}

function digOccurrences_2(num, dig){
    const numString = ""+ num;
    const digString = "" + dig;
    return numString.split(digString).length - 1;
}

// question 14
function getReversNumber(num){
    let reverseNumber = "";
    const numberAsString = (""+num);
    const length = num.toString().length;
    let index = length;

    while(index >= 0){
        reverseNumber = reverseNumber+numberAsString.charAt(index);
    }
    return reverseNumber;
}

// question 17
function pow(num1, num2){
    let result = 1;
    let counter = 0;
    while(counter < num2){
        result *= num1;
        counter++
    }
    return result
}

// question 10 from last week homework
function getNearestEven(num) {
    num = Math.trunc(num);
    num =+ 2;
    num = num - num % 2;
    return num;   
}