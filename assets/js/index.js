"use strict";

// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Button from 'js/bootstrap/src/button.js'
import Carousel from 'js/bootstrap/src/carousel.js'
import Collapse from 'js/bootstrap/src/collapse.js'
import Dropdown from 'js/bootstrap/src/dropdown.js'
import Offcanvas from 'js/bootstrap/src/offcanvas.js'
import Popover from 'js/bootstrap/src/popover.js'
import ScrollSpy from 'js/bootstrap/src/scrollspy.js'
import Tab from 'js/bootstrap/src/tab.js'
import Toast from 'js/bootstrap/src/toast.js'
import Tooltip from 'js/bootstrap/src/tooltip.js'

export default {
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip
}

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
        var msnry = new Masonry(masonryGrid, {
            itemSelector: ".masonry-grid-item",
            columnWidth: ".masonry-grid-item-3",
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