// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Carousel from 'js/bootstrap/src/carousel.js'
import Collapse from 'js/bootstrap/src/collapse.js'
import ScrollSpy from 'js/bootstrap/src/scrollspy.js'

export default {
  Carousel,
  Collapse,
  ScrollSpy,
}

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const masonryGrid = document.querySelector(".masonry-grid");
    if (masonryGrid) {
        var msnry = new Masonry(masonryGrid, {
            itemSelector: ".masonry-grid-item",
            columnWidth: ".masonry-grid-item-3",
            percentPosition: true,
            transitionDuration: 300,
            horizontalOrder: true,
        });
        imagesLoaded(masonryGrid).on("progress", function () {
            msnry.layout();
        });
    }

});
