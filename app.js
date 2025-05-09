// Testimonials image paths
const starPath = 'public/icons/star.svg';
const halfStarPath = 'public/icons/half-star.svg';
const googleIconPath = 'public/testimonials-imgs/google-icon.png';

if (document.getElementById('testimonials'))
    initializeTestimonialsSection();

const animateOnScrollQuery = '.card, .feature-box, .team-card, .testimonial-card';
document.addEventListener('DOMContentLoaded', function () {
    /* ------------------------------------------------------
     * Mobile navigation hamburger setup
     * ----------------------------------------------------*/
    const nav = document.querySelector('nav');

    // Create hamburger button (three stacked spans)
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle navigation');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Insert the hamburger as the last direct child of the nav (before the ul for natural flex order on desktop)
    nav.insertBefore(hamburger, nav.querySelector('ul'));

    // Toggle nav "open" state on click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Close the mobile menu when a nav link is clicked (helps with single-page anchor navigation)
    nav.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            // Keep menu open when clicking "Resources" so its submenu can expand
            if (anchor.id === 'resources-link') return;

            // Only close if we are currently in mobile layout
            if (window.innerWidth <= 768) {
                nav.classList.remove('open');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Update active nav item
                document.querySelectorAll('nav a').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Enhance calculator result display
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    if (calculateButton && resultDiv) {
        // Modify the existing compoundInterest function
        const originalCompoundInterest = window.compoundInterest;
        window.compoundInterest = function () {
            // Call the original function
            originalCompoundInterest();

            // Add animation to the result
            resultDiv.style.animation = 'fadeIn 0.5s ease-out forwards';

            // Add a pulse effect
            setTimeout(() => {
                resultDiv.style.boxShadow = '0 0 0 0 rgba(0, 84, 166, 0.7)';
                resultDiv.style.animation = 'pulse 1.5s infinite';

                // Define the pulse animation
                if (!document.querySelector('#pulseAnimation')) {
                    const style = document.createElement('style');
                    style.id = 'pulseAnimation';
                    style.textContent = `
                        @keyframes pulse {
                            0% { box-shadow: 0 0 0 0 rgba(0, 84, 166, 0.7); }
                            70% { box-shadow: 0 0 0 10px rgba(0, 84, 166, 0); }
                            100% { box-shadow: 0 0 0 0 rgba(0, 84, 166, 0); }
                        }
                    `;
                    document.head.appendChild(style);
                }

                // Remove pulse after 3 seconds
                setTimeout(() => {
                    resultDiv.style.animation = '';
                    resultDiv.style.boxShadow = 'var(--shadow-md)';
                }, 3000);
            }, 100);
        };
    }

    // Animate elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(animateOnScrollQuery);
        elements.forEach(element => {
            const position = element.getBoundingClientRect();

            // Check if element is in viewport
            if (position.top < window.innerHeight * 0.8)
                element.classList.remove('out-of-viewport');
        });
    };

    // Set initial state for elements
    const elements = document.querySelectorAll(animateOnScrollQuery);
    elements.forEach(element => element.classList.add('out-of-viewport'));

    // Run the animation check on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Hamburger menu toggle
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerIcon && navLinks) {
        hamburgerIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Attach the listener after DOMContent so the element exists
document.addEventListener('DOMContentLoaded', () => {
    const resLink = document.getElementById('resources-link');
    if (resLink) resLink.addEventListener('click', handleResourcesClick);
});

// Separate listener for Resources link (handles both desktop + mobile)
function handleResourcesClick(e) {
    // Prevent default (stops any page jump)
    e.preventDefault();

    // If on mobile, toggle a submenu inside the nav instead of the desktop dropdown
    if (window.innerWidth <= 768) {
        const resourcesLink = document.getElementById('resources-link');
        const resourcesItem = resourcesLink.parentElement; // li element

        // Check if submenu already exists
        const existing = resourcesItem.querySelector('.mobile-resources-submenu');
        if (existing) {
            existing.remove();
            return;
        }

        // Build submenu
        const submenu = document.createElement('ul');
        submenu.className = 'mobile-resources-submenu';

        const resources = [
            { text: 'Newsletters', href: 'newsletters.html' },
            { text: 'Compound Interest Calculator', href: 'calculator.html' },
            { text: 'Quarterly Meetings', href: 'meetings.html' },
            { text: 'Tax Resources', href: 'tax-resources.html' },
        ];

        resources.forEach(resource => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = resource.href;
            link.textContent = resource.text;
            li.appendChild(link);
            submenu.appendChild(li);
        });

        resourcesItem.appendChild(submenu);
        return;
    }

    // ---- Desktop behaviour (unchanged) ----
    if (document.getElementById('resources-dropdown') != null) {
        const dropdown = document.getElementById('resources-dropdown');
        if (dropdown.classList.contains('active')) {
            dropdown.style.top = '0px';
            dropdown.classList.remove('active');
            return;
        }
    } else {
        const dropdown = createResourcesDropdown();
        document.querySelector('header').appendChild(dropdown);
    }

    const dropdown = document.getElementById('resources-dropdown');
    dropdown.classList.add('active');
}

function createResourcesDropdown() {
    const dropdown = document.createElement('div');
    const dropdownElements = document.createElement('div');
    dropdown.id = 'resources-dropdown';
    dropdownElements.id = 'resources-dropdown-elements';

    const resources = [
        { text: 'Newsletters', href: 'newsletters.html' },
        { text: 'Compound Interest Calculator', href: 'calculator.html' },
        { text: 'Quarterly Meetings', href: 'meetings.html' },
        { text: 'Tax Resources', href: 'public/docs/2025 Tax Document.pdf' },
    ];

    resources.forEach(resource => {
        const link = document.createElement('a');
        link.href = resource.href;
        link.textContent = resource.text;
        dropdownElements.appendChild(link);
    });

    dropdown.appendChild(dropdownElements);
    return dropdown;
}

function initializeTestimonialsSection() {
    initializeTestimonials();
    initializeGoogleRating();
}

function initializeTestimonials() {
    const testimonials = document.getElementById('testimonials-grid');
    // fetch below from server but hardcoded for now
    const testimonialsData = [
        {stars: 5, name: 'Jean', date: '4/22/2025', review: "I have been extremely happy with dealing with Mark and Trey. They explain things for me since I don't know much about dealing with my retirement. They are very easy to understand answer all my questions-sometimes the same question. Trey goes out of his way to help me and I totally trust him and Mark. I really appreciate them.", },
        {stars: 5, name: 'Navaneeth', date: '4/21/2025', review: "Great wealth management firm in Bentonville. Trey Taylor was patient, professional, and helped me build a solid plan for the future. Highly recommend!", },
        {stars: 5, name: 'Sharon Taylor', 'date': '5/1/2025', review: "Working with them has been a great experience! They are easy to get ahold of when I need their help and always make me feel important as a client. Mark and Trey are great at explaining complicated topics in simple terms I can understand. I trust their team and would highly recommend giving them a call for any of your financial planning or investment needs!", },
    ]

    testimonialsData.forEach(testimonialData => {
        const stars = document.createElement('div');
        stars.className = 'stars';
        while (testimonialData.stars > 0) {
            const starImg = document.createElement('img');
            if (testimonialData.stars >= 0.7) {
                starImg.src = starPath;
                starImg.alt = 'Star';
            }

            else {
                starImg.src = halfStarPath;
                starImg.alt = 'Half star';
            }

            console.log(starImg);

            stars.appendChild(starImg);
            testimonialData.stars--;
        }

        const review = document.createElement('p');
        review.className = 'testimonial-text';
        review.textContent = `"${testimonialData.review}"`;

        const author = document.createElement('p');
        author.className = 'testimonial-author';
        author.textContent = testimonialData.name;

        const date = document.createElement('p');
        date.className = 'testimonial-date';
        date.textContent = testimonialData.date;

        const data = document.createElement('div');
        data.className = 'testimonial-data';
        data.appendChild(author);
        data.appendChild(date);

        const testimonial = document.createElement('div');
        testimonial.classList.add('testimonial-card', 'card-hover');
        testimonial.appendChild(stars);
        testimonial.appendChild(review);
        testimonial.appendChild(data);

        testimonials.append(testimonial);
    });
}

function initializeGoogleRating() {
    // get below from server but hardcoded for now
    let rating = 5;
    let ratingVal = rating;
    const stars = document.createElement('div');
    stars.className = 'stars';
    while (ratingVal > 0) {
        const starImg = document.createElement('img');
        if (ratingVal >= 0.7) {
            starImg.src = starPath;
            starImg.alt = 'Star';
        }

        else {
            starImg.src = halfStarPath;
            starImg.alt = 'Half star';
        }

        console.log(starImg);

        stars.appendChild(starImg);
        ratingVal--;
    }

    const googleRatingText = document.createElement('p');
    googleRatingText.textContent = `${rating.toFixed(1)} star rating`;

    const googleRatingImg = document.createElement('img');
    googleRatingImg.src = googleIconPath;

    const googleRatingSection = document.createElement('div');
    googleRatingSection.id = 'google-rating-info';
    googleRatingSection.appendChild(googleRatingText);
    googleRatingSection.appendChild(googleRatingImg);

    const googleRating = document.getElementById('google-rating');
    googleRating.appendChild(stars);
    googleRating.appendChild(googleRatingSection);
}
