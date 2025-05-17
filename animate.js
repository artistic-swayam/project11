

gsap.to(".img", {
      scale: 0.25,
      scrollTrigger: {
        start: "top -10%",
        end: "top -50%",
        scrub: true,
        pin: true,
      }
    });
gsap.to(".choose", {
  backgroundColor: "rgb(30, 77, 57)",
  scrollTrigger: {
    trigger: ".choose",          // use the actual section, not body
    start: "top center",         // when .choose top hits center of viewport
    end: "bottom center",        // when .choose bottom hits center
    toggleActions: "play reverse play reverse",             // for debugging
  }
});

gsap.registerPlugin(SplitText) 
let split = SplitText.create(".split", {
  type: "words, lines", 
  mask: "lines",
  linesClass: "line++", 

});
  
function showText(){

}

gsap.from(split.lines, {
  duration: 1.2, 
  y: 100,
  rotate: 4,   
      // animate from 100px below
  opacity: 0,   // fade in from opacity: 0 and visibility: hidden
  stagger: 0.1,
    // 0.05 seconds between each
});
let split_others = SplitText.create(".split-others", {
  type: "words, lines", 
  mask: "lines",
  linesClass: "line++", 

});
gsap.from(split_others.lines, {
  duration: .8,
  y: 100,
  rotate: 4,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".split-others",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
    // for debugging
  }
});
