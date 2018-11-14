var tempF;
var tempC;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.ajax({
      url: /*"http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=1ed6a093802501681476c081c5dfa547"*/
      "https://fcc-weather-api.glitch.me/api/current?lon="+ position.coords.longitude + "&lat=" + position.coords.latitude,
      success: function(result) {
        tempC = (result.main.temp).toFixed(2);
        tempF = ((tempC * 1.8) + 32).toFixed(2);
        $("#temp").html(tempF + "&#176;" + " F ");

        $("#weather").html(result.weather[0].main);
        $("#city").html(result.name);
        $("#picture").attr(result.weather[0].icon);
      },
      error: function(result) {
        $("#temp").html("Please Refresh the page");
        $("#weather").html("Error");
        $("#city").html("Error");
        $("#picture").html("Error");
      }
    });
  });
} else {
  alert("Please Allow Location Services!");
  $("#infobox").html("Please Allow Location Services!");
}

$(document).ready(function() {
  $(".buttons").hover(function() {
    $(this).css("background-color", "#2AB2CF");
  }, function() {
    $(this).css("background-color", "blue");
  });
  $("#fahrenheit").on("click", function() {
    $("#temp").html(tempF + "&#176;" + " F ");
  });
  $("#celsius").on("click", function() {
    $("#temp").html(tempC + "&#176;" + " C ");
  });
});