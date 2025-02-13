// document.getElementById('volunteerBtn').addEventListener('click', function() {
//     alert('Thank you for your interest in volunteering!');
// });

// document.getElementById('volunteerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     window.location.href = "mailto:kzntechhorizons@gmail.com?subject=Volunteer Sign-up&body=Hello, I'd like to volunteer!";
// });


// COUNTDOWN

document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(eventDate) {
        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            if (!countdownElement) return;

            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            if (timeLeft < 0) {
                countdownElement.innerHTML = "Event Started!";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const paddedDays = days < 10 ? "0" + days : days;
            const paddedHours = hours < 10 ? "0" + hours : hours;
            const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
            const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;

            countdownElement.innerHTML = `${paddedDays}d ${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    const eventDate = new Date(2025, 1, 22, 9, 0, 0).getTime();
    startCountdown(eventDate);
});


// SUN CURSOR

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById('home');
    const overlay = document.createElement('div');
    overlay.className = 'black-overlay circle-mask';
    homeSection.appendChild(overlay);

    homeSection.addEventListener('mousemove', function(e) {
        const rect = homeSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        overlay.style.setProperty('--mouse-x', x + 'px');
        overlay.style.setProperty('--mouse-y', y + 'px');
    });

    homeSection.addEventListener('mouseleave', function() {
        overlay.style.opacity = '0.8';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for slide animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    // Observe slide animation elements
    document.querySelectorAll("[data-animate='slide-left'], [data-animate='slide-right']")
        .forEach((el) => observer.observe(el));

    // Typing effect setup
    const typingTexts = {
        "typing-text-1": "At KZN Tech Horizons, we believe KwaZulu-Natal (KZN) has all the ingredients to become a thriving tech powerhouse with skilled professionals, ambitious innovators, and untapped potential. Yet, a gap remains between established tech experts and those eager to break into the industry. We are here to change that. Tech Horizons is a dynamic community initiative dedicated to bridging the gap, fostering connections, and unlocking new opportunities. Whether you're a seasoned professional, an aspiring tech enthusiast, or a company looking to invest in KZN’s growing digital economy, we provide the platform to connect, collaborate, and create.",
        "typing-text-2": "We envision KwaZulu-Natal (KZN) as a thriving tech hub that fosters innovation, collaboration, and economic growth. By 2030, we aim to position Durban as a leading smart city, where cutting-edge solutions address urban challenges, enhance digital infrastructure, and drive sustainable development.",
        "typing-text-3": "Join us in building a future where KZN becomes a hub of opportunity, growth, and innovation."
    };

    function typeText(element, text) {
        return new Promise(resolve => {
            let index = 0;
            element.textContent = ''; // Clear any existing text

            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 5);
                } else {
                    setTimeout(resolve, 50);
                }
            }
            type();
        });
    }

    async function startTypingSequence() {
        const elements = ['typing-text-1', 'typing-text-2', 'typing-text-3'];
        
        for (const elementId of elements) {
            const element = document.getElementById(elementId);
            await typeText(element, typingTexts[elementId]);
        }
    }

    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.typed) {
                entry.target.dataset.typed = "true";
                startTypingSequence();
            }
        });
    }, { threshold: 0.4 });

    typingObserver.observe(document.getElementById('who-we-are'));
});


document.addEventListener('DOMContentLoaded', function() {
    new bootstrap.Carousel(document.getElementById('teamCarousel'), {
        interval: 7000,
        wrap: true,   
        touch: true   
    });
});