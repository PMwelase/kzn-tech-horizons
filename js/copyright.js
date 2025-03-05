function loadCopyrightFooter(containerId = 'copyright-container') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found.`);
      return;
    }
  
    const currentYear = new Date().getFullYear();
    
    const copyrightHTML = `
      <p id="copyright" style="font-family: Arial, Helvetica, sans-serif;">
        © ${currentYear} KZN Tech Horizons | Created by 
        <a href="https://www.linkedin.com/in/phumelelamwelase/" >
          @phumelelamwelase
        </a>
      </p>
    `;
    
    container.innerHTML = copyrightHTML;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    loadCopyrightFooter();
  });