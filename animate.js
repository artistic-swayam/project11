


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
      const randomX = Math.random() * vw - container.getBoundingClientRect().right;
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
      trigger: container,         // Correct element
      start: 'top 130%',        // Start animating when the line hits bottom of viewport
      end: 'top 50%',
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
        start: "top 0%",
        end: "top -10%",
        scrub: true,
      }
    }),
  gsap.to(letters, {
    scrollTrigger: {
      trigger: container,         // Correct element
      start: 'top 150%',        // Start animating when the line hits bottom of viewport
      end: 'top 50%',
      scrub: 1,

    },
    x: 0,
    y: 0,
    opacity: 0.9,
    ease: 'power2.out',
    stagger: 0.02,

  });
  },

});
const menu_btn = document.querySelector('.menu-i');
const close_btn = document.querySelector('.close-i');
const menu = document.querySelector('.menu');

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('none');
  close_btn.classList.toggle('none');
  menu_btn.classList.toggle('none');
  gsap.fromTo(menu, {
    opacity: 0,
    scale: 0,
  }, {
    duration: 0.6,
    opacity: 1,
    scale: 1,
    ease: "power4.out"
  });
})
close_btn.addEventListener('click', () => {
  menu.classList.toggle('none');
  close_btn.classList.toggle('none');
  menu_btn.classList.toggle('none');
})

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    // Optional: remove any previous splits
    const existingSplit = link.querySelector('.split-line');
    if (existingSplit) return; // prevent repeated splitting

    // Target the <a> inside
    const target = link.querySelector('a');

    // Split the text into lines
    const split = new SplitText(target, { type: "lines", linesClass: "split-line" });

    // Animate
    gsap.from(split.lines, {
      duration: .8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power4.out"
    });
  });

  // Optional: cleanup on mouse leave
  link.addEventListener('mouseleave', () => {
    const target = link.querySelector('a');
    target.innerHTML = target.textContent; // reset to original
  });
});

const prevcasual = document.querySelector('.prev-casual');
const prevwestern = document.querySelector('.prev-western');
const prevethnic = document.querySelector('.prev-ethnic');


const nextcasual = document.querySelector('.next-casual');
const nextwestern = document.querySelector('.next-western');
const nextethnic = document.querySelector('.next-ethnic');


const casual = document.querySelector('.casual');
const ethnic = document.querySelector('.ethnic');
const western = document.querySelector('.western');



prevcasual.addEventListener('click', () => {

  gsap.to(casual, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      casual.classList.add('none');
      ethnic.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(ethnic, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});
prevethnic.addEventListener('click', () => {

  gsap.to(ethnic, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      ethnic.classList.add('none');
      western.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(western, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});
prevwestern.addEventListener('click', () => {

  gsap.to(western, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      western.classList.add('none');
      casual.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(casual, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});








nextcasual.addEventListener('click', () => {

  gsap.to(casual, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      casual.classList.add('none');
      western.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(western, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});
nextethnic.addEventListener('click', () => {

  gsap.to(ethnic, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      ethnic.classList.add('none');
      casual.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(casual, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});
nextwestern.addEventListener('click', () => {

  gsap.to(western, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      western.classList.add('none');
      ethnic.classList.remove('none');
      // Then fade in ethnic
      gsap.fromTo(ethnic, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  });
});

document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    




document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll(".item-card .btn");

    bookButtons.forEach((button) => {
      const label = button.innerText.trim().toLowerCase();

      if (label === "book") {
        button.addEventListener("click", () => {
          const itemCard = button.closest(".item-card");
          const type = itemCard.querySelector(".type")?.innerText?.trim();
          const productNo = itemCard.querySelector(".product-no")?.innerText?.trim();

          if (type) localStorage.setItem("selectedType", type);
          if (productNo) localStorage.setItem("selectedProductNo", productNo);

          window.location.href = "booking.html";
        });
      }
    });
  });
