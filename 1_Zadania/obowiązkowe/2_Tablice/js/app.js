//Task 0
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

//Task 1
var fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}
//Task 3
let arr3 = ['apple', 'orange', 'banana'];
function printTable(array){
    for (let i=0; i< array.length ; i++)
    console.log(array[i]);
}
printTable(arr3);
    
//Task 4
let arr4 = [1,2,3,4,5,6,7];
function multiply(array){
    var temp = 1;
    for(let i = 0; i<array.length; i++){
        temp *=array[i];
    }
    console.log(temp);
}
multiply(arr4);


//Task 5
function getEvenAvarage(array){
    let avg = 0;
    let eventnumber = 0;
    
    array.forEach(
        (element) =>{
            if(element %2 == 0){
                avg += element;
                eventnumber ++;
            }
        }
    )
    avg /= eventnumber;
    if (avg == 0){
        console.log(null);
    }else{
        console.log(avg);
    }
}
getEvenAvarage([1,2,3,4,5,6,7]);

//Task 6
arr6 = [145,11,3,64,4,6,10];
function sortArray(array){
    let a = array.sort((a,b)=>a-b);
    console.log(a);
}
sortArray(arr6);
//Task 7
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
