let darkThemeBtn = document.getElementById("change-theme-btn");
darkThemeBtn.addEventListener("click", add);

function add() {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let border = document.getElementById("image-border");
    let accordionHeader = document.getElementsByClassName("accordion-button");
    let accordionBody = document.getElementsByClassName("accordion-body");
    let dropdown = document.getElementById("dropdown-menu");
    header.classList.toggle("dark-box");
    footer.classList.toggle("dark-box");
    dropdown.classList.toggle("dark-body");
    document.body.classList.toggle("dark-body");
    document.body.classList.toggle("dark-font");
    border.classList.toggle("dark-border");
    for (let i = 0; i < accordionHeader.length; i++) {
        accordionHeader[i].classList.toggle("dark-box");
    }
    for (let i = 0; i < accordionBody.length; i++) {
        accordionBody[i].classList.toggle("dark-accordion-body");
    }
}