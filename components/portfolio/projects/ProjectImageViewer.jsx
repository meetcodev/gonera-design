import React, { useState, useCallback } from "react";
// import adv1 from "img/portfolio/portfolio/4.jpg";
import adv2 from "../../../public/img/portfolio/portfolio/2.jpg";
import adv3 from "../../../public/img/portfolio/portfolio/3.jpg";
import adv5 from "../../../public/img/portfolio/portfolio/5.jpg";
import adv7 from "../../../public/img/portfolio/portfolio/7.jpg";
// import ImageViewer from "react-simple-image-viewer";
// import "../Album.css";
import Image from "next/image";
import { Item, PhotoSwipeLightboxStub, Gallery } from "react-photoswipe-gallery";
const images = [ 
    {
        src: '/img/portfolio/portfolio/photos-optimal/1/1.jpg',
        width: 1950,
        height: 1300,
        alt: 'test image 2'
    }, 
    {
        src: '/img/portfolio/portfolio/photos-optimal/1/2.jpg',
        width: 1950,
        height: 1300,
        alt: 'test image 3'
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
]
const options = {
  dataSource: [

    // simple image
    {
      src: '/public/img/portfolio/portfolio/photos-optimal/1/1.jpg',
    //   width: 1620,
    //   height: 1080,
    //   alt: 'test image 1'
    },

    {
      src: '/adv2',
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },

    // responsive image
    {
      srcset: '/adv5 1500w, /adv5 1200w, adv5 600w',  // *edu Sprawdzić srcset
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
function ProjectImageViewer({ images, imgWidth, imgHeight }) {


    

        return (
            <>
            { images?.length ? (

                images.map(({src}, index) => {
                        if(index === 0) return null;
                        return(
                            <Item
                                original={src}
                                // thumbnail={src}
                                // width="1024"  height="768"
                                width={imgWidth}
                                height={imgHeight}
                                key={`item_${index}`}
                                >
                                {({ ref, open }) => (
                                    <Image
                                    
                                    ref={ref}
                                    onClick={open}
                                    src={src}
                                    // width={"imgWidth"}
                                    // height={imgHeight}
                                        key={`img_${index}`}
                                        layout="fill"
                                        sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                        
                                    style={{ display: "none"  }}

                                        />
                                        )}
                            </Item>
                        );}
                        )
                ) : "" }
        </>
        );

}

export default ProjectImageViewer;
