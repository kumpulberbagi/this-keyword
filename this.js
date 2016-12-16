"use strict"

class Keyword{
  constructor(params){
    this.pesan = params['pesan']
  }

  yahoo(){
    console.log(this.pesan);
    console.log("this.pesan Tidak akan keluar karena berada dalam function method");
    setTimeout(function(){
      console.log(this.pesan);
    },2000)
  }
}

var google = new Keyword({pesan : "Mencari"})
console.log(google.pesan);
google.yahoo();


//This bersifat global
// namun this tidak bisa diakses dari fungsi didalam method, harus di deklarasikan dulu sebelum fungsi dalam method tersebut
