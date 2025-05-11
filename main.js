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
      To: "mrs.manaswini.mohanty@gmail.com",             // The hotel's email address
      From: "artisticswayam@gmail.com",     // Sender's email address
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
















const form = document.getElementById('bookingForm');
    const checkBtn = document.getElementById('checkBtn');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMsg');
    const availabilityMsg = document.getElementById('availabilityMsg');

    checkBtn.addEventListener('click', () => {
      const date = form.date.value;
      const time = form.time.value;
      const guests = form.guests.value;

      if (!date || !time || !guests) {
        availabilityMsg.textContent = "Please fill in date, time, and guests before checking.";
        availabilityMsg.classList.remove('hidden', 'text-green');
        availabilityMsg.classList.add('text-red');
        return;
      }

      availabilityMsg.textContent = "✔️ Spot is available!";
      availabilityMsg.classList.remove('hidden', 'text-red');
      availabilityMsg.classList.add('text-green');

      submitBtn.classList.remove('hidden');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const bookingData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        guests: form.guests.value,
      };

      console.log('Booking Submitted:', bookingData);
      statusMsg.classList.remove('hidden');
      form.reset();
      submitBtn.classList.add('hidden');
      availabilityMsg.classList.add('hidden');
      sendEmail(bookingData);
    });
