let field = document.getElementById("field");
const btnIns = document.getElementById("salva");
const btnCanc = document.getElementById("cancella");

//al click salva l'utente in localStorage
btnIns.addEventListener ("click", function(e) {
    e.preventDefault;
    localStorage.setItem("utente", field.value)
   mostra();

})

//al click cancella l'utente dal local storage
btnCanc.addEventListener ("click", function(e) {
    e.preventDefault;
    
    localStorage.removeItem(field.value)
    document.getElementById("utente").innerText= "";
    
})

//mostra l'ultimo utente inserito
function mostra() {
    if(localStorage.getItem("utente")){
        document.getElementById("utente").innerText= localStorage.getItem("utente");
    }
}


// Funzione per aggiornare il contatore ogni secondo
function updateCounter() {
    // Recupera il valore corrente dal sessionStorage
    let seconds = sessionStorage.getItem("counter") || 0;
    // Incrementa il contatore
    seconds ++
     // Aggiorna il valore nel sessionStorage
    sessionStorage.setItem("counter", seconds);
    // Aggiorna il testo nella pagina
    document.getElementById("timer").innerText = seconds;
}
// Esegui la funzione updateCounter ogni secondo
setInterval(updateCounter, 1000);

// Chiamare updateCounter una volta all'inizio per inizializzare il contatore
updateCounter();
