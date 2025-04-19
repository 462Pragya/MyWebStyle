console.log("JavaScript file loaded on landing page.");
// window.onscroll = function () { stickyNav() };

// const navbar = document.querySelector("header");
// const sticky = navbar.offsetTop;

// function stickyNav() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }
// document.getElementById("menuicon").addEventListener("click", function () {
//     var dropdownMenu = document.getElementById("dropdown-menu");
//     dropdownMenu.classList.toggle("active");
// });
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
const heroSection = document.querySelector(".hero");
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

// Get all offer items and indicators
const offerItems = document.querySelectorAll('.offer-item');
const container = document.querySelector('.what-we-offer-container');

// Add click event to each indicator inside offer-item
offerItems.forEach((item, index) => {
    const indicators = item.querySelectorAll('.horizontal-indicator .line');

    indicators.forEach((line, lineIndex) => {
        line.addEventListener('click', () => {
            // Scroll to the respective offer
            container.scrollTo({
                left: lineIndex * container.offsetWidth,
                behavior: 'smooth'
            });

            // Update active indicator for each offer
            offerItems.forEach(item => {
                const allLines = item.querySelectorAll('.horizontal-indicator .line');
                allLines.forEach(ind => ind.classList.remove('active'));
            });

            indicators.forEach(ind => ind.classList.remove('active'));
            line.classList.add('active');
        });
    });
});

// Sync indicator with scrolling
container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollLeft / container.offsetWidth;

    offerItems.forEach((item, index) => {
        const indicators = item.querySelectorAll('.horizontal-indicator .line');
        if (Math.round(scrollPosition) === index) {
            indicators.forEach(ind => ind.classList.remove('active'));
            item.querySelectorAll(`.horizontal-indicator .line[data-index="${index}"]`)
                .forEach(line => line.classList.add('active'));
        }
    });
});


