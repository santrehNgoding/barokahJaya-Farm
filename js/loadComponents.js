function loadComponent(id, file, callback) {
  fetch(file)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById(id).innerHTML = data;

      if (callback) callback(); // jalankan setelah load selesai
    });
}

// ✅ Navbar (SEMUA logic di sini)
loadComponent("navbar", "components/navbar.html", function () {
  const nav = document.querySelector(".bottom-navigation");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  // =========================
  // SCROLL NAVBAR
  // =========================
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // =========================
  // BURGER MENU
  // =========================
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // =========================
  // AUTO CLOSE MENU
  // =========================
  const links = menu.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      burger.classList.remove("active");
    });
  });

  // =========================
  // SOSMED TOGGLE (BARU 🔥)
  // =========================
  const sosmedToggle = document.getElementById("sosmedToggle");
  const sosmedMenu = document.getElementById("sosmedMenu");

  if (sosmedToggle && sosmedMenu) {
    sosmedToggle.addEventListener("click", function () {
      sosmedMenu.classList.toggle("active");
    });

    // optional: klik luar untuk menutup
    document.addEventListener("click", function (e) {
      if (!sosmedToggle.contains(e.target) && !sosmedMenu.contains(e.target)) {
        sosmedMenu.classList.remove("active");
      }
    });

    // =========================
    // SHARE BUTTON
    // =========================
    document.addEventListener("DOMContentLoaded", function () {
      // cek apakah ada share section (biar aman di semua halaman)
      const shareSection = document.querySelector(".share");
      if (!shareSection) return;

      // ambil URL halaman
      const url = window.location.href;

      // ambil judul artikel (h1)
      const titleElement = document.querySelector("article h1");
      if (!titleElement) return;

      const text = titleElement.innerText;

      // ambil tombol share
      const wa = document.getElementById("shareWA");
      const fb = document.getElementById("shareFB");
      const tg = document.getElementById("shareTG");

      // set link otomatis
      if (wa) {
        wa.href = "https://wa.me/?text=" + encodeURIComponent(text + " " + url);
      }

      if (fb) {
        fb.href =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(url);
      }

      if (tg) {
        tg.href =
          "https://t.me/share/url?url=" +
          encodeURIComponent(url) +
          "&text=" +
          encodeURIComponent(text);
      }
    });
  }
});

// lainnya
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
