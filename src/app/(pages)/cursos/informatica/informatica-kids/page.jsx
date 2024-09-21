'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../page.module.scss"
import style_kids from "./informatica-kids.module.scss";
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"

// import Contato from "@/components/Contato/Contato"


import IntroTecKids from "./modulos_informatica_kids/IntroTecKids.js";
import Windows from "./modulos_informatica_kids/Windows.js";
import InternetKids from "./modulos_informatica_kids/InternetKids.js";
import AplicacoesCriativas from "./modulos_informatica_kids/AplicacoesCriativas.js";
import ComponentesKids from "./modulos_informatica_kids/ComponentesKids.js";
import JogosEducativos from "./modulos_informatica_kids/JogosEducativos.js";
import ProgramacaoKids from "./modulos_informatica_kids/ProgramacaoKids.js";

import _itemsNav from "../_itemsNavCursos";
import VantagensCurso from "../Lateral/VantagensCurso";




export default function InformáticaKids() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

                        <h1>Informática Kids</h1>
                        <figure className={style.bg_img_destaque}>
                            <Image width={800} height={300} src={'/assets/images/cursos/informatica/curso-informatica-kids.png'} />
                        </figure>
                        <div className={style.resumo}>
                            <p>
                                Criado com carinho e dedicação, nosso curso oferece as crianças uma introdução lúdica e educativa ao vasto
                                mundo da tecnologia. Por meio de atividades interativas e jogos envolventes, as crianças explorarão conceitos
                                fundamentais de informática, ao mesmo tempo em que desenvolvem habilidades essenciais para o século 21.</p>
                            <p>
                                Nosso curso "Informática Kids" é dividido em duas etapas cuidadosamente planejadas.

                                Na primeira etapa, voltada para crianças mais novas, exploramos de maneira lúdica e interativa conceitos fundamentais de informática.

                                Na segunda etapa, preparamos as crianças para cursos mais avançados e profissionalizantes, oferecendo uma transição suave para um aprendizado mais aprofundado.

                                Buscamos assim proporcionar uma jornada educativa completa, adaptada às diferentes fases de desenvolvimento, capacitando as crianças desde cedo e preparando-as para desafios mais complexos no campo da informática.

                            </p>
                        </div>

                        <div className={style.visao_geral_curso}>
                            <h4>VISÃO GERAL </h4>
                            <li>

                                <Icon name="calendar" className={style.icon} />
                                Tempo de Duração: 14 meses</li>
                            <li>

                                <Icon name="class2" className={style.icon} />
                                Aulas por Semana: 2 (2 horas p/ aula)</li>
                            <li>

                                <Icon name="time-duration" className={style.icon} />

                                Carga Horária:  224 horas </li>
                            <li>
                                <Icon name="certificate" className={style.icon} />
                                Certificado de qualificação profissional incluso!</li>
                            <li>
                                <Icon name="books" className={style.icon} />
                                Material didático incluso!
                            </li>
                            <li>
                                <Icon name="moeda-real" className={style.icon} />
                                Investimento: R$ 170,00 (mensal)
                            </li>

                        </div>

                        <h3>Módulos do Curso</h3>

                        <div className={style_kids.modulos_informatica_kids}>



                            <IntroTecKids />
                            <Windows />
                            <ProgramacaoKids />
                            <AplicacoesCriativas />
                            <ComponentesKids />
                            <JogosEducativos />  <InternetKids />

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