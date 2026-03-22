// This function makes sure the HTML is fully loaded before the script runs
document.addEventListener('DOMContentLoaded', function() {

    // 1. SELECTING THE ELEMENTS
    // We grab the form by its ID so we can "listen" to it
    const myForm = document.getElementById('contactForm');

    // 2. HANDLING THE FORM SUBMIT
    if (myForm) {
        myForm.addEventListener('submit', function(event) {
            
            // This line stops the page from reloading/refreshing
            event.preventDefault();

            // Find the button inside the form so we can change the text
            const submitBtn = myForm.querySelector('button');
            
            // Give the user some feedback so they know it's working
            submitBtn.textContent = 'Sending...';
            submitBtn.style.opacity = '0.5';
            submitBtn.style.cursor = 'not-allowed';

            // We use a "setTimeout" to pretend the message is being sent to a server
            // 1500 means 1.5 seconds
            setTimeout(function() {
                
                // Instead of a boring alert, we swap the form for a nice message
                myForm.innerHTML = `
                    <div style="text-align: center; padding: 30px; border: 2px solid #6366f1; border-radius: 15px;">
                        <h3 style="color: #6366f1; margin-bottom: 10px;">Success!</h3>
                        <p>Thanks for reaching out. We'll get back to you soon!</p>
                    </div>
                `;
                
                console.log("Form submitted successfully!");
            }, 1500);
        });
    }

    // 3. SMOOTH SCROLLING (Optional but nice)
    // This makes the page slide smoothly when clicking Nav links
    const links = document.querySelectorAll('.nav-links a');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});