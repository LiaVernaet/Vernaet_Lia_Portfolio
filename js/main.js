var imageLink = document.querySelectorAll('.imageLink'),
  		lightbox = document.querySelector('.lightbox'),
  		closeLBox = lightbox.querySelector('.close-lightbox'),
		  vidPlayer = lightbox.querySelector('video'),
		  container = document.getElementById('container'),
		  count = 0,
  		 currentSource;
		var videos = ['mineshaft.mp4', 'soccer.avi', 'car.mp4', 'fruitcy.mp4', 'shark.mp4', 'watch.mp4'];


 function closeLightBox() {
 lightbox.classList.remove('show-lightbox');
 vidPlayer.currentTime = 0;
 vidPlayer.muted = true;

 //enable scrolling
//  if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null; 
//     window.onwheel = null; 
//     window.ontouchmove = null;  
//     document.onkeydown = null;  
//  }


 function showVideo() {
	var pick = this.dataset.pick;
	console.log(pick);
	vidPlayer.src = 'videos/'+videos[pick]
 	lightbox.classList.add('show-lightbox');
 	vidPlayer.load();
	vidPlayer.play();
	count = pick;
 }
	//prevent scrolling while video is playing
// 	if (window.addEventListener) // older FF
// 	window.addEventListener('DOMMouseScroll', preventDefault, false);
// 	window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
  }


 //events and listeners
  for(var i = 0; i < imageLink.length; i++) {
 	imageLink[i].addEventListener('click', showVideo, false);
 }
 closeLBox.addEventListener('click', closeLightBox);
 imageLink.addEventListener('click', showVideo);



 //(4) when video finishes playing, also close the lightbox
 //vidPlayer.addEventListener('ended', closeLightBox, false);
