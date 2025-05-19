


// gsap.to(".choose", {
//   backgroundColor: "rgb(30, 77, 57)",
//   scrollTrigger: {
//     trigger: ".choose",          // use the actual section, not body
//     start: "top center",         // when .choose top hits center of viewport
//     end: "bottom center",        // when .choose bottom hits center
//     toggleActions: "play reverse play reverse",             // for debugging
//   }
// });

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
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  const hoverCircle = btn.querySelector('.hover-circle');

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hoverCircle.style.left = `${x - 50}px`;
    hoverCircle.style.top = `${y - 50}px`;
    hoverCircle.style.transformOrigin = `50% 50%`;
  });

  btn.addEventListener('mouseleave', () => {
    hoverCircle.style.transformOrigin = `center center`;
  });
});


const container = document.getElementById('choose-hero');
  const originalText = container.textContent;
  container.textContent = ''; // clear container to inject letters

  // Wrap every letter including spaces into a span
  const letters = [...originalText].map(char => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.textContent = char;
    container.appendChild(span);
    return span;
  });

  function scatterLetters() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    letters.forEach(letter => {
      // Scatter anywhere in viewport width and 2x viewport height (full scroll height)
      const randomX = Math.random() * vw - container.getBoundingClientRect().left;
      const randomY = Math.random() * vh * 2 - container.getBoundingClientRect().top;

      gsap.set(letter, {
        x: randomX,
        y: randomY,
        opacity: 0,    // start hidden
      });
    });
  }

  scatterLetters();

  // Animate letters to form original line on scroll with fade-in


  // Re-scatter letters on resize
  window.addEventListener('resize', () => {
    scatterLetters();
    ScrollTrigger.refresh();
  });


  ScrollTrigger.matchMedia({

  // Desktop (screens wider than 768px)
  "(min-width: 769px)": function() {
    gsap.to(".img", {
      scale: 0.25,
      scrollTrigger: {
        start: "top -10%",
        end: "top -50%",
        scrub: true,
        pin: true,
      }
    }),
  gsap.to(letters, {
    scrollTrigger: {

      trigger: ".home",         // Correct element
    start: 'top 30%',        // Start animating when the line hits bottom of viewport
    end: 'top -40%',
      scrub: 1,

    },
    x: 0,
    y: 0,
    opacity: 0.9,
    ease: 'power2.out',
    stagger: 0.02,

  });
  },

  // Mobile (screens 768px and below)
  "(max-width: 768px)": function() {
    gsap.to(".img", {
      scale: 0.25,
      scrollTrigger: {
        start: "top -10%",
        end: "top -50%",
        scrub: true,
        pin: true,

      }
    }),
  gsap.to(letters, {
    scrollTrigger: {

      trigger: container,         // Correct element
    start: 'top 150%',        // Start animating when the line hits bottom of viewport
    end: 'top 100%',
      scrub: 1,
      markers: true,
    },
    x: 0,
    y: 0,
    opacity: 0.9,
    ease: 'power2.out',
    stagger: 0.02,

  });
  },

});
