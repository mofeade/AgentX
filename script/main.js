(function () {
	var theImgs = document.querySelectorAll('.image-holder'),
		Heading = document.querySelector('.brand'),
		Pics = document.querySelector('.main-copy img'),
		SubText = document.querySelector('.main-copy h2'),
		Text = document.querySelector('.main-copy p'),
		appliedClass;




	function changeElements() {
		SubText.classList.remove(appliedClass);
		Heading.classList.remove(appliedClass);

		
		SubText.classList.add(this.id);
		Heading.classList.add(this.id);
		Pics.classList.add(this.id);
		Pics.src= "images/" + this.id + ".jpg";
		appliedClass = this.id;

		SubText.firstChild.nodeValue = dynamicContent[this.id].headline;
		Text.firstChild.nodeValue = dynamicContent[this.id].text;
		Pics.firstChild.nodeValue = dynamicContent[this.id].image;
		
	}


		[].forEach.call(theImgs, function (image) {
			image.addEventListener('click', changeElements, true);
		});
})();


		SubText.firstChild.nodeValue = dynamicContent[spring].headline;
		Text.firstChild.nodeValue = dynamicContent[spring].text;
		Pics.firstChild.nodeValue = dynamicContent[spring].image;
		Heading.classList.add('spring');