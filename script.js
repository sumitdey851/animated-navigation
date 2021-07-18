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
        // Animate In - Nav Items
        for (let i = 0; i < 5; i++) {
            menuItems[i].classList.remove(`slide-out-${i+1}`);
            menuItems[i].classList.add(`slide-in-${i+1}`);
        };
    } else {
        // Animate Out - Overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        // Animate Out - Nav Items
        for (let i = 0; i < 5; i++) {
            menuItems[i].classList.remove(`slide-in-${i+1}`);
            menuItems[i].classList.add(`slide-out-${i+1}`);
        };
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
for (let i = 0; i < 5; i++) {
    menuItems[i].addEventListener('click', toggleNav);
};

