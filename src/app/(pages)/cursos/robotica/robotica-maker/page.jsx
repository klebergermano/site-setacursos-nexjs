'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../page.module.scss"

import Image from "next/image"

import Icon from "@/../public/assets/icons/index"

import Contato from "@/components/Contato/Contato"


import _itemsNav from "../_itemsNavCursos"
import ModulosRoboticaMaker from "./modulos/ModulosRoboticaMaker"
import VantagensCurso from "../Lateral/VantagensCurso"


export default function Page() {
    return (
        <>
            <div className={`${style.pages_robotica} pages`}>

                {/* <NavCursos itemsNav={_itemsNav} /> */}
                <div className={style.bg_content_page}>

                    <main className={style.main}>
                        <div className={style.content}>

                            <h1>Robótica Maker</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/robotica/curso-robotica-maker-seta-cursos.png'} />
                            </figure>
                            <div className={style.resumo}>
                                <p>
                                    Descubra o fascinante mundo da robótica! Junte-se a nós neste curso dinâmico e envolvente, projetado especialmente para jovens. Aprenda desde os conceitos básicos até a construção e programação de robôs, em um ambiente de aprendizado divertido e prático. Prepare-se para explorar novas fronteiras da tecnologia e desenvolver habilidades que vão impulsionar o seu futuro. Inscreva-se agora e comece a construir o seu próprio futuro robótico!
                                </p>
                                <p>

                                    Nosso curso é dividido em 2 etapas (Robótica Maker I e Robótica Maker II), cada uma com duração de 12 meses.
                                </p>
                            </div>

                            <div className={style.visao_geral_curso}>
                                <h4>VISÃO GERAL </h4>
                                <li>

                                    <Icon name="calendar" className={style.icon} />
                                    Tempo de Duração: 12 meses (Por etapa)</li>
                                <li>

                                    <Icon name="class2" className={style.icon} />
                                    Aulas por Semana: 2 (2 horas p/ aula)</li>
                                <li>

                                    <Icon name="time-duration" className={style.icon} />

                                    Carga Horária:  192 horas </li>
                                <li>
                                    <Icon name="certificate" className={style.icon} />
                                    Certificado de qualificação profissional incluso!</li>
                                {/* <li>
                                <Icon name="books" className={style.icon} />
                                Material didático incluso!

                            </li> */}
                                <li>
                                    <Icon name="moeda-real" className={style.icon} />
                                    Investimento: R$ 180,00 (mensal)
                                </li>

                            </div>
                        </div>{/*content */}

                        <h3>Módulos do Curso</h3>
                        <ModulosRoboticaMaker />

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