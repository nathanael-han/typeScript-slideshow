window.onload = initAll;


function initAll(){
	let selectedImage:number = 1;  
	let totalImages:number = 5;

	// enum to store image paths
	enum SlideImages {
		img_1 = "images/img_1.jpg",
		img_2 = "images/img_2.jpg",
		img_3 = "images/img_3.jpg",
		img_4 = "images/img_4.jpg",
		img_5 = "images/img_5.jpg"
	}
	(document.getElementById("next_btn") as HTMLButtonElement).onclick = nextImage;   // sets next button onclick to nextImage function
	(document.getElementById("previous_btn") as HTMLButtonElement).onclick = previousImage;	 // sets previous button onclick to previousImage function

	function nextImage(){
		if(selectedImage < totalImages){
			++selectedImage;
			(document.getElementById("myImage") as HTMLImageElement).src = SlideImages[`img_${selectedImage}`];  // accesses image path from enum
		}
		
	}
	
	function previousImage(){
		if(selectedImage > 1){
			--selectedImage;
			(document.getElementById("myImage") as HTMLImageElement).src = SlideImages[`img_${selectedImage}`];
		}
	}
}

