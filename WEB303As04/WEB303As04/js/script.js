/*
    Assignment #4
    Sahithi Reddy
*/

$(function () {
  // checking if the Geolocation is available
  if (!navigator.geolocation) {
    $("#locationhere").append(
      `<p>Gelocation is not available in the browser</p>`
    );
  } else {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      $("#locationhere").append(
        `<p> Your current location is at latitue: ${lat}, longitude: ${long}</p>`
      );

      const oldLatitude = localStorage.getItem("latitude");
      const oldLongitude = localStorage.getItem("longitude");

      // checking if the previous location is available
      if (oldLatitude && oldLongitude) {
        $("#locationhere").append(
          `<p> You previous location was at latitue: ${oldLatitude}, longitude: ${oldLongitude}</p>`
        );

        $("#locationhere").append(`<h3>Welcome Back!</h3>`);

        const pLat = parseFloat(oldLatitude);
        const pLong = parseFloat(oldLongitude);
        const distance = calcDistanceBetweenPoints(pLat, pLong, lat, long);
        const distanceInMeters = `${distance.toFixed()} ${"meters"}`;
        const distanceInKm = `${(distance / 1000).toFixed(1)} ${"km"}`;

        $("#locationhere").append(
          `<p> Distance travelled from your last visit to the website and now is ${distanceInKm}</p>`
        );
      } else {
        $("#locationhere").append("<h3>Welcome to the Website!</h3>");
      }

      // saving the new location to the localStorage
      localStorage.setItem("latitude", lat);
      localStorage.setItem("longitude", long);
    });
  }

  // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
  // function to calculate the distance in metres between two lat/long pairs on Earth
  // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
  // Aren't those cool variable names? Yah gotta love JavaScript
  function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var toRadians = function (num) {
      return (num * Math.PI) / 180;
    };
    var R = 6371000; // radius of Earth in metres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2 - lat1);
    var Δλ = toRadians(lon2 - lon1);

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
});
