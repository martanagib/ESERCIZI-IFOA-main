const arr= [1,2,3,4,5]

class myArray {
    constructor (arr) {
        this.arr = arr
    }
}

const myarray1 = new myArray (arr)

function control (arr){
    if (arr.every((el)=> typeof
    el==="number")){
        return true;
        console.log("true");
    } else {
        return false
        console.log("false")
    }
}

function divide (){
    if (control(arr) === true){
        for (let i=0; arr.length<=1; i++){
            if (arr.el %3===0 && arr.el %5===0 ){
                console.log('paperino')
            } else if (arr.el %3===0){
                console.log("pippo")
            } else if (arr.el %5===0){
                console.log("pluto")
            } else {
                let stringa = `${arr[i]}`
                console.log(stringa)
            }
        }
    }
}


control(myarray1)
divide()