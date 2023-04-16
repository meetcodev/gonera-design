import React, { useState, useCallback } from "react";
import adv1 from "../../../public/img/portfolio/portfolio/1.jpg";
import adv2 from "../../../public/img/portfolio/portfolio/2.jpg";
import adv3 from "../../../public/img/portfolio/portfolio/3.jpg";
import adv5 from "../../../public/img/portfolio/portfolio/5.jpg";
import adv7 from "../../../public/img/portfolio/portfolio/7.jpg";
// import ImageViewer from "react-simple-image-viewer";
// import "../Album.css";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";

function TestProjectGalleryItem({ isOpenProjectGallery }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [adv1, adv2, adv3, adv5, adv7];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(0);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="row">
            <Item >
        {images.map((src, index) => (
            <div className="collumn">
            <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="auto"
                key={index}
                style={{ margin: "2px" }}
                alt=""
            />
            </div>
        ))} 
        </Item>
       

{/* 
        {isViewerOpen && (
            <Image
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={true}
            backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)"
            }}
            />
        )} */}
        </div>
    );
}

export default TestProjectGalleryItem;
