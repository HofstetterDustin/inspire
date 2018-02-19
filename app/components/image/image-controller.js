function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var pictureElem = document.getElementById('body')
	var imageService = new ImageService()

	this.getImage = function getImage(){
		imageService.getImage(draw)
	}
	
	function draw(res){
		debugger
		var image = res
		var pic = "url(" + image.url + ")"
		if(image.length<1) {
			document.getElementById.style.backgroundImage = "<h1><strong>The Dark Side Has Won!</strong></h1>"
			return
		}
		document.getElementById("body").style.backgroundImage = pic
		
	}
	




}


