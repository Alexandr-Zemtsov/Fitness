const video = document.querySelector('.video');
const buttonPlay = document.querySelector('.video__button-play');
let iframe = {};

const createIframe = () => {
  iframe = document.createElement('iframe');

  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('src', `${video.dataset.video}?autoplay=1`);
  return iframe;
};

const replacePicture = () => {
  createIframe();
  video.innerHTML = '';
  video.appendChild(iframe);
};

buttonPlay.addEventListener('click', (evt) => {
  evt.preventDefault();
  replacePicture();
});
