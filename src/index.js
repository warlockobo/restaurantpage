import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Load home page by default
loadHome();

// Set up event listeners for tab switching
document.getElementById('home-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('contact-btn').addEventListener('click', loadContact);

console.log('Restaurant page loaded!'); 