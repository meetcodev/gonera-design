import React, { useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

export function SimpleProjectBox({mainImg, folderNo, mainTitle, mainDesc, images}) {

    
    // const options = {
    //     settings: { },
    //     caption: {
    //         showCaption
    //     },
    //     buttons: {},
    //     thumbnails: { }
    // };
    const options = {
        caption: {
            showCaption: true
        },
    };


    if(!images.length) return null;
    if(images.length) {
        return (
            <SimpleReactLightbox>
                <SRLWrapper options={options} >
                        <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        >
                        <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                                <a href={`/img/portfolio/portfolio/${images[0]['url']}/${images[0]['nameImg']}`} >
                                    <img
                                        src={`/img/portfolio/portfolio/${images[0]['url']}/${images[0]['nameImg']}`}
                                        alt={`${images[0]['titleImg']}`}
                                        // data-tip
                                        // data-for="shot"
                                        />
                                </a>
                            </div>
                            <div className="mobile_title">
                                <h3>{images[0]['titleProject'] ? (`${images[0]['titleProject']}`) : "Dodaj Tytuł" }</h3>
                                <span>{images[0]['descProject'] ? (`${images[0]['descProject']}`) : "" }</span>
                            </div>
                        </div>
                    </li>
                    {/* END SHOT */}
                    { images.map((img, index) => {
                        console.log(index);
                        if(index === 0) return null;
                        return (
                                <div className="entry tokyo_tm_portfolio_img--none">
                                    <a href={`/img/portfolio/portfolio/${images[0]['url']}/${index+1}.jpg`}>
                                        <img 
                                            src={`/img/portfolio/portfolio/${images[0]['url']}/${images[0]['nameImg']}`}
                                            alt={`${img}`} />
                                    </a>
                                </div>
                            );
                    })}
                </SRLWrapper>
            </SimpleReactLightbox>
        );
    };
};
