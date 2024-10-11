'use client'
import style from "../../pages-cursos.module.scss"

import Image from "next/image"

import Icon from "@/../public/assets/icons/index"

// import Contato from "@/components/Contato/Contato"
import Planos from "./_planos/_planos"

import _itemsNav from "../_itemsNavCursos"
import ModulosRoboticaMaker from "./modulos/ModulosRoboticaMaker"
import VantagensCurso from "../Lateral/VantagensCurso"


export default function Page() {
    return (


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


            </div>{/*content */}

            <h3>Módulos do Curso</h3>
            <ModulosRoboticaMaker />
            <Planos />
        </main>

    )


}