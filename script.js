let tl = gsap.timeline()

tl.from("nav", {
    delay: 0.2,
}).from("#navFirstDiv", {
    opacity: 0,
    y: -40
}, "anim").from("#navSecondDiv", {
    opacity: 0,
    y: -30
}, "anim").from("#navSecondDiv h4", {
    opacity: 0,
    y: -30,
    stagger: 0.06,
}).from("#navButton", {
    opacity: 0,
    y: -30,
}, "-=0.3")

let tl2 = gsap.timeline()
tl2.from("#box1 h1", {
    delay: 0.9,
    y: 20,
    opacity: 0,
    // stagger: -0.2
}).from("#box2 img", {
    opacity: 0,
    x: 30,
    y: -30
})


gsap.from("#container3", {
    opacity: -2,
    y: 50,
    scrollTrigger: {
        trigger: "#container3",
        scroller: "body",
        // markers: true,
        scrub: 1,
        start: "top 80%",
        end: "top 0%",
    }
})


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#container4",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 80%",
        end: "-10%"
    }
})
tl3.from(".line1.left", {
    opacity: 0,
    x: -140,

},"amin1")
tl3.from(".line1.right", {
    opacity: 0,
    x: 140,

},"amin1")
tl3.from(".line2.left", {
    opacity: 0,
    x: -140,

},"amin2")
tl3.from(".line2.right", {
    opacity: 0,
    x: 140,

},"amin2")
tl3.from("#container5 img",{
    delay:0.5,
    x:190,
    y:-120
})

gsap.from(".boxes i",{
    delay:1,
    duration:3,
    opacity:0,
    repeat:-1,
})








// hamburger code from here
let i = document.querySelector(".ham");
let container = document.querySelector("#menue");
let cont_h4 = document.querySelectorAll("#menue h4");
let button =document.querySelector("#but");
let cont_cross = document.querySelector("#menue .close");

//container vali Animation
let tl4 = gsap.timeline();
tl4.from(container, {
    right: "-40%",
    opacity: 0,
    duration: 0.1
})
tl4.from(cont_h4, {
    opacity: 0,
    x: 30,
    stagger: 0.04,//h4's ko bari bari chalayega
})
tl4.from(button, {
    opacity: 0,
    x: 30,
})

tl4.pause()
//container vali animation ko active deactive kr ney key liye DOM likh rahe hai
i.addEventListener("click", function () {
    tl4.play()
    i.style.display="none"
    cont_cross.style.display="block"
    button.style.display="block"
})
cont_cross.addEventListener("click", function () {
    tl4.reverse()
    i.style.display="block"
    cont_cross.style.display="none"
    button.style.display="block"
})