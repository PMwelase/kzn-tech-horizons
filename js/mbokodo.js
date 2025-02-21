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
"typing-text-1": "",
"typing-text-2": "",
"typing-text-3": "",
"typing-text-4": "Join us in building a future where KZN becomes a hub of opportunity, growth, and innovation."
};

function typeText(element, text) {
return new Promise(resolve => {
    let index = 0;
    element.textContent = '';

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
const elements = ['typing-text-1', 'typing-text-2', 'typing-text-3', 'typing-text-4'];

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