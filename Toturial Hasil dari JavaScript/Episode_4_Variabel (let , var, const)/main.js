// kelakuan let
let bambang = "kocak";
console.log(bambang);

{
    let bambang = "kocak banget";
    console.log(bambang);
};
console.log(bambang);

//kelakuan let lain
let surono = "gak tau diri";
console.log(surono);

{
    surono = "gak tau diri banget";
    console.log(surono);
}
console.log(surono);

// kelakuan var
var budi = "super kocak";
console.log(budi);

{
    var budi = "super kocak banget";
    console.log(budi);
};
console.log(budi);

//kelauan const
const jono = "gak jelas";
console.log(jono);
// jono = "gak jelas banget"; // error, karena const tidak bisa diubah nilainya dan harus diinisialisasi saat deklarasi

{
    const jono = "gak jelas banget";
    console.log(jono); // btw dia bisa diinisialisasi ulang di dalam block scope, tapi tidak bisa diubah nilainya
}
console.log(jono);