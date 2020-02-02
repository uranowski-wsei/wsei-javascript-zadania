wypiszCzesc();
function wypiszCzesc(){
    console.log('Cześć');
}
wypiszCzesc();

//Nie ma znaczenia, czy wywołanie funkcji jest przed jej definicją czy po

var wypiszWitaj = function (){
    console.log('Witaj');
}
wypiszWitaj();
//Przy funkcji zadeklarowanej jako wyrażenie funkcyjne, nie da się jej wywołać przed deklaracją.