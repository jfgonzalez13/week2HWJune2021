let position = 0;
    // define slide count variable, initial 0
    let slideIndex = 1;
    const totalNumberOfImage = 6;
    
    var prevSlide = function () {

        const imageSlider2 = document.getElementById('imageSlider2');
    
        position += 500;
        
        // decrement the slideIndex by 1
        slideIndex -= 1
        document.getElementById('currentJSImage').innerHTML = slideIndex;
    
        imageSlider2.style.transform = `translateX(${position}px)`; 
        
        if (slideIndex <= 0){
            nextSlide ()
        }

    }
    
    var nextSlide = function () {

        const imageSlider2 = document.getElementById('imageSlider2');
    
        position -= 500;
        // increment the slideIndex by 1
        slideIndex += 1
        document.getElementById('currentJSImage').innerHTML = slideIndex;
    
        imageSlider2.style.transform = `translateX(${position}px)`; 
        
        if (slideIndex >= 7){
            prevSlide ()
        }
  
    }