(() => {

    let wheel = document.querySelector("#wheel");
    let arrows = document.querySelector("#arrows");
	let rightArrow =arrows.querySelector("#rightArrow");
    let leftArrow = arrows.querySelector("#leftArrow");
    let titleText = document.querySelector(".titleText");
    let infoText = document.querySelector(".infoText");

 
    count = 0;

     var titleArray = ['hometown', 'animation', 'hobbies', 'animal lover'];

     var textArray = ['I was born and raised in St. Thomas Ontario. I grew up loving art, design, and animation. With constant love and support from my family, I was able to pursue my goals.', 
     'Ever since I was young, I loved animated movies and grew more and more interested in the art of animation. I hope to continue to learn about 2D and 3D animation and fulfill my dream.', 
     'I enjoy drawing both digitally and traditionally, most of my art being of animals. I also enjoy reading books and writing my own stories and characters.', 
     'I love just about any animal I see. I have three cats who make great companions. One of them often sits in my lap while I work and watches what I do.'];



     titleText.innerHTML = titleArray[0];
     infoText.innerHTML = textArray[0];


    

    function forward() {
        count++;
        console.log(count);
          if(count == titleArray.length) {
              count = 0;

        }

                //to aspiring animator
                if (wheel.style.rotation="0deg" && count == 1) {
                     TweenMax.to(wheel, 1, {rotation: -90, transformOrigin: "50% 50%"});
                }

                //to reading /drawing
                  if (wheel.style.rotation="-90deg" && count == 2) {
                     TweenMax.to(wheel, 1, {rotation: -180, transformOrigin: "50% 50%"});
                 }
 
                // to animal lover
                 if (wheel.style.rotation="-180deg" && count == 3) {
                     TweenMax.to(wheel, 1, {rotation: -270, transformOrigin: "50% 50%"});
                 }

                      // to hometown
                      if (wheel.style.rotation="-270deg" && count == 4) {
                        TweenMax.to(wheel, 1, {rotation: -360, transformOrigin: "50% 50%"});
                    }

                       // to hometown
                       if (wheel.style.rotation="-360deg" && count == 0) {
                        TweenMax.to(wheel, 1, {rotation: 0, transformOrigin: "50% 50%"});
                    }


    
         titleText.innerHTML = titleArray[count];
         infoText.innerHTML = textArray[count];

    }
    
    function back() {
        
        count--;
        if(count == titleArray.length) {
            count = 0;
      }
         
      if (wheel.style.rotation="0deg" && count == -1) {
        TweenMax.to(wheel, 1, {rotation: 90, transformOrigin: "50% 50%"});
        count=3;
    }

    if (wheel.style.rotation="90deg" && count == 2) {
        TweenMax.to(wheel, 1, {rotation: 180, transformOrigin: "50% 50%"});
        count=2;
    }

    if (wheel.style.rotation="180deg" && count == 1) {
        TweenMax.to(wheel, 1, {rotation: 270, transformOrigin: "50% 50%"});
        count=1;
    }

    if (wheel.style.rotation="270deg" && count == 0) {
        TweenMax.to(wheel, 1, {rotation: 360, transformOrigin: "50% 50%"});
        count=0;
    }

    // if (wheel.style.rotation="360deg" && count == 3) {
    //     TweenMax.to(wheel, 1, {rotation: 0, transformOrigin: "50% 50%"});
    //     count=0;
    // }


        titleText.innerHTML = titleArray[count];
        infoText.innerHTML = textArray[count];
  
    }


 

    
 leftArrow.addEventListener("click", back, false);
 rightArrow.addEventListener("click", forward, false);





})();