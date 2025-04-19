console.log("JavaScript file loaded on landing page.");
//color change navbar
document.addEventListener("DOMContentLoaded", function () {
    // Select the header
    const header = document.querySelector('header');



    // Function to handle when a section is in view
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Get the background color of the visible section
                const bgColor = getComputedStyle(entry.target).backgroundColor;
                // Apply the background color to the header
                header.style.backgroundColor = bgColor;

            }
        });
    };

    // Options for the observer
    const options = {
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each section
    document.querySelectorAll('section').forEach(section => {

        observer.observe(section);
    });
});
// Get the navbar
const navbar = document.getElementById("NAVBAR");

// Get the height of the hero section
const heroSection = document.querySelector(".herolanding");
const heroHeight = heroSection.offsetHeight;

// Add scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > heroHeight) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});



const menuIcon = document.getElementById("menuicon");
// Open the side panel
function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
    document.body.classList.add("panel-open");
    menuIcon.classList.add('rotate');
}

// Close the side panel
function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
    document.body.classList.remove("panel-open");
    menuIcon.classList.remove('rotate');
}

// Add event listener to the menu icon to open the side panel
//document.getElementById("menuicon").addEventListener("click", openNav);


menuIcon.addEventListener("click", () => {
    console.log("Menu icon clicked!");
    const sidePanel = document.getElementById("sidePanel");
    if (sidePanel.style.width === "250px") {
        closeNav(); // Close if the panel is already open
    } else {
        openNav(); // Open the panel
    }
});
// Use addEventListener to handle the scroll event
window.addEventListener("scroll", function () {
    //console.log("Scrolling..."); // This should log when scrolling
    scrollFunction();
});
function scrollFunction() {
    const btn = document.querySelector(".backtotopbtn");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    //console.log("Scroll position:", scrollTop); // Check scroll position

    // Show button if scrolled more than 100px
    if (scrollTop > 200) {
        btn.style.display = "block"; // Show the button
    } else {
        btn.style.display = "none"; // Hide the button
    }
}
// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//query form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('thoughts').value,
    };

    // Log the form data to the console (or handle it as needed)
    console.log('Form submitted:', formData);

    // Optionally, you can clear the form after submission
    document.getElementById('queryForm').reset();

    // Show a success message (optional)
    alert('Thank you for your query! We will get back to you shortly.');

    return false; // Prevent the default action
}
