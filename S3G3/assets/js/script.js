const btn = document.getElementById("inserisci");

btn.addEventListener("click", function (e) {
  e.preventDefault;
  let form = document.getElementById("form");
  let toDo = document.getElementById("nome");

  if (!toDo.checkValidity()) {
    toDo.style.backgroundColor = "red";
  } else toDo = nome.value;

  form.reset();

  let list = document.createElement("li");
  list.innerText = toDo;
  let fatto= document.createElement('button');
  fatto.innerText='cancella';
  list.appendChild(fatto);
  document.getElementById("lista").appendChild(list);
  
});



