"use strict"

/* Pendahuluan

JavaScript code berjalan di dalam konteks eksekusi (execution code). Dimana, untuk mengerti tentang excecution code kita diharapkan untuk memahami lebih dulu tentang beberapa konteks yang mungkin hadir dalam proses eksekusi; konteks yang berlaku global, konteks yang berlaku pada fungsi, dan yang terakhir adalah evaluation code yang berlangsung secara global dengan memanggil <code>eval</code>.


// GLOBAL & EXCECUTION CONTEXT
Apakah Konteks Global, execution context?
Sebuah kode, var, atau object yang berlaku bagi fungsi lain; Sebagai contoh

var x = 10; // variabel ini dideklarasi pada global konteks
function adding() {
  var y = 12 // variable ini dideklarasi pada execution context berarti var ini tidak dapat diakses secara global.
  function added() {
    var z = 2; // variable ini juga dideklarsi pada execution context tapi tidak dapat diakses secara umum atau pada fungsi diatasnya. Pada konteks ini, stuktur data yang digunakan adalah stack. Dimana fungsi yang di deklarasi paling akhir, akan keluar pertama, dan fungsi akan mencari sampai ketemu variable dengan scoope terdekat;
    return x + y + z;
  }
}

// RELEASE 1
