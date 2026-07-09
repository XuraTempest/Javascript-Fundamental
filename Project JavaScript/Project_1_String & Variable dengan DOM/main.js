let Nama_depan, Nama_belakang, Paragraf_nama;
button = document.getElementById("btn");

button.addEventListener("click", () => {
    Nama_depan = document.getElementById("Nama_depan").value;
    Nama_belakang = document.getElementById("Nama_belakang").value;
    Paragraf_nama = document.getElementById("Paragraf_nama");
    nama_lengkap = `Halo ${Nama_depan} ${Nama_belakang}, terima kasih sudah menggunakan website ini`
    Paragraf_nama.textContent = nama_lengkap;
});