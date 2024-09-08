'use client'
import NavCursos from "../../NavCursos/NavCursos"
import style from "../page.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../modulos/Modulos"

const itemsNav = [
    {
        nome: 'Informática Rapida Adultos',
        link: 'informatica/informatica-rapida',
        imgUrl: 'informatica/curso-informatica-rapida-seta-cursos-thumb.png',
    },
    {
        link: 'informatica/informatica-pratica',
        imgUrl: 'informatica/curso-informatica-pratica-seta-cursos-thumb.png',
        nome: 'Informática Prática Adultos'
    },
    {
        link: 'informatica/informatica-essencial',
        imgUrl: 'informatica/curso-informatica-essencial-seta-cursos-thumb.png',
        nome: 'Informática Essencial'
    },
    {
        link: 'informatica/informatica-avancada',
        imgUrl: 'informatica/curso-informatica-avancado-seta-cursos-thumb.png',
        nome: 'Informática Avançada'
    },

    {
        link: 'informatica/informatica-kids',
        imgUrl: 'informatica/curso-informatica-kids-seta-cursos-thumb.png',
        nome: 'Informática Kids'
    },





]

export default function Page() {
    return (
        <div className={`${style.pages_informatica} pages`}>

            <NavCursos itemsNav={itemsNav} />
            <div className={style.bg_content_page}>

                <main className={style.main}>

                    <h1>Informática Essêncial</h1>
                    <figure className={style.bg_img_destaque}>
                        <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-01.png'} />
                    </figure>
                    <div className={style.resumo}>
                        <p>Explore os fundamentos da informática com nosso curso essencial!
                            Seja você um iniciante ou alguém em busca de aprimoramento,
                            nosso curso INFORMÁTICA ESSENCIAL é projetado para atender a todos os níveis de conhecimento,
                            tornando-o acessível e envolvente para todos.</p>

                        <p>Nosso ambiente de aprendizado é acolhedor e prático, repleto de dicas valiosas, proporcionando a você a
                            confiança necessária para se aventurar no mundo digital. Ao longo do curso, você terá a oportunidade de
                            explorar e aplicar os conhecimentos adquiridos, preparando-o para enfrentar os desafios e oportunidades que a tecnologia oferece.</p>
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
                            Investimento: R$ 160,00 (mensal)
                        </li>


                    </div>



                    <h3>Módulos do Curso</h3>
                    <Modulo />


                </main>
                <aside className={style.aside}>
                    <div className={style.block_lateral}>
                        <h3>Vantagens Inclusas!</h3>
                        <ul>
                            <li><span className={style.icon_checked}>&#10003;</span> CERTIFICADO de Conclusão!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Material GRATUITO!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Mátricula GRATUITA!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> LIVRE de Taxas e Multas!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Material atualizado!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Plantão de dúvidas!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Turmas reduzidas!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Professor em sala!</li>
                            <li><span className={style.icon_checked}>&#10003;</span> Preço Acessível!</li>
                        </ul>
                    </div>
                </aside>

            </div>

        </div>
    )


}