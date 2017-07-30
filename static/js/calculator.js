/**
 * Created by mosya on 28.07.17.
 */


var osago = document.getElementById('data').innerHTML.trim().toString();
osago = JSON.parse(osago);
console.log(osago);


function insertAuto() {
    var html = '';
    for (obj in osago['auto']){
        html += '<option value="' + osago['auto'][obj]['k'] + '">' + osago['auto'][obj]['title'] + '</option>';
    }
    document.getElementById('auto').innerHTML += html;
}

function changeAuto(){
    sum = 0;
    zone = 1;
    $('#zone').val('1');

    selectAuto = $('#auto option').filter(':selected').val();
    console.log(selectAuto);
    rezult(selectAuto);
}

function rezult(selectAuto){
    var sum,
        base_pay = osago['base_pay'],
        auto = selectAuto;

    sum = base_pay * auto;
    console.log(base_pay, sum);

    document.getElementById('rezult').innerHTML = sum;
}


insertAuto();

$('#auto').change(function () {
   changeAuto();
});



