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



if (location.pathname.split('/').slice(-1)[0] = "projects.html") {
  // Set All Projects Links

  // JSON
  var projectImageCount; //Initiate Image Count
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var projectArr = Object.keys(response);

      // Set Project Grid Name & Link
      for (i = 0; i < projectArr.length; i++) {
        var project = response[projectArr[i]];
        var projectLocation = project.Location;
        var projectHomeNumber = project.HomeProject;
        var projectHomeLink = "../"
        var projectArrName = projectArr[i].replace(/-/g, " ");
        var projectArrImage = 'url("../projects/' + projectArr[i] + '/main.jpg")';
        $(".projects-grid").append('<a href="./projects/#' + projectArr[i] + '" class="project" style= background-image:' + projectArrImage + '>' +
          '<div>' +
          '<h3>' + projectArrName + '</h3>' +
          '<h6>' + projectLocation + '</h6>' +

          '</div>' +
          '</a>');
          $("#home-project" + projectHomeNumber).css("background-image",projectArrImage);
          $("#home-project" + projectHomeNumber).attr("href","./projects/#" + projectArr[i]);
          $("#home-project" + projectHomeNumber + " h3").html(projectArrName);
          $("#home-project" + projectHomeNumber + " h6").html(projectLocation);

      }

      // Set Project Images Home Page
    
    }
  };

  xhttp.open("GET", "./projects/projects.json", true);
  xhttp.send();
}