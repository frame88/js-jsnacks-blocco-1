/*
jsnack2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

let invitatifor = ['pinco', 'piero', 'uomotigre', 'ercole', 'cicciopanza', 'marylin manson', 'franchino 83'];
let yourname = prompt('come ti chiami? ');
let findz = false;

for (let i = 0; i < invitatifor.length; i++) {
    if (invitatifor[i] == yourname) {
        findz = true;
    }
}

const diva = document.querySelector('.versionefor');
diva.classList.add('bg-dark', 'text-light', 'text-center', 'pt-5', 'pb-5');


if (findz == true) {
    diva.append('sei il benvenuto');
}
else {
    diva.append('non puoi entrare');
}