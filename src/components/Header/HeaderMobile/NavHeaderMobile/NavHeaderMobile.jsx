'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png";

import style from "./nav_header_mobile.module.scss";

import Link from "next/link";
import LinkLiCursosPage from "./_LiLinkCursosPage";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlHome } from "react-icons/sl";


import { GrContact } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";

function NavHeader() {
    return (
        <nav className={style.nav_header_mobile}>
            <a id={style.btn_menu}>

                <RxHamburgerMenu id={style.svg} />


            </a>
            <div id={style.menu_mobile}>
                <ul >
                    <li>
                        <LinkScroll
                            className="a-sem-link"
                            activeClass="active"
                            to="slide_home"
                            smooth={true}
                            offset={0}
                            duration={800}
                        >
                            <SlHome className={style.icon} />
                            Início
                        </LinkScroll>
                    </li>

                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="sobre"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={600}
                        >
                            <FaRegBuilding className={style.icon} />


                            Sobre
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="contato"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={600}
                        >
                            <GrContact className={style.icon} />
                            Contato
                        </LinkScroll>
                    </li>
                    <h3>Conheça nossos cursos!</h3>
                    <span className={style.li_cursos}>
                        <LinkLiCursosPage />
                    </span>
                </ul>
            </div>
        </nav>

    )
}

export default NavHeader
