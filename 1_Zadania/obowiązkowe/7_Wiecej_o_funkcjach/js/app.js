/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Definiujemy funkcje jeden
function jeden() {

    //Definiujemy zmienna1
    var zmienna1 = 1;

    //Definiujemy funkcje dwa
    function dwa() {

        //Zmienna jest widoczna, bo funkcja dwa jest wewnątrz funkcji jeden
        console.log(zmienna1);

        //Definiujemy zmienna2
        var zmienna2 = 3;
    }

    //Wywołujemy funkcje dwa
    dwa();

    //Zmienna2 nie jest widoczna, ponieważ nie ma dostepu do zmiennych wewnątrz funkcji dwa
    console.log(zmienna2)
}

//Wywołanie funkcji jeden
jeden()