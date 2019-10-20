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
//zadanie 3
let array = ['apple', 'orange', 'banana'];
function printTable(array){
    for (let i=0; i< array.length ; i++)
    console.log(array[i]);
}
//zadanie 4
function multiply(array){
    var temp = 1;
    for(let i = 0; i<array.length; i++){
        temp *=array[i];
    }
    console.log(temp);
}
//zadanie 5
function getEvenAvarage(array){
    let avg = 0;
    let eventnumber = 0;
    
    array.forEach(
        (element) =>{
        if(element %2 == 0){
            any += element;
            eventnumber ++;
        }
    }
    )
    if (any == 0){
        console.log(null);
    }else{
        console.log(avg);
    }


}

//zadanie 6
array = [145,11,3,64,4,6,10];
function sortArray(array){
    cons.t = array.sort((a,b)=>a-b);
    cons(t);
}
//zadanie 7
function addArrays(arr1, arr2){
    var counter =  arr1.length>arr2.length? arr1.length:arr2.length;
    var result = [];
    for (var i = 0; i<counter; i++){
        var firstNum = arr1[i] != null? arr1[i]:0;
        var secondNum = arr2[i] != null? arr2[i]:0;
        result[i] = firstNum+secondNum;
    }
    return result;


    
}
