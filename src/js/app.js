document.addEventListener('DOMContentLoaded', function() {
  menuHamburguesa();
  carruselProductos();
  scrollNav();
  resaltarEnlace();
  navegacionFija();
  //crearGaleria();
});

function navegacionFija() {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero'); // O la sección que esté justo debajo del header

  if (!header || !hero) return; // Si no existen, no ejecutes la función

  window.addEventListener('scroll', function() {
    // Si la parte superior de la sección "hero" está fuera de la pantalla (es decir, ya hiciste scroll):
    if (hero.getBoundingClientRect().top < 0) {
      header.classList.add('fixed'); // Agrega la clase "fixed" al header
    } else {
      header.classList.remove('fixed'); // Quita la clase "fixed" del header
    }
  });
}


//Por si quieres crear una galería de imágenes
/*
function crearGaleria() {

  const CANTIDAD_IMAGENES = 16
  const galeria = document.querySelector('.galeria-imagenes')

  for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
      const imagen = document.createElement('PICTURE') 
      imagen.innerHTML = `
    <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
`;
      // Event Handler
      imagen.onclick = function() {
          mostrarImagen(i)
      }
      
      galeria.appendChild(imagen)
  }
}
*/


// Por si quieres mostrar una imagen en un modal al hacer clic en ella
/*
function mostrarImagen(i) {
  const imagen = document.createElement('PICTURE')
 imagen.innerHTML = `
    <source srcset="build/img/ga

        <section id="contacto">
            <h2>Contáctanos</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>

        <section id="ubicacion">
            <h2>Ubicación</h2>
            <div class="mapa-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481819.8627539268!2d-99.31428142334357!3d19.359725081095416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2acce4173e5%3A0x72a4a2ab5da4914d!2sCEDECOPY!5e0!3m2!1ses!2smx!4v1748885180766!5m2!1ses!2smx" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    aria-label="Mapa de ubicación de CEDECOPY"></iframe>
                <h6>Octavio Sentíes Local 2, 2da Amp Santiago Acahualtepec, Iztapalapa, 09608 Ciudad de México, CDMX</h6>
            </div>
        </section>
    </main>
llery/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
`;

  // Generar Modal
  const modal = document.createElement('DIV')
  modal.classList.add('modal')
  modal.onclick = cerrarModal

  // Botón cerrar modal
  const cerrarModalBtn = document.createElement('BUTTON')
  cerrarModalBtn.textContent = 'X'
  cerrarModalBtn.classList.add('btn-cerrar')
  cerrarModalBtn.onclick = cerrarModal

  modal.appendChild(imagen)
  modal.appendChild(cerrarModalBtn)

  // Agregar al HTML
  const body = document.querySelector('body')
  body.classList.add('overflow-hidden')
  body.appendChild(modal)
}
*/


  nav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      body.classList.remove('menu-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  function carruselProductos() {
    const carrusel = document.querySelector('.productos-carrusel');
    if (!carrusel) return;
  
    const btnPrev = document.querySelector('.carrusel-btn.prev');
    const btnNext = document.querySelector('.carrusel-btn.next');
  
    btnPrev?.addEventListener('click', function() {
      carrusel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    btnNext?.addEventListener('click', function() {
      carrusel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  
    // Auto scroll cada 3 segundos (3000 milisegundos)
    setInterval(() => {
      carrusel.scrollBy({ left: 300, behavior: 'smooth' });
    }, 3000);
  }
  
// Scroll suave en navegación
function scrollNav() {
  const navLinks = document.querySelectorAll('#main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Resalta el enlace activo según scroll
function resaltarEnlace() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('#main-nav a');

  window.addEventListener('scroll', function() {
    let actual = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        actual = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + actual) {
        link.classList.add('active');
      }
    });
  });
}


function menuHamburguesa(){
  const menuBtn = document.getElementById('menu-button');
  const nav = document.getElementById('main-nav');
  const body = document.body;
  if (!menuBtn || !nav) return; // Si no existen, no ejecutes la función
  
  menuBtn.addEventListener('click', function() {
    const abierto = nav.classList.toggle('open');
    body.classList.toggle('menu-open', abierto);
    menuBtn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

}
//hasta que cambia el menu fixed es que cambia esto


