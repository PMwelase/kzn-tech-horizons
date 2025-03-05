function loadFooter(containerId = 'footer-container') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found.`);
      return;
    }
    const footerHTML = `
      <footer class="text-center p-3 bg-dark text-white" id="contact">
        <p>Get in touch:</p>
        <a href="https://www.facebook.com/profile.php?id=61573685678018" class="socials">
          <img src="images/facebook-01.svg" alt="facebook">
        </a>
        <a href="https://www.linkedin.com/company/kzn-tech-horizons" class="socials">
          <img src="images/linkedin.svg" alt="LinkedIn">
        </a>
        <a href="https://www.instagram.com/kzntechhorizons/" class="socials">
          <img src="images/instagram.svg" alt="Instagram">
        </a>
        <a href="mailto:info@kznth.co.za" class="socials">
          <img src="images/email-05.svg" alt="email">
        </a>
        <a href="https://chat.whatsapp.com/K37Xovft04p48dSKmyvs6d" class="socials">
          <img src="images/whatsapp.svg" alt="whatsapp">
        </a>
        <a href="https://www.tiktok.com/@kzn.tech.horizons?_t=ZM-8uQbYVOtcZz&_r=1" class="socials">
          <img src="images/tiktok-01.svg" alt="tiktok">
        </a>
      </footer>
    `;
  
    container.innerHTML = footerHTML;
  
    setupFooterInteractivity();
  }
  
  function setupFooterInteractivity() {
    const socialLinks = document.querySelectorAll('.socials');
    socialLinks.forEach(link => {
      link.addEventListener('click', function() {
        const platform = this.querySelector('img').alt;
        console.log(`User clicked on ${platform} link`);
      });
    });
    
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
      emailLink.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email)
          .then(() => {
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied!';
            tooltip.style.position = 'absolute';
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY - 30}px`;
            tooltip.style.background = '#333';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '3px';
            tooltip.style.zIndex = '1000';
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
              document.body.removeChild(tooltip);
            }, 2000);
          });
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
  });