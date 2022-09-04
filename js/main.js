const nav = document.getElementById("nav");
const menu = document.getElementById("enlaces");
const menu_btn = document.getElementById("open");
const buttons = document.querySelectorAll("btn-header");
let closed = true;
const menuLinks = document.querySelectorAll('.enlaces a[href^="#"]');

function menus() {
  let Desplz_actual = window.pageYOffset;
  if (Desplz_actual <= 50) {
    nav.classList.remove("nav2");
    nav.className = "nav1";
    menu.style.top = "80px";
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    menu.style.top = "100px";
  }
}

window.addEventListener("load", () => {
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
  menus();
});

window.addEventListener("scroll", () => {
  menus();
});

window.addEventListener("resize", () => {
  if (screen.width >= 700) {
    closed = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
});

// Permite mostrar/cerrar el menu en dispositivos moviles o tablets
menu_btn.addEventListener("click", () => {
  if (closed) {
    menu.style.width = "100vw";
    closed = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    closed = true;
  }
});

// Permite hacer que el menu se cierre cuando se hace click en un enlace (devices)
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    if (screen.width <= 700) {
      if (!closed) {
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        closed = true;
      }
    }
  });
});