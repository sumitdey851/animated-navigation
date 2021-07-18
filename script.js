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
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        // Animate Out - Overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < 5; i++) {
    menuItems[i].addEventListener('click', toggleNav);
};

