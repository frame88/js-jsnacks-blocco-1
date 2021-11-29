/*
jsnack1
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

acc = 0;
for (let i = 0; i < 3; i++) {
    ask = parseInt(prompt('inserisci un numero: '));
    acc += ask;
}

console.log(acc);
const diva = document.querySelector('.secondoex');
diva.append('la somma dei numeri inseriti è: ', acc);