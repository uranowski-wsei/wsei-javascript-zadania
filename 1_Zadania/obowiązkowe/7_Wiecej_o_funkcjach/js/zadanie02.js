//Task 2
function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
})

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a - b)
})

callOtherFunction(function (a, b) {
    if(a>b){
        console.log("Pierwsza liczba więszka jest od drugiej.");
    }
    else{
        console.log("Druga liczba jest większa od pierwszej.");
    }
    console.log("Liczba a:", a);
    console.log("Liczba b:", b);
})
