//=VARIABLES AND FUNCTIONS.
var timerStartingAt = 30;//^INDICATES HOW MUCH TIME(IN SECONDS) IS NEEDED BEFORE THE TIMER ENDS.

var maxElements = 5;//^MAX LENGHT OF THE NUMBER LIST.

var maxGenerableNumber = 100;//^MAX NUMBER THAT CAN BE GENERATE FROM MATH.RANDOM() FUNCTION.

var showCountdown = document.getElementById('reverse-timer');

const numbersList = [];

pushRandomNumbers(numbersList);

function pushRandomNumbers(nlist) {//^PUSHING RANDOM NUMBERS INSIDE THE ARRAY.

    while (nlist.length < maxElements) {
        var numGenerator = Math.floor(Math.random() * maxGenerableNumber) + 1;
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
        afterCountdown(maxElements, maxGenerableNumber);
    } else {
        showCountdown.innerHTML = 'Tra ' + timerStartingAt-- + ' secondi dovrai inserire i numeri della lista.';
    }
}, 1000);

function afterCountdown(maximum, maxRandom) {
    //=ASKING USER TO PUT THE RIGHT NUMBERS.
    var userNumbers = [];
    var rightUserNumbers = [];
    var remembered = 0;
    for (var i = 0; i < maximum; i++) {
        do {
            var askUser = parseInt(prompt('Inserisci un numero della lista ' + (i + 1) + '/' + maximum));
        } while (!(askUser) || isNaN(askUser) || askUser > maxRandom || askUser < 1 || userNumbers.includes(askUser));
        if (numbersList.includes(askUser)) {
            rightUserNumbers.push(askUser);
            remembered++;
        }
        userNumbers.push(askUser);
    }

    var message;

    if (remembered == 0) {
        message = '. Non ti sei ricordato nessun numero.';
    } else if (remembered == maximum) {
        message = '. Complimenti! Ti sei ricordato tutti i numeri.';
    } else {
        message = '. Mentre quelli che hai indovinato sono: ' + rightUserNumbers + '.'
    }


    console.log(rightUserNumbers);
    alert('Ti sei ricordato ' + remembered + ' numeri su ' + maximum + '. I numeri della lista erano: '
        + numbersList + '. Invece i numeri che tu hai inserito sono: ' + userNumbers
        + message);
}