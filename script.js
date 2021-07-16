//=VARIABLES AND FUNCTIONS.
var timerStartingAt = 3;

var maxElements = 5;

var showCountdown = document.getElementById('reverse-timer');

const numbersList = [];
console.log(numbersList);

pushRandomNumbers(numbersList);

function pushRandomNumbers(nlist) {//^PUSHING RANDOM NUMBERS INSIDE THE ARRAY.

    while (nlist.length < maxElements) {
        var numGenerator = Math.floor(Math.random() * 100) + 1;
        if (!(nlist.includes(numGenerator))) {
            nlist.push(numGenerator);
        }
    }
};

//=NUMBERS TO REMEMBER.

console.log(numbersList);
alert('Ricordati questi numeri: ' + numbersList + '.');

showCountdown.innerHTML = 'Tra ' + timerStartingAt-- + ' secondi dovrai inserire i numeri della lista.';

var countdown = setInterval(function () {
    if (timerStartingAt === -1) {
        clearInterval(countdown);
        afterCountdown();
    } else {
        showCountdown.innerHTML = 'Tra ' + timerStartingAt-- + ' secondi dovrai inserire i numeri della lista.';
    }
}, 1000);

function afterCountdown() {
    //=ASKING USER TO PUT THE RIGHT NUMBERS.
    var userNumbers = [];
    var rightUserNumbers = [];
    var remembered = 0;
    for (i = 0; i < maxElements; i++) {
        var askUser = parseInt(prompt('Inserisci un numero della lista ' + (i + 1) + '/' + maxElements));

        if (numbersList.includes(askUser)) {
            rightUserNumbers.push(askUser);
            remembered++;
        }
        userNumbers.push(askUser);
    }

    var message;

    if (remembered == 0) {
        message = '. Non ti sei ricordato nessun numero.';
    } else if (remembered == 5) {
        message = '. Complimenti! Ti sei ricordato tutti i numeri.';
    } else {
        message = '. Mentre quelli che hai indovinato sono: ' + rightUserNumbers + '.'
    }


    console.log(rightUserNumbers);
    alert('Ti sei ricordato ' + remembered + ' numeri su ' + maxElements + '. I numeri della lista erano: '
        + numbersList + '. Invece i numeri che tu hai inserito sono: ' + userNumbers
        + message);
}