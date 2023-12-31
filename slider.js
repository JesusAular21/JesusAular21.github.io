(function(){

    // Propiedad Slider
var propSlider = {

    slider: document.getElementById('slider'),
    primerSlide: null
}

// Metodos Slide
var merSlider = {

    inicio: function () {
        setInterval(merSlider.moverSlide, 3000);
    },

    moverSlide: function () {
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function () {

            propSlider.primerSlide = propSlider.slider.firstElementChild;

            propSlider.slider.appendChild(propSlider.primerSlide);

            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = 0;

        }, 1000);
    }

}

merSlider.inicio();

}())