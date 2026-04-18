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

// ✅ Navbar (-----------SEMUA LOGIC DISINI--------------)
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
  }

  // =========================
  // SHARE BUTTON
  // =========================
  const shareSection = document.querySelector(".share");

  if (shareSection) {
    const url = window.location.href;

    const titleElement = document.querySelector("article h1");
    if (titleElement) {
      const text = titleElement.innerText;

      const wa = document.getElementById("shareWA");
      const fb = document.getElementById("shareFB");
      const tg = document.getElementById("shareTG");

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
    }
  }

  // =========================
  // LOAD DATA JSON
  // =========================
  let articlesData = [];

  fetch("data/articles.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articlesData = data;

      // setelah data siap, baru aktifkan klik
      initClick();
    });

  // =========================
  // FUNCTION CLICK
  // =========================
  function initClick() {
    const newsItems = document.querySelectorAll(".news-item");
    const articleContent = document.getElementById("articleContent");

    newsItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const id = item.getAttribute("data-id");

        // cari artikel dari JSON
        const article = articlesData.find(function (a) {
          return a.id == id;
        });

        if (!article) {
          alert("Artikel tidak ditemukan!");
          return;
        }

        // tampilkan ke kiri
        articleContent.innerHTML = `
        <header>
          <h1>${article.title}</h1>
        </header>

        <figure>
          <img src="${article.image}" alt="">
        </figure>

        <section>
          ${article.content}
        </section>
      `;

<<<<<<< HEAD
      

=======
>>>>>>> f2e0fdad0e737b8fcfdc704fb271cc2053e92bc3
        // update breadcrumb
        const breadcrumb = document.querySelector(".breadcrumb span");
        if (breadcrumb) {
          breadcrumb.innerText = article.title;
        }

        // scroll ke atas
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  }
});

// lainnya
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
