function toggleMenu() {
    var menu = document.getElementById("myMenu");
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';}
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('.checkbox');
        const menuItems = document.querySelector('.menu-items');
    
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            menuItems.classList.add('show');
          } else {
            menuItems.classList.remove('show');
          }
        });
      });