document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Kode for at håndtere klik på gallerielementer
    $("#gallery ul li a").click(function() {
        var itemID = $(this).attr("href");
        $("#gallery ul").addClass("item_open");
        $(itemID).addClass("item_open");
        return false;
    });

    $(".close").click(function() {
        $(".port, #gallery ul").removeClass("item_open");
        return false;
    });

    $("#gallery ul li a").click(function() {
        $("html, body").animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 0);
    });
});

// Hjælpefunktioner
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const selRand = (array) => array[rand(0, array.length - 1)];

// Initialisering af variabler
let x1 = 0, y1 = 0;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
      dist_to_draw = 50,
      delay = 1000,
      fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'],
      colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5'];

// Beregner afstanden mellem to punkter
const distanceTo = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Afgør om en ny stjerne skal genereres baseret på musens bevægelse
const shouldDraw = (x, y) => distanceTo(x1, y1, x, y) >= dist_to_draw;

// Funktion til at generere og animere stjerner
const addStr = (x, y) => {
    const str = document.createElement("div");
    str.innerHTML = '&#10022;';
    str.className = 'star';
    str.style.top = `${y + window.scrollY + rand(-20, 20)}px`;
    str.style.left = `${x}px`;
    str.style.color = selRand(colors);
    str.style.fontSize = selRand(fsize);
    str.style.position = 'absolute';
    str.style.opacity = '0';
    document.body.appendChild(str);

    setTimeout(() => {
        str.style.opacity = '1';
        str.style.transform = `translate(0, ${rand(-100, 100)}px) rotate(${rand(0, 360)}deg)`;
        str.style.transition = `all ${delay}ms ease-out`;
    }, 10);

    setTimeout(() => {
        str.remove();
    }, delay + 100);
};

// Event listener for at tilføje stjerner baseret på musbevægelse
addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e;
    if (shouldDraw(clientX, clientY)) {
        addStr(clientX, clientY);
        x1 = clientX;
        y1 = clientY;
    }
});

// Glat scroll-funktionalitet for ankerlinks
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });
});
