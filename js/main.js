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

new TypeIt("#type-job", {
  speed: 50,
  startDelay: 900,
})
  .type("Desarrollador", { delay: 100 })
  .pause(300)
  .type(" FrontEnd", { delay: 200 })
  .pause(400)
  .type(
    ` <strong style="color: #508c8b; font-family: 'Courier New', Courier, monospace">JR</strong>`,
    { delay: 400 }
  )
  .go();

new TypeIt("#type-effect", {
  speed: 50,
  startDelay: 900,
  loop: true,
  loopDelay: 4000,
})
  .type("el entusiamo hará", { delay: 100 })
  .move(-7, { delay: 100 })
  .type("s", { delay: 400 })
  .move(null, { to: "START", instant: true, delay: 300 })
  .move(1, { delay: 200 })
  .delete(1)
  .type("E", { delay: 225 })
  .pause(200)
  .move(2, { instant: true })
  .pause(200)
  .move(10, { instant: true })
  .move(5, { delay: 200 })
  .pause(200)
  .type(
    ` más que el <strong style="color: #508c8b; font-family: 'Courier New', Courier, monospace">conocimiento</strong>`,
    { delay: 400 }
  )
  .move(null, { to: "END" })
  .pause(500)
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>- William Hazlitt</em>")
  .go();
