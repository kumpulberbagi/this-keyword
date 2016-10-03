"use strict"

// GLOBAL CONTEXT
const PI = Math.PI;

/*
node => this.process.version
version node : 'v6.5.0'
*/

// CLASS CONTEXT
class Circle {
  constructor(r) {
    this.r = r;
  }

  area() {
    return Math.ceil(PI * Math.pow(this.r, 2));
  }
}

var lingkaran = new Circle(7);
console.log(lingkaran.area());

// RELEASE 1
// Penggunaan keyword this, pada global context kita dapat mengakses setiap property dan methodnya dari mana saja. Sedangkan pada class context, keyword this merujuk pada class itu sendiri tempat sebuah property berada dan tidak dapat dipanggil dari luar.
//Nilai dari this sendiri selalu berubah tergantung tempatnya, atau berubah [ada setiap nesting level.
