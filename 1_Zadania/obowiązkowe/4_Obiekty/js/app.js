//Task 0a

const city = {
    capital:"string",
    population:"number",
    president:"string",
    primeMinisters:"tablica stringów"
    }
    console.log(city);


//Task 0b

const timeMachine = {
    shape:"string",
    model:"string",
        run( date, place){
            console.log("DeLorean");
        }
    }

    console.log(timeMachine.shape);
    console.log(timeMachine.model);
    console.log(timeMachine.run());
    
//Task 1

const book = {
    title:"John",
    author:"Doe",
    numberOfPages:"123"
}

console.log(book);

//Task 2

const person = {
    name:"John",
    age:"Wick",
    sayHello : function() {
        console.log("Hello");
    }
}

console.log(person);

//Task 3

var recipe={
    title:"soup",
    servings:"10",
    ingredient
}
var ingredient=[2];
ingredient[0]="water";
ingredient[1]="addings";
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredient);

//Task 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

//FALSE