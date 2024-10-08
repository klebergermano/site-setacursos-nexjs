import style from "../pages-cursos.module.scss"

import NavCursos from "../_common/_NavCursos/NavCursos"
import _itemsNav from "./_itemsNavCursos";
import VantagensCurso from "./Lateral/VantagensCurso";
import NavLateralCursos from "../_common/_NavLateralCursos/NavLateralCursos";

export const metadata = {
    title: "Inglês Geral",
    description: `Aprenda inglês de maneira eficaz em um curso completo! Aulas práticas e interativas para jovens e adultos. Entre em contato e inicie sua jornada para fluência!`,

};



export default function Layout({ children }) {

    return (
        <div className={`${style.pages_informatica} pages`}>
            <NavCursos itemsNav={_itemsNav} />
            <div className={style.bg_content_page}>

                {children}

                <aside className={style.aside}>
                    <NavLateralCursos itemsNav={_itemsNav} title={"Cursos de Inglês"} />

                    <VantagensCurso />

                </aside>
            </div>
        </div>
    );
}
