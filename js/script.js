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


