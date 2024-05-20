import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderImageGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let query = '';
let page = 1;

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search query cannot be empty',
    });
    return;
  }
  page = 1;
  gallery.innerHTML = '';
  await fetchImagesAndRender();
}

async function fetchImagesAndRender() {
  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try again!',
      });
      return;
    }
    const markup = renderImageGallery(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
}
