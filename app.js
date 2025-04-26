// Create a new file called app.js and link it in your HTML files
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
        window.compoundInterest = function() {
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
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .feature-box, .team-card');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if(position.top < window.innerHeight * 0.8) {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }
        });
    };
    
    // Set initial state for elements
    const elements = document.querySelectorAll('.card, .feature-box, .team-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
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

