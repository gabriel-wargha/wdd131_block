const menuButton = document.querySelector('.menu-button');

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {

  const clicked = event.target;
  const url = new URL(clicked.src);
  const parts = url.pathname.split('/');
  const filename = parts.pop();
  const [name, ext] = filename.split('.');
  const fullImagePath = `${url.origin}${parts.join('/')}/${name}-full.${ext}`;
  const template = viewerTemplate(fullImagePath, clicked.alt);
  document.body.insertAdjacentHTML('afterbegin', template);
  
  // add a listener to the clssose button (X) that calls a function called closeView
  const close = document.querySelector('.close-viewer');
  close.addEventListener('click', closeViewer);
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
function closeViewer() {
  const viewer = document.querySelector('.viewer');
  viewer.remove();
}
