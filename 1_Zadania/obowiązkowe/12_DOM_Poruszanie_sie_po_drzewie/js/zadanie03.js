//Task 3
window.addEventListener('DOMContentLoaded', function() {
    var divs = document.getElementsByTagName('div');
    for (const div of divs) {
        div.addEventListener('mouseover', function(){
            var lis = this.querySelectorAll('ul li');
            for (let i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = 'green';
            }
            lis[0].style.backgroundColor = 'red';
            lis[lis.length-1].style.backgroundColor = 'blue';
        });
    }
});