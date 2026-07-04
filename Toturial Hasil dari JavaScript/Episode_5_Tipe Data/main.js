// ada 6 tipe data di javascript
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. NaN

//1. string
let nama = "John Doe";
console.log(nama);
console.log(typeof nama);
nama = "Bambang Surono";
console.log(nama);
console.log(typeof nama);
//fakta unis string
let angka = "12345";// string bisa berisi angka
console.log(angka);
console.log(typeof angka);// hasilnya string walaupun berisi angka, karena diapit oleh tanda kutip

//2. number
let umur = 25;
console.log(umur);
console.log(typeof umur);
umur = 30;
console.log(umur);
console.log(typeof umur);

//3. boolean
let data = true;
console.log(data);
console.log(typeof data);
data = false;
console.log(data);
console.log(typeof data);
console.log(data == 1); // true  dianggap 1
console.log(data == 0); // false dianggap 0

//4. undefined
let alamat;
console.log(alamat);
console.log(typeof alamat);
alamat = "Jl. Raya No. 123";
console.log(alamat);
console.log(typeof alamat); // di js tipe data undefined bisa berubah menjadi tipe data lain

//5. null
let pekerjaan = null;
console.log(pekerjaan);
console.log(typeof pekerjaan);
pekerjaan = "Programmer";
console.log(pekerjaan);
console.log(typeof pekerjaan); // di js tipe data null bisa berubah menjadi tipe data lain

// tantangan seru/kejadian khusus antara undefined dan null
let nilai_murid1;
let nilai_murid2 = null;
console.log(nilai_murid1 == nilai_murid2); // true karena keduanya dianggap tidak ada nilai
console.log(nilai_murid1 === nilai_murid2); // false karena tipe datanya berbeda, undefined dan null adalah tipe data yang berbeda

//jujur aja yang ngetik w dibantu ai jir pas w mau ngetik terus auto fill make tab ;-;
//tapi jujur ini make bahasa w sendiri dan apa yang harus w catet make otak w sendiri ;-;

//6. NaN
let hasil = 10 / "abc"; // hasilnya NaN karena tidak bisa dibagi dengan string
console.log(hasil);
console.log(typeof hasil); // tipe data NaN adalah number
//hal yang menarik dari NaN
console.log(NaN == NaN); // false karena NaN tidak sama dengan NaN
console.log(NaN === NaN); // false, walaupun memiliki tipe data yang sama, tapi hasil sebelum nan bisa saja berbeda
//contoh lain NaN
let hasil_2 = 0 / 0; // hasilnya NaN karena tidak bisa dibagi dengan 0
console.log(hasil_2);
//kasih w ngetik pls ai, w juga pen belajar ngetik cepet dan apa yagn w ketik bisa masuk ke otak w juga ;-;