// Dynamic Project Results

if (window.location.pathname === "/projects/") { //Check if Project Page
    var projectName = window.location.hash; //Get Project Name
  
    projectName = projectName.substr(1); //Remove #
  
  
    // Set Landing Images
    var projectLandingImage1 = "url('../projects/" + projectName + "/main.jpg')";
    var projectLandingImage2 = "url('../projects/" + projectName + "/main2.jpg')";
    $(".project-landing-section").css("background-image", projectLandingImage1);
    $(".project-details").css("background-image", projectLandingImage2);
  
    // Set Project Details
  
    // JSON
    var projectImageCount; //Initiate Image Count
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var project = response[projectName];
  
        // Insert HTML
        $(".project-name").html(project.Name);
        document.title = project.Name;
        $(".project-location").html(project.Location);
        $(".project-type").html(project.Type);
        $(".project-year").html(project.Year);
        $(".project-description").html(project.Description);
        projectImageCount = project.ImageCount;
  
  
  
        // Set Project Gallery Images
  
        for (i = 0; i < projectImageCount; i++) {
          $(".project-gallery-grid").append("<div class='project-image'></div>");
          $(".project-gallery-grid .project-image:nth-child(" + (i + 1) + ")").css("background-image", "url('../projects/" + projectName + "/" + (i + 1) + ".jpg')");
        }
  
  
      }
    };
  
    xhttp.open("GET", "./projects.json", true);
    xhttp.send();
  }

  // Project Modal

function openModal() {
  $(".project-modal").fadeIn(500);
}

function closeModal() {
  $(".project-modal").fadeOut(500);
}

$(".project-gallery-grid >div").click(function () {
  var modalImage = $(this).css("background-image"); //Get Clicked Image's src
  modalImage = modalImage.slice(5, -2);
  $(".project-modal img").attr("src", modalImage); // Set modal image src to above
  openModal();
  console.log("hello");
});

$(".project-modal i").click(function () {
  closeModal();
});