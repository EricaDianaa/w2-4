/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1,l2){
let x= l1 * l2
console.log(x)
}
area(20,15)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crasySum(n1,n2){
   if(n1===n2){
      let y=(n1+n2)*3

      console.log(y)
   }
else{
    let x=n1+n2
    console.log(x)
}
}
 crasySum(3,8)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1){
    if(n1>19){
      Math.abs(n1-19)*3// math.abs--> -5=5
    }
    else {
    Math.abs(n1-19)
    }

}
crazyDiff(3)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
if(n>20 && n<100||n===400){
console.log(true)
}
else{
    console.log(false)
}
}
boundary(400)
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  if (str.startsWith('EPICODE')) {//startWith-->controlla la stringa e da un valore true o false(serve per verificare la stringa)
    return str
  } else {
    return 'EPICODE ' + str
  }
}
console.log(epify('EPICODERS')) // EPICODERS
console.log(epify('Hello')) // EPICODE Hello


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n1){
if(n1>0 && n1%7===0 || n1%3===0){
return true
}
else{
    return false
}
}
console.log(check3and7(7))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str){
    let stringarray=str.split("")//split--> separa le stringhe
    let reverseString=stringarray.reverse()//reverse--> inverte le parole delle stringhe 
    let finalstring=reverseString.join("") //join-->
     return finalstring
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(frase){
    let array3=frase.split("")
    let finalString=[] 
    for(let i=0;i<array3.length;i++){
        let firsarray = array3[i].charAt(0)
        let secondarray = firsarray.toUpperCase()
        let cutString = array3[i].slice(1)
        let finalWord =secondarray + cutString
        finalString.push(finalWord)  
    }
    return 
}
 console.log(upperFirst("epicode forma sviluppatori"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString (str) {
    return str.slice(1, str.length - 1)
  }
  console.log(cutString('EPICODE'))
  
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom (n) {
  const arrayy = []
  for (let i = 0; i < n; i++) {
    arrayy.push(Math.floor(Math.random() * 10))
  }
  return arrayy
}
console.log(giveMeRandom(10))
