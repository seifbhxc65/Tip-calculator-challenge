function desActbox(t) {
    percentage = null;
    for (var i = 0; i < 5; i++) {
        t[i].classList.remove("colorInv");
    }
}

function reset() {
    var input = document.querySelectorAll('input');
    var percbox = document.querySelectorAll('button');
    percentage = null;
    for (var i = 0; i < 3; i++) {
        input[i].value = null;
        input[i].setAttribute('placeholder', '0');
    }
    desActbox(percbox);


}
var
    percentage = null;

function calc() {

    var nbr_per = document.querySelectorAll('input')[2].value;
    var bill = document.querySelectorAll('input')[0].value;
    if (percentage === null) {

        percentage = document.querySelectorAll('input')[1].value;

    }
    var tip = (bill * percentage) / 100;
    document.querySelectorAll('h2')[0].textContent = (tip / nbr_per).toFixed(2);
    document.querySelectorAll('h2')[1].textContent = ((parseInt(tip) + parseInt(bill)) / nbr_per).toFixed(2);
}

function perc(index) {
    var PercInput = document.querySelectorAll('button');

    PercInput[index].classList.toggle("colorInv");
    if (PercInput[index].classList.contains('colorInv')) {
        percentage = parseInt(PercInput[index].textContent);
        calc();
    } else {
        percentage = null;

    }
    for (var i = 0; i < 5; i++) {
        if (i !== index) {
            PercInput[i].classList.remove("colorInv");

        }
    }
}