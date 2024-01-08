var padre= document.getElementById("padre")
let figlio1= document.getElementById("figlio1")
let figlio2= document.getElementById("figlio2")
let figlio3= document.getElementById("figlio3")


padre.addEventListener ('click', function(e){
  e.style.backgroundcolor="pink" 
}) 

figlio1.addEventListener('click', change(figlio1))