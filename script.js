// Efek transisi muncul saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector("main");
  mainContent.classList.add("fade-in");
});

function tampilkanQR() {
  document.getElementById("qrDANA").style.display = "none";
  document.getElementById("qrOVO").style.display = "none";
  document.getElementById("qrMBanking").style.display = "none";

  const metode = document.querySelector('input[name="metode"]:checked');
  if (metode) {
    const id = "qr" + metode.value.replace("-", "");
    const el = document.getElementById(id);
    if (el) el.style.display = "block";

    // Tampilkan tombol lanjut WA setelah QR ditampilkan
    document.getElementById("btnKonfirmasi").style.display = "block";
  }
}
function kirimPesanan() {
  const nama = document.getElementById('nama').value;
  const makanan = document.getElementById('makanan').value;
  const jumlah = document.getElementById('jumlah').value;
  const metode = document.querySelector('input[name="metode"]:checked')?.value;

  if (!nama || !makanan || !jumlah || !metode) {
    alert('Mohon lengkapi semua data terlebih dahulu.');
    return;
  }

  const total = jumlah * getHarga(makanan);

  const pesan = `Halo! Saya ingin memesan:\n\n🍽️ Menu: ${makanan}\n📦 Jumlah: ${jumlah}\n💰 Total: Rp ${total.toLocaleString()}\n💳 Pembayaran: ${metode}\n👤 Nama: ${nama}`;
  
  const nomorWA = "6282279577496"; // ← Ganti dengan nomor kamu
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
}

function getHarga(menu) {
  switch(menu) {
    case 'Lenggang Bakar': return 15000;
    case 'Lenggang Goreng': return 18000;
    case 'Lenggang Kuah Karir': return 22000;
    default: return 0;
  }
}

  // Tampilkan sesuai metode yang dipilih
  const metode = document.querySelector('input[name="metode"]:checked');
  if (metode) {
    const id = "qr" + metode.value.replace("-", "");
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  }

