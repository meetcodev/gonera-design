

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seo from "../components/Seo";
import Link from "next/link";
import { useTheme } from "next-themes";

const Slider = () => {
    var settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },
        ],
      };
    
      const demoItems = [
        {
          id: 1,
          img: "/img/intro/light.png",
          title: "Light Demo",
        },
        {
          id: 2,
          img: "/img/intro/dark.png",
          title: "Dark Demo",
        },
      ];
    
      const { theme, setTheme } = useTheme();
    
      // toggle of dark & light mode
      const handle = (e) => {
        setTheme(e);
      };


return(

    
    
                
                
                <div className="container">
            <Slider {...settings}>
            {demoItems.map((item) => {
                const mode = item.id % 2 === 0 ? "dark" : "light";
                return (
                <div
                    className="left"
                    key={item.id}
                    onClick={() => handle(mode)}
                    >
                    <Link href="/home">
                    <div className="desc">
                        <img src={item.img} alt="demo item" />
                        <h3 className="title">{item.title}</h3>
                    </div>
                    </Link>
                </div>
                );
            })}
            </Slider>
            </div>
);

};