let imagePath = "images/events/";

document.addEventListener("DOMContentLoaded", () => {
    const events = [
        // EVENTS {name: "", description: "", location: "", date: "", type: "", eventPosterPath: "posters/", about: "", id: ""}
        {name:"Official Launch", description:"Join our networking event to connect with the industry leaders", location:"Mangosuthu University of Technology (MUT)", time:"10:00-13:00", date:"2025-02-22", type:"MeetUp", eventPosterPath:"posters/Official_Launch.jpg", about:"", id:"2nd_session"}
    ];
    
    const pastEvents = [
        {name: "Reflecting On 2024 And Beyond", description:"", location:"20 Centenary Boulevard, UMhlanga",date:"2024-12-08", type: "MeetUp", time: "11:00 - 15:00", eventPosterPath: "Events/Reflecting_On_2024_And_Beyond.jepg", about:"", id: "1st_session"}
  
    ];
    
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    const pastEventsContainer = document.getElementById("past-events");

    function createEventCard(event) {
        return `
            <div class="event-card">
                <img src="${imagePath}${event.eventPosterPath}" id="${event.id}" alt="${event.name}" onerror="this.onerror=null; this.src='assets/images/default.jpg' ">
                <div class="event-card-content">
                    <h3>${event.name}</h3>
                    <p>${event.description}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Type:</strong> ${event.type}</p>
                    <div class= "read-more"> ${event.about}</div>
                </div>
            </div>
        `;
    }

    function populateEvents() {
        const currentDate = new Date();

        const sortedUpcoming = events
            .filter(event => new Date(event.date) >= currentDate)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        const sortedPast = pastEvents
            .concat(events.filter(event => new Date(event.date) < currentDate))
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        upcomingEventsContainer.innerHTML = sortedUpcoming.map(createEventCard).join("");
        pastEventsContainer.innerHTML = sortedPast.map(createEventCard).join("");

        if (sortedUpcoming.length > 0) {
            const firstEvent = sortedUpcoming[0];
            document.querySelector(".hero-image").innerHTML = `
                <div class="hero-text">
                    <h1>${firstEvent.name}</h1>
                    <h3>${firstEvent.date}</h3>
                    <h3>${firstEvent.location}</h3>
                    <p>${firstEvent.description}</p>
                    <button>RSVP Now!</button>
                </div>
            `;

            document.querySelector(".hero-image-about").innerHTML = `
               <div class="container">
                <div class="header"> ${firstEvent.name}</div>
                <div class="imageGrid wrapper">
                    <img src="${imagePath}${firstEvent.eventPosterPath}"> </div>
                <div class="content"> ${firstEvent.about}</div>
                </div>     
            `
            // document.querySelector(".hero-image").style.background = `
            //     url('${imagePath}posters/poster-01.png');
            //     background-size: contain;  /* Ensures the image is fully contained */
            //     background-repeat: no-repeat; /* Prevents repeating the image */
            //     background-position: center; /* Centers the image */
            // `;


            document.querySelector(".hero-image").style.background = `
                url('${imagePath}posters/poster-01.png')
            `;
        }
    }

    populateEvents();
});
function getRandomImage(folderPath, totalImages) {
const randomIndex = Math.floor(Math.random() * totalImages) + 1;  // Ensures numbers from 1 to totalImages
return `${folderPath}${randomIndex}.jpg`;  // Use backticks for template literals
}

function setFirstSessionImages() {
const folderPath = "images/events/sessions/Reflecting_On_2024_And_Beyond/";
const totalImages = 20;

const randomImage = getRandomImage(folderPath, totalImages);
document.getElementById("1st_session").src = randomImage;
}

// Run immediately when the page loads
window.onload = setFirstSessionImages;

// Change the image every 8 seconds
setInterval(setFirstSessionImages, 3000);


function hideExtraPastEvents() {
    jQuery('#past-events > .event-card:gt(2)').hide();
    jQuery('#results-show-more').show();
}

function showAllPastEvents() {
    jQuery('#past-events > .event-card').show();
    jQuery('#results-show-more').hide();
    
}

window.onload = hideExtraPastEvents;

jQuery('#results-show-more').click(function(event) {
    event.preventDefault();
    showAllPastEvents();
});