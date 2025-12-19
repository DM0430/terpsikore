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

/*************************************************
 * FUNCTIONS
 *************************************************/

// Called when user selects a membership
function selectMembership(type) {
    selectedMembership = type;

    // Save to localStorage so other pages can access it
    localStorage.setItem("selectedMembership", type);

    // Redirect to membership form
    window.location.href = "terp_membership.html";
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

    // SELECTION STATEMENT (if/else)
    if (name === "" || email === "") {
        alert("Please complete all required fields.");
    } else {
        alert(
            "Thank you, " +
            name +
            "! Your membership request for " +
            localStorage.getItem("selectedMembership") +
            " has been received."
        );

        // Clear form
        event.target.reset();
        localStorage.removeItem("selectedMembership");
    }
}

/*************************************************
 * LOOPS
 *************************************************/

// Loop through membership options (demonstration)
membershipOptions.forEach(option => {
    console.log("Available membership:", option);
});

/*************************************************
 * EVENT HANDLING & DOM MANIPULATION
 *************************************************/

document.addEventListener("DOMContentLoaded", () => {
    loadSelectedMembership();

    const form = document.getElementById("membershipForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});
