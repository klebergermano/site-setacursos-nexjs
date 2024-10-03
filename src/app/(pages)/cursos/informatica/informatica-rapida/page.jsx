'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../_modulosSlide/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"
import VantagensCurso from "../Lateral/VantagensCurso"
import { PiChalkboardTeacherLight } from "react-icons/pi";
import Planos from "./planos/_planos"


export default function InformáticaAvancada() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>
                        <div className={style.content}>

                            <h1>Informática Rápida</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-rapida.png'} />
                            </figure>
                            <div className={style.resumo}>
                                <p>
                                    O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto que busca acelerar sua inserção no mundo da informática.
                                </p>
                                <p>
                                    Concentrando-se no essencial, o curso aborda de forma direta e personalizada, desde conceitos fundamentais até habilidades relevantes para o mercado de trabalho.
                                </p>
                            </div>

                            <Modulo slideObj={slideObj} />

                            <Planos />


                        </div>{/* content */}


                    </main>
                    <aside className={style.aside}>
                        <VantagensCurso />
                    </aside>

                </div>

            </div>
            {/* <Contato /> */}
        </>
    )


}