import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC1V5ZxdR2h49petbaK_70zca5HL5tQtck",
    authDomain: "client-firebase-provider.firebaseapp.com",
    projectId: "client-firebase-provider",
    storageBucket: "client-firebase-provider.firebasestorage.app",
    messagingSenderId: "801822397489",
    appId: "1:801822397489:web:458dd855de656f49d3b110"
  };
// main.js

import {
        getFirestore,
        collection,
        addDoc,
        getDoc,
        getDocs,
        doc,
        setDoc,
        updateDoc,
        deleteDoc,
        onSnapshot,
        serverTimestamp
      } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form and button
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


checkBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  

  if (!nameInput.value || !phoneInput.value || !categoryInput.value || !materialInput.value || !colorInput.value || !sizeInput.value) {
    alert("Fill all fields!");
    return;
  }

  const bookingData = {
    fullName: nameInput.value,
    phone: phoneInput.value,
    category: categoryInput.value,
    material: materialInput.value,
    color: colorInput.value,
    size: sizeInput.value,
    status: "in progress",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db,"clients","client1", "bookings"), bookingData);
    alert("Booking saved successfully!Please notify us via WhatsApp.");
    statusMsg.textContent = "✅ Booking Confirmed! Please notify us via WhatsApp.";
    statusMsg.classList.remove("hidden", "text-red");
    statusMsg.classList.add("text-green");
    
    checkBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } catch (err) {
    alert("Error saving booking:", err);
    statusMsg.textContent = "❌ Error saving booking!";
    statusMsg.classList.remove("hidden", "text-green");
    statusMsg.classList.add("text-red");
    
  }
});


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const category = categoryInput.value.trim();
  const material = materialInput.value.trim();
  const color = colorInput.value.trim();
  const size = sizeInput.value.trim();
  const status = "in progress"; // default

  const message = `
Hello Kajal,
I am ${name} and I have provided the details for my booking.

Please give a confirmation.
`;

  const encodedMessage = encodeURIComponent(message.trim());

  // Hardcoded admin number with country code
  const adminPhoneNumber = "918954358445";
  const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  form.reset();
});


// Get elements




form.addEventListener("submit", (e) => {
   e.preventDefault(); // Prevent actual form submission

   // Hide availability and show success
   availabilityMsg.classList.add("hidden");e
   statusMsg.classList.remove("hidden");

   // You could also reset form fields here if needed:
    form.reset();
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



document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("category");
  const productDetailsInput = document.getElementById("details");
  const materialField = document.querySelector(".material");

  const savedType = localStorage.getItem("selectedType");
  const savedProductNo = localStorage.getItem("selectedProductNo");

  if (savedType && categorySelect) {
    categorySelect.value = savedType;
    localStorage.removeItem("selectedType");
  }

  if (savedProductNo && productDetailsInput) {
    productDetailsInput.value = `Product No. ${savedProductNo}`;
    productDetailsInput.classList.remove("hidden"); // Remove hidden from #details

    if (materialField) {
      materialField.classList.add("hidden"); // Add hidden to .material
    }

    localStorage.removeItem("selectedProductNo");
  }
});


