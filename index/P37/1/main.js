$(function () {
  let draggableElement = $(".draggable");
  $("#draggable").draggable({ axis: "x" });
});

$("#longbox").on("click", function () {
  $("#block").animate({ left: "+=50px" }, "slow");
});
