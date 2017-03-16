$(document).ready(function(){

	$('div.MainText').fadeIn(1000);	//page fade-in

	$('span.Developer').click(function(){ // developer clicked
		$('div.MainText').animate({
			'marginTop' : "-=100vw"
		});
		$('div.DeveloperInfo').animate({
			'marginTop' : "-=56vw"
		});
		$('div.DeveloperBackButton').css({
			'display' : "inline"
		});
	});

	$('div.DeveloperBackButton').click(function(){ // developer page back button clicked
		$('div.MainText').animate({
			'marginTop' : "+=100vw"
		});
		$('div.DeveloperInfo').animate({
			'marginTop' : "+=56vw"
		});
		$('div.DeveloperBackButton').css({
			'display' : "none"
		});
	});

	$('span.Entertainer').click(function(){ //entertainer clicked
		$('div.MainText').animate({
			'marginTop' : "-=100vw"
		});
		$('div.EntertainerInfo').animate({
			'marginTop' : "-=56vw"
		});
		$('div.EntertainerBackButton').css({
			'display' : "inline"
		});
	});
	
	$('div.EntertainerBackButton').click(function(){ // developer page back button clicked
		$('div.MainText').animate({
			'marginTop' : "+=100vw"
		});
		$('div.EntertainerInfo').animate({
			'marginTop' : "+=56vw"
		});
		$('div.EntertainerBackButton').css({
			'display' : "none"
		});
	});

	$('div.ProfileInfo').mouseenter(function(){ // profile picture fading out
		$('img.ProfilePicture').css({
			'opacity' : ".5"
		});
	});
	$('div.ProfileInfo').mouseleave(function(){ // profile picture fading in
		$('img.ProfilePicture').css({
			'opacity' : "1"
		});
	});

}); 


//***FEATURE DELAYED UNTIL I CAN FIND A MORE CLEAN/PLESANT WAY OF DOING IT; LOOKED TO GLITCHY & OUT OF PLACE***
//
//function nothingSelected()
//{
//	document.getElementById('MainPageBackground').src='images/index/nothingSelected.png';
//}

//function DeveloperSelected()
//{
//	document.getElementById('MainPageBackground').src='images/index/testimageDeveloper.png';
//}

//function EntertainerSelected()
//{
//	document.getElementById('MainPageBackground').src='images/index/testimageEntertainer.png';
//}