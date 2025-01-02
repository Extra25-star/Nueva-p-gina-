document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Scroll Suave a las Secciones
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  // Ajuste para el header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animar la aparición de secciones al hacer scroll
    const sections = document.querySelectorAll('main > section');
    const observerOptions = {
        root: null,
        threshold: 0.3,  // Porcentaje del elemento visible
        rootMargin: "-70px 0px 0px 0px", // Ajuste para el header
    }

    const sectionObserver = new IntersectionObserver((entries, observer) =>{
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
              }
          })
    }, observerOptions)
    
    sections.forEach(section => {
       section.classList.add('hide');
       sectionObserver.observe(section)
    })

    // 3. Mostrar/Ocultar el menú en dispositivos móviles
    const header = document.querySelector('header')
    let headerOpen = false;
    header.addEventListener('click', (e)=>{
      if(e.target.tagName === "H1" || e.target.tagName === "NAV" && window.innerWidth <= 768) {
         const nav = header.querySelector('nav')
         if(headerOpen){
           nav.style.display = "none";
          
        } else {
            nav.style.display = "flex";
          }
         headerOpen = !headerOpen
      }
    })
});
