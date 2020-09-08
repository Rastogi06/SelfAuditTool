setTimeout(function () {
    document.getElementById("hide").style.display = "block";
    document.getElementById("loader").style.display = "none";

}, 3000);

function onClickMenu() {

    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

}

function stepTracker(){

    console.log("enter")
    document.getElementById("step").removeClass('active');
    $(this).addClass('active');
}

function openTab(evt, tabvalue) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabvalue).style.display = "block";
    evt.currentTarget.className += " active";
  }

  