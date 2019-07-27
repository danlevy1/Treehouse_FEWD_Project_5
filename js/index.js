// Set up Lightcase
$(document).ready(() => {
    // Links that open Lightcase
    $('a[data-rel^=lightcase').lightcase();
});

// Collection of all photos
const photos = document.querySelectorAll('.lightbox-link');

// Search functionality
document.querySelector('#search-box').addEventListener('keyup', (event) => {
    // Gets search bar text
    const searchText = event.target.value;

    // Checks each photo's caption against the search text
    photos.forEach(function (photo) {
        // Case insensitive search on 'data-lc-caption' attribute
        if (photo.getAttribute('data-lc-caption').search(new RegExp(searchText, 'i')) === -1) {
            // Hide photo and remove it from the Lightcase collection
            photo.style.display = 'none';
            photo.setAttribute('data-rel', 'lightcase');
        } else {
            // Show photo and add it to the Lightcase collection
            photo.style.display = 'block';
            photo.setAttribute('data-rel', 'lightcase:myCollection');
        }
    });
});