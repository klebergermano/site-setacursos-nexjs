
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./header.module.scss"
import Link from "next/link"
import NavHeader from "./NavHeader/NavHeader"


function Header() {
    return (
        <div className={style.header} name='header'>
            <div className={style.header_container}>
                <div className={style.header_sub_column}>
                    <figure>
                        <Image
                            src={ImgLogo}
                            fit={true}
                        />
                    </figure>
                </div>
                <div className={style.header_sub_column}>
                    <NavHeader />

                </div>
            </div>
        </div>
    )
}

export default Header
