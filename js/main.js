let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let menu_btn = document.getElementById("open");
let buttons = document.querySelectorAll("btn-header");
let closed = true;

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

// enlaces
const menuLinks = document.querySelectorAll('.enlaces a[href^="#"]');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    if (closed) {
      menu.style.width = "100vw";
      closed = false;
    } else {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      closed = true;
    }
  });
});
