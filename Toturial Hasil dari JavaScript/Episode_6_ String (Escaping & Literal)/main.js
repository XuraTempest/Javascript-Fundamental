//1. Escaping Strings
let data1 = "ucup surucup berkata \"aku suka kamu\"";
console.log(data1);
let data2 = 'ucup surucup berkata \'aku suka kamu\'';
console.log(data2);
let data3 = "ini adalah backslash \\";
console.log(data3);
let data4 = "ini adalah new line, \nuntuk membuat baris baru";
console.log(data4);
let data5 = "ini adalah tab, \tuntuk membuat tab";
console.log(data5);

//2. Literal String
let namaDepan = "ucup";
let namaBelakang = "surucup";
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap);

//3. Template Literal (ini sering dipakai untuk membuat string yang panjang dan berisi data data)
let umur = 17;
let namaLengkap2 = `${namaDepan} ${namaBelakang} adalah seseorang yang berumur ${umur} tahun`;
console.log(namaLengkap2);