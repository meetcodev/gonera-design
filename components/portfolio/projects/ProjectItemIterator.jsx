import React  from "react";
import Image from "next/image";
import { Item } from "react-photoswipe-gallery";
import projectsData from "@/data/projectsData";
import { prefixProjects } from "@/data/CONST_VALUES";
import ProjectGallery from "./ProjectGallery";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
});


function ProjectItemIterator({ images, imgWidth, imgHeight, children}) {


    

        return (
            <>
            { projectsData?.length ? (
                projectsData.map(({project}, index) => {
                    console.log("project", project)
                        return(
                            <li key={`projectGallery_${index}--li`}>
                                <div className="inner">
                                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                                        <ProjectGallery  thumbnailSrc={`${project[0]['src']}`}  
                                            tooltipId={`projectGallery_${index}--tooltip`}
                                            projectImages={project}
                                        >
                                            <ReactTooltip
                                                id={`projectGallery_${index}--tooltip`}
                                                place="bottom"
                                                type="light"
                                                effect="float"
                                                className="tooltip-wrapper"
                                            >
                                            <div>
                                                <h5>{`${project[0]['titleProject']}`}</h5>
                                                {/* <span>Sarna</span> */}
                                            </div>
                                            </ReactTooltip>
                                        </ProjectGallery>
                                    </div>
                                </div>
                            </li>
                        );}
                        )
                ) : "" }
        </>
        );

}

export default ProjectItemIterator;
