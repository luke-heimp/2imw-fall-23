document.addEventListener("DOMContentLoaded", function () {
  var opendoor = document.getElementById("opendoor");
  var clickbox = document.getElementById("clickbox");
  var waitsection = document.getElementById("waitsection");

  $(document).ready(function () {
    console.log("hello!");
    opendoor.style.display = "none"; // Hide the div
    clickbox.style.display = "none"; // Hide the div
  });

  $("#text").on("click", function () {
    $(".sky1").toggleClass("sky1-fade");
    $(".sky2").toggleClass("sky2-fade");
    $(".sky3").toggleClass("sky3-fade");
    $(".sky4").toggleClass("sky4-fade");
    $("#night").fadeTo(3900, 0.21);
    $("#night").fadeTo(1930, 0);
    $("#night").fadeTo(1560, 0.21);
    $("#night").fadeTo(1230, 0);
    $("#night").fadeTo(1750, 0.21);
    $("#night").fadeTo(1510, 0);
    $("#night").fadeTo(1810, 0.21);
    $("#night").fadeTo(1980, 0);
    $("#night").fadeTo(2480, 0.21);
    $("#night").fadeTo(3180, 0);
    $("#night").fadeTo(5020, 0.21);
    $("#night").fadeTo(12690, 0);
  });

  $("#text").click(function () {
    setTimeout(function () {
      $("#door").click(function () {
        $("#door").hide();
        opendoor.style.display = "block";
        clickbox.style.display = "block";
      });
    }, 38000);
  });
  $("#text").click(function () {
    setTimeout(function () {
      $("#night").hide();
    }, 38000);
  });
});

$("#clickbox").click(function () {
  waitsection.style.display = "none";
});
