function LandingPage() {
  //Change visibility
  document.getElementById("landingpage").style.display = "block";
  document.getElementById("customize").style.display = "none";

  //Change name
  document.getElementById("helloname").innerHTML = `Hello ${name}!`;

  //   Change quote
  quote();
}

function quote() {
  if (quotetype == "default") {
    document.getElementById(
      "quote"
    ).innerHTML = `'Be the change you wish to see in the world.'`;
    document.getElementById(
      "funfact"
    ).innerHTML = `Fun Fact : The US Supreme Court ruled in 1893 that the tomato should be classified as a vegetable on the basis of its culinary applications.`;
  } else if (quotetype == "inspiring") {
    document.getElementById("quote").innerHTML =
      "'The best way to predict your future is to create it.'";
    document.getElementById("funfact").innerHTML =
      "Fun Fact : Earth is home to approximately 50,000 spider species.";
  } else if (quotetype == "funny") {
    document.getElementById(
      "quote"
    ).innerHTML = `'Insert motivational quotation that reminds you why you should be doing something other than reading inserted motivational quote.'`;
    document.getElementById("funfact").innerHTML =
      "document.getElementById(funfact).innerHTML = totallyfunnyquote-believeme;";
  } else if (quotetype == "happy") {
    document.getElementById("quote").innerHTML =
      "'Misery might love company, but so does joy. And joy throws muct better parties.'";
    document.getElementById("funfact").innerHTML =
      "Fun Fact : Snails can have up to 20,000 teeth.";
  }
}
