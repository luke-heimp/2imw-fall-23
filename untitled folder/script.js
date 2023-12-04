$(document).ready(function () {
  var draggable = $("#draggable");
  var windowWidth = $(window).width();

  draggable.draggable({
    axis: "x",
    drag: function () {
      var position = draggable.position().left;
      var divWidth = draggable.width();
      var currentPosition = position + divWidth;

      // Check if the div crosses 75% of the window width
      if ((currentPosition / windowWidth) * 100 > 70) {
        $("body").css("background-color", "lightgreen");
      } else {
        $("body").css("background-color", ""); // Reset background color
      }
    },
  });
});

$("#draggable").animate(
  {
    marginLeft: "+=10vw",
  },
  5000
);
