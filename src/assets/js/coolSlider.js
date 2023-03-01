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

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
    console.log(p)
}


hiddenElements.forEach((el) => observer.observe(el))

knightCard.addEventListener("click", function() {
    this.classList.toggle("flipped");

    if (this.classList.contains("flipped")) {
        knightAudio1.play();
    }
});

pawnCard.addEventListener("click", function() {
    this.classList.toggle("flipped");

    if (this.classList.contains("flipped")) {
        knightAudio2.play();
    }
});

sectionCoolSlider.addEventListener("mousemove", e => handleOnMove(e))
sectionCoolSlider.addEventListener("touchmove", e => handleOnMove(e.touches[0]));