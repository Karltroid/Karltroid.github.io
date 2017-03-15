$(document).ready(function(){

	$('div.MainText').fadeIn(1000);	//page fade-in

	$('span.Developer').click(function(){ // developer clicked
		$('div.MainText').animate({
			'marginTop' : "-=100vw"
		});
		$('div.DeveloperInfo').animate({
			'marginTop' : "-=55vw"
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
			'marginTop' : "+=55vw"
		});
		$('div.DeveloperBackButton').css({
			'display' : "none"
		});
	});

	$('span.Entertainer').click(function(){ //entertainer clicked
		$('div.MainText').animate({
			'marginTop' : "+=100vw"
		});
		$('div.EntertainerInfo').animate({
			'marginTop' : "-=55vw"
		});
	});

}); 

function nothingSelected()
{
	document.getElementById('MainPageBackground').src='images/index/nothingSelected.png';
}

function DeveloperSelected()
{
	document.getElementById('MainPageBackground').src='images/index/testimageDeveloper.png';
}

function EntertainerSelected()
{
	document.getElementById('MainPageBackground').src='images/index/testimageEntertainer.png';
}