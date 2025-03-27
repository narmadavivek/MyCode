/*=============== EMAIL JS ===============*/
(function() {
  emailjs.init('CNhxIke-0WEJyar0D'); // Your public key
})();

const contactForm = document.getElementById('contact-form'),
      contactMessage= document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault();

  // Show loading state
  contactMessage.textContent = 'Sending message...';
  contactMessage.style.color = '#666';

  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    contactMessage.textContent = 'EmailJS not loaded. Please try again later.';
    contactMessage.style.color = '#ff3333';
    return;
  }

 // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_ko5l6gg','template_41g9s97','#contact-form','CNhxIke-0WEJyar0D')
 
  .then(() =>{
    // Show sent message
    contactMessage.textContent = 'Message sent successfully ✅'
    contactMessage.style.color = '#4BB543';
    
    //Clear all form fields
    contactForm.reset();
    
    // Remove message after five seconds

     setTimeout(()=>{
    contactMessage.textContent = ''
  }, 5000);
  },(error) =>{
    // Show error message
      console.error('EmailJS Error:', error);
    // Show error message
   contactMessage.textContent = `Failed to send message. Please email me directly at narmada.viveka@gmail.com`;
   contactMessage.style.color = '#ff3333'; 
  })


}      
contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with scrollup class
  window.scrollY >= 350 
  ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY =window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop - 58,
           sectionId = current.getAttribute('id'),
           sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
sectionsClass.classList.remove('active-link')
      }
      })     
  
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay: 400,
  //reset: true, // Animations repeat
})

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin:'left', delay:800})
sr.reveal('.skills',{origin:'left', delay: 1000})
sr.reveal('.about',{origin:'right', delay: 1200})
sr.reveal('.projects__card, .services__card, .experience__card',{interval:100})
