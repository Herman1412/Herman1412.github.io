var i=0
var image = []
var time =3000

image[1] = "images/slides1.png";
image[2] = "images/slides2.png";
image[3] = "images/slides3.png";
image[4] = "images/slides4.png";
image[5] = "images/slides5.png";
image[6] = "images/slides6.png";

function changeImg() {
    document.slide.src = image[i];
if (i < image.length - 1)
    i++;
    else {
        i=0;
    }
settimeout ("changeImg()",time);
}
