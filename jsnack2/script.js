/*
jsnack2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */


let invitati = ['pinco', 'piero', 'uomotigre', 'ercole', 'cicciopanza', 'marylin manson', 'franchino 83'];
let who = prompt('dimmi come ti chiami e ti dirò se invitato sei: ');
let i = invitati.length;
let count = 0;
let find = false;

while (count < i) {
    if (who == invitati[count]) {
        console.log('sei il benveuto, puoi procedere');
        find = true;
        break;
    }    
    count+=1;
}    
const div = document.querySelector('.container');

if (find == true) {
    div.append('sei il benveuto, puoi procedere');
}

else {
    div.append('accesso negato');
}
