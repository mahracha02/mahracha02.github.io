document.addEventListener('DOMContentLoaded', function () {
    const slider1 = document.querySelector('.slider1');
    const slider2 = document.querySelector('.slider2');

    const image1 = ["photos/foto.jpg"]; // Add your first image source here
    const image2 = ["photos/R.jpg"];   // Add your second image source here

    let count1 = 0;
    let count2 = 0;

    function createSlider(slider, images) {
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement('img');
            img.src = images[i];
            img.alt = 'Image ' + (i + 1);
            slider.appendChild(img);
        }
        updateSlider(slider);
    }

    function nextSlide(slider) {
        if (slider === slider1) {
            count1++;
            if (count1 >= slider.children.length) {
                count1 = 0;
            }
            updateSlider(slider);
        } else if (slider === slider2) {
            count2++;
            if (count2 >= slider.children.length) {
                count2 = 0;
            }
            updateSlider(slider);
        }
    }

    function prevSlide(slider) {
        if (slider === slider1) {
            count1--;
            if (count1 < 0) {
                count1 = slider.children.length - 1;
            }
            updateSlider(slider);
        } else if (slider === slider2) {
            count2--;
            if (count2 < 0) {
                count2 = slider.children.length - 1;
            }
            updateSlider(slider);
        }
    }

    function updateSlider(slider) {
        const count = slider === slider1 ? count1 : count2;
        const translateValue = -count * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    createSlider(slider1, image1); // Create slider with the first set of images
    createSlider(slider2, image2); // Create slider with the second set of images

    setInterval(() => nextSlide(slider1), 3000); // Change slide for slider1 every 3 seconds
    setInterval(() => nextSlide(slider2), 3000); // Change slide for slider2 every 3 seconds
});
