class Attribute{
    type;
    value;
    constructor(type, value){
        this.type = type
        this.value = value
    }
}
class EventListener{
    constructor(event, handler){
        this.event = event
        this.handler = handler
    }
}

class Element{
    attributes;
    type;
    inner;
    constructor(type, attributes, inner){
        this.type = type
        this.attributes = attributes
        this.inner = inner
    }
    createElement() {
        let element = document.createElement(this.type);
        for (let attribute_ of this.attributes) {
            if (attribute_ instanceof Attribute) {
                element.setAttribute(attribute_.type, attribute_.value);
            } else if (attribute_ instanceof EventListener) {
                element.addEventListener(attribute_.event, attribute_.handler);
            }
        }
        if (this.inner !== null && this.inner !== '') {
            element.innerHTML = this.inner;
        }
        return element;
    }
} 

class Div{
    attributes;
    elements;
    constructor(elements, attributes){
        this.elements = elements;
        this.attributes = attributes;
    }
    createContainer(){
        let container = document.createElement("div")
        for(let element of this.elements){
            container.appendChild(element.createElement())
        }
        if(this.attributes == null) return container;
        for(let attribute of this.attributes){
            if(attribute instanceof Attribute){
                container.setAttribute(attribute.type, attribute.value)
            } else if(attribute instanceof EventListener){
                container.addEventListener(attribute.type, attribute.value)
            }
        }
        return container;
    }
}

const HEADER = [
    new Div(
        [ 
            new Element(
                "h1", [new Attribute("class", "'border'")], 
                "Preston Chapman"
            ),
            new Element(
                "h2", [new Attribute("class", "'border'")], 
                "Assignment 4.1: Slideshow"
            ),
        ],
        [
            new Attribute("class", "border header")
        ]
    ),
    new Div(
        [
            new Element(
                "img", [new Attribute("src", "images/profile_pic.jpg")],
                ""
            ),
            new Element(
                "img", [new Attribute("src", "images/uat.webp")],
                ""
            )
        ],
        [
            new Attribute("class", "pfp-container")
        ]
       
    )

]

const NAV = [
    new Element(
        "a", [new Attribute("href", "index.html"), new Attribute("class", "nav-link")],
        "Home"
    ),
    new Element(
        "a", [new Attribute("href", "classes.html"), new Attribute("class", "nav-link")],
        "Classes"
    )
]

document.addEventListener("DOMContentLoaded", () => {
    let header_el = document.getElementById("header")
    for(let div of HEADER){
        header_el.appendChild(div.createContainer())
    }
    let nav_el = document.getElementById("nav")
    for(let div of NAV){
        nav_el.appendChild(div.createElement())
    }
})