function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

// Smooth scroll to a section when a header link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('header nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error(`Section with id "${targetId}" not found.`);
            }
        });
    });
});