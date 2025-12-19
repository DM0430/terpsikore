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
    { day: "Monday", name: "Beginner Dance", time: "6:00 PM", level: "Beginner" },
    { day: "Tuesday", name: "Hip-Hop", time: "7:00 PM", level: "Intermediate" },
    { day: "Wednesday", name: "Strength & Movement", time: "6:00 PM", level: "All Levels" },
    { day: "Thursday", name: "Contemporary Dance", time: "7:00 PM", level: "Intermediate" },
    { day: "Friday", name: "Open Studio", time: "5:00 PM", level: "All Levels" },
    { day: "Saturday", name: "All Levels Dance", time: "10:00 AM", level: "All Levels" },
    { day: "Sunday", name: "Rest & Recovery", time: "—", level: "—" }
];

/*************************************************
 * FUNCTIONS
 *************************************************/

// Membership selection (from membership page)
function selectMembership(type) {
    selectedMembership = type;
    localStorage.setItem("selectedMembership", type);
    window.location.href = "terp_membership.html";
}

// Load selected membership into form input
function loadSelectedMembershipIntoForm() {
    const membershipInput = document.getElementById("membership");
    const savedMembership = localStorage.getItem("selectedMembership");

    if (membershipInput && savedMembership) {
        membershipInput.value = savedMembership;
    }
}

// Handle membership form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName")?.value.trim();
    const lastName = document.getElementById("lastName")?.value.trim();
    const email = document.getElementById("email")?.value.trim();

    // SELECTION STATEMENT
    if (!firstName || !lastName || !email) {
        alert("Please complete all required fields before submitting.");
        return;
    }

    // Clear stored membership
    localStorage.removeItem("selectedMembership");

    // Redirect to thank-you page
    window.location.href = "thankyou.html";
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
 * TOUR FORM SUBMISSION
 *************************************************/

function handleTourSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;

    // SELECTION STATEMENT
    if (!name || !email || !date) {
        alert("Please complete all required fields before scheduling your tour.");
        return;
    }

    // Redirect to confirmation page
    window.location.href = "tour-confirmation.html";
}


/*************************************************
 * LOOPS (Requirement Demonstration)
 *************************************************/
membershipOptions.forEach(option => {
    console.log("Available membership:", option);
});

/*************************************************
 * EVENT HANDLING
 *************************************************/
document.addEventListener("DOMContentLoaded", () => {
    loadSelectedMembershipIntoForm();
    loadCalendar();

    const form = document.getElementById("membershipForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

     const tourForm = document.getElementById("tourForm");
    if (tourForm) {
        tourForm.addEventListener("submit", handleTourSubmit);
    }
});


