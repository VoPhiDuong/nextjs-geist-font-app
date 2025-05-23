// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

document.querySelectorAll('.email-signup').forEach(form => {
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!input.value) {
            alert('Please enter an email address.');
            input.focus();
            return;
        }

        if (!validateEmail(input.value)) {
            alert('Please enter a valid email address.');
            input.focus();
            return;
        }

        // Here you would typically handle the form submission
        alert('Thank you for your interest in Netflix!');
        input.value = '';
    });
});

// Language selector functionality
document.querySelectorAll('.language-selector select').forEach(select => {
    select.addEventListener('change', (e) => {
        // Here you would typically handle language change
        console.log('Selected language:', e.target.value);
    });
});
