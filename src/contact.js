export default function loadContact() {
    const content = document.getElementById('content');
    
    // Create main container
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-content';
    
    // Create contact title
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.className = 'contact-title';
    
    // Create contact information
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    
    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Phone:</strong> (555) 123-4567';
    
    const email = document.createElement('p');
    email.innerHTML = '<strong>Email:</strong> info@amazingrestaurant.com';
    
    const address = document.createElement('p');
    address.innerHTML = '<strong>Address:</strong> 123 Main Street, City, State 12345';
    
    const hours = document.createElement('p');
    hours.innerHTML = '<strong>Hours:</strong> Monday - Sunday: 11:00 AM - 10:00 PM';
    
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    contactInfo.appendChild(address);
    contactInfo.appendChild(hours);
    
    // Append elements to contact div
    contactDiv.appendChild(title);
    contactDiv.appendChild(contactInfo);
    
    // Clear existing content and append new content
    content.innerHTML = '';
    content.appendChild(contactDiv);
} 