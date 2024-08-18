'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./navHeader.module.scss"
import Link from "next/link"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";


function NavHeader() {
    return (
        <nav className={style.navHeader}>
            <ul>
                <li>
                    <LinkScroll
                        className="a-sem-link"
                        activeClass="active"
                        to="header"
                        smooth={true}
                        offset={0}
                        duration={800}
                    >Início
                    </LinkScroll>
                </li>
                <li>
                    <Link href="./">Cursos</Link>
                </li>
                <li>
                    <Link href="./sobre">Sobre</Link>

                </li>
                <li>
                    <Link href="./contato">Contato</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavHeader
