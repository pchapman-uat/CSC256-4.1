const GALLERY = [
    new Div([
        new Element('img', [new Attribute('src', "./images/gallery/html-logo.png")]),
        new Element('img', [new Attribute('src', "./images/gallery/css-logo.png")]),
        new Element('img', [new Attribute('src', "./images/gallery/js-logo.png")])
    ],
    [
        new Attribute('class', 'gallery-imgs')
    ])
    
]

document.addEventListener("DOMContentLoaded", () => {
    const gallContainer = document.getElementById('gallery')
    GALLERY.forEach(element => {
        gallContainer.appendChild(element.createContainer());
    });
})