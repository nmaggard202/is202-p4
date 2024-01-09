$('#hamburger-button').click(function () {
  if ($('#menu').hasClass('hidden')) {
    ($('#menu').removeClass('hidden'));
    ($('#hamburger-button').addClass('rotate'));
  }
  else {
    ($('#menu').addClass('hidden'));
    ($('#hamburger-button').removeClass('rotate'));
  }
})

$(window).resize(function () {
  if ($(document).width() < 1000) {
    $("#menu").addClass("hidden");
    $("#hamburger-img").removeClass("hidden");
    $("#hamburger-button").removeClass("hidden");
  } else {
    $("#menu").removeClass("hidden");
    $("#hamburger-img").addClass("hidden");
    $("#hamburger-button").addClass("hidden");
  }
});

$('h1').click(function () {
  $("h1").css("color", "darkgrey");
});

$('img').click(function () {
  $("img").css("background-color", "darkgrey");
});
