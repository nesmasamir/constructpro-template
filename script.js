// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// })


const allSections = document.querySelectorAll("section");
const cards = document.querySelectorAll(".feature-card");
const counterItems = document.querySelectorAll(".counter-num")
const counterSection = document.querySelector(".counter-section");
const blogSection = document.querySelector(".blog-section");
const counterValues = [50, 100, 1100, 50];


//////////////////////////////////////////// all sections reveal
function revealSection(entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) {
        return;
    }
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);

}

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });
allSections.forEach(section => {
    section.classList.add('section--hidden')
    sectionObserver.observe(section);

})
// ///////////////////////////////////////////////////////////////////////////////// cards reveal

function revealCard(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        return;
    }
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('card--hidden')
        }, 600 * index);

    })

    observer.unobserve(entry.target);

}

const cardObservaer = new IntersectionObserver(revealCard, { root: null, threshold: 0.15 });

cardObservaer.observe(blogSection);

cards.forEach(card => {
    card.classList.add('card--hidden')

})


//////////////////////////////////////////////////////////////////// counter section
function counter(entries, observer) {

    const [entrey] = entries;

    if (!entrey.isIntersecting) {
        return

    }
    counterItems.forEach((counterItem, index) => {
        let initialval = 0
        setInterval(() => {
            if (initialval > counterValues[index]) {
                return

            }
            counterItem.innerHTML = initialval++;
            console.log(initialval)

        }, 10)
        observer.unobserve(entrey.target)
    })


}
const observeCounter = new IntersectionObserver(counter, { root: null, threshold: 0.20 });
observeCounter.observe(counterSection)






