//Task 3
window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').addEventListener('submit', function(e){
        e.preventDefault();

        var team1 = document.getElementById('team1').value;
        var points1 = document.getElementById('points1').value;
        var team2 = document.getElementById('team2').value;
        var points2 = document.getElementById('points2').value;

        if ((team1 != team2) && (points1 > 0) && (points2 > 0)) {
            var table = document.querySelector('table');
            var tr = document.createElement('tr');
            var td1 = tr.createElement('td');
            td1.value = team1;
            var td2 = tr.createElement('td');
            td2.value = points1;
            var td3 = tr.createElement('td');
            td3.value = team2;
            var td4 = tr.createElement('td');
            td4.value = points2;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table.appendChild(tr);
        }
        return false;
    });
});