//Task 0
window.addEventListener('DOMContentLoaded', () => {
    //Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko
    var elFirst = document.getElementsByClassName('first')[0];
    var elFirstChildren = elFirst.children[0];
    var elFirstThirdChildren = elFirst.children[2];
    //Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
    var elSecond = document.getElementById('second');
    var elSecondParent = elSecond.parentElement;
    var elSecondParentChildren = elSecondParent.children[3];

    var elAttrDataEx = document.querySelector('*[data-ex="third"]');
    var GrandParent = elAttrDataEx.parentElement.parentElement;

    // ostatnie dziecko
    var elAttrLastChild = GrandParent.children[GrandParent.children.length-1];
    var elAttrFirstChild = GrandParent.children[0];
    var elAttrAvgChild = GrandParent.children[(GrandParent.children.length/2)-1];
    //**Div** o **klasie** ```forth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article``` -> jego drugie dziecko o tagu ```<p>```.
    var div = document.querySelector('div[class="forth"]');
    var parent = div.parentElement;
    var firstChild = parent.getElementsByTagName('article')[0];
    var p = firstChild.getElementsByTagName('p')[1];
});