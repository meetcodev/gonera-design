import Link from "next/link";
import Image from "next/image";
import sidebarData from "@/data/sidebarData";
import { useState } from "react";
import { useRouter } from "next/router";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";

const StainHamburger = () => {
    const router = useRouter();
    // const navigate = useNav

    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const  timer = () => {
    //     setTimeout(() => {
    //         handleClick();
    //     },1000);
    // };
    
    const [ checked, setChecked ] = useState(false);
    const [ checkedKey, setCheckedKey ] = useState(false);

    const delayCSS = (event) => { 
        event.preventDefault();
        const myHref = `${event.target.value }`;
        setChecked(!checked);
        setCheckedKey(!checkedKey);
        try {
            if(event){
                setTimeout(() => {
                    router.push(myHref);
                },575);
            }
        }
        // finally {
        //     console.log('posłoe');
        // }
      };


      console.log('checked:', checked);
    return(
        <>
        <input class="menu-icon" key={checkedKey} onClick={() => setChecked(!checked)} value={checked} type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav class="nav" id="stain-hamburger--nav"> 	
                <ul className="pt-5 ulMenuList">
                    {sidebarData.map((item) => (
                        <li key={item.id}  className="liMenuItem" onClick={delayCSS}  
                            style={{ display: ((item.routePath === router.asPath) || ( item.routePath === "/home" ) && (router.asPath === "/")) ? 'none' : "" }}
                        >
                        <Link   
                            onClick={ (event) => delayCSS(event)}
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
                                <button type='button' value={item.routePath} className="liMenuItem menu_content">{item.menuName}</button>
                                
                        </Link>
                        </li>
                    ) 
                )}
                    {/* <li>
                    </li>
                    <>
                        <button class="menu-icon menu-item " type="button" id="menu-icon2" name="menu-icon2" >
                         
                        <span className="menu_content " >Test component</span>  
                            <label for="menu-icon2">
                        </label>
                        </button>
                <button class="hamburger__toggle ">
<span class="hamburger__icon"></span>
</button>   
                    </> */}
                </ul>  
            </nav>
        </>
    );
};

export default StainHamburger;