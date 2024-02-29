let textContainers = document.querySelectorAll('.text-container');

let texts = document.querySelectorAll('.parallax-text');

let images = document.querySelectorAll('.image');

texts.forEach((element, index) => {
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      // toggleActions:"play reset play reset",
      // toggleActions:"play reset play reset",
      // toggleActions:"play none none reverse",
      toggleActions:"play reverse play reverse"
    }
  });
  
  tl.fromTo(element, {
    x: '5vw', 
    y: '20vh',
    z: 0,
    skewX: 0,
    skewY: '-5deg',
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    opacity: 0
  },
  {
    x: 0, 
    y: 0,
    z: 0,
    skewX: 0,
    skewY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    ease: Elastic.easeOut.config(1, 0.35),
    duration: 6
    // ease: Expo.easeOut,
    // duration: 1.2
  });
});

textContainers.forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      start: "top bottom",
      end: "150px top",
    },
    x: '-8vw',
    transformOrigin: "left center", 
    ease: "none"
  });
});

images.forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      scrub: 1
    },
    scale: '1.15',
    ease: "none"
  });
});

let viewWidth = window.innerWidth;
let section = document.querySelector('section:last-child');
let sectionTop = section.getBoundingClientRect().top;
let scrollTop = sectionTop - 0.2 * viewWidth;

