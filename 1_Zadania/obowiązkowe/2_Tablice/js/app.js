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