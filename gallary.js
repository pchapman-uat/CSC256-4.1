var gallIndex = 0;
const GALLERY_IDS = [
    "gal-0",
    "gal-1",
    "gal-2",
    "gal-3",
]
const GALLERY = [
    new Div([
        new Element('img', [new Attribute('src', "./images/gallery/html-logo.png"), new Attribute("id", GALLERY_IDS[0])]),
        new Element('img', [new Attribute('src', "./images/gallery/css-logo.png"), new Attribute("id", GALLERY_IDS[1])]),
        new Element('img', [new Attribute('src', "./images/gallery/js-logo.png"), new Attribute("id", GALLERY_IDS[2])]),
        new Element('img', [new Attribute('src', "./images/gallery/jsx-logo.png"), new Attribute("id", GALLERY_IDS[3])])
    ],
    [
        new Attribute('class', 'gallery-imgs')
    ]),
    new Div([
        new Element(
            "button", 
            [ 
                new EventListener("click", () => gallBack())
            ],
            "Back"
        ),
        new Element(
            "button", 
            [ 
                new EventListener("click", () => gallNext())
            ],
            "Foward"
        )
    ],
    [
        new Attribute('class', 'gallery-btn')
    ])
    
]

document.addEventListener("DOMContentLoaded", () => {
    const gallContainer = document.getElementById('gallery')
    GALLERY.forEach(element => {
        gallContainer.appendChild(element.createContainer());
    });
    hideGalImg()
})
function gallBack(){
    if(gallIndex <= 0) gallIndex = GALLERY_IDS.length - 1;
    else gallIndex-=1;
    hideGalImg()
   
}
function gallNext(){
    if(gallIndex >= GALLERY_IDS.length-1) gallIndex = 0;
    else gallIndex+=1;
    hideGalImg()
}

function hideGalImg(){
    console.log(gallIndex)
    GALLERY_IDS.forEach((element, i) => {
        if(i != gallIndex){
            document.getElementById(element).style.display = "none";
        }else{
            document.getElementById(element).style.display = "block";
        }
    });
}