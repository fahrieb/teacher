// Fungsi untuk menghasilkan bintang
function generateStars(modalId) {
  const starsContainer = document.getElementById(`stars-${modalId}`);
  starsContainer.innerHTML = ''; // Bersihkan bintang sebelumnya

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starsContainer.appendChild(star);
  }
}

// Fungsi untuk menampilkan modal
function showModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  const countdownElement = document.getElementById(`countdown-${id}`);
  let countdown = 10;

  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  generateStars(id); // Tambahkan bintang

  // Fungsi untuk menghitung mundur
  const countdownInterval = setInterval(function() {
    countdownElement.textContent = `Menutup dalam ${countdown} detik...`;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      closeModal(id);
    }
    countdown--;
  }, 1000); // Hitung mundur setiap detik
}

// Fungsi untuk menutup modal
function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Klik di luar modal untuk menutup
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) { // Cek apakah klik di luar konten modal
      closeModal(modal.id.split('-')[1]); // Menutup modal sesuai id
    }
  });
});