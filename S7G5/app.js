const myUrl= "https://striveschool-api.herokuapp.com/api/product/"
const token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmE3MmMwNTgzNTAwMTg1MjJkMjEiLCJpYXQiOjE3MDIzNzQwMDMsImV4cCI6MTcwMzU4MzYwM30.n133f7x0YVRol0vHbdb9axca-TGqHgVh5kXmnNLefDk"

const headers = {
    "Authorization" : token,
    "Accept" : "application/json",
    "Content-Type" : "application/json"
}

let products = []

async function sendData () {
    const newRecord = {
        "name": document.getElementById("inputName").value,
        "brand": document.getElementById("inputBrand").value,
        "description": document.getElementById("inputDescription").value,
        "price": document.getElementById("inputPrice").value,
        "imageUrl": document.getElementById("inputImageUrl").value
    }
    let response = await fetch (myUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    
    let result = await response.json();
    products = result;
    window.location.href="./home.html"
  }



   async function getRecord(id) {
      const finalUrl = myUrl + id
      const response = await fetch(finalUrl, {
          headers: headers,
          method: "GET"
      })
      const data = await response.json()
      adjust(data)   
  }


  let elimina = document.getElementById("elimina")

function goToAdjust(element) {
    let deleteButton = `<button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteRecord('${element._id}')">
  Elimina
  </button>
  <button type="button" class="btn btn-sm btn-outline-warning" onclick="letsAdjust('${element._id}')" >
  Modifica
  </button>`
  elimina.innerHTML += deleteButton
  document.getElementById("buttonSave").style.display="none"
  }


  function adjust (data){
    console.log(data)
    document.getElementById("inputName").value = data.name
    document.getElementById("inputBrand").value = data.brand
    document.getElementById("inputDescription").value = data.description
    document.getElementById("inputPrice").value = data.price
    document.getElementById("inputImageUrl").value = data.imageUrl
    goToAdjust(data)
  }

  
  const deleteRecord = (id) => {
    if(confirm("confermi la tua scelta")) {
      const finalUrl= myUrl + id
      fetch(finalUrl, {
        method: "DELETE",
        headers: headers
      })
     .then(() => {
      window.location.href="./home.html"

     }) 
    }
  }

  window.onload= () =>{
    const params = new URLSearchParams(location.search)
    const id = params.get("id")
    getRecord(id)
  }
    

  const letsAdjust = (id)=>{
const finalUrl = myUrl + id
const newRecord = {
  "name": document.getElementById("inputName").value,
  "brand": document.getElementById("inputBrand").value,
  "description": document.getElementById("inputDescription").value,
  "price": document.getElementById("inputPrice").value,
  "imageUrl": document.getElementById("inputImageUrl").value
}
   fetch (finalUrl, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(newRecord)
})

.then ((response) => response.json())
.then(() => {
  window.location.href="./home.html"

 })
}


function reset(){
  document.getElementById("inputName").value = ""
  document.getElementById("inputBrand").value = ""
  document.getElementById("inputDescription").value = ""
  document.getElementById("inputPrice").value = ""
  document.getElementById("inputImageUrl").value = ""
}

let details = document.getElementById("dettaglio")
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

    
    window.onload = function(){ const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    showDetailsProduct(id)}
  }
