"use strict";

$(document).ready(function () {
  $('.banner__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: {
      lat: -34.397,
      lng: 150.644
    },
    map: map
  });
}