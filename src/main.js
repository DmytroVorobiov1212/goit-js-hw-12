import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getSearch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let saveQuery = '';
let refreshPage;
let perPage;
let currentPage = 1;
let totalHits;

loader.style.display = 'none';

form.addEventListener('submit', onSearch);

async function onSearch(evt) {
    evt.preventDefault()
    gallery.innerHTML = '';

    loader.style.display = 'block';

    saveQuery = evt.target.elements.query.value.trim();
    currentPage = 1;

    if (saveQuery === '') {
        return iziToast.info({
            title: 'Hello',
            message: 'Please enter search text!',
        }),
            loader.style.display = 'none',
            form.reset()
    }


    try {
        const resp = await getSearch(saveQuery, currentPage)

        gallery.insertAdjacentHTML("beforeend", createMarkup(resp.data.hits));
        totalHits = resp.data.totalHits;
        console.log(totalHits);
        

        if (!resp.data.hits.length) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            }),
                loader.style.display = 'none';
            form.reset();
            return;
        }

        loader.style.display = 'none';

        refreshPage = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
        });
        refreshPage.refresh();
        checkBtnStatus();
    } catch (err) {

        loader.style.display = 'none';

        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later!',
        });

    };
    form.reset();
}

loadMoreBtn.addEventListener('click', loadBtnSearch);

async function loadBtnSearch() {
    currentPage += 1;

    const resp = await getSearch(saveQuery, currentPage)

    gallery.insertAdjacentHTML("beforeend", createMarkup(resp.data.hits));
}

function showLoadMoreBtn() {
    loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
    loadMoreBtn.classList.add('hidden');
}

function checkBtnStatus() {
    const maxPage = Math.ceil(totalHits / perPage);

    if (currentPage >= maxPage) {
        hideLoadMoreBtn();
    } else {
        showLoadMoreBtn();
    }
}