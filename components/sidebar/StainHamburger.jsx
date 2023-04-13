// import Image from "next/image";
import Link from "next/link";
// import sidebarData from "../../data/sidebarData";
// import CopyRight from "../CopyRight";
// import { isActiveLink } from "../../utilis/linkActiveChecker";
// import { useRouter } from "next/router";
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

    return(
        <>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav class="nav"> 	
                <ul className="pt-5 ulMenuList">
                   {sidebarData.map((item) => (
                    <li key={item.id}  className="liMenuItem" onClick={handleClick}>
                    <Link
                        className={`${
                            isActiveLink(item.routePath, router.asPath)
                            ? "active "
                            : ""
                        }`}
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
                ))}
                </ul>  
            </nav>
        </>
    );
};

export default StainHamburger;