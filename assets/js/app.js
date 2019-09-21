$(document).ready(function () {

  console.log("ready!");

  // **************
  // Variables
  // **************

  // Project 1 Variables
  var project1 = $("#project1").attr("data-name");
  var project1date;

  // Project 2 Variables
  var project2 = $("#project2").attr("data-name");
  var project2date;

  // Project 3 Variables
  var project3 = $("#project3").attr("data-name");
  var project3date;

  // Project 4 Variables
  var project4 = $("#project4").attr("data-name");
  var project4date;

  // Project 5 Variables
  var project5 = $("#project5").attr("data-name");
  var project5date;

  // Project 6 Variables
  var project6 = $("#project6").attr("data-name");
  var project6date;

  var repo = function () {
    $.ajax({
      url: "https://api.github.com/users/mhandler1991/repos",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function (res) {
        console.log(res);

        // For Loop
        for (i = 0; i < res.length; i++) {

          if (res[i].name == project1) {

            project1date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project1date').text(project1date);

          } else if (res[i].name == project2) {

            project2date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project2date').text(project2date);

          } else if (res[i].name == project3) {

            project3date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project3date').text(project3date);

          } else if (res[i].name == project4) {

            project4date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project4date').text(project4date);

          } else if (res[i].name == project5) {

            project5date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project5date').text(project5date);

          } else if (res[i].name == project6) {

            project6date = moment(res[i].updated_at).format('MMMM Do YYYY, h:mm:ss a');
            $('#project6date').text(project6date);

          }


        }

      }
    });
  }

  repo();

});