function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var pictureElem = document.getElementById('body')
	var imageService = new ImageService()

	this.getImage = function getImage(){
		debugger
		imageService.getImage(draw)
	}
		
	function draw(image){
		var image = ''
		if(image.length<1) {
			document.body.style.background = "<h1><strong>The Dark Side Has Won!</strong></h1>"
			return
		}
		document.body.style.backgroundImage = `url('${imagedata.largeurl}')`
	}
	




}


