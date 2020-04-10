// Page Loader

$(document).ready(() => {
  $(".page-loader").fadeOut(1000);
  $(".page").fadeIn(1000);
});


// Scroll Bar Animate
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};


// Insert in Projects Page Grid & Set Home Projects
if (location.pathname.split('/').slice(-1)[0] = "projects.html") {
  fetch('./projects/projects.json')
    .then(response => {
      return response.json()
    })
    .then(projects => {
      var projectArr = Object.keys(projects);

      // Set Project Grid Name & Link
      for (i = 0; i < projectArr.length; i++) {

        // Set Project Info
        var project = projects[projectArr[i]];
        var projectLocation = project.Location;
        var projectHomeNumber = project.HomeProject;
        var projectHomeLink = "../"
        var projectArrName = projectArr[i].replace(/-/g, " ");
        var projectArrImage = 'url("../projects/' + projectArr[i] + '/main.jpg")';
        $(".projects-grid").append('<a href="./projects/index.html#' + projectArr[i] + '" class="project" style= background-image:' + projectArrImage + '>' +
          '<div>' +
          '<h3>' + projectArrName + '</h3>' +
          '<h6>' + projectLocation + '</h6>' +

          '</div>' +
          '</a>');

        // Insert in Home
        if (projectHomeNumber !== "") {
          $("#home-project" + projectHomeNumber).css("background-image", projectArrImage);
          $("#home-project" + projectHomeNumber).attr("href", "./projects/index.html#" + projectArr[i]);
          $("#home-project" + projectHomeNumber + " h3").html(projectArrName);
          $("#home-project" + projectHomeNumber + " h6").html(projectLocation);
        }


      }
    })
    .catch(function (error) {
      console.log('Request failed', error)
    });
}

// Project Tabs

$("#mech-tab").click(function () {
  $(".service-tabs>div").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".services-all .service-grid").css("display", "none");
  $("#mech-grid").css("display", "flex");
});


$("#electric-tab").click(function () {
  $(".service-tabs>div").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".services-all .service-grid").css("display", "none");
  $("#electric-grid").css("display", "flex");
});


$("#electronic-tab").click(function () {
  $(".service-tabs>div").removeClass("active-tab");
  $(this).addClass("active-tab");
  $(".services-all .service-grid").css("display", "none");
  $("#electronic-grid").css("display", "flex");
});


// Mobile Nav 

function openMobileNav() {
  $(".mobile-nav").css("border-left", "5px solid var(--light-blue)");
  if ($(window).width() <= 678) {
    $(".mobile-nav").css("width", "100vw");
  } else {
    $(".mobile-nav").css("width", "40vw");
  }

}

function closeMobileNav() {
  $(".mobile-nav").css("border-left", "none");
  $(".mobile-nav").css("width", "0");
}