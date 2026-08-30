/* =========================================================
   MAGIC POP — datos del sitio
   Edita aquí los textos, precios, links de redes e imágenes.
   Para las imágenes: pon el archivo dentro de la carpeta
   "images/" y escribe la ruta, ej: "images/figura-01.jpg".
   Si dejas "" (vacío), se muestra un recuadro de "+ agregar imagen".
   ========================================================= */

const datos = {
  existencia: [
    { titulo: "Posters", imagen: "images/poster.jpg" },
    { titulo: "Figuras", imagen: "images/fig.jpg" },
    { titulo: "Gorras", imagen: "images/gorr.jpg" }
  ],

  redes: [
    { nombre: "Instagram", usuario: "@magicpop", url: "https://www.instagram.com/magic_pop85?igsi=MXNrMWlieHprYzZoeg%3D%3D", imagen: "images/ig.png" },
    { nombre: "TikTok", usuario: "@magicpop", url: "https://www.tiktok.com/@luismagicpop?_r=1&_t=ZS-99J31QEc3aX", imagen: "images/tiktok.png" },
    { nombre: "Facebook", usuario: "Magic Pop", url: "https://www.facebook.com/luismagicpop?rdid=L4bPgMeTmi74O8aP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bov5RwWBJ%2F#", imagen: "images/fb.png" },
    { nombre: "WhatsApp", usuario: "Escríbenos", url: "https://wa.me/+525560709355", imagen: "images/wts.png" }
  ],

  gorras: [
    { titulo: "Takashi Murakami", precio: "$850", imagen: "images/gorras/roja NY.png" },
    { titulo: "Rebel", precio: "$850", imagen: "images/gorras/paleacate.png" },
    { titulo: "Shifu X BAEZ", precio: "$850", imagen: "images/gorras/astBoy.png" },
    { titulo: "AB'z", precio: "$650", imagen: "images/gorras/AB.png" },
    { titulo: "Yoshi", precio: "$850", imagen: "images/gorras/yshi.png" },
    { titulo: "CAMO", precio: "$650", imagen: "images/gorras/Camus.png" },
    { titulo: "Ultima cena", precio: "$850", imagen: "images/gorras/ultima.png" },
    { titulo: "Galaxy", precio: "850", imagen: "images/gorras/galaxi.png" },
    { titulo: "Orientral Tumbado", precio: "$850", imagen: "images/gorras/roja.png" },
    { titulo: "Sad Boys", precio: "$850", imagen: "images/gorras/sadboy.png" }
  ],

  postres: [
    { titulo: "Optimus Prime MDLX", precio: "$4500", imagen: "images/figuras/optimus.png" },
    { titulo: "Geminis", precio: "$3500", imagen: "images/figuras/geminis.jpg" },
    { titulo: "Gohan SS2", precio: "$2500", imagen: "images/figuras/gohan.jpg" },
    { titulo: "DLX Hulkbuster", precio: "$6000", imagen: "images/figuras/image.png" }
  ],

  proximamente: [
    { titulo: "Spiderman BLOKEES", texto: "Llega en septiembre", imagen: "images/figuras/spider.png" },
    { titulo: "Kurama BLOKEES", texto: "Muy pronto", imagen: "images/figuras/kurama.webp" },
    { titulo: "Iron-Spider ZDtoys", texto: "Mas pronto de lo que crees", imagen: "images/figuras/ironspider.webp" }
  ],

  contacto: {
    ubicacion: "Plaza jardin, Piso 2, Nezahualcoyotl",
    telefono: "+52 55 6070 9355",
    whatsapp: "https://wa.me/525560709355",
    horario: "Lun - Dom · 11:00 AM - 9:00 PM"
  }
};

/* =========================================================
   Render — no necesitas tocar nada de aquí para abajo
   ========================================================= */

function frameHTML(imagen, textoAlt) {
  if (imagen) {
    return `<div class="card__frame"><img src="${imagen}" alt="${textoAlt}" loading="lazy"></div>`;
  }
  return `<div class="card__frame"><span class="card__frame-placeholder">+ agregar<br>imagen</span></div>`;
}

function tarjetaExistencia(item) {
  return `
    <article class="card">
      ${frameHTML(item.imagen, item.titulo)}
      <p class="card__title">${item.titulo}</p>
    </article>`;
}

function tarjetaRed(item) {
  return `
    <article class="card card--red">
      ${frameHTML(item.imagen, item.nombre)}
      <p class="card__title">${item.nombre}</p>
      <a class="card__handle" href="${item.url}" target="_blank" rel="noopener">${item.usuario}</a>
    </article>`;
}

function tarjetaProducto(item) {
  return `
    <article class="card">
      ${frameHTML(item.imagen, item.titulo)}
      <p class="card__title">${item.titulo}</p>
      <span class="tag-price">${item.precio}</span>
    </article>`;
}

function tarjetaProximamente(item) {
  return `
    <article class="card card--soon">
      ${frameHTML(item.imagen, item.titulo)}
      <p class="card__title">${item.titulo}</p>
      <p class="card__desc">${item.texto}</p>
    </article>`;
}

function renderGrid(containerId, items, plantilla) {
  const el = document.getElementById(containerId);
  if (!el || !items) return;
  el.innerHTML = items.map(plantilla).join("");
}

function renderContacto(contacto) {
  if (!contacto) return;
  document.getElementById("footer-ubicacion").textContent = contacto.ubicacion || "—";
  document.getElementById("footer-telefono").textContent = contacto.telefono || "—";
  document.getElementById("footer-horario").textContent = contacto.horario || "—";
  const wsp = document.getElementById("footer-whatsapp");
  if (contacto.whatsapp) wsp.href = contacto.whatsapp;
}

function initCarousel() {
  const track = document.getElementById("carousel-gorras");
  const prev = document.getElementById("gorras-prev");
  const next = document.getElementById("gorras-next");
  if (!track || !prev || !next) return;
  const scrollAmount = 240;
  prev.addEventListener("click", () => track.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: scrollAmount, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("grid-existencia", datos.existencia, tarjetaExistencia);
  renderGrid("grid-redes", datos.redes, tarjetaRed);
  renderGrid("carousel-gorras", datos.gorras, tarjetaProducto);
  renderGrid("grid-postres", datos.postres, tarjetaProducto);
  renderGrid("grid-proximamente", datos.proximamente, tarjetaProximamente);
  renderContacto(datos.contacto);
  initCarousel();
});
