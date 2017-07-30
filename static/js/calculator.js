/**
 * Created by mosya on 28.07.17.
 */


var osago = document.getElementById('data').innerHTML.trim().toString();
osago = JSON.parse(osago);
console.log(osago);


function insertOption(el) {
    var html = '';
    for (obj in osago[el]){
        html += '<option value="' + osago[el][obj]['k'] + '">' + osago[el][obj]['title'] + '</option>';
    }
    document.getElementById(el).innerHTML += html;
}

function change(){
    selectAuto = $('#auto option').filter(':selected').val();
    selectZone = $('#zone option').filter(':selected').val();
    selectPeirod = $('#period option').filter(':selected').val();
    selectIndividual = $('#individual option').filter(':selected').val();
    selectBonus = $('#bonus option').filter(':selected').val();
    rezult({
        auto:selectAuto,
        zone:selectZone,
        period:selectPeirod,
        individual:selectIndividual,
        bonus:selectBonus
    });
}

function eventSelect(el){
    $(el).change(function () {
       change();
    });
}

function rezult(select){

    var sum,
    // значения по-умолчанию
        basePay = osago['base_pay'],
        auto = select.auto || 1,
        zone = select.zone || 1,
        period = select.period || 1;
        individual = select.individual || 1;
        bonus = select.bonus || 1;

    sum = basePay * auto * zone * period * individual * bonus;
    console.log(basePay, auto, zone, period, individual, bonus, sum);

    document.getElementById('auto_rez').innerHTML = auto;
    document.getElementById('zone_rez').innerHTML = zone;
    document.getElementById('period_rez').innerHTML = period;
    document.getElementById('individual_rez').innerHTML = individual;
    document.getElementById('bonus_rez').innerHTML = bonus;
    document.getElementById('rezult').innerHTML = sum;
}


insertOption('auto');
insertOption('zone');
insertOption('period');
insertOption('bonus');
insertOption('individual');

eventSelect('#auto');
eventSelect('#zone');
eventSelect('#period');
eventSelect('#bonus');
eventSelect('#individual');


