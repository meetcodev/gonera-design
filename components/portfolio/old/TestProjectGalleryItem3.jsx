import React, { useState, useCallback } from "react";
import adv1 from "../../../public/img/portfolio/portfolio/1.jpg";
import adv2 from "../../../public/img/portfolio/portfolio/2.jpg";
import adv3 from "../../../public/img/portfolio/portfolio/3.jpg";
import adv5 from "../../../public/img/portfolio/portfolio/5.jpg";
import adv7 from "../../../public/img/portfolio/portfolio/7.jpg";
// import ImageViewer from "react-simple-image-viewer";
// import "../Album.css";
import Image from "next/image";
import { Item, PhotoSwipeLightboxStub, Gallery } from "react-photoswipe-gallery";

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
function TestProjectGalleryItem3({ isOpenProjectGallery, src}) {


    
        const img_width = 860;
        const img_height = 620;
        return (
            <div //style={{ width: "300px", }}
            >
            <Gallery style={{ display: "flex", alignItems: "center" }}>
                <Item
                original="https://cdn.pixabay.com/photo/2022/06/22/18/28/deer-7278490_960_720.jpg"
                thumbnail="https://cdn.pixabay.com/photo/2022/06/22/18/28/deer-7278490_960_720.jpg"
                width={img_width}
                height={img_height}
                >
                {({ ref, open }) => (
                    <Image  
                        width={300}
                        height={300}
                        // srl_gallery_image="true"
                        src={src}
                        // src="https://placekitten.com/80/60?image=2"
                        // src={options.dataSource[0]['src']}
                        alt="Childhood232"
                        data-tip
                        data-for="sarna"
                        role="button"
                        ref={ref}
                        onClick={open}
                        // id="profile_img"
                        // style={{ width: "100%" }}
                        // alt=""
                    />
                )}
                </Item>
                {/* Thumbnail END */}
                <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
                >
                {({ ref, open }) => (
                    <img
                    style={{ display: "none" }}
                    ref={ref}
                    onClick={open}
                    src="https://placekitten.com/80/60?image=2"
                    />
                )}
                </Item>
            </Gallery>
            </div>
        );

}

export default TestProjectGalleryItem3;
