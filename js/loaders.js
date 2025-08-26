$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });

  $(".hvr-grow").click(function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

  $(".modal").modal();
  $(".parallax").parallax();

  $(".carousel.carousel-slider.myslider").carousel({
    fullWidth: true,
    indicators: true,
  });

  function showSection(section) {
    // Sakrij sve sekcije
    $(".section").hide();

    // Prikazi odgovarajucu sekciju
    $("#" + section).show();
  }

  function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
  }
});
