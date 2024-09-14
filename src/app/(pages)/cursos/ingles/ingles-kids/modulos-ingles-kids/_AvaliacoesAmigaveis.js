import { useEffect } from "react";

import Image from "next/image";


import AOS from 'aos';
import 'aos/dist/aos.css'

const Avaliacoesamigaveis = () => {

    useEffect(() => {


        AOS.init({ duration: 1000 });


    }, []);

    return (

        <div id="modulo-avaliacoes-amigaveis" className="modulo-curso modulos-ingles" data-aos='fade-right'>

            <figure>

                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-avaliacoes-amigaveis-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />

            </figure>


            <div className="resumo">

                <h2>Avaliações Amigáveis</h2>
                <p>Realização de avaliações periódicas de forma amigável e construtiva para acompanhar o progresso das crianças no seu aprendizado de inglês
                    e identificar áreas de melhoria.</p>

            </div>
        </div>



    )
}

export default Avaliacoesamigaveis;
