var i=0
var image = []
var time =3000

image[1] = 
image[2] = 
image[3] = 
image[4] = 
image[5] = 
image[6] = 
image[7] =

function changeImg() {
    document.slide.src = image[i];
if (i < image.length - 1)
    i++;
    else {
        i=0;
    }
settimeout ("changeImg()",time);
}
