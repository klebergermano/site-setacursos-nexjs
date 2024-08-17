
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./navHeader.module.scss"
import Link from "next/link"


function NavHeader() {
    return (


        <nav className={style.navHeader}>
            <ul>
                <li>
                    <Link href="./">Início</Link>
                </li>
                <li>
                    <Link href="./">Cursos</Link>
                </li>
                <li>
                    <Link href="./">Sobre</Link>
                </li>
                <li>
                    <Link href="./">Contato</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavHeader
