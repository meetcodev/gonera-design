import Link from "next/link";
import Image from "next/image";
import sidebarData from "@/data/sidebarData";
import { useState } from "react";
import { useRouter } from "next/router";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";

const StainHamburger = () => {
    const router = useRouter();

    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const  timer = () => {
    //     setTimeout(() => {
    //         handleClick();
    //     },1000);
    // };


    return(
        <>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav class="nav" id="stain-hamburger--nav"> 	
                <ul className="pt-5 ulMenuList">
                    {sidebarData.map((item) => (
                        <li key={item.id}  className="liMenuItem" onClick={handleClick}  
                            style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                        >
                        <Link   
                            className={`${
                                isActiveLink(item.routePath, router.asPath)
                                ? "active "
                                : ""
                            }`}
                            // style={{isActiveLink(item.routePath, router.asPath) ? }}
                            // {router.asPath !== "/portfolio" ? <ThemeSwitch /> : ""}
                            href={item.routePath}
                        >
                            {/* <Image
                            width={15}
                            height={15}
                            className="svg"
                            src={item.icon}
                            alt="homerun"
                            /> */}
                                <span className="menu_content">{item.menuName}</span>
                        </Link>
                        </li>
                    ) 
                )}
                </ul>  
            </nav>
        </>
    );
};

export default StainHamburger;