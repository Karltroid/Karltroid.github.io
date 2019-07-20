function changesrc(id, file)
{
	var image = document.getElementById(id).children;		// getting the image the will be modified
	image[0].src = file;																		// changing the src of image
}