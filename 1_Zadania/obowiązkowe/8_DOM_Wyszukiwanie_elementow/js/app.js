document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //Task 0
    var classEl = document.getElementsByClassName('title')[0];
    function getDataAnimation(item) {
        let val = item.getAttribute['data-animation'];
        return val;
    }
    getDataAnimation(classEl);
    
    //Task 1
    var idElement = document.getElementById('home');
    var idEl = document.querySelector('#home');
    var leElement = document.querySelector('li[data-direction]');
    var classBlock = document.getElementsByClassName('block');
    
    //Task 2
    var nav = document.getElementsByTagName('nav')[0];
    var lis = nav.getElementsByTagName('li');
    var paragraphs = document.querySelector('div p');
    var divs = document.getElementsByTagName('article')[0].querySelector('div');
    
    //Task 3
    var tag = document.querySelector('article[class="first"]');
    var step2 = document.querySelectorAll('article[class="first"] h1');
    console.log(step2.length);
});