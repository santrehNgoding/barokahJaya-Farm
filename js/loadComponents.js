/*
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

// Navbar (pakai callback)
loadComponent("navbar", "components/navbar.html", function () {
  const nav = document.querySelector(".bottom-navigation");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

// lainnya biasa
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
loadComponent("navbar", "components/navbar.html");

setTimeout(function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  const links = menu.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      burger.classList.remove("active");
    });
  });
}, 500);

*/

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

// ✅ Navbar (semua logic di sini)
loadComponent("navbar", "components/navbar.html", function () {
  const nav = document.querySelector(".bottom-navigation");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  // scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // burger click
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // auto close saat klik menu
  const links = menu.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      burger.classList.remove("active");
    });
  });
});

// lainnya
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
