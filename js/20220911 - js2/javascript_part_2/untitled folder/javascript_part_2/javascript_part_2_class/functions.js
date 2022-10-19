const money = prompt("Please enter money");

const change = orderPizza(money, 20);

alert(`Here sir this is your change: ${change}`);



// orderPizza(70, 20);

// orderPizza(1000, 20);




function orderPizza(money, pizzaPrice){
    const numOfPizza = Math.trunc(money / pizzaPrice);
    const change = money % pizzaPrice;
    
    // goToStore();
    // console.log("Order Pizza");
    // goHome();

    console.log(`I bought ${numOfPizza} Pizza`);
    // console.log(`The change is: ${change}`);

    return change;
     console.log(`The change is: ${change}`);
    
}


function goToStore() {
    console.log("Go Out");
    console.log("Go Up");
    console.log("Go Right");
    console.log("Go Straight");
    console.log("Go Right");
    console.log("Get in");
}

function goHome(){
    go("out");
    go("Left");
    go("Straight");
    go("Left");
    go("Down");
    console.log("Get in");
}

function go(direction){
     console.log(`Go ${direction} `);
}

