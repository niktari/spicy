let aboutLink = document.querySelector("#about-link");
let aboutAside = document.querySelector("#about");

let pacbiLink = document.querySelector("#pacbi-link");
let pacbiAside = document.querySelector("#pacbi");

let closeButtons = document.querySelectorAll(".close")


function showAside(aside) {
    aside.classList.toggle("show");
    aside.style.zIndex = `1000`;
}

aboutLink.addEventListener("click", () => {
    showAside(aboutAside)
})

pacbiLink.addEventListener("click", () => {
    showAside(pacbiAside)
})

// closeButtons.forEach((close) => {
//     function closeAside(aside) {
//         aside.classList.add("hide");
//     }
// })

