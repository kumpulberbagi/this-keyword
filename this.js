"use strict"

// GLOBAL CONTEXT
/*
di console menggunakan perintah 'node' dahulu
untuk melihat versi node js menggunakan sintaks 'process.version'
hal ini sama jika melihat versi node js yang menggunakan 'sintaks node -v'
sedangkan untuk melihat method2 yang tersedia di node js menggunakan sintaks 'this'
*/



// CLASS CONTEXT
class Mata {
  constructor (angka){
    this.angka = angka
  }
}
var eye = new Mata(2)
console.log(eye.angka)

// RELEASE 1
// penggunaan this pada konteks global dilakukan di window untuk mengetahui fungsi node yang terinstall pada versi tersebut
//penggunaannya this akan menjadi variable yang global sehingga dapat dipanggil oleh yang diluar function atau class.
//penggunaan this pada object atau class, akan memanggil this yang berada dalam obeject atau classnya sendiri (tidak menggambil variable globalnya)
//this juga dapat berfungsi untuk mengembangkan nilai atau angka sebuah property object. digunakan jika ingin menambahkan diluarnya fungsi awalnya.
