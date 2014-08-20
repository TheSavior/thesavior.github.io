function init() {
  /*document.addEventListener("scroll", (function(e) {
    console.log("scrolling");

    var dist = document.body.scrollTop;

    var features = document.querySelectorAll(".feature");

    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      var images = feature.getElementsByTagName("img");

      var offset = (dist - feature.offsetTop);
      for (var j = 0; j < images.length; j++) {

        images[j].style.transform = "translateY(" + offset / 10 + "px)";
      }

    }

  }).bind(this));
*/
}

if (document.readyState === "interactive" || document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init, false);
}