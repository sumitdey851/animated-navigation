const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
// Get Menu items
const menuItems = [];
for (let i = 0; i < 5; i++) {
    menuItems[i] = document.getElementById(`nav-${i+1}`);
};

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    menuItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < 5; i++) {
    menuItems[i].addEventListener('click', toggleNav);
};