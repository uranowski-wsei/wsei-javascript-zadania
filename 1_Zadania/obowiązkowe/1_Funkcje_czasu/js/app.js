//Task 1
function countHello(value) {
    var count = 0;
    var intervalId=setInterval(() => {
        count++;
    console.log('Hello', count);
    if (count === value){
        clearInterval(intervalId)
    }
    },500);
}

countHello(5);