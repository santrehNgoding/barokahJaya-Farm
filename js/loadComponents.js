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
  }
});

// lainnya
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
