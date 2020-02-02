//Task 3
window.addEventListener('DOMContentLoaded', () => {
    var buttons  = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            var span = document.querySelectorAll('p > span');
            var val = span[i].innerHTML;
            span[i].innerHTML = ++val;
        })
    }
})