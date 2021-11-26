/*
jsnack1
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let count = 0;
let acc = 0;
let ask = 0;

while (count < 10) {
    ask = parseInt(prompt('inserisci un numero: '));
    acc += ask;
    count+=1;
}

console.log(count,acc,ask);