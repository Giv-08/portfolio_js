// EMAIL JS
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact_form');
  const contactMessage = document.getElementById('contact_message');

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_sdh60us', 'template_5xzoch8', contactForm, 'LgALbUXWHpDPxIIRP')
      .then(() => {
          contactMessage.textContent = 'Message sent successfully ✅';
          setTimeout(() => {
              contactMessage.textContent = '';
          }, 1500);
          contactForm.reset();
      }, (error) => {
          console.error('EmailJS error:', error);
          contactMessage.textContent = 'Message not sent (service error) ❌';
      });
  };

  contactForm.addEventListener('submit', sendEmail);
});

// ROTATING RESUME DOWNLOAD
const resume = "DOWNLOAD MY RESUME";
const text = document.getElementById("circle_text");

window.onload = () => {
  for (let i = 0; i < resume.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = resume[i];
    text.appendChild(span);

    span.style.transform = `rotate(${19 * i}deg)`;
  }
};

// Get the container element
var btnContainer = document.getElementsByClassName("nav_menu")[0];

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav_menu_item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// HAMBURGER MENU
function toggleMenu() {
  const menu = document.querySelector('.nav_menu');
  menu.classList.toggle('active'); // Add or remove the active class
}
