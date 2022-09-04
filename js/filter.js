$(function () {
  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let value = $(this).attr("data-name");
    if (value == "todos") {
      $(".cont-work").show("1000");
    } else {
      $(".cont-work")
        .not("." + value)
        .hide("1000");
      $(".cont-work")
        .filter("." + value)
        .show("1000");
    }
  });

  let equipo = $("#equipo").offset().top,
    servicio = $("#services").offset().top,
    trabajo = $("#work").offset().top,
    contacto = $("#contact").offset().top;

  window.addEventListener("resize", function () {
    let equipo = $("#equipo").offset().top,
      servicio = $("#services").offset().top,
      trabajo = $("#work").offset().top,
      contacto = $("#contact").offset().top;
  });

  $("#enlace-inicio").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  $("#enlace-equipo").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: equipo - 100,
      },
      100
    );
  });

  $("#enlace-servicio").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: servicio - 100,
      },
      100
    );
  });

  $("#enlace-trabajo").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: trabajo - 100,
      },
      100
    );
  });

  $("#enlace-contacto").on("click", (e) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto - 100,
      },
      100
    );
  });
});
