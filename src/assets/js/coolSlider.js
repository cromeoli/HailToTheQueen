const left = document.querySelector(".sectionCoolSlider #left-side")
const sectionCoolSlider = document.querySelector(".sectionCoolSlider")
const card = document.querySelector(".cardSectionCard");

const knightCard = document.querySelector("#knightCard");
const pawnCard = document.querySelector("#pawnCard");

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;

    left.style.width = `${p}%`;
    console.log(p)
}


knightCard.addEventListener("click", function() {
    this.classList.toggle("flipped");
});

pawnCard.addEventListener("click", function() {
    this.classList.toggle("flipped");
});

sectionCoolSlider.addEventListener("mousemove", e => handleOnMove(e))
sectionCoolSlider.addEventListener("touchmove", e => handleOnMove(e.touches[0]));