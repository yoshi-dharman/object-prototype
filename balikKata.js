// NOMOR 1=================================================================================

String.prototype.balikKata = function (){
    let newString ="";
    for(let i=this.length-1; i >= 0; i--){
        newString += this[i];
    }
    return newString;
}

console.log("Hu Tao".balikKata());

let tesString = "Hilichurls";

console.log(tesString.balikKata());


