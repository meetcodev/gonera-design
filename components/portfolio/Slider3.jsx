 
import React, { Component, } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";

export  const SimpleSlider2 = () => {
    return(
        <Gallery options={{ showHideOpacity: true }}>
        <Item content={<Content text="It's a React slide #1, nice!" />}>
            {({ ref, open }) => (
            <a
                href="#"
                onClick={(e) => {
                e.preventDefault()
                open(e)
                }}
                ref={ref  }
                >
                Open a slide with React content 1
                </a>
            )}
            </Item>
            <br />
            <Item content={<Content text="It's a React slide #2, nice!" />}>
            {({ ref, open }) => (
                <a
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                    open(e)
                }}
                ref={ref }
                >
                Open a slide with React content 2
                </a>
            )}
            </Item>
      </Gallery>
    );
}; 