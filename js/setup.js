let name = "";
let quotetype = "default";
let Urva = false;

function SetUp() {
  //Change visibility
  document.getElementById("customize").style.display = "block";
  document.getElementById("landingpage").style.display = "none";

  // Theme Selection
  let background = document.getElementById("theme-select").value;
  if (background == "urva"){
    Urva = true;
  }

  //Change Background Image
  if (background !== "0") {
    document.body.style.background = `url(img/${background}.jpg) no-repeat center fixed`;
    document.body.style.backgroundSize = "cover";
  }

  //Change body color
  let bodyColor = document.getElementById("bodycolor").value;
  document.getElementById("text").style.background = `${bodyColor}c2`;

  //Change Text

  //Change text color

  let textColor = document.getElementById("textcolor").value;
  document.getElementById("text").style.color = textColor;

  //Change Name
  name = document.getElementById("input-name").value;

  //Change button
  //Not thta important, just makes it look cohesive

  document.getElementById("go-btn").style.background = `${bodyColor}c2`;
  document.getElementById("go-btn").style.color = textColor;

  //Change quote preferance
  quotetype = document.getElementById("quotepref-select").value;
}
