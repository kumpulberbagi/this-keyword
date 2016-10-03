"use strict"

// GLOBAL CONTEXT
//Cara memanggil varsion via node REPL :
// 1. Masuk ke node REPL dengan cara ketik 'node' pada terminal.
// 2. Ketik 'this.process.version' pada node REPL untuk melihat varsi dari node yang terinstall



// CLASS CONTEXT
class Student{
  constructor(property){
    this.name = property['name']
  }
}

var yoni = new Student({name : 'Yoni'})
console.log(yoni.name);

// RELEASE 1

// this adalah sebuah variable untuk menangkap value properti dari sebuah objek.
// this biasanya digunakan dalam sebuah method untuk menangkap value properti dari objek yang sama
// pemakaian this terbatas hanya di dalam class tersebut.
// Masing-masing this dari class yang berbeda akan merujuk pada objek yang berbeda sesuai pada dimana this tersebut ditempatkan.
