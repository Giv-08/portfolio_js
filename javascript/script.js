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
          }, 3000);
          contactForm.reset();
      }, (error) => {
          console.error('EmailJS error:', error);
          contactMessage.textContent = 'Message not sent (service error) ❌';
      });
  };

  contactForm.addEventListener('submit', sendEmail);
});
