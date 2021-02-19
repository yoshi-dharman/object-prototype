Number.prototype.isPrima = function (){
    for(let i = 2; i < this; i++){
        if(this % i == 0){
            return false;
        }
    }
    return true;
}

let angka = 9;

console.log(angka.isPrima());