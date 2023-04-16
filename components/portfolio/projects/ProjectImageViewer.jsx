import React  from "react";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";

function ProjectImageViewer({ images, imgWidth, imgHeight, projectImages }) {


    console.log("projectImages", projectImages);

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
