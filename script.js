const crsr = document.querySelector(".cursor")
const crsrBlur = document.querySelector(".cursor-blur")
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const nav = document.querySelector(".nav")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+20 +"px"
    crsr.style.top = dets.y+"px"
    crsrBlur.style.left = dets.x -150 +"px"
    crsrBlur.style.top = dets.y - 150 +"px"
})

const li = document.querySelectorAll("li");
li.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end:"top -11%", 
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end:"top -75%",
        scrub: 2
    }
})

gsap.from(".aboutUs img, .aboutUs-text",{
    y:50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutUs",
        scroll: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3

    }
})

gsap.from(".card",{
    scale:0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroll: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1

    }
})

gsap.from("#colon1",{
    y: -70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3

    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3

    }
})

gsap.from(".page4 h1",{
    y: 30,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroll: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: 1
    }
})





hamburger.addEventListener("click", () => {
  ul.classList.toggle("visible");
});

let isBlack = false;

hamburger.addEventListener("click", () => {
  if (!isBlack) {
    nav.style.backgroundColor = "black";
    isBlack = true;
  } else {
    nav.style.backgroundColor = "transparent";
    isBlack = false;
  }
});




















 