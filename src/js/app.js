// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('py-5', 'bg-transparent');
    navbar.classList.add('py-3', 'bg-black/80', 'backdrop-blur-md');
  } else {
    navbar.classList.add('py-5', 'bg-transparent');
    navbar.classList.remove('py-3', 'bg-black/80', 'backdrop-blur-md');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Tabs functionality
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    // Remove active class from all triggers
    tabTriggers.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked trigger
    trigger.classList.add('active');
    
    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show the corresponding tab content
    const tabId = trigger.getAttribute('data-tab');
    document.getElementById(`${tabId}-tab`).classList.add('active');
  });
});

// Scroll animations
const animateElements = () => {
  const fadeElements = document.querySelectorAll('.animate-fade-in');
  const scaleElements = document.querySelectorAll('.animate-scale-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => observer.observe(el));
  scaleElements.forEach(el => observer.observe(el));
};

// Run animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateElements);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los botones de tabs y contenidos
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Función para activar un tab específico
  function activateTab(tabId) {
    // Desactivar todos los tabs y contenidos primero
    tabTriggers.forEach(trigger => {
      trigger.classList.remove('active');
    });
    
    tabContents.forEach(content => {
      content.classList.remove('active');
      
      // Agregar una clase para animar la salida
      content.classList.add('hidden');
      
      // Remover las animaciones de los elementos internos
      const items = content.querySelectorAll('.animate-scale-in');
      items.forEach(item => {
        item.classList.remove('animate-scale-in');
      });
    });
    
    // Activar el tab seleccionado
    const selectedTrigger = document.querySelector(`[data-tab="${tabId}"]`);
    const selectedContent = document.getElementById(`${tabId}-tab`);
    
    if (selectedTrigger && selectedContent) {
      selectedTrigger.classList.add('active');
      selectedContent.classList.remove('hidden');
      selectedContent.classList.add('active');
      
      // Animar los elementos dentro del tab seleccionado con retraso
      const items = selectedContent.querySelectorAll('.animate-scale-in');
      items.forEach((item, index) => {
        // Reiniciar la animación removiendo y volviendo a agregar la clase
        item.classList.remove('animate-scale-in');
        
        // Agregar un pequeño retraso escalonado para cada elemento
        setTimeout(() => {
          item.classList.add('animate-scale-in');
        }, 50 * index);
      });
    }
  }
  
  // Agregar event listeners a los botones de tabs
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      activateTab(tabId);
    });
  });
  
  // Activar el primer tab por defecto (frontend)
  activateTab('frontend');
});

// Agregar estas clases CSS al proyecto
// Puedes añadir esto a tu archivo CSS existente
document.head.insertAdjacentHTML('beforeend', `
<style>
  .tab-content {
    display: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .tab-content.active {
    display: grid;
    opacity: 1;
    transform: translateY(0);
    animation: fadeIn 0.4s ease forwards;
  }
  
  .tab-content.hidden {
    display: none;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-scale-in {
    animation: scaleIn 0.4s ease forwards;
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
`);