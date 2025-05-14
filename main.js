import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC1V5ZxdR2h49petbaK_70zca5HL5tQtck",
    authDomain: "client-firebase-provider.firebaseapp.com",
    projectId: "client-firebase-provider",
    storageBucket: "client-firebase-provider.firebasestorage.app",
    messagingSenderId: "801822397489",
    appId: "1:801822397489:web:458dd855de656f49d3b110"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);








function sendEmail(bookingData) {
    Email.send({
      Host: "smtp.elasticemail.com", // Example: smtp.gmail.com//2525
      Username: "artisticswayam@gmail.com", // Your email address
      Password: "1703AD2A26834BC8BE76F68A74D806C86C96",     // Your email password or app password
      To: "artisticswayam@gmail.com",             // The hotel's email address
      From: "mrs.manaswini.mohanty@gmail.com",     // Sender's email address
      Subject: "New Booking Confirmation",
      Body: `A new booking has been made:
      Name: ${bookingData.name}
      Email: ${bookingData.email}
      Phone: ${bookingData.phone}
      Date: ${bookingData.date}
      Time: ${bookingData.time}
      Guests: ${bookingData.guests}`
    }).then(
      message => alert("Booking email sent successfully!")
    );
  }
















// Get elements
const form = document.getElementById("bookingForm");
const commonForm = document.querySelector(".common-form");
const rentForm = document.querySelector(".rent-form");
const rentBtn = document.querySelector(".rent-btn");
const checkBtn = document.getElementById("checkBtn");
const submitBtn = document.getElementById("submitBtn");
const statusMsg = document.getElementById("statusMsg");
const availabilityMsg = document.getElementById("availabilityMsg");

// Form fields
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const categoryInput = document.getElementById("category");
const materialInput = document.getElementById("material");
const colorInput = document.getElementById("color");
const sizeInput = document.getElementById("size");

checkBtn.addEventListener("click", () => {
  // Simple check for empty values
  if (
    nameInput.value.trim() === "" ||
    phoneInput.value.trim() === "" ||
    categoryInput.value === "" ||
    materialInput.value === "" ||
    colorInput.value.trim() === "" ||
    sizeInput.value === ""
  ) {
    availabilityMsg.textContent = "Please fill in all fields correctly.";
    availabilityMsg.classList.remove("hidden", "text-green");
    availabilityMsg.classList.add("text-red");
    return;
  }

  // Fake availability logic
  availabilityMsg.textContent = "Booking Confirmed! Please notify us via whatsapp";
  availabilityMsg.classList.remove("hidden", "text-red");
  availabilityMsg.classList.add("text-green");
  checkBtn.classList.add("hidden");
  submitBtn.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission

  // Hide availability and show success
  availabilityMsg.classList.add("hidden");
  statusMsg.classList.remove("hidden");

  // You could also reset form fields here if needed:
  // form.reset();
});

rentBtn.addEventListener("click", () => {
  commonForm.classList.add("hidden");
  rentForm.classList.remove("hidden");
  

})


const tl = gsap.timeline();
const link=document.querySelector(".link");

//animations
gsap.from(".clip-top,.clip-bottom",2,{
    delay:1,
    height:"50vh",
    ease:"power4.inOut"
})
gsap.to(".marque",3.5,{
    delay:0.75,
    top:"50%",
    ease:"power4.inOut"
})
gsap.from(".clip-top .marque,.clip-bottom .marque",5,{
    delay:1,
    left:"100%",
    ease:"power3.inOut"
})
gsap.from(".clip-center .marque",5,{
    delay:1,
    left:"-50%",
    
    ease:"power3.inOut"
})
//
gsap.to(".clip-center",3,{
    delay:5,
    opacity:0,
    left:"-100%",
    ease:"power4.inOut"
})
gsap.to(".clip-top",2,{
    delay:6,
    clipPath:"inset(0 0 100% 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-bottom",2,{
    delay:6,
    clipPath:"inset(100% 0 0 0)",
    ease:"power4.inOut"
})
gsap.to(".clip-top .marque,.clip-bottom .marque,.clip-center .marque span",1,{
    delay:6,
    opacity:0,
    ease:"power2.inOut"
})
