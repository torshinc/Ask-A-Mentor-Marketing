//Message sent from iFrame when account is created and logged-in
window.onmessage = function(e){
	if (e.data == 'loginToTrainer') {
		window.location = "http://app.askamentor.org";
	}else if (e.data == 'showTerms') {
		window.open("http://www.askamentor.org/terms.html",'_blank');
	}
};

//Segment.io behaviour tracking
$( ".find-mentor-button.top" ).click(function() {
	analytics.track('Clicked Top Find A Mentor Button');
});

$( ".find-mentor-button.bottom" ).click(function() {
	analytics.track('Clicked Bottom Find A Mentor Button');
});

$( ".learn-more-ntc" ).click(function() {
	analytics.track('Clicked Learn More About NTC');
});

$( "#learnMore" ).click(function() {
	analytics.track('Clicked Learn More About Torsh');
});

$( ".about-link" ).click(function() {
	analytics.track('Clicked About Link');
});

$( ".what-is-link" ).click(function() {
	analytics.track('Clicked What Is Link');
});

$( ".meet-link" ).click(function() {
	analytics.track('Clicked Meet Mentors Link');
});

$( ".login" ).click(function() {
	analytics.track('Clicked Login');
});

$(document).ready(function(){
	$('#signUpModalIframe').attr('src', 'http://app.askamentor.org/signup');
	$('.mentors-carousel').slick({
	  	slidesToShow: 4,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 7000,
  		speed: 1200,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 886,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 680,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
});
