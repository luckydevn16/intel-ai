// NAVIGATION
const scrollToForm = () => {
    document.querySelector('.form').scrollIntoView({behavior:"smooth"})
}
const scrollToTop = () => {
    document.querySelector('.header').scrollIntoView({behavior:"smooth"})
}
const scrollToAbout = () => {
    document.querySelector('.section-about').scrollIntoView({behavior:"smooth"})
}
const scrollToChief = () => {
    document.querySelector('.section-chief').scrollIntoView({behavior:"smooth"})
}
const scrollToSteps = () => {
    document.querySelector('.section-steps').scrollIntoView({behavior:"smooth"})
}
const scrollToReviews = () => {
    document.querySelector('.section-testimonials').scrollIntoView({behavior:"smooth"})
}

// MOBILE MENU
let body = document.querySelector('body');
let menuOpenImg = document.querySelector('.menu-open-img');
let menuCloseImg = document.querySelector('.menu-close-img');
let menuMobile = document.querySelector('.navigation.mobile');

const menuOpening = () => {
    menuMobile.style.right = '0';
    body.classList.add('blocked');
}

const menuClosing = () => {
    menuMobile.style.right = '-100%';
    body.classList.remove('blocked');
}

menuOpenImg.onclick = () => {
    menuOpening();
}
menuCloseImg.onclick = () => {
    menuClosing();
}

// RANDOM INTEGER
document.querySelector('#randomInteger').innerHTML = Math.floor(Math.random() * 9) + 2

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// CAROUSEL
var splide = new Splide( '.splide', {
    perPage: 3,
    type   : 'loop',
    perMove: 1,
});
if (document.body.clientWidth < 680) {
    var splide = new Splide( '.splide', {
        perPage: 1,
        type   : 'loop',
        perMove: 1,
    });
}
splide.mount();

// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}



