$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=Toronto,uk&APPID=4bef36e95f94e06a14ba13291dd91f94",
  function (data) {
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $(".temp").append(temp);
    $("weather").append(weather);
  }
);
