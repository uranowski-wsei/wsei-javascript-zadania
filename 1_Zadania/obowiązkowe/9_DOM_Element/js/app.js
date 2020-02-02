document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

//Task 0
function getDatasInfo(links){
    let returnArray = []
    for(let  i = 0; i < links.length; i++){
        returnArray.push(links[i].getAttribute('data-color'))
    }
    return returnArray
    }
    console.log(getDatasInfo(links))

//Task 1
function returnData(){
    console.log(homeElement)
    for(let counter = 0; counter < childElements.length; counter++){
        console.log(counter)
    }
    console.log(banner)
    for(let counter = 0; counter < blocks.length; counter++){
        console.log(counter)
    }
    for(let counter = 0; counter < links.length; counter++){
        console.log(counter)
    }
}
returnData()

//Task 2
    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML);
    }
    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].outerHTML);
    }
/* innerHTML jest właściwością elementu DOM reprezentującą HTML 
wewnątrz elementu, między znacznikami otwierającymi i zamykającymi.
 outerHTML to właściwość elementu i obejmuje otwieranie tagów zamykających oraz zawartość.
*/ 

//Task 3
    function getId(element) {
        return element.tagName;
    }
    console.log(getId(document.querySelector("#mainFooter")));

//Task 4
    function getTags(elements) {
        let tab = [];
        for (let i = 0; i < elements.length; i++) {
            tab.push(elements[i].tagName);
        }
        return tab;
    }
    console.log(getTags(childElements));

//Task 5
    function getClassInfo(element) {
        return element.className.split(' ');
    }
    console.log(getClassInfo(banner));
//Task 6
    var list = document.querySelectorAll('nav li');
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].hasAttribute('data-direction'))
                continue;
            else elements[i].setAttribute('data-direction', 'top');
        }
    }
    setDataDirection(list);
});
