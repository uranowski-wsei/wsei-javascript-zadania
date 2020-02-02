//Task 1
window.addEventListener('DOMContentLoaded', () => {
    var links = document.getElementsByTagName('a');
    for (const link of links) {
        link.addEventListener('click', function() {
            var next = this.nextElementSibling;
            if (next != null) {
                 if (next.style.display == '' ||
                    next.style.display == ' ' || 
                    next.style.display == 'none') {
                    next.style.display = 'block';
                }
                else next.style.display = 'none';
            }
        });
    }
});
