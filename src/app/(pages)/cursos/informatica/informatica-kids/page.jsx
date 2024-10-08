'use client'

import style from "../../pages-cursos.module.scss"
import Image from "next/image"
import slideObj from "./_slideObj"
import Modulo from "./_modulosSlideKids/Modulos"
import Planos from "./_planos/_planos"


export default function InformáticaKids() {
    return (

        <main className={style.main}>

            <div className={style.content}>

                <h1>Informática Kids</h1>
                <figure className={style.bg_img_destaque} data-aos='fade-right'>
                    <Image width={800} height={300} src={'/assets/images/cursos/informatica/curso-informatica-kids.png'} />
                </figure>
                <div className={style.resumo}>
                    <p>
                        No curso de informática para crianças, o objetivo é proporcionar uma introdução divertida e envolvente ao mundo digital, preparando os pequenos para as diversas tecnologias que farão parte de suas vidas. As aulas são projetadas para serem interativas, utilizando jogos, atividades práticas e projetos criativos que estimulam a curiosidade e o aprendizado. Os alunos aprendem noções básicas de programação, navegação segura na internet e o uso de softwares, desenvolvendo habilidades essenciais que serão fundamentais no futuro.
                    </p>
                    <br />
                </div>




                <Modulo slideObj={slideObj} title={"Módulos Informática Kids"} />

                {/* <ModulosInformatica /> */}


            </div>{/* contain */}
            <Planos />

        </main>

    )


}