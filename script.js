document.addEventListener("DOMContentLoaded", function() {
    // 1. FAQ ACCORDION LOGIC
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const item = this.parentElement;
            
            // Toggle active state on the clicked item
            item.classList.toggle("active");
            
            // Close other open questions automatically
            faqQuestions.forEach(otherQuestion => {
                const otherItem = otherQuestion.parentElement;
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    // 2. CONTACT/APPLICATION FORM SUBMISSION SAFETY CHECK
    const contactForm = document.querySelector(".contact-form");
    
    // The if-statement prevents code crashes if a page doesn't have the form
    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            setTimeout(() => {
                alert("Thank you for applying to NeuroForge. We'll contact you shortly.");
            }, 100);
        });
    }
});
