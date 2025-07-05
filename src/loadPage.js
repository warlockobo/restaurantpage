export default function loadPage() {
    const content = document.getElementById('content');
    // Clear any existing content (for safety)
    content.innerHTML = '';

    // Example: Add a welcome message and some structure
    const welcome = document.createElement('h1');
    welcome.textContent = 'Welcome to Our Restaurant!';
    content.appendChild(welcome);

    const description = document.createElement('p');
    description.textContent = 'Enjoy the best food in town.';
    content.appendChild(description);
} 