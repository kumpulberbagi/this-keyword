"use strict"

// GLOBAL CONTEXT
this.x = 37;
var z = this.x
console.log(this.x+4);//output 41

function tambah(value){
  return value+=z
}

console.log(tambah(5));//jika menggunakan var z = this.x maka keluar

function tambah2(value){
  return value+=this.x
}
//console.log(tambah2(5));//jika menggunakan this.x pada function porperty x undefined dan tidak bisa di eksekusi atau function eror
// CLASS CONTEXT
class hewan {
  constructor (nama,makan,minum){
    this.makan = makan;
    this.minum = minum+ z;
    this.nama = nama;
  }
}
var anjing = new hewan("doggy", "kripik","mineral water")
console.log(anjing.minum);
// console.log(this.makan);
 console.log(this.makan);//undefined
// // RELEASE 1
// pada global konteks kita bisa manggil this dimanapubn sebagai variabel global  akan tetapi harus di inisialisasi dengan var tertentu yang samadengan nilai this. jika this dipanggil langsung pada function
//maka akan eror, this pada class hanya bisa diakses oleh clas itu sendiri . contoh this makan yg akan keluar undefined, akan tetapi
// ketika dipanggil menggunakan class maka
