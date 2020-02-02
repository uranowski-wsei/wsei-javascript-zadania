//Task 1
window.addEventListener('DOMContentLoaded', function(){
    var data = document.getElementById('invoiceData');
    data.style.display = 'none';
    
    const checkBox = document.getElementById('invoice');
    checkBox.addEventListener('click', function(){
        if (this.checked) {
            data.style.display = 'block';
        }
        else data.style.display = 'none';
    });
});