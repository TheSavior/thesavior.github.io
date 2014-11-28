"use strict";

function init() {
  document.getElementById("readmore").addEventListener("click", function() {
    document.getElementById("projects").classList.add("is-expanded");
  });

  hideOffScreenFeatures();

  var invisibleFeatures = [];

  var elements = document.querySelectorAll(".project.invisible");
  for (var i = 0; i < elements.length; i++) {
    invisibleFeatures.push(elements[i]);
  }

  document.addEventListener("scroll", (function() {
    var offset = document.body.scrollTop + window.innerHeight - (window.innerHeight / 10);
    for (var i = invisibleFeatures.length - 1; i >= 0; i--) {
      var feature = invisibleFeatures[i];
      // debugger;
      if (feature.offsetTop < offset) {
        feature.classList.remove("invisible");

        // debugger;
        invisibleFeatures.splice(invisibleFeatures.indexOf(feature), 1);
      }
    }
  }).bind(this));

  var json = '{"countries":23,"cities":113,"uniqueDessert":77,"totalDessert":118,"days":289}';
  json = JSON.parse(json);


  var startDate = new Date(2013, 13, 12);
  var daysSinceStart = Math.round((Date.now() - startDate) / 1000 / 60 / 60 / 24);
  document.getElementById("day-num").textContent = daysSinceStart;
  document.getElementById("country-num").textContent = json.countries;
  document.getElementById("dessert-num").textContent = json.totalDessert * 2;

  // function showMap() {
  //   var map = null;

  //   window.isLoaded.goog
  //     .then(function() {
  //       console.log("loading the map");
  //       var mapEle = document.getElementById("map");
  //       map = new google.maps.Map(mapEle, {
  //         disableDefaultUI: true,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       });
  //       map.setCenter(new google.maps.LatLng(0, 0));
  //       map.setZoom(1);

  //       window.maps = map;


  //     })
  //     .then(function() {
  //       console.log("Google loaded");

  //       function getMarker(position) {
  //         return {
  //           position: new google.maps.LatLng(position[0], position[1]),
  //           map: map,
  //           icon: {
  //             path: google.maps.SymbolPath.CIRCLE,
  //             scale: 6,
  //             strokeWeight: 1,
  //             strokeColor: 'white',
  //             fillColor: '#ad24ab',
  //             fillOpacity: 1
  //           }
  //         }
  //       }

  //       var bounds = new google.maps.LatLngBounds();

  //       for (var i = 0; i < json.locations.length; i++) {
  //         var marker = getMarker(json.locations[i]);

  //         bounds.extend(marker.position);

  //         new google.maps.Marker(marker);
  //       }

  //       map.fitBounds(bounds);

  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // }

  // showMap();
}

if (document.readyState === "interactive" || document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init, false);
}

function hideOffScreenFeatures() {
  var features = document.getElementsByClassName("project");
  var offset = document.body.scrollTop + window.innerHeight;

  function hideFeature(feature) {
    feature.style.transition = "1s opacity ease-out";
  }

  for (var i = 0; i < features.length; i++) {
    var feature = features[i];
    // debugger;
    if (feature.offsetTop > offset) {
      // feature.style.invisible = 0;
      feature.classList.add("invisible");
      setTimeout(hideFeature.bind(this, feature), 0);
    }
  }
}

// function isLoaded() {
//   this.init();
// }

// isLoaded.prototype = {
//   goog: null,
//   _googResolve: null,

//   init: function() {
//     this.goog = new Promise((function(resolve) {
//       this._googResolve = resolve;
//     }).bind(this));
//   },

//   googLoaded: function() {
//     this._googResolve();
//   }
// };

// window.isLoaded = new isLoaded();

// window.startMap = function() {
//   window.isLoaded.googLoaded();
// };