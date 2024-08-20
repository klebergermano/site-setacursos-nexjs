
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./header.module.scss"
import Link from "next/link"
import NavHeader from "./NavHeader/NavHeader"


function Header() {
    return (
        <div className={style.header} name='header'>
            <div className={style.header_container}>
                <div className={style.h_columns} id={style.h_column_1}>
                    <figure className={style.bg_logo}>
                        <Image
                            src={ImgLogo}
                            fit={true}
                        />
                    </figure>
                </div>
                <div className={style.h_columns} id={style.h_column_2}>
                    <div className={style.sub_h_clmn}>
                        <nav>
                            <ul>
                                <li>
                                    Menu

                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.sub_h_clmn}>
                        <NavHeader />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
