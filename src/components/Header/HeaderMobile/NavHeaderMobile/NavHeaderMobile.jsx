'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png";

import style from "./nav_header_mobile.module.scss";

import Link from "next/link"
import LinkLiCursosPage from "../../_LinkLiCursosPage";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlHome } from "react-icons/sl";
import { IoChatbubblesOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'


import { GrContact } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { useState } from "react";


function toogleNavmenu(e) {
    setDisplay(true)

}

function NavHeader() {

    const pathname = usePathname()

    const isHomePage = pathname === '/';

    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal ? { height: '100vh', padding: '20px' } : { height: '1px' };


    return (
        <>
            <a id={style.btn_display_nav_header} onClick={() => setIsModal(!isModal)} >
                <RxHamburgerMenu id={style.svg} />
            </a>

            <nav id={style.nav_header_mobile} style={contentClassname}>
                {
                    isHomePage ?
                        <ul>
                            <li>
                                <LinkScroll
                                    className="a-sem-link"
                                    activeClass="active"
                                    to="slide_home"
                                    smooth={true}
                                    offset={0}
                                    duration={800}
                                    onClick={() => setIsModal(!isModal)}
                                >
                                    <SlHome className={style.icon} />
                                    Início
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    activeClass="active"
                                    to="sobre"
                                    smooth={true}
                                    offset={-60}
                                    duration={600}
                                    onClick={() => setIsModal(!isModal)}>
                                    <FaRegBuilding className={style.icon} />
                                    Sobre
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    activeClass="active"
                                    to="contato"
                                    smooth={true}
                                    offset={-60}
                                    duration={600}
                                    onClick={() => setIsModal(!isModal)}
                                >
                                    <IoChatbubblesOutline className={style.icon} />
                                    Contato
                                </LinkScroll>
                            </li>
                            <h3>Conheça nossos cursos!</h3>
                            <span className={style.li_cursos}>
                                <LinkLiCursosPage callback={() => setIsModal(!isModal)} />
                            </span>
                        </ul>

                        ://CONDICIONAL

                        <ul>
                            <li>
                                <Link href='/'>
                                    <SlHome className={style.icon} />
                                    Início
                                </Link>
                            </li>

                            <li>
                                <Link href="/#sobre">
                                    <FaRegBuilding className={style.icon} />
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contato">
                                    <IoChatbubblesOutline className={style.icon} />
                                    Contato
                                </Link>
                            </li>
                            <h3>Conheça nossos cursos!</h3>
                            <span className={style.li_cursos}>
                                <LinkLiCursosPage callback={() => setIsModal(!isModal)} />
                            </span>
                        </ul>
                }
            </nav>

        </>


    )
}

export default NavHeader
