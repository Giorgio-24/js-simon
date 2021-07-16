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

console.log(numbersList);
alert('Ricordati questi numeri: ' + numbersList + '.');

//=PROMPT SECTION.

var question = [];

setTimeout(askNumbers, timerStartingAt * 1000);


function askNumbers() {
    for (var i = 0; i < maxElements; i++) {
        insert = parseInt(prompt('Metti numeri.'));
        question.push(insert)
    }
    console.log(question);
};

//=COUNTDOWN SECTION.

showCountdown.innerHTML = 'Tra ' + timerStartingAt-- + ' secondi dovrai inserire i numeri.';

setInterval(countdown, 1000);

function countdown() {
    if (timerStartingAt === 0) {
        clearInterval(countdown);
    } else {
        showCountdown.innerHTML = 'Tra ' + timerStartingAt-- + ' secondi dovrai inserire i numeri.';
    }
}





