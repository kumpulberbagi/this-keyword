"use strict"

// GLOBAL CONTEXT
// node -v untuk cek versi dari node.js dan setalah di bandingkan dengan
// memasukan inputan this di node REPL ternyata sama, karena emang sama.
// di terminal ketikan:
// > node
// > this
// > ....... // maka akan keluar semua informasi mengenai node.js yang
// sama saja seperti mengetikan node -v pada terminal
// terinstal di komputer kita


// CLASS CONTEXT
class Human {
  constructor(nama){
    this.nama = nama
  }
}

class People extends Human {
  constructor(nama, umur) {
    super(nama)
    this.umur = umur
  }
}

var human = new Human("homo sepaien")
var dramadi = new People("Darmadi", 20)
console.log(human);
console.log(dramadi);

// RELEASE 1
// this untuk mengambil nilai yang berada di dalam classnya
// this mengacu pada objek yang sudah terinstal/ dicleare oleh class.
// bila tidak ada objek yang di dekelarasi, this mengacu pada objek global, bila di web browser maka
// window merupakan objek global
