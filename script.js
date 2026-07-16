// Ye script.js file landing page ke liye hai
// Yahan aap interactive elements aur client-side functionality add kar sakte hain.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page script loaded successfully!');

    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
