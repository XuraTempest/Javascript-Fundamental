//tipe bilangan Numbers 64 bit

//tipe data itu terbagi menjadi 3
let angka_int = 10; // ini adalah angka integer, yang artinya, angka ini tidak memiliki koma
let angka_float = 10.5; // ini adalah angka float, yang artinya, angka ini memiliki koma/ desimal
let angka_big_int = 9876545678917652367817265361728n; // ini adalah angka big integer, yang artinya, angka ini memiliki nilai yang sangat besar

console.log(angka_int);
console.log(typeof angka_int);
console.log(angka_float);
console.log(typeof angka_float);
console.log(angka_big_int);
console.log(typeof angka_big_int);

//cara menggunakan tipe bilangan numbers
let angka1 = 10;
let angka2 = "5";
console.log(angka1 + angka2); // ini tidak bisa dilakukan karena berbeda tipe data, sehingga angka1 dijadikan string supaya bisa digunakan oleh angka2
console.log(angka1 + parseInt(angka2)); // ini bisa dilakukan, karena angka2 diubah menjadi int, sehingga kedua tipe data tersebut dapat digunakan 1 sama lain

let angka3 = 10.5;
let angka4 = "5.5";
console.log(angka3 + angka4);
console.log(angka3 + parseFloat(angka4)); // ini bisa dilakukan, karena angka4 diubah menjadi float, sehingga kedua tipe data tersebut dapat digunakan 1 sama lain

//contoh lainnya
let data1 = "10.2 ucup surucup suka makan nasi goreng";
console.log(parseFloat(data1)); // ini bisa dilakukan, karena string mengambil data paling pertama
console.log(typeof parseFloat(data1)); // sehingga menjadi tipe data number berupa float

let data2 = "otong surotong suka makan buah 20.2"
console.log(parseFloat(data2)); // hasilnya NaN, karena parseFloat mengambil data atau kalimat yang ke pertama muncul di string
console.log(typeof parseFloat(data2)); // bertipe data Number

let data3 = "10.4 hahaha 20.1"
console.log(parseFloat(data3)); // menghasilkan 10.4, karena 10.4 muncul diawal duluan keimbang 20.1
console.log(typeof parseFloat(data3)); //hasilnya bertipe number
