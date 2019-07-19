function changesrc(id, file)
{
	var parentdiv = document.getElementById(id);
	var image = parentdiv.children;
	console.log(image);
	image[0].src = file;
}