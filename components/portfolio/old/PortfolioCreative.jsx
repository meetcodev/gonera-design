import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
// import ModalVideo from "react-modal-video";
import Modal from "react-modal";
// import Social from "./Social";
// import OneProject from "./subcomponent/OneProject";
import { SimpleProjectBox } from "./SimpleProjectBox";



const projectObj = {
    project_1 : [
    { url:"photos-optimal/1", nameImg: "1.jpg",     titleProject: "SOUND OF SAND",  descProject: "2022", 
        titleImg:   "Ujęcie przedstawia zbliżenie na umywalkę wolnostojącą. " },
                    "Ujęcie przedstawia widok frontalny na WC oraz słupek w którym umieszczona jest pralka i suszarka. ",
                    "Ujęcie przedstawia widok frontalny na wannę.",
                    "Ujęcie przedstawia widok z góry - zobrazowanie układu przestrzennego łazienki.",
                    "Ujęcie przedstawia widok frontalny na szafkę umywalkową." 
    ],
    project_2 : [
        { url:"photos-optimal/2", nameImg: "1.jpg", titleProject: "RAIN DANCE", descProject: "2022", 
        titleImg:   "Ujęcie przedstawia zbliżenie na umywalki nablatowe. W tle widać część prysznicową." },
                    "Ujęcie przedstawia widok ściany z umywalkami w perspektywie. ",
                    "Ujęcie przedstawia zbliżenie na umywalki nablatowe."
    ],
    project_3 : [
        { url:"photos-optimal/3", nameImg: "1.jpg", titleProject: "VIVID DREAM", descProject: "2022", 
        titleImg:   "Ujęcie przedstawia zbliżenie na WC oraz bidet. Na pierwszym planie widać fragment wanny wolnostojącej." },
                    "Ujęcie przedstawia widok frontalny na pokój kąpielowy.",
                    "Ujęcie przedstawia umywalkę oraz część prysznicową pokoju kąpielowego."
],
    project_4 : [
        { url:"photos-optimal/4", nameImg: "1.jpg", titleProject: "SPA", descProject: "2022",
        titleImg:   "Ujęcie przedstawia zbliżenie na ścianę z oknami, fragment wanny oraz szafkę umywalkową z lustrami." },
                    "Ujęcie przedstawia zbliżenie na część prysznicową, fragment wanny oraz szafkę umywalkową z lustrami.",
                    "Ujęcie frontalne na szafkę umywalkową z lustrami, fragment wanny oraz WC i bidet."
    ],
    project_5 : [
        { url:"photos-optimal/5", nameImg: "1.jpg", titleProject: "TEXTURE TRICK", descProject: "2022", 
        titleImg:   "Ujęcie zestawienia fornirowanych z płytką podłogową imitującą mosiądz pokryty patyną." },
                    "Ujęcie frontalne na szafkę umywalkową z lustrami, fragment wanny oraz WC i bidet. ",
                    "Ujęcie przedstawia zbliżenie na umywalki nablatowe.",
                    "Ujęcie frontalne na łazienkę."
    ],
    project_6 : [
        { url:"photos-optimal/6", nameImg: "1.jpg", titleProject: "SUNSET IN PARIS", descProject: "2022", 
        titleImg:   "Ujęcie na jadalnię." },
                    "Ujęcie na strefę wypoczynkową oraz fragment jadalni.",
                    "Ujęcie na kuchnię z wyspą."
    ],
    project_7 : [
        { url:"photos-optimal/7", nameImg: "1.jpg", titleProject: "CHIC ELEGANCE", descProject: "2022", 
        titleImg:   "Ujęcie frontalne z widokiem na szafkę umywalkową." },
                    "Ujęcie pokazujące szafkę umywalkową w perspektywie.",
                    "Ujęcie z widokiem na WC oraz bidet.",
                    "Ujęcie frontalne na wolnostojącą wannę.",
                    "Ujęcie frontalne na kabinę prysznicową."
    ],
    project_8 : [
        { url:"photos-optimal/8", nameImg: "1.jpg", titleProject: "THE CAVE", descProject: "2022", 
        titleImg:   "Ujęcie frontalne na wolnostojącą wannę." },
                    "Ujęcie z widokiem na umywalki.",
                    "Ujęcie z widokiem na umywalki.",
                    "Ujęcie z widokiem na WC, bidet oraz część prysznicową.",
                    "Ujęcie frontalne na kabinę wejście do łazienki."
    ],
    project_9 : [
        { url:"photos-optimal/9", nameImg: "1.jpg", titleProject: "LINE TO THE POINT", descProject: "2022", 
        titleImg:   "Ujęcie frontalne na fragment łóżka oraz szafkę nocną." },
                    "Ujęcie frontalne na fragment łóżka oraz szafkę nocną.",
                    "Ujęcie na fragment szafy z lustrami oraz oświetlenie sufitowe.",
                    "Ujęcie frontalne na fragment szafę z lustrami oraz fragment łóżka.",
                    "Ujęcie z góry na ułożenie desek podłogowych." 
    ]
};




const OldPortfolio = () => {
    // for popup video
    // const [isOpen, setOpen] = useState(false);
    // const [isOpen2, setOpen2] = useState(false);

    // for modal
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }


    return (
        <>
            <SimpleReactLightbox>
                <div className="tokyo_tm_portfolio">
                    <div className="tokyo_tm_title ">
                        <div className="title_flex">
                            <div className="left">
                                {/* <span>Portfolio</span> */}
                                <h3>Portfolio</h3>
                            </div>
                        </div>
                    </div>
                    {/* END TOKYO_TM_TITLE */}

                    <div className="portfolio_filter">
                        <Tabs>
                            <TabList>
                                <Tab>Project</Tab>
                                <Tab>Article</Tab>
                                {/* <Tab>Video</Tab> */}
                            </TabList>
                            {/* END TABLIST */}
                            <div className="list_wrapper">
                                <TabPanel>
                                    <ul className="portfolio_list">
                                        <SimpleProjectBox images={projectObj['project_1']} />
                                        <SimpleProjectBox images={projectObj['project_2']} />
                                        <SimpleProjectBox images={projectObj['project_3']} />
                                        <SimpleProjectBox images={projectObj['project_4']} />
                                        <SimpleProjectBox images={projectObj['project_5']} />
                                        <SimpleProjectBox images={projectObj['project_6']} />
                                        <SimpleProjectBox images={projectObj['project_7']} />
                                        <SimpleProjectBox images={projectObj['project_8']} />
                                        <SimpleProjectBox images={projectObj['project_9']} />
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <ul className="portfolio_list">
                                        <li data-aos="fade-right" data-aos-duration="1200">
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="img/portfolio/portfolio/2.jpg"
                                                        alt="Details"
                                                        data-tip
                                                        data-for="detail"
                                                        onClick={toggleModalThree}
                                                    />

                                                    <ReactTooltip
                                                        id="detail"
                                                        place="bottom"
                                                        type="light"
                                                        effect="float"
                                                        className="tooltip-wrapper"
                                                        >
                                                        <div>
                                                            <h5>Selena Gomez</h5>
                                                            <span>Details</span>
                                                        </div>
                                                    </ReactTooltip>
                                                </div>
                                            </div>
                                        </li>
                                        {/* END DETAILS */}
                                        <li
                                            data-aos="fade-right"
                                            data-aos-duration="1200"
                                            data-aos-delay="100"
                                        >
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <img
                                                        src="/img/portfolio/portfolio/7.jpg"
                                                        alt="Details"
                                                        data-tip
                                                        data-for="detail2"
                                                        onClick={toggleModalFour}
                                                    />

                                                    <ReactTooltip
                                                        id="detail2"
                                                        place="bottom"
                                                        type="light"
                                                        effect="float"
                                                        className="tooltip-wrapper"
                                                    >
                                                        <div>
                                                            <h5>Ave Simone</h5>
                                                            <span>Details</span>
                                                        </div>
                                                    </ReactTooltip>
                                                </div>
                                            </div>
                                        </li>
                                        {/* END DETAILS */}
                                    </ul>
                                    {/* END DETAILS GALLERY */}
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </SimpleReactLightbox>

            {/* START MODAL FOR PORTFOLIO DETAILS */}
            <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalThree}>
                        <img src="/img/portfolio/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                        <div className="description_wrap scrollable">
                            <div className="image">
                                <img src="/img/portfolio/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage: "url(/img/portfolio/portfolio/6.jpg)",
                                    }}
                                ></div>
                            </div>
                            {/* END IMAGE */}
                            <div className="portfolio_main_title">
                                <h3>Selena Gomez</h3>
                                <span>Details</span>
                            </div>
                            {/* END portfolio_main_title */}
                            <div className="main_details">
                                <div className="textbox">
                                    <p>
                                        We live in a world where we need to move quickly and iterate
                                        on our ideas as flexibly as possible. Building mockups
                                        strikes the ideal balance between true-life representation
                                        of the end product and ease of modification.
                                    </p>
                                    <p>
                                        Mockups are useful both for the creative phase of the
                                        project - for instance when you're trying to figure out your
                                        user flows or the proper visual hierarchy - and the
                                        production phase when they will represent the target
                                        product. Making mockups a part of your creative and
                                        development process allows you to quickly and easily ideate.
                                    </p>
                                </div>
                                <div className="detailbox">
                                    <ul>
                                        <li>
                                            <span className="first">Client</span>
                                            <span>Alvaro Morata</span>
                                        </li>
                                        <li>
                                            <span className="first">Category</span>
                                            <span>Details</span>
                                        </li>
                                        <li>
                                            <span className="first">Date</span>
                                            <span>March 07, 2021</span>
                                        </li>
                                        <li>
                                            <span className="first">Share</span>
                                            {/* END SOCIAL SHARE */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* main_details */}

                            <div className="additional_images">
                                <ul className="gallery_zoom">
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/8.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/2.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/3.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
            </Modal>
            {/* END MODAL FOR PORTFOLIO DETAILS */}

            {/* START MODAL FOR PORTFOLIO DETAILS */}
            <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalFour}>
                        <img src="/img/portfolio/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                        <div className="description_wrap scrollable">
                            <div className="image">
                                <img src="/img/portfolio/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage: "url(/img/portfolio/portfolio/7.jpg)",
                                    }}
                                ></div>
                            </div>
                            {/* END IMAGE */}
                            <div className="portfolio_main_title">
                                <h3>Ave Simone</h3>
                                <span>Details</span>
                            </div>
                            {/* END portfolio_main_title */}
                            <div className="main_details">
                                <div className="textbox">
                                    <p>
                                        We live in a world where we need to move quickly and iterate
                                        on our ideas as flexibly as possible. Building mockups
                                        strikes the ideal balance between true-life representation
                                        of the end product and ease of modification.
                                    </p>
                                    <p>
                                        Mockups are useful both for the creative phase of the
                                        project - for instance when you're trying to figure out your
                                        user flows or the proper visual hierarchy - and the
                                        production phase when they will represent the target
                                        product. Making mockups a part of your creative and
                                        development process allows you to quickly and easily ideate.
                                    </p>
                                </div>
                                <div className="detailbox">
                                    <ul>
                                        <li>
                                            <span className="first">Client</span>
                                            <span>Alvaro Morata</span>
                                        </li>
                                        <li>
                                            <span className="first">Category</span>
                                            <span>Details</span>
                                        </li>
                                        <li>
                                            <span className="first">Date</span>
                                            <span>March 07, 2021</span>
                                        </li>
                                        <li>
                                            <span className="first">Share</span>
                                     
                                            {/* END SOCIAL SHARE */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* main_details */}

                            <div className="additional_images">
                                <ul className="gallery_zoom">
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/6.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/5.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(/img/portfolio/portfolio/4.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
            </Modal>
            {/* END MODAL FOR PORTFOLIO DETAILS */}
        </>
    );
};

export default OldPortfolio;
