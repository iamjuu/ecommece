

   


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length !== undefined) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNav);

/**
 * slider funtionality
 */

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

// set the slider default position
let sliderPos = 0;

// set the number of total slider items
const totalSliderItems = 4;

// make next slide btn workable
const slideToNext = function () {
  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(nextBtn, "click", slideToNext);

// make prev slide btn workable
const slideToPrev = function () {
  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(prevBtn, "click", slideToPrev);

// check when slider is end then what should slider btn do
function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

sliderEnd();




// Assuming qtyElem and totalPriceElem are defined elsewhere in your code.

const cartBtn = document.querySelector('.cart-btn')

cartBtn.addEventListener('click' , async(event)=> {
  event.preventDefault()
  try{
  const id = event.target.getAttribute('data-product-id') 
    const response =await axios.get(`/addtocart/${id}`)
    if(response.success){
    alert('product add to cart')
  }
  }catch(err){
    console.log(err,'error in btn ');
  }
})

