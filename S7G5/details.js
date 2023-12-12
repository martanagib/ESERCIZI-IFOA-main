/*let details = document.getElementById("dettaglio")
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const showDetailsProduct = (id) =>{
  const finalUrl= myUrl + id
    fetch(finalUrl, {
        headers: headers
    })
        .then(data => populateDetailPage(data))
};


function populateDetailPage(data){
    let newDetails = `
    <img src="${data.imageUrl}" alt="" height="300px">
            <div class=p-5>
                <h5>Nome prodotto: ${data.name}</h5>
                <p>Descrizione: ${data.description}</p>
                <p>Brand: ${data.brand}</p>
                <p>Prezzo: ${data.price}€</p>
            </div>`

    details.innerHTML = newDetails;

};

window.onload = showDetailsProduct()
*/