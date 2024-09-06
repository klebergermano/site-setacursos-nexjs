'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./nav_header_desktop.module.scss"
import Link from "next/link"
import LinkLiCursosPage from "../../_LinkLiCursosPage"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react"

import { useRouter, usePathname } from 'next/navigation'



function NavHeaderDesktop() {

    const pathname = usePathname()

    const [linkHome, setLinkHome] = useState('./')
    const isHomePage = pathname === '/';

    useEffect(() => {
        isHomePage ? setLinkHome('./') : setLinkHome('aaaaaaaaaa')
    }, [])
    // Check if the current path is the homepage


    return (
        <nav className={style.nav_header_desktop}>
            {

                isHomePage ?
                    <ul>
                        <li>
                            <LinkScroll
                                className="a-sem-link"
                                activeClass="active"
                                to="#slide_home"
                                href='./'
                                smooth={true}
                                offset={0}
                                duration={800}
                            >Início
                            </LinkScroll>
                        </li>
                        <li className={style.li_cursos}>
                            <LinkScroll
                                activeClass="active"
                                to="#painel_cursos"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={600}
                            >
                                Cursos
                            </LinkScroll>
                            <ul className={style.submenu_header}>
                                <li>
                                    <LinkScroll
                                        activeClass="active"
                                        to="#bg_painel_cursos"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={600}
                                    >
                                        Painel de Cursos
                                    </LinkScroll>
                                </li>

                                <LinkLiCursosPage />

                                <li id="link_certificadosx">
                                    <a href="/certificados"> Certificados</a>
                                </li>
                            </ul>


                        </li>



                        <li>


                            <LinkScroll
                                activeClass="active"
                                to="sobre"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={600}
                            >
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
                                Contato
                            </LinkScroll>
                        </li>
                    </ul>
                    : //CONDICIONAL
                    //////////////// Nav para multiplas páginas
                    <ul>
                        <li>
                            <Link
                                href='/'
                            >Início
                            </Link>
                        </li>
                        <li className={style.li_cursos}>
                            <Link
                                href='/#bg_painel_cursos'
                            >
                                Cursos
                            </Link>
                            <ul className={style.submenu_header}>
                                <li>
                                    <Link
                                        href="/#bg_painel_cursos"
                                    >
                                        Painel de Cursos
                                    </Link>
                                </li>

                                <LinkLiCursosPage />

                                <li id="link_certificadosx">
                                    <Link href="/certificados"> Certificados</Link>
                                </li>
                            </ul>


                        </li>



                        <li>


                            <Link
                                href="/#sobre"
                            //scroll={false}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>

                            <Link
                                href="/#contato"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>


            }

        </nav>

    )
}

export default NavHeaderDesktop
