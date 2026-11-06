function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //showPopup();

    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220l\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";

    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
  }
  showPopup(true);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  }else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}