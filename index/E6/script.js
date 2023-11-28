// code from https://api.jquery.com/animate/ and https://api.jquery.com/position/
//Jquery methods: Effects = .animate, Events = .click & .dblclick, Manipulation = .position

console.log("Hello");

$("#right").on("click", function () {
  $("#block").animate({ left: "+=50px" }, "slow");
});

$("#left").on("click", function () {
  $("#block").animate({ left: "-=50px" }, "slow");
});

$("#left").on("click", function () {
  alert("Handler for `click` called.");
});
