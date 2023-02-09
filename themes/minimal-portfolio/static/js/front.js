"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* ===============================================================
		GLIGHTBOX
	=============================================================== */
    const lightbox = GLightbox({
        touchNavigation: true,
    });

    /* ===============================================================
		MASONRY WITH IMAGES LOADED
	=============================================================== */
    const masonryGrid = document.querySelector(".masonry-grid");
    if (masonryGrid) {
        console.log("Hallo");
        var msnry = new Masonry(masonryGrid, {
            itemSelector: ".masonry-grid-item",
            columnWidth: ".masonry-grid-sizer",
            percentPosition: false,
            transitionDuration: 300,
            horizontalOrder: true,
        });
        imagesLoaded(masonryGrid).on("progress", function () {
            msnry.layout();
        });
    }

});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
