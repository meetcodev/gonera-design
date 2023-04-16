import React, { useState, useCallback } from "react";
import adv1 from "../../../public/img/portfolio/portfolio/1.jpg";
import adv2 from "../../../public/img/portfolio/portfolio/2.jpg";
import adv3 from "../../../public/img/portfolio/portfolio/3.jpg";
import adv5 from "../../../public/img/portfolio/portfolio/5.jpg";
import adv7 from "../../../public/img/portfolio/portfolio/7.jpg";
// import ImageViewer from "react-simple-image-viewer";
// import "../Album.css";
import Image from "next/image";
import { Item, PhotoSwipeLightboxStub, PhotoSwipeLightbox } from "react-photoswipe-gallery";

const options = {
  dataSource: [

    // simple image
    {
      src: '/adv3',
      width: 1620,
      height: 1080,
      alt: 'test image 1'
    },

    {
      src: '/adv2',
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },

    // responsive image
    {
      srcset: '/adv5 1500w, /adv5 1200w, adv5 600w',
      src: 'adv5/?text=1500x1000',
      width: 1500,
      height: 1000,
      alt: 'test image 3',
    },

    // HTML slide
    {
      html: '<div class="custom-html-slide">This is custom HTML slide. <a href="http://example.com" target="_blank" rel="nofollow">Test Link</a>.</div>'
    }

  ],
  showHideAnimationType: 'none',
//   pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
};


function TestProjectGalleryItem2({ isOpenProjectGallery, options }) {
    
    const lightbox = () => { new PhotoSwipeLightbox(options)};


    lightbox.init();
    return (

        <button onClick={() =>    lightbox.loadAndOpen(1) } >
dsad
    </button>
        )

}

export default TestProjectGalleryItem2;
