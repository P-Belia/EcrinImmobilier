// scripts.js

// Exemple d'ajout d'un menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
  
    // Créer un bouton de menu pour les petits écrans
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.classList.add('menu-button');
    document.querySelector('.nav-content').insertBefore(menuButton, navLinks);
  
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      menuButton.classList.toggle('open');
    });
  });
  