const navbar = document.getElementById("navbar")
const queenFloatingIcon = document.querySelector(".floatingMenuIcon");

const menuIconNavbar = document.getElementById("navbarMenuIcon")
const menu = document.querySelector('.menu')
const homeText = document.getElementById('homeText')
const charText = document.getElementById('charText')
const worldText = document.getElementById('worldText')
const extraText = document.getElementById('extraText')

const knightAudio1 = new Audio("src/assets/audio/EvilKnightRoar.mp3")
const knightAudio2 = new Audio("src/assets/audio/EvilKnightLaugh.mp3")

const left = document.querySelector(".sectionCoolSlider #left-side")
const sectionCoolSlider = document.querySelector(".sectionCoolSlider")
const card = document.querySelector(".cardSectionCard");

const knightCard = document.querySelector("#knightCard");
const pawnCard = document.querySelector("#pawnCard");

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

function openMenu(){
    document.body.style.overflow = "hidden";
    navbar.classList.add('navbarFixed')
    menu.style.display = "flex"

    delay(25).then(() => menu.style.height = "90vh")
    delay(30).then(() => menu.style.opacity = 100)
}

function closeMenu(){
    document.body.style.overflow = "auto";
    let menu = document.querySelector('.menu')
    navbar.classList.remove('navbarFixed')

    menu.style.height = 0
    delay(250).then(() => menu.style.opacity = 0)
    delay(550).then(() => menu.style.display = "none")
}

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
    console.log(p)
}


hiddenElements.forEach((element) => observer.observe(element))

knightCard.addEventListener("click", function() {
    this.classList.toggle("flipped");

    if (this.classList.contains("flipped")) {
        knightAudio1.volume = 0.1;
        knightAudio1.play();
    }
});

pawnCard.addEventListener("click", function() {
    this.classList.toggle("flipped");

    if (this.classList.contains("flipped")) {
        knightAudio2.volume = 0.1;
        knightAudio2.play();
    }
});

menuIconNavbar.addEventListener("click", function() {
    const computedStyle = window.getComputedStyle(menu);
    const displayValue = computedStyle.getPropertyValue("display");

    if (displayValue === "none") {
        openMenu();
    } else {
        closeMenu();
    }
});

homeText.addEventListener("click", function() {
    closeMenu()
});

charText.addEventListener("click", function() {
    closeMenu()
});

worldText.addEventListener("click", function() {
    closeMenu()
});

extraText.addEventListener("click", function() {
    closeMenu()
});



sectionCoolSlider.addEventListener("mousemove", e => handleOnMove(e))
sectionCoolSlider.addEventListener("touchmove", e => handleOnMove(e.touches[0]));

queenFloatingIcon.addEventListener("click", function() {
    const computedStyle = window.getComputedStyle(menu);
    const displayValue = computedStyle.getPropertyValue("display");

    if (displayValue === "none") {
        openMenu();
    } else {
        closeMenu();
    }
});

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const navbarPosition = navbar.getBoundingClientRect().top;

    if (navbarPosition < scrollPosition) {
        queenFloatingIcon.style.display = "flex";
    } else {
        queenFloatingIcon.style.display = "none";
    }
});