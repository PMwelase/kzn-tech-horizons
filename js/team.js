const teamMembers = [
    {
        name: "Spheyena Dube",
        role: "Event Director",
        image: "./images/sphe-01.jpg",
        linkedin: "https://www.linkedin.com/in/spheyenadube/"
    },
    {
        name: "Kwanele Mazibuko",
        role: "Logistics Coordinator",
        image: "./images/kwanele.png",
        linkedin: "https://www.linkedin.com/in/kwanele-mazibuko-929a86260/"
    },
    {
        name: "Aphiwe Msabala",
        role: "Program Coordinator",
        image: "./images/aphiwe.png",
        linkedin: "https://www.linkedin.com/in/aphiwe-msabala/"
    },
    {
        name: "Phumelela Mwelase",
        role: "Technical Director",
        image: "./images/phumelela.png",
        linkedin: "https://www.linkedin.com/in/phumelelamwelase/"
    },
    {
        name: "Sbahle Ngidi",
        role: "Marketing and Communications Manager",
        image: "./images/sbahle.png",
        linkedin: "https://www.linkedin.com/in/sbahle-ngidi-02875b1ab/"
    },
    {
        name: "Mpilo Cele",
        role: "Volunteer Coordinator",
        image: "./images/mpilo.png",
        linkedin: "https://www.linkedin.com/in/sandile-m-cele/"
    },
    {
        name: "Nkosikhona Mlaba",
        role: "Systems Admin",
        image: "./images/nkosi-01-01.png",
        linkedin: "https://www.linkedin.com/in/nkosikhona-mlaba-1545a7273/"
    }
];

let currentIndex = 0;
let autoScrollInterval;
let visibleCards = 6;

function getVisibleCardsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
        return 6;
    }
    return teamMembers.length;
}

function renderTeamMembers() {
    const carousel = document.getElementById('teamCarousel');
    carousel.innerHTML = '';

    visibleCards = getVisibleCardsCount();

    if (visibleCards < teamMembers.length) {
        // Carousel mode
        for (let i = 0; i < visibleCards; i++) {
            const memberIndex = (currentIndex + i) % teamMembers.length;
            const member = teamMembers[memberIndex];
            
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="picture">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h5>${member.name}</h5>
                <h6>${member.role}</h6>
                <a href="${member.linkedin}" class="linkedin-link" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            `;
            carousel.appendChild(card);
        }
    } else {
        // Full list mode
        teamMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="picture">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h5>${member.name}</h5>
                <h6>${member.role}</h6>
                <a href="${member.linkedin}" class="linkedin-link" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            `;
            carousel.appendChild(card);
        });
    }
}

function moveCarousel(direction) {
    clearInterval(autoScrollInterval);
    
    currentIndex = (currentIndex + direction * visibleCards + teamMembers.length) % teamMembers.length;
    
    renderTeamMembers();
    startAutoScroll();
}

function startAutoScroll() {
    clearInterval(autoScrollInterval);
    
    if (visibleCards < teamMembers.length) {
        autoScrollInterval = setInterval(() => {
            moveCarousel(1);
        }, 3000); // Scroll every 3 seconds
    }
}

renderTeamMembers();
startAutoScroll();

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});
carouselContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
});

window.addEventListener('resize', renderTeamMembers);