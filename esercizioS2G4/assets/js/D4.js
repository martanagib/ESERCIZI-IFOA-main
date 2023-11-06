/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


/* SCRIVI QUI LA TUA RISPOSTA */
var calcola;

function area(l1, l5){
    calcola = l1 * l5;
    return calcola;
}

console.log(area(4,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var somma;

function crazySum(num1, num2){
if (num1===num2){
    return somma= (num1 + num2) *3;
} else 
return somma=num1 + num2;
}

console.log(crazySum(3,3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var assoluto;

function crazyDiff(num){
    let fisso= 19;
    let differenza= num - fisso;
    if (differenza>19){
        assoluto=differenza *3;
        return assoluto;
} else if (differenza<19){
assoluto= Math.abs(differenza);
return assoluto;
} else return assoluto;
}
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var vf;

function boundary(n){
    if (n>20 && n<101){
        return vf=true;
    } else if (n===400){
        return vf=true;
    } else return vf=false;
}
console.log(boundary(500));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var frase= "sono una stringa";
var epicode= "EPICODE "

function epify(str){
    frase.split(' ');
    if (frase.indexOf("EPICODE")===0){
        return frase;
    } else 
    return frase= epicode.concat(frase);
}
console.log(epify(frase));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var tf;

function check3and7(num){
    num=Math.abs(num);
    if (num %3===0 || num %7===0){
        return tf=true; 
    } else return tf=false;
}

console.log(check3and7(13));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var stringa= "sono una stringa che vuole essere una frase";

function upperFirst(stringa){
    let frase= stringa.toUpperCase();
    stringa=frase;
    return stringa
}
console.log(upperFirst(stringa));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var nuovaStr= "sona una nuova stringa che sta per essere tagliata";

function cutString(str){
    nuovaStr.split(' ');
    let stringa=nuovaStr.trim().slice(1, -1);
    return stringa;
}
 console.log(cutString(nuovaStr));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
let casuali= Math.floor(Math.random() *11);
const random=[casuali];
return random;
}
console.log(giveMeRandom(6));

