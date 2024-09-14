'use client'
import NavCursos from "../../NavCursos/NavCursos"
import style from "../page.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../modulos/Modulos"
import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"
import VantagensCurso from "../../ingles/Lateral/VantagensCurso"




export default function InformáticaAvancada() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

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

                        <div className={style.visao_geral_curso}>
                            <h4>VISÃO GERAL </h4>
                            <li>

                                <Icon name="calendar" className={style.icon} />
                                Tempo de Duração: 3 meses</li>
                            <li>

                                <Icon name="class2" className={style.icon} />
                                Aulas por Semana: 2 (2 horas p/ aula)</li>
                            <li>

                                <Icon name="time-duration" className={style.icon} />

                                Carga Horária:  48 horas </li>
                            <li>
                                <Icon name="certificate" className={style.icon} />
                                Certificado de qualificação profissional incluso!</li>
                            <li>
                                <Icon name="books" className={style.icon} />
                                Material didático incluso!
                            </li>
                            <li>
                                <Icon name="moeda-real" className={style.icon} />
                                Investimento: R$ 220,00 (mensal)
                            </li>

                        </div>

                        <h3>Módulos do Curso</h3>
                        <Modulo slideObj={slideObj} />


                    </main>
                    <aside className={style.aside}>
                        <VantagensCurso />
                    </aside>

                </div>

            </div>
            <Contato />
        </>
    )


}