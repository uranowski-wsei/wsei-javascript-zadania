//Task 0
window.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('form');
    console.log(form);
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        var success = true;

        if (!emailValidation(document.getElementById('email').value)) {
            document.querySelector('div[class="error-message"]').textContent += 'Email musi posiadać znak @';
            success = false;
        }

        if (!nameValidation(document.getElementById('name').value)) {
            document.querySelector('div[class="error-message"]').textContent += 'Twoje imię jest za któtkie';
            success = false;
        }

        if (!nameValidation(document.getElementById('surname').value)) {
            document.querySelector('div[class="error-message"]').textContent += 'Twoje nazwisko jest za krótkie';
            success = false;
        }

        if (!passValidation(document.getElementById('pass1').value,
                document.getElementById('pass2').value)) {
            document.querySelector('div[class="error-message"]').textContent += 'Hasła nie są takie same lub puste';
            success = false;
        }

        if (document.getElementById('agree').checked == false) {
            document.querySelector('div[class="error-message"]').textContent += 'Musisz zaakceptować warunki';
            success = false;
        }

        if (success == true)
            this.submit();
    })
});

function emailValidation(val) {
    var bSuccess = false;
    for (let i =0; i < val.length; i++) {
        if (val[i] == '@') {
            bSuccess = true;
            break;
        }
    }
    return bSuccess;
}

function nameValidation(val) {
    return val.length > 6;
}

function passValidation(pass1, pass2) {
    return (pass1 == pass2) && (pass1 != '');
}