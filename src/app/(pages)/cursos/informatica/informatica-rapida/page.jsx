import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Modulo from "../_modulosSlide/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"


import Planos from "./_planos/_planos"


import imgPrincipal from "@/../public/assets/images/cursos/informatica/img-curso-informatica-rapida.webp"

export const metadata = {
    title: "Informática Kids",
    description: `O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto`,

    openGraph: {
        title: "Informática Kids",
        description: `O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto`,
        url: "https://setacursos/cursos/informatica/informatica-kids",
        images: [
            {
                url: `${imgPrincipal}`,
                width: 1200,
                height: 630,
                alt: "Imagem do curso Informática Kids",
            },
        ],

        siteName: "Seta Cursos",
    },

};



export default function InformáticaAvancada() {
    return (


        <main className={style.main}>
            <div className={style.content}>

                <h1>Informática Rápida</h1>
                <figure className={style.bg_img_destaque} data-aos='fade-right'>
                    <Image width={800} height={300} src={imgPrincipal} />
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

    )


}