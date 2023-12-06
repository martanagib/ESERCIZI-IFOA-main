let pets= [];
let form = document.getElementById('form')
let petName = document.getElementById('petName')
let ownerName = document.getElementById('ownerName')
let species = document.getElementById('species')
let breed = document.getElementById ('breed')

const btn = document.getElementById("inserisci");

class Pet {
    constructor (petName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }

    sameOwner (pet){
        if (this.ownerName === pet.ownerName){
            return true;
        } else {
            return false;
        }
    }
}


btn.addEventListener("click", function (e) {
    e.preventDefault;
let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value)
pets.push(newPet)
lista()
console.log(pets)
form.reset()

})

function lista(){
    document.getElementById("lista").innerHTML = "";
    pets.forEach(pets => {
        let obj = document.createElement("li");
        obj.innerText = "name: " + pets.petName + " owner: " + pets.ownerName + " species: " + pets.species + " breed: " + pets.breed;
        document.getElementById("lista").appendChild(obj);
    })
    }



class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    confronto(user1, user2) {
        if (user1.age < user2.age){
            console.log(user2.firstName + " è più grande di " + user1.firstName)
        }else if (user1.age > user2.age){
            console.log(user1.firstName + " è più grande di " + user2.firstName) 
        } else 
        console.log(user1.firstName + " ha la stessa età di " + user2.firstName) 
    }
}

const user1 = new User ("anna", "rossi", 34, "roma")
const user2 = new User ("maria", "verdi", 40, "milano")
const user3 = new User ("antonio", "giallo", 50, "ravenna")

user1.confronto(user2, user3)
user3.confronto(user2, user1)


