const headers = { "Authorization": "NZAu6yNTqglK1bZ3TWkRvVpJDU0lKPXdtkQMmOWi8gdbbAKPaFlhVenv"}
let myUrl = "https://api.pexels.com/v1/search?query="

const contenitore = document.getElementById("contenitore")

let dati = []

let cerca;
console.log(cerca)

const generate = ()=> {
fetch(myUrl+= "mountains", {
    headers: headers
})
.then(response => response.json())
.then(data => {
    create(data.photos)
  });  

}

const secondary = ()=> {
    fetch(myUrl+= "sunset", {
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        create(data.photos)
      });  
    
    }

    const search = ()=> {
        cerca=document.getElementById("cerca").value
        fetch(myUrl+= cerca, {
            headers: headers
        })
        .then(response => response.json())
        .then(data => {
            create(data.photos)
          });  
        
        }



function create(photos){
    photos.forEach(photo  =>{
      
let immagine =
 ` <div class="col-md-4">
<div class="card mb-4 shadow-sm">

<a href="dettaglio.html">
  <img class=" card-img-top" width="100%" height="225" src=${photo.src.small}/>
  </a>
  <div class="card-body">
  <a href="dettaglio.html"
    <h5 class="card-title">Lorem Ipsum</h5>
    </a>
    <p class="card-text">
      This is a wider card with supporting text below as a natural
      lead-in to additional content. This content is a little bit
      longer.
    </p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">
          View
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hide(this)">
          Hide
        </button>
      </div>
      <small class="text-muted">${photo.id}</small>
    </div>
  </div>
</div>
</div>`
contenitore.innerHTML += immagine
}
    )}


    const hide = (el) => {
        el.closest(".col-md-4").remove()

    }


