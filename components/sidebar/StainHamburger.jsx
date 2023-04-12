// import Image from "next/image";
// import Link from "next/link";
// import sidebarData from "../../data/sidebarData";
// import CopyRight from "../CopyRight";
// import { isActiveLink } from "../../utilis/linkActiveChecker";
// import { useRouter } from "next/router";
import { useState } from "react";

const StainHamburger = () => {
    return(
        <>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav class="nav"> 		
                <ul class="pt-5">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default StainHamburger;