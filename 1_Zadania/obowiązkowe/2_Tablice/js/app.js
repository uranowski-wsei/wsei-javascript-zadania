//zadanie 0
function distFromAvarage(numberArray){
    var avg = 0;
    numberArray.forEach(element => {
        avg += element;
    });

    avg = avg / numberArray.length;
    console.log(avg);
    var returnArray = [];
    numberArray.forEach(element => {
        returnArray.push(element - avg);
    });
    console.log(returnArray);
    return returnArray;
}

distFromAvarage([1,2,3,4,5,6,7])

//zadanie 1
let fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}
