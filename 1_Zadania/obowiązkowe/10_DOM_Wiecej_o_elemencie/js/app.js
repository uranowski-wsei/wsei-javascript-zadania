document.addEventListener("DOMContentLoaded", function () {

//Task 0
 function changeObjects(){
    const _data = document.querySelectorAll('.ex5 ul li')
    console.log(_data)
    for(let counter = 0; counter < _data.length; counter++){
        if(counter % 2 ==0){
            _data[counter].style.backgroundColor = 'green'
        }
        if(counter % 5 === 0){
            _data[counter].classList.add('.big')
            console.log(_data)
        }
        if(counter % 3 === 0){
            _data[counter].style.borderBottom = '3px solid'
        }
    }
    return _data
}
changeObjects();

//Task 1

function changePhotos(){
    const edgeLink = "https://www.microsoft.com/pl-pl/windows/microsoft-edge"
    const firefoxLink = "https://www.mozilla.org/pl/firefox/new/"

    let edge = document.querySelector('.edge')
    edge.style.backgroundImage = "url('assets/img/edge.png')"

    let firefox = document.querySelector('.firefox')
    firefox.style.backgroundImage = "url('assets/img/firefox.png')"

    let chrome = document.querySelector('.chrome')
    chrome.style.width = "100px"

    chrome.parentElement.querySelector('a').innerHTML = "Chrome"
    edge.parentElement.querySelector('a').innerHTML = "Microsoft Edge"
    firefox.parentElement.querySelector('a').innerHTML = "Firefox"

    edge.parentElement.querySelector('a').setAttribute("href", edgeLink)
    firefox.parentElement.querySelector('a').setAttribute("href", firefoxLink)
}
changePhotos();

//Task 2

function favouritesThings(){
    const _spanName = document.querySelectorAll('.ex2 ul li span')[0]
    const _spanColor = document.querySelectorAll('.ex2 ul li span')[1]
    const _spanX = document.querySelectorAll('.ex2 ul li span')[2]
    _spanName.innerHTML = 'Antoni Uranowski'
    _spanColor.innerHTML = 'Czerwony'
    _spanX.innerHTML = 'Carbonara'
    return _spanName, _spanColor, _spanX
}
favouritesThings();

//Task 3

function removeErrorClass(){
    const menu = document.querySelector('.ex3 ul')
    menu.classList.add('menu')

    const menuElement = document.querySelector('.ex3 ul li')
    Array.prototype.forEach.call(menuElement, element => {
        element.classList.add('menuElement')
    });
    const errorClass = document.querySelector('.error')
    Array.prototype.forEach.call(errorClass, element => {
        element.classList.remove('error')
    });
}
removeErrorClass();

//Task 4
function addAtribut(){
    let list = document.querySelectorAll('.ex4 ul li')
    for(let index = 0; index < list.length; index++){
        list[index].setAttribute('data-id', index + 1)
    }
    return list
}
console.log(addAtribut())
});