//Task 2
window.addEventListener('DOMContentLoaded', function(){
    
    hideElements();

    document.querySelector('button').addEventListener('click', function(e){
        e.preventDefault();

        var select = document.querySelector('select[class="form-control"]');
        switch (select.value)
        {
        case 'Windows':
            hideElements();
            document.querySelector('img[alt="Windows"]').style.display = 'block';
            break;

        case 'Ubuntu':
            hideElements();
            document.querySelector('img[alt="Ubuntu"]').style.display = 'block';
            break;

        case 'Os X':
            hideElements();
            document.querySelector('img[alt="Apple"]').style.display = 'block';
            break;
        }
    });
});

function hideElements() {
    var imgs = document.getElementsByTagName('img');
    for (const img of imgs) {
        img.style.display = 'none';
    }
}