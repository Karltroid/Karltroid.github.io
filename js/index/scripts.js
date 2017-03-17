//	---------------------------------------------
//	| https://Karltroid.Github.io [] styles.css |
//	---------------------------------------------
$(document).ready(function(){

	$('div.MainText').fadeIn(1000);	//page fade-in

	//
	//	Developer Section
	//
	$('span.Developer').click(function(){ // developer clicked
		$('div.MainText').animate({
			'marginTop' : "-=100vw"
		});
		$('div.DeveloperInfo').animate({
			'marginTop' : "-=56vw"
		});
		$('div.DeveloperInfo').css({
			'opacity' : "1"
		});
		$('div.DeveloperBackButton').css({
			'display' : "inline"
		});
	});
	$("span.Developer").mouseenter(function(){	// Background Change
		$('img.MainPageBackground_Developer').animate({
			'opacity' : "1"
		});
	});
	$("span.Developer").mouseleave(function(){	// Background Remove
		$('img.MainPageBackground_Developer').animate({
			'opacity' : "0"
		});
	});
	$('div.DeveloperBackButton').click(function(){ // Developer back button clicked
		$('div.MainText').animate({
			'marginTop' : "+=100vw"
		});
		$('div.DeveloperInfo').animate({
			'marginTop' : "+=56vw"
		});
		$('div.DeveloperInfo').animate({
			'opacity' : "0"
		});
		$('div.DeveloperBackButton').css({
			'display' : "none"
		});
	});

	//
	//	Entertainer Section
	//
	$("span.Entertainer").mouseenter(function(){	// Background Change
		$('img.MainPageBackground_Entertainer').animate({
			'opacity' : "1"
		});
	});
	$("span.Entertainer").mouseleave(function(){	//Background Remove
		$('img.MainPageBackground_Entertainer').animate({
			'opacity' : "0"
		});
	});

	$('span.Entertainer').click(function(){ //entertainer clicked
		$('div.MainText').animate({
			'marginTop' : "-=100vw"
		});
		$('div.EntertainerInfo').animate({
			'marginTop' : "-=56vw"
		});
		$('div.EntertainerInfo').css({
			'opacity' : "1"
		});
		$('div.EntertainerBackButton').css({
			'display' : "inline"
		});
		$('div.MainText').animate({
			'opacity'  : '0'
		});
	});
	
	$('div.EntertainerBackButton').click(function(){ // developer page back button clicked
		$('div.MainText').animate({
			'marginTop' : "+=100vw"
		});
		$('div.EntertainerInfo').animate({
			'marginTop' : "+=56vw"
		});
		$('div.EntertainerInfo').animate({
			'opacity'  : '0'
		});
		$('div.EntertainerBackButton').css({
			'display' : "none"
		});
		$('div.MainText').css({
			'opacity'  : '1'
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