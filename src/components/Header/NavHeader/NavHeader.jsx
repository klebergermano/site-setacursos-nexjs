'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./navHeader.module.scss"
import Link from "next/link"
import LinkLiCursosPage from "./_LiLinkCursosPage"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";


function NavHeader() {
    return (
        <nav className={style.navHeader}>
            <ul>
                <li>
                    <LinkScroll
                        className="a-sem-link"
                        activeClass="active"
                        to="#header"
                        smooth={true}
                        offset={0}
                        duration={800}
                    >Início
                    </LinkScroll>
                </li>
                <li className={style.liCursos}>
                    <LinkScroll
                        activeClass="active"
                        to="painel_cursos"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={600}
                    >
                        Cursos
                    </LinkScroll>
                    <ul className={style.subMenuHeader}>
                        <li>
                            <LinkScroll
                                activeClass="active"
                                to="bgPainelCursos"
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
                    <Link href="./sobre">Sobre</Link>

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
        </nav>

    )
}

export default NavHeader
