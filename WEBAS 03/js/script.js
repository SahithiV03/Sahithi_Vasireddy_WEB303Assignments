function getDataByJson() {
  $.getJSON("team.json", function (result) {
    const members = result.members;
    $.each(members, function (i, obj) {
      $("#team").append(`<h2>${obj.name}</h2>`);
      $("#team").append(`<h5>${obj.position}</h5>`);
      $("#team").append(`<p>${obj.bio}</p>`);
    });
  });
}

function getDataByAjax() {
  $.ajax({
    url: "team.json",
    type: "GET",
    beforeSend: function () {
      $("#team").text("Loading...");
    },
    success: function (result) {
      setTimeout(() => {
        $("#team").html("");
        const members = result.members;
        $.each(members, function (i, obj) {
          $("#team").append(`<h2>${obj.name}</h2>`);
          $("#team").append(`<h5>${obj.position}</h5>`);
          $("#team").append(`<p>${obj.bio}</p>`);
        });
      }, 3000);
    },
    error: function () {
      $("#team").text("Error: Content could not be retrieved");
    },
  });
}

$(document).ready(function () {
  // getDataByJson();
  getDataByAjax();
});