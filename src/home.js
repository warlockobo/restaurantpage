export default function loadHome() {
    const content = document.getElementById('content');
    
    // Create main container
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home-content';
    
    // Create restaurant name
    const title = document.createElement('h1');
    title.textContent = 'Amazing Restaurant';
    title.className = 'restaurant-title';
    
    // Create tagline
    const tagline = document.createElement('p');
    tagline.textContent = 'The best dining experience in town';
    tagline.className = 'tagline';
    
    // Create description
    const description = document.createElement('p');
    description.textContent = 'Welcome to our restaurant where we serve delicious food made with fresh, local ingredients. Come and experience our amazing menu!';
    description.className = 'description';
    
    // Append elements to home div
    homeDiv.appendChild(title);
    homeDiv.appendChild(tagline);
    homeDiv.appendChild(description);
    
    // Clear existing content and append new content
    content.innerHTML = '';
    content.appendChild(homeDiv);
} 