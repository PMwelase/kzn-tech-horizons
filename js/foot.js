function displayFootSection() {
    const footSection = document.createElement('div');
    footSection.className = 'container-fluid text-white text foot';
  
    footSection.innerHTML = `
      <h2 class="text-center mb-4 head">Join KZN's Premier Tech Community</h2>
      <div class="row">
        <!-- Column 1: About (Horizontally & Vertically Centered) -->
        <div class="col-md-3 mb-4 d-flex align-items-left justify-content-center hero">
          <div class="text-left">
            <img src="images/KZNTH-Home-24.svg" alt="KZN Tech Horizons Logo" class="footer-img mb-3">
            <p>
              KZN Tech Horizons is dedicated to transforming KwaZulu-Natal (KZN) into a thriving tech hub by bridging the gap between experienced professionals and emerging talent.
            </p>
          </div>
        </div>
        <!-- Column 2: Quicklinks (Horizontally Centered) -->
        <div class="col-md-3 mb-4 d-flex justify-content-center">
          <div class="text-left">
            <h3>Quicklinks</h3>
            <ul class="list-unstyled">
              <li><a href="/" class="text-white text-decoration-none link-text">Home</a></li>
              <li><a href="event.html" class="text-white text-decoration-none link-text">Events</a></li>
              <li><a href="/Blog.html" class="text-white text-decoration-none link-text">Blog</a></li>
              <li><a href="/imbokodo.html" class="text-white text-decoration-none link-text">Imbokodo</a></li>
            </ul>
          </div>
        </div>
        <!-- Column 3: Socials (Horizontally Centered) -->
        <div class="col-md-3 mb-4 d-flex justify-content-center">
          <div class="text-left">
            <h3>Socials</h3>
            <ul class="list-unstyled">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61573685678018" class="text-white text-decoration-none footer-link socials link-text">
                  <img src="images/facebook-01.svg" alt="Facebook">Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/kzn-tech-horizons" class="text-white text-decoration-none footer-link socials link-text">
                  <img src="images/linkedin.svg" alt="LinkedIn">LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kzntechhorizons/" class="text-white text-decoration-none footer-link socials link-text">
                  <img src="images/instagram.svg" alt="Instagram">Instagram
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/K37Xovft04p48dSKmyvs6d" class="text-white text-decoration-none footer-link socials link-text">
                  <img src="images/whatsapp.svg" alt="WhatsApp">WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@kzn.tech.horizons?_t=ZM-8uQbYVOtcZz&_r=1" class="text-white text-decoration-none footer-link socials link-text">
                  <img src="images/tiktok-01.svg" alt="Tiktok">Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Column 4: Contact (Horizontally Centered) -->
        <div class="col-md-3 mb-4 d-flex justify-content-center">
          <div class="text-left">
            <h3>Contact Us:</h3>
            <br>
            <p><i class="fa-solid fa-phone me-2"></i>+27 79 326 6617</p>
            <p><i class="fa-solid fa-envelope me-2"></i>info@kznth.co.za</p>
          </div>
        </div>
      </div>
    `;
  
    // Apply styles directly to the foot section
    footSection.style.background = 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))';
    footSection.style.paddingTop = '3rem';

    // Apply styles to the heading
    const heading = footSection.querySelector('.head');
    heading.style.fontWeight = '600';
    heading.style.textAlign = 'center';

    const hero = footSection.querySelector('.hero');
    hero.style.paddingLeft = '5rem';
  
    // Apply styles to the row
    const row = footSection.querySelector('.row');
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
    row.style.marginRight = '-15px';
    row.style.marginLeft = '-15px';
  
    // Apply styles to the text-left class
    const textLeftElements = footSection.querySelectorAll('.text-left');
    textLeftElements.forEach(element => {
      element.style.textAlign = 'left';
    });
  
  
    // Apply styles to the footer-img class
    const footerImg = footSection.querySelector('.footer-img');
    footerImg.style.maxWidth = '80%';
    footerImg.style.height = 'auto';
  
    // Append the foot section to the body or any other desired container
    document.body.appendChild(footSection);

    const links = document.querySelectorAll('.link-text');
    links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.setProperty('color', 'orange', 'important');
    });
    link.addEventListener('mouseleave', () => {
        link.style.removeProperty('color');
    });
    });


  }
  
  // Call the function to display the foot section
  displayFootSection();