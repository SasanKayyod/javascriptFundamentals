//Return

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
   // console.log(capName);
    return capName;
}


const newName = capitalizeName('branDon')

console.log(newName + ', how are you today? ');


//challenge

function tipAmount(orderTotal, tipPerc) {
    let netTotal = orderTotal * netTotal;
    return netTotal * toFixed(2);
}

let tip = tipAmount(100, 0.20);
console.log(tip);

