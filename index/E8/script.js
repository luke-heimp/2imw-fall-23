// E8, Luke Heimpel
//tutorial: https://www.youtube.com/watch?v=InoAIgBZIEA

$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?lat=43.46&lon=-80.52&units=metric&appid=4bef36e95f94e06a14ba13291dd91f94&units",
  function (data) {
    console.log(data);
    //variables
    var temp = data.main.temp;
    var description = data.weather[0].description;
    var icon =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    // talk to html
    $(".temp").append(temp + "°");
    $(".weather1").append(description);
    $(".icon").attr("src", icon);
  }
);
