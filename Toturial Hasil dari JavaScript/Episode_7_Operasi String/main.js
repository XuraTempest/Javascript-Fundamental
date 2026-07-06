// ada beberapa cara untuk mengubah string dengan menggunakan operasi di string, berikut:
//1. mencari index dari huruf
let data_string = "Otong Surotong";
let data_string2 = data_string.indexOf("Surotong");
console.log(data_string2);
console.log(data_string.indexOf("Surotong", 5)); // mencari index dari string "Surotong" mulai dari index ke 5
console.log(typeof data_string2); // tipe datanya number karena hasil dari indexOf
console.log(data_string.indexOf("o"));
console.log(data_string.indexOf("O"));// disini sensitif antara huruf besar dan kecil

//2. mencari huruf dari index
let string = "Ucup Surucup";
console.log(string.charAt(5)); // mencari huruf dari index ke 5
console.log(string.charAt(-1)); // tidak bisa mencari index dari angka negatif (padahal index ke -1 itu adalah huruf terakhir dari string)
console.log(string.charAt(0, 5)); // mencari huruf dari index ke 0 sampai index ke 5, tapi tidak bisa karena charAt hanya bisa mencari satu huruf saja

//3. menyambung string
let string1 = "Ucup";
let string2 = "Surucup";
console.log(string1.concat(string2));// disini tidak ada spasi karena concat hanya menyambung
console.log(string1.concat(` ${string2}`));// disini ada spasi karena concat menyambung dengan spasi

//4. substring, yaitu untuk mengambil sebagian kalimat dari string
let string_substring = "Ucup Surucup";
console.log(string_substring.substring(0, 4)); // mengambil kalimat dari index 0 sampai pembatasnya yaitu 4
console.log(string_substring.substring(-2, 4)); // disini tidak bisa mengambil kalimatnya, karena substring itu tidak bisa membaca index negatif
console.log(string_substring.substring(7, 2));// disini bisa mengambil kalimatnya, karena substring itu bisa membaca hal yang lebih besar dari index awal, jadi bisa membaca index 2 sampai index 7

//5. slice, yaitu untuk mengambil sebagian kalimat dari string
let string_slice = "Ucup Surucup";
console.log(string_slice.slice(0, 4));
console.log(string_substring.slice(7, 2)); // disini tidak bisa mengambil kalimatnya, karena slice itu tidak bisa membaca hal yang lebih besar dari index awal, jadi tidak bisa membaca index 2 sampai index 7
console.log(string_slice.slice(-2, 4)); // disini tidak bisa mengambil kalimatnya, karena slice itu bisa membaca index negatif, tapi index awalnya lebih besar dari index akhirnya
console.log(string_slice.slice(-2));// tapi pada akhirnya bisa membaca index negatif

// 6.replace, yaitu untuk mengganti sebagian kalimat dari string
let string_replace = "Ucup Surucup";
console.log(string_replace.replace("Ucup", "Otong")); // mengganti "Ucup" dengan "Otong"
let string_replace2 = "Otong Surucup";
console.log(string_replace2.replace("Otong", "Ucup")); // mengganti "Otong" dengan "Ucup"

// 7. split, yaitu untuk memecah string menjadi array
let string_split = "Ucup Surucup";
console.log(string_split.split(" "));

//8. toLowerCase, yaitu untuk mengubah string menjadi huruf kecil semua
let string_lowercase = "Ucup Surucup";
console.log(string_lowercase.toLowerCase());

//9. toUpperCase, yaitu untuk mengubah string menjadi huruf besar semua
let string_uppercase = "Ucup Surucup";
console.log(string_uppercase.toUpperCase());

//10. trim, yaitu untuk menghapus spasi di awal dan akhir string
let string_trim = "   Ucup Surucup   ";
console.log(string_trim.trim());

//11. includes, yaitu untuk mengecek apakah string mengandung kata tertentu
let string_includes = "Ucup Surucup";
console.log(string_includes.includes("Ucup"));

//12. startsWith, yaitu untuk mengecek apakah string diawali dengan kata tertentu
let string_startsWith = "Ucup Surucup";
console.log(string_startsWith.startsWith("Ucup"));
console.log(string_startsWith.startsWith("Surucup"));// karena bukan kata pertama

//13. endsWith, yaitu untuk mengecek apakah string diakhiri dengan kata tertentu
let string_endsWith = "Ucup Surucup";
console.log(string_endsWith.endsWith("Surucup"));
console.log(string_endsWith.endsWith("Ucup"));// karena bukan kata terakhir

//14. repeat, yaitu untuk mengulang string sebanyak n kali
let string_repeat = "Ucup Surucup";
console.log(string_repeat.repeat(3)); // mengulang string sebanyak 3 kali

//15. describe, yaitu untuk mengecek panjang string
let string_describe = "Ucup Surucup";
console.log(string_describe.length); // panjang string adalah 12

//16. padStart, yaitu untuk menambahkan string di awal string
let string_padStart = "Ucup Surucup";
console.log(string_padStart.padStart(20, " ")); // menambahkan spasi di awal string sebanyak 20 karakter

//17. padEnd, yaitu untuk menambahkan string di akhir string
let string_padEnd = "Ucup Surucup";
console.log(string_padEnd.padEnd(20, " ")); // menambahkan spasi di akhir string sebanyak 20 karakter

//18. yang terakhir dan bonus yaitu extract data number
let string_extract = "123";
console.log(parseInt(string_extract)); // mengubah string menjadi integer
console.log(typeof parseInt(string_extract)); // tipe datanya number karena hasil dari parseInt
let string_extract2 = "123.456";
console.log(parseFloat(string_extract2)); // mengubah string menjadi float
console.log(typeof parseFloat(string_extract2)); // tipe datanya number karena hasil dari parseFloat