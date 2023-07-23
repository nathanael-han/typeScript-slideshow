window.onload = initAll;
function initAll() {
    var selectedImage = 1;
    var totalImages = 5;
    // enum to store image paths
    var SlideImages;
    (function (SlideImages) {
        SlideImages["img_1"] = "images/img_1.jpg";
        SlideImages["img_2"] = "images/img_2.jpg";
        SlideImages["img_3"] = "images/img_3.jpg";
        SlideImages["img_4"] = "images/img_4.jpg";
        SlideImages["img_5"] = "images/img_5.jpg";
    })(SlideImages || (SlideImages = {}));
    document.getElementById("next_btn").onclick = nextImage; // sets next button onclick to nextImage function
    document.getElementById("previous_btn").onclick = previousImage; // sets previous button onclick to previousImage function
    function nextImage() {
        if (selectedImage < totalImages) {
            ++selectedImage;
            document.getElementById("myImage").src = SlideImages["img_".concat(selectedImage)]; // accesses image path from enum
        }
    }
    function previousImage() {
        if (selectedImage > 1) {
            --selectedImage;
            document.getElementById("myImage").src = SlideImages["img_".concat(selectedImage)];
        }
    }
}
