//Task 2
window.addEventListener('DOMContentLoaded', () => {
    var links = document.getElementsByTagName('a');
    for (const link of links) {
        link.addEventListener('click', function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
        });
    }
});