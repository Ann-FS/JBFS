console.log('object connected');

// object 
const student = {
    name: "Yos",
    lastName: "Israel",
    age: 36,

    // getters
    getName: function(){
        return this.name;
    },
    
    getLastName: function(){
        return this.lastName;
    },
    
    // setters
    setName: function(newName){
        this.name = newName;
    },
    setLastName: function(newLastName){
        this.lastName = newLastName;
    }
}

// object with constructor
const StudentObject = function (name, lastName) {
    this.name = name;
    this.lastName = lastName;

    this.getName = function(){
        return this.name;
    };
    this.getLastName = () => {
        return this.lastName;
    }
    this.setName = function(newName){
        this.name = newName;
    };
    this.setLastName = function(newLastName){
        this.lastName = newLastName;
    };
}


const person = {};
person.name = "Ann";
person.lastName = "Nahir";
person.getFullName = function(){
    return `The name is ${this.name} and this is the last name ${this.lastName}`
};