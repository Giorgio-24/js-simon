const numbersList = [];
console.log(numbersList);

pushRandomNumbers(numbersList);

function pushRandomNumbers(nlist) {//^PUSHING RANDOM NUMBERS INSIDE THE ARRAY.
    var max = 5;
    while (nlist.length < max) {
        var numGenerator = Math.floor(Math.random() * 100) + 1;
        if (!(nlist.includes(numGenerator))) {
            nlist.push(numGenerator);
        }
    }
};

console.log(numbersList);
alert('Ricordati questi numeri: ' + numbersList + '.');