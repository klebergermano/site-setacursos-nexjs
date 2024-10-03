import style from "./layout.module.scss"
import NavCursos from "../_common/_NavCursos/NavCursos"
import _itemsNav from "./_itemsNavCursos";
import VantagensCurso from "./Lateral/VantagensCurso";

import NavLateralCursos from "../_common/_NavLateralCursos/NavLateralCursos";
export const metadata = {
    title: "Create Next App",
    description: "Seta home page",

};



export default function Layout({ children }) {

    return (
        <div className={`${style.pages_informatica} pages`}>
            <NavCursos itemsNav={_itemsNav} />
            <div className={style.bg_content_page}>

                {children}

                <aside className={style.aside}>
                    <NavLateralCursos itemsNav={_itemsNav} />
                    <VantagensCurso />
                </aside>
            </div>
        </div>
    );
}
