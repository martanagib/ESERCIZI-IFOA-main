const myurl = "https://striveschool-api.herokuapp.com/books";


function getData(){
    console.log("ciao")
    fetch(myurl)
    .then((response)=> {
        response.json()
        .then(data => creaLibreria(data))
    })
}

getData();


//funzione per popolare la libreria di cards ognuna con un elemento libro
function creaLibreria (data){
    //prendi i dati ottenuto dalla url e per ognuno fai questo
    data.forEach(book =>{
        //crea un elemento di tipo div
        let card = document.createElement("div");
        card.classList.add("col")
        //crea un elemento di tipo immagine
        let img = document.createElement("img");
        // assegna l'immagine corrispondente a quella del database
        img.src = book.img
        //assegno a img la classe
        img.classList.add("card-img-top")
        //assegno ad img alt
        img.alt = "..."

        //creo un elemento di tipo div per il corpo della carta
        let cardBody = document.createElement("div")
        //gli assegno la classe
        cardBody.classList.add("card-body")

        //creo un elemento di tipo h5 per il titolo del libro
        let cardTitle = document.createElement("h5")
        //gli assegno una classe
        cardTitle.classList.add("card-title")
        //gli dico conterrà lo stesso titolo corrispondente al database
        cardTitle.innerText = book.title

         //creo un elemento di tipo p per la categoria del libro
         let cardText = document.createElement("p")
         //gli assegno una classe
         cardText.classList.add("card-text")
         //gli dico conterrà lo stesso titolo corrispondente al database
         cardText.innerText = book.price

         //creo i bottoni
         let cardScarta = document.createElement("button")
         //gli assegno delle classi e un id
         cardScarta.classList.add("btn", "bg-danger")
         // inserisco il testo
         cardScarta.innerText = "scarta"
         //creo i bottoni
         let cardCompra = document.createElement("button")
         //gli assegno delle classi
         cardCompra.classList.add("btn", "bg-success")
         // inserisco il testo
         cardCompra.innerText = "compra ora"
         //appendo tutti gli elementi della card a cardBody
         cardBody.appendChild(cardTitle)
         cardBody.appendChild(cardText)
         cardBody.appendChild(cardScarta)
         cardBody.appendChild(cardCompra)

         //appendo il cardBody con tutti i suoi elementi e l'immagine alla carta
        card.appendChild(img)
        card.appendChild(cardBody)

        //cerco l'id a dell'elemento a cui voglio agganciare le mie card
        document.querySelector("#crea").appendChild(card);

    })

}

 
function cancella () {
    
}
