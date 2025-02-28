'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../page.module.scss"
import style_ig_completo from "./ingles-completo.module.scss"

import Image from "next/image"

import Icon from "@/../public/assets/icons/index"

import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"

import VantagensCurso from "../Lateral/VantagensCurso"
import Reading from "./modulos-ingles-completo/_Reading"
import Writing from "./modulos-ingles-completo/_Writing"
import Listening from "./modulos-ingles-completo/_Listening"
import Talking from "./modulos-ingles-completo/_Talking"

export default function Page() {
    return (
        <>
            <div className={`${style.pages_ingles} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

                        <h1>Inglês Completo</h1>
                        <figure className={style.bg_img_destaque}>
                            <Image width={800} height={300} src={'/assets/images/cursos/ingles/curso-ingles-completo-seta-cursos.png'} />
                        </figure>
                        <div className={style.resumo}>
                            <p>
                                O nosso Curso Completo de Inglês foi pensado para levar os alunos do básico ao avançado de uma forma prática e divertida, tanto para os mais jovens quanto para os adultos. Buscamos assim proporcionar uma experiência completa de aprendizado e um bom ritmo de aprendizado, para que o aluno aprenda inglês de uma forma efetiva.
                            </p><p>
                                Com professores experientes em sala cobrimos os quatro pilares essenciais do aprendizado em novos idiomas: ouvir, escrever, ler e falar. Com essa abordagem, queremos que os alunos se sintam à vontade para usar o idioma inglês em diferentes situações, atingindo um nível avançado com confiança.
                            </p>
                            <p>
                                Cada tópico é organizado de forma cuidadosa para construir uma base sólida e progressiva, permitindo que os alunos desenvolvam suas habilidades ao longo do tempo. O curso é dividido em três etapas (básico, intermediário e avançado), com duração de um ano cada, e cada etapa vem com sua própria certificação.

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

                        <h3>Módulos do Curso</h3>
                        <div className={style_ig_completo.modulos_ingles_completo}>
                            <Reading />
                            <Writing />
                            <Listening />
                            <Talking />
                        </div>


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