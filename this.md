# this pada Javascript

## Penggunaan this

Pada JavaScript **this** memiliki fungsi sebagai referal atau mengacu kepada **context** dimana **this** berada. Pada konteks yang umum terdapat di dalam JS (JavaScript), **this** dapat mengacu kepada konteks global maupun konteks dimana kode tersebut dieksekusi.

This sendiri hadir dalam pemanggilan identifier atau identitas dari suatu fungsi atau class (classification). Ketika suatu class dipanggil, misal:

```javascript
class Car() {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getCarId() {
    return this.id;
  }
}
```

Pada konteks tersebut **this** hanya mengacu pada *class* Car. Pemanggilan **this** diluar konteks kelas tersebut adalah hal absurd. Karena this tidak akan mengacu kemana-mana, dengan kata lain akan muncul error pada *console* yang mengarah ke referensi error. Sedangkan pada *method* ```getCarId()```. Pemanggilan dengan this akan mengacu pada tingkatan lebih global daripada methodnya sendiri, yaitu Car.
