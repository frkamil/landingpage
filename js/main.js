//Global Variables
let state = "setup";
// let state = "landingpage";

setTimeout(checkState, 0);

function checkState() {
  setTimeout(checkState, 5);
  if (state == "setup") {
    SetUp();
  } else if (state === "landingpage") {
    LandingPage();
  }
}

document.getElementById("go-btn").addEventListener("click", gobtnClicked);

function gobtnClicked() {
  state = "landingpage";
}
