$(document).ready(function(){

	$('div.MainText').fadeIn(1000);	//page fade-in

	$('span.Developer').click(function(){
		$('div.MainText').animate({
			'marginTop' : "-=45vw"
		});
	});

	$('span.Entertainer').click(function(){
		$('div.MainText').animate({
			'marginTop' : "-=45vw"
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