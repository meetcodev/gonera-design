import React, { useState, useCallback } from "react";

// import ImageViewer from "react-simple-image-viewer";
// import "../Album.css";
import Image from "next/image";
import { Item, Gallery } from "react-photoswipe-gallery";
import ProjectImageViewer from "./ProjectImageViewer";

// const options = {
//   dataSource: [

//     // simple image
//     {
//       src: '/adv3',
//       width: 1620,
//       height: 1080,
//       alt: 'test image 1'
//     },

//     {
//       src: '/adv2',
//       width: 1950,
//       height: 1300,
//       alt: 'test image 2'
//     },

//     // responsive image
//     {
//       srcset: '/adv5 1500w, /adv5 1200w, adv5 600w',
//       src: 'adv5/?text=1500x1000',
//       width: 1500,
//       height: 1000,
//       alt: 'test image 3',
//     },

//     // HTML slide
//     {
//       html: '<div class="custom-html-slide">This is custom HTML slide. <a href="http://example.com" target="_blank" rel="nofollow">Test Link</a>.</div>'
//     }

//   ],
//   showHideAnimationType: 'none',
// //   pswpModule: () => import('/photoswipe/photoswipe.esm.js'),
// };






const images = [ 
    {
        src: '/img/portfolio/portfolio/photos-optimal/1/1.jpg',
        width: 1950,
        height: 1300,
        alt: 'test image 2'
    }, 
    {
        src: '/img/portfolio/portfolio/photos-optimal/1/3.jpg',
        width: 1950,
        height: 1300,
        alt: 'test image 4'
    }, 
    {
        src: '/img/portfolio/portfolio/photos-optimal/1/4.jpg',
        width: 1950,
        height: 1300,
        alt: 'test image 5'
    }, 
];


       // width="1024"  height="768"
       
       
       const img_width = 860;
       const img_height = 620;
       
       function ProjectGallery({   thumbnailSrc,  src }) {


 
        return (
            <div //style={{ width: "300px", }}
            >
            <Gallery style={{ display: "flex", alignItems: "center" }}>
                <Item
                    original={images[0]['src']}
                    // thumbnail="https://cdn.pixabay.com/photo/2022/06/22/18/28/deer-7278490_960_720.jpg"
                    width={img_width}
                    height={img_height}
                >
                {({ ref, open }) => (
                    <Image
                        width={500}  //*edu wielkość miniatury 
                        height={500}
                        srl_gallery_image="true"
                        src={thumbnailSrc}
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
                        <ProjectImageViewer images={images} imgHeight={img_height} imgWidth={img_width} />
            </Gallery>
            </div>
        );

}

export default ProjectGallery;
