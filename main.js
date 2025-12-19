/*************************************************
 * VARIABLES
 *************************************************/
let selectedMembership = null;

/*************************************************
 * ARRAYS
 *************************************************/
const membershipOptions = [
    "Gym Member Level 1",
    "Gym Member Level 2",
    "Gym Member Level 3",
    "Class Pass / PPC"
];

const interactiveClassSchedule = [
    {
        day: "Monday",
        name: "Beginner Dance",
        time: "6:00 PM",
        level: "Beginner"
    },
    {
        day: "Tuesday",
        name: "Hip-Hop",
        time: "7:00 PM",
        level: "Intermediate"
    },
    {
        day: "Wednesday",
        name: "Strength & Movement",
        time: "6:00 PM",
        level: "All Levels"
    },
    {
        day: "Thursday",
        name: "Contemporary Dance",
        time: "7:00 PM",
        level: "Intermediate"
    },
    {
        day: "Friday",
        name: "Open Studio",
        time: "5:00 PM",
        level: "All Levels"
    },
    {
        day: "Saturday",
        name: "All Levels Dance",
        time: "10:00 AM",
        level: "All Levels"
    },
    {
        day: "Sunday",
        name: "Rest & Recovery",
        time: "—",
        level: "—"
    }
];

/*************************************************
 * FUNCTIONS
 *************************************************/

// Membership selection
function selectMembership(type) {
    selectedMembership = type;
    localStorage.setItem("selectedMembership", type);
    window.location.href = "terp_reserve.html";
}

// Load selected membership on reserve page
function loadSelectedMembership() {
    const display = document.getElementById("selectedMembershipDisplay");
    const savedMembership = localStorage.getItem("selectedMembership");

    if (display && savedMembership) {
        display.textContent = savedMembership;
    }
}

// Handle membership form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please complete all required fields.");
    } else {
        alert(
            `Thank you, ${name}! Your membership request for ${localStorage.getItem("selectedMembership")} has been received.`
        );
        event.target.reset();
        localStorage.removeItem("selectedMembership");
    }
}

// Interactive calendar loader
function loadCalendar() {
    const calendar = document.getElementById("calendar");
    if (!calendar) return;

    interactiveClassSchedule.forEach(item => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");

        dayDiv.innerHTML = `
            <strong>${item.day}</strong>
            <div class="calendar-details">
                <p><strong>Class:</strong> ${item.name}</p>
                <p><strong>Time:</strong> ${item.time}</p>
                <p><strong>Level:</strong> ${item.level}</p>
            </div>
        `;

        dayDiv.addEventListener("click", () => {
            dayDiv.classList.toggle("active");
        });

        calendar.appendChild(dayDiv);
    });
}

/*************************************************
 * LOOPS (Demonstration)
 *************************************************/
membershipOptions.forEach(option => {
    console.log("Available membership:", option);
});

/*************************************************
 * EVENT HANDLING
 *************************************************/
document.addEventListener("DOMContentLoaded", () => {
    loadSelectedMembership();
    loadCalendar();

    const form = document.getElementById("membershipForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});
