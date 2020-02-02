
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definicja funkcji sortArray
function sortArray() {

    //Definicja zmiennej points z tablicą zmiennych
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Użycie standardowej metody tablicy do sortowania z własną funkcją porównującą
    points.sort(function (a, b) {
        //Zwrócenie różnicy do porównania dwóch elementów tablicy
        return a - b;
    });

    //Zwrócenie zmiennej points - tablicy
    return points;
}

//Wywołanie funkcji
sortArray();
