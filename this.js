"use strict"

// GLOBAL CONTEXT

this.name = "Alessandro"
var nama = this.name


// CLASS CONTEXT
class Status{
  constructor(status){
    this.status = status
  }
  display(){
    return `${nama} masih ${this.status}`
  }
}
let alessandro = new Status("jomblo")
console.log(alessandro.display());

// RELEASE 1
// Kata this jika tidak didalam class, dia bersifat global dan bisa diakses dimanapun. Ketika this didalam class, dia akan merefer ke class itu sendiri dan jika ingin dipakai di tempat lain harus melalui class itu terdahulu.
