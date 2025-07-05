export default function loadMenu() {
    const content = document.getElementById('content');
    
    // Create main container
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-content';
    
    // Create menu title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    title.className = 'menu-title';
    
    // Create menu items
    const menuItems = [
        { name: 'Grilled Salmon', price: '$24.99', description: 'Fresh Atlantic salmon with herbs and lemon' },
        { name: 'Beef Burger', price: '$16.99', description: 'Juicy beef patty with fresh vegetables' },
        { name: 'Caesar Salad', price: '$12.99', description: 'Crisp romaine lettuce with Caesar dressing' },
        { name: 'Pasta Carbonara', price: '$18.99', description: 'Creamy pasta with bacon and parmesan' }
    ];
    
    // Create menu container
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-items';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.className = 'item-name';
        
        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.className = 'item-price';
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDescription.className = 'item-description';
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
        menuContainer.appendChild(menuItem);
    });
    
    // Append elements to menu div
    menuDiv.appendChild(title);
    menuDiv.appendChild(menuContainer);
    
    // Clear existing content and append new content
    content.innerHTML = '';
    content.appendChild(menuDiv);
} 