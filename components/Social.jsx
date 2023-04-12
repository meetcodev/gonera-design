import React from "react";

const SocialShare = [
    {
        iconName: "facebook",
        link: "https://www.facebook.com/gonera.design/",
      },
      { iconName: "behance", link: "https://www.behance.net/jgonera92/" },
      {
        iconName: "instagram",
        link: "https://www.instagram.com/gonera.design/",
      }
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
