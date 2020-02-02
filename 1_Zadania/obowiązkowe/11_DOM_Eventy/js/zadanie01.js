//Task 1
document.addEventListener("DOMContentLoaded", function(){
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*Gdy przeniesiemy powyszy tag do sekcji <head>,
to kod js nie zostaje wykonany poprawnie,
poniewaz nie dojdzie do załadowania skryptu przed całkmowitym
załadowaniem zwartości strony. Alternatywą jest skrypt wewnątrz
eventu 'DOMContentLoaded', który powoduje załadowanie skryptu dopiero 
po całkowitym załadowaniu zawartości strony.*/
