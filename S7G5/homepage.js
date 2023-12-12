
let contenitore = document.getElementById("contenitore")

function create(products){
    products.forEach(product  =>{
      
let newProduct =
 ` <div class="col-md-4">
<div class="card mb-4 shadow-sm">

<a href="dettaglio.html">
  <img class=" card-img-top" width="100%" height="225" src=${product.src}/>
  </a>
  <div class="card-body">
  <a href="dettaglio.html">
    <h5 class="card-title">${product.name}</h5>
    </a>
    <p class="card-text">
     ${product.description}
    </p>
    <small>${product.price}</small>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      
        <a type="button" class="btn btn-sm btn-outline-warning" href="./back.html?id=${product._id}">
          Modifica
        </a>
        
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Scopri di più
        </button>
      </div>
    </div>
  </div>
</div>
</div>`
contenitore.innerHTML += newProduct
}
    )}

    const generate = ()=> {
      fetch(myUrl, {
          headers: headers
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          create(data)
      });  
      
  }
  window.onload = () =>{
      generate()
  }

