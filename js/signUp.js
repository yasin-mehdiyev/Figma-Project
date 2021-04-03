// Dots Click Event
var dots = document.querySelectorAll('.dot');

// console.log(dots);

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        document.querySelector('span.dot.active-dot').classList.remove('active-dot');
        this.classList.add('active-dot');
        document.querySelector('.item.active').classList.remove('active');
        document.querySelector(this.getAttribute('data-target')).classList.add('active')
        console.log(this.getAttribute('data-target'));
    })
}

// Dots Click Event

// SetInterval for Slider
var SliderInterval = setInterval(() => {
    nextSlider();
}, 8000);

// SetInterval for Slider


// Next Slider Click Event
var next = document.querySelector('.next');
next.addEventListener('click', function(ev) {
    ev.preventDefault();
    nextSlider();
});
// Next Slider Click Event

// Previous Slider Click Event
var prev = document.querySelector('.prev');
prev.addEventListener('click', function(e) {
    e.preventDefault();
    prevSlider();
});
// Previous Slider Click Event


// Next Slider Function
function nextSlider() {
    let activeSlider = document.querySelector('.item.active');
    let getActiveSliderId = document.querySelector(`#${activeSlider.id}`);
    // console.log(getActiveSliderId);
    let getDots = document.querySelectorAll('span.dot');

    for (var i = 0; i < getDots.length; i++) {
        if (getDots[i].getAttribute('data-target') === ('#' + activeSlider.id)) {
            getDots[i].classList.remove('active-dot');
            if (getDots[i].nextElementSibling !== null) {
                getDots[i].nextElementSibling.classList.add('active-dot');
            } else {
                getDots[i].parentNode.children[0].classList.add('active-dot');
            }
        }
    }

    getActiveSliderId.classList.remove('active');
    // document.querySelector('span.dot.active-dot').classList.remove('active-dot');

    if (getActiveSliderId.nextElementSibling !== null) {
        getActiveSliderId.nextElementSibling.classList.add('active');

    } else {
        getActiveSliderId.parentNode.children[0].classList.add('active');
    }
}
// Next Slider Function


// Previous Slider Function
function prevSlider() {
    var activeSlider = document.querySelector('.item.active');
    var getActiveSliderId = document.querySelector(`#${activeSlider.id}`);
    // console.log(getActiveSliderId);
    var getDots = document.querySelectorAll('span.dot');

    for (var i = 0; i < getDots.length; i++) {
        if (getDots[i].getAttribute('data-target') === ('#' + activeSlider.id)) {
            getDots[i].classList.remove('active-dot');
            if (getDots[i].previousElementSibling !== null) {
                getDots[i].previousElementSibling.classList.add('active-dot');
            } else {
                getDots[i].parentNode.children[getDots.length - 1].classList.add('active-dot');
            }
        }
    }

    getActiveSliderId.classList.remove('active');
    // document.querySelector('span.dot.active-dot').classList.remove('active-dot');

    if (getActiveSliderId.previousElementSibling !== null) {
        getActiveSliderId.previousElementSibling.classList.add('active');

    } else {
        var lastElem = getActiveSliderId.parentNode.lastElementChild;
        lastElem.classList.add('active');
    }
}
// Previous Slider Function