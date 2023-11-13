/* 1. dobbiamo capire in che mese siamo, per scriverlo nell'h1 e qianti giorni ha il mese, per generare il corretto numero di celle.

*/

const now = new Date();

/* Per salvare gli appuntamenti abbiamo bisogno di un array perchè ogni appuntamento è una stringa, ogni giorno può contenere infiniti appuntamenti e ogni mese ha un numero di giornivariabile.
creeremo quindi un array di array, dove l'array padre è il mese e gli array figli rappresentano 
i giorni.
[rappresenta il mese
    [rappresenta il primo giorno],[rappresenta il primo giorno],[rappresenta il primo giorno],...
]

Es. oggi è il 10 novembre: l'array padre rappresenta novembre, gli array figli rappresentano i trenta giorni
[
    [],
    [],
    [],
    [],
    [],
    [],
    ['09:00 - live coding calendario', '14:00 - esercisio quotidiano: tombola', '18:00 - aperitivo'],
    [],
    [],
    [],
    [],
    [],
    ...
]

non sapendo quanti sono i giorni ci sono nel mese in corso, si crea il "guscio" del mese
*/

const appointments = [];

// dentro appointments pushamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottbre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); //10 perchè siamo a novembre
  const nomeMese = monthNames[indiceMese]; //novembre
  title.innerText = nomeMese;
};

scriviMese();

// sappiamo in che mese siamo ma quanti giorni ha questo mese?
// dal momento che febbraio negli anni bisestili ha 29 giorni per sapere il mio mese quanti giorni ha mi servr anche l'anno

const giorniTotali = function () {
  const anno = now.getFullYear(); // 2023 perchè siamo nel 2023
  const mese = now.getMonth(); // 10 perchè siamo a novembre

  // dal momento che nell'oggetto date il numero dei giorni del mese parte da 1 mi basta sapere qual'è l'ultimo giorno del mese in corso per avere il suo numero di giorni
  // per sapere l'ultio giorno del mese in corso creo la data del primo giorno del mese successivo al mese in corso e faccio meno 1

  let ultimoGiorno = new Date(anno, mese + 1, 0); // oggi questa data corrisponde allo 0 dicembre 2023, che non esiste, e quindi è il 30 novembre 2023; novembre ha 30 giorni
  const numeroGiorni = ultimoGiorno.getDate();
  return numeroGiorni; //numeroGiorni è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti ai singoli giorni
};

giorniTotali();

// quando carico un mese eventuali classi selected precedenti devono essere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente che avevano degli appuntamenti

// seleziono tutti gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};

// quando faccio click su un giorno, nel div id='newMeetingDay' dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};

// a questo punto va creata la gliglia dei div contenenti i giorni del mese in corso, questa grilgia userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  //numero giorni è il numero di giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");

  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement("div"); //ad ogni giorno associo un div
    cellaGiorno.classList.add("day"); //stilizzo il div come definito in css

    cellaGiorno.addEventListener("click", function (e) {
      //rendo cliccabili i div dei giorni
      deselezionaCelle(); //deseleziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected"); //aggiungo la classe css per mostrare la selzione del giorno cliccato
      giornoAppuntamento(i); //scrivo il giorno cliccato nella sezione giorno del form
      // se ci sono gia eventi nella giornata devo far comparire la lista degli eventi che ci sono gia
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });

    //devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement("h3");

    valoreCella.innerText = i + 1;
    
    // appendo i bambini
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    //creato il calendario inserisco nell'array appointments l'array dei giorni del mese
    appointments.push([]);
  }
};

creaGriglia(giorniTotali());

// con questa funzione si popola la lista degli appuntamenti con gli appuntamenti del giorno
const mostraAppuntamenti = function (indiceGiorno) {
  // 1. prendere gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno];

  // s. selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");

  // 3. svuotare la lista
  lista.innerHTML = "";

  //4. ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });

  // 5. la lista è piena ma è ancora nascosta
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};

//dobbiamo creare nuovi appuntamenti
const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //1. giorno dell'appuntamento
  const selectedDate = document.getElementById("newMeetingDay").innerText;

  //2. ora dell'evento selezionato
  const meetingTime = document.getElementById("newMeetingTime").value;

  // 3 nome dell'appuntamento
  const meetingName = document.getElementById("newMeetingName").value;

  // 4. creo la stringa dcell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;

  // 5. scrivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDate) - 1;
  console.log("array prima del salvataggio", appointments);
  appointments[indiceArray].push(stringaAppuntamento);
  console.log("array dopo il salvataggio", appointments);

  //creo nel calendario un pallino che evidenzi la presenza di un appuntamento
  const pallino = document.createElement("div");
  pallino.classList.add("pallino");

  // cerco il div del giorno selezionato
  const divSelezionato = document.querySelector(".selected");
  if (!divSelezionato.querySelector(".pallino")) {
    divSelezionato.appendChild(pallino);
  }
  mostraAppuntamenti(indiceArray);
});
