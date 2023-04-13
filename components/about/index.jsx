import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";
import Link from "next/link";

Modal.setAppElement("#__next");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                {/* <h3>About Me</h3> */}
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro>

          <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div>
          </Intro>
          {/* End personal info */}
        {/* <div className="tokyo_tm_button--wrapper" > */}
            <div className="tokyo_tm_button"
                // data-position="left"
            >
               
                <Link
                    // className={`${
                    //     isActiveLink(item.routePath, router.asPath)
                    //     ? "active "
                    //     : ""
                    // }`}
                    href="/contact"
                >
                <span>Formularz kontaktowy</span>
                </Link>
            </div>
          {/* </div> */}
        </div>
      </div>
      {/* End .container */}

      
      {/* End tokyo_tm_progressbox */}

      {/* End .tokyo_tm_skillbox */}

 
      {/* End tokyo_tm_resumebox */}


      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
