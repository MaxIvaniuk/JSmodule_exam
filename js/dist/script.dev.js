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
var pos = {
  lat: 48.92247040846234,
  lng: 24.71018961710184
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: '../../img/Pin.svg'
  });
}