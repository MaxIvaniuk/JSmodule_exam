$(document).ready(function(){
	$('.banner__slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1800,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let map;
let pos = { lat: 48.92247040846234, lng: 24.71018961710184 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: pos,
	map: map,
	icon: '../../img/Pin.svg',
  });
}


$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
	});
	
});

// Form validation
function validate(form_id, email) {
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let address = document.forms[form_id].elements[email].value;
	if(reg.test(address) == false) {
	   alert('Please enter correct email');
	   return false;
	}
 }

// Preloader
var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
	el.style.opacity = 1;
	var interhellopreloader = setInterval(function(){
		el.style.opacity = el.style.opacity - 0.05;
		if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);
			hellopreloader.style.display = "none";
		}
	}, 16);
}
window.onload = function(){
	setTimeout(function(){
		fadeOutnojquery(hellopreloader);
	}, 500);
}
