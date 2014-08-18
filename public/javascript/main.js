function init() {
  document.body.addEventListener("scroll", (function(e) {
    var dist = document.body.scrollTop;

    // document.queryElements("")
    // for (var i = 0; i < )

    // map.style[Platform.transform] = "translateY(-" + dist / 3 + "px)";
  }).bind(this));
}

if (document.readyState === "interactive" || document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init, false);
}