const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
// Get Menu items
const menuItems = [];
for (let i = 0; i < 5; i++) {
    menuItems[i] = document.getElementById(`nav-${i+1}`);
};
console.log(menuItems);

function toggleNav() {
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change');
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < 5; i++) {
    menuItems[i].addEventListener('click', toggleNav);
};

