var path = "M 10 100 Q 500 100 1850 100"
var finalpath = "M 10 100 Q 250 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
  path = `M 10 100 Q 500 ${dets.y} 1850 100`
  
  gsap.to("svg path",{
    attr:{ d: path },
    duration:0.5,
    ease:"power3.out",
  })
})

// string.addEventListener("mouseleave", function(){
//     gsap.to("svg path",{
//         Attr:{d: finalpath},
//         duration:1.5,
//         ease:"elastic.out(1,0.2)"
//       })
//     })
    
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");

gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });
  

gsap.from("#nav img", {
  opacity:0,
  duration:1,
  delay:1,
  y:-30,

})

gsap.from("#right a ",{
  opacity:0,
  duration:1,
  // delay:1,
  y:-30,
  stagger:1
})


gsap.from("#right i ",{
  opacity:0,
  duration:1,
  delay:1,
  y:-30,
  stagger:1
})



gsap.to("#homemain h1",{
  duration:2,
  delay:0.5,
  // opacity:0,
  y:30,
  // color:"red",
  repeat:-1,
  yoyo:true,
  // rotate:360,
})

gsap.from("#homelast",{
  duration:4,
  delay:2,
  scale:0,
  color:"yellow",
  scrub:1,
  repeat:-1
})

gsap.from("#slides #slide #img img",{
  y:100,
  duration:2,
  // delay:1,
  opacity:0,
  scrollerTrigger:{
    trigger:"#slides #slide #img img",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true,
  },
})


  
