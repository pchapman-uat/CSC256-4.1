const GALLERY = [
    new Element('img', [new Attribute('src', "./images/gallery/html-logo.png")]),
    new Element('img', [new Attribute('src', "./images/gallery/css-logo.png")]),
    new Element('img', [new Attribute('src', "./images/gallery/js-logo.png")])
]

document.addEventListener("DOMContentLoaded", () => {
    const gallContainer = document.getElementById('gallery')
    GALLERY.forEach(element => {
        gallContainer.appendChild(element.createElement());
    });
})