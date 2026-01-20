let aboutLink = document.querySelector("#about-link");
let aboutAside = document.querySelector("#about");

let pacbiLink = document.querySelector("#pacbi-link");
let pacbiAside = document.querySelector("#pacbi");

let aboutClose = document.querySelector("#about .close")
let pacbiClose = document.querySelector("#pacbi .close")

let clickTracker = 0;


function showAside(aside) {
    aside.classList.add("show");
    clickTracker++
    aside.style.zIndex = `${clickTracker}`;

    console.log(clickTracker);
}

aboutLink.addEventListener("click", () => {
    showAside(aboutAside)
})

pacbiLink.addEventListener("click", () => {
    showAside(pacbiAside)
})

function closeAside(aside) {
    if(aside.classList.contains("show")) {
        aside.classList.add("hide");
        aside.classList.remove("show");
    } 
}

aboutClose.addEventListener("click", () => {
    closeAside(aboutAside)
    console.log('hi')
})

pacbiClose.addEventListener("click", () => {
    closeAside(pacbiAside)
})

