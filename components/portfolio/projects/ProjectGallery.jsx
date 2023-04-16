import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Item, Gallery } from "react-photoswipe-gallery";
import ProjectImageViewer from "./ProjectImageViewer";
import dynamic from "next/dynamic";
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


const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
});




const images = [ 
    {
        src: '/img/portfolio/portfolio/photos-optimal/XX',
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
       
       function ProjectGallery({ children,  thumbnailSrc,  tooltipId, projectImages }) {
        console.info("projectImages🔰", projectImages);
        return (
            <div //style={{ width: "300px", }}
            >
            <Gallery style={{ display: "flex", alignItems: "center" }}>
                <Item
                    original={thumbnailSrc}
                    thumbnail={thumbnailSrc}
                    width={img_width}
                    height={img_height}
                >
                {({ ref, open }) => (
                    <Image
                        width={500}  //*edu wielkość miniatury 
                        height={500}
                        srl_gallery_image="true"
                        src={thumbnailSrc}
                        alt="Childhood232"
                        data-tip
                        data-for={tooltipId}
                        role="button"
                        ref={ref}
                        onClick={open}
                        // id="profile_img"
                        // style={{ width: "100%" }}
                        // alt=""
                    />
                )}
                </Item>
                {children ? children : "" }
               
                {/* Thumbnail END */}
                        {/* <ProjectImageViewer images={projectImages} imgHeight={img_height} imgWidth={img_width} /> */}
                <>
                { projectImages?.length ? (
                    
                projectImages.map(({src}, index) => {

                        if(index === 0) return "";
                        return(
                            <Item
                                original={src}
                                // thumbnail={src}
                                // width="1024"  height="768"
                                width={img_width}
                                height={img_height}
                                key={`item_${+index+1}`}
                                >
                                {({ ref, open }) => (
                                    <Image
                                    
                                    ref={ref}
                                    onClick={open}
                                    src={src}
                                    // width={"imgWidth"}
                                    // height={imgHeight}
                                        // key={`img_${index}`}
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
            </Gallery>
            </div>
        );

}

export default ProjectGallery;
