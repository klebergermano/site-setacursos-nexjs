import React, { useEffect } from "react";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'

const CulturaTradicoes = () => {

    useEffect(() => {


        AOS.init({ duration: 1000 });


    }, []);

    return (

        <div id="modulo-cultura-tradicoes" className="modulo-curso modulos-ingles" data-aos='fade-right'>

            <figure>

                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-cultura-tradicoes-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />

            </figure>


            <div className="resumo">

                <h2>Culturas e Tradições</h2>
                <p>Também abordamos as culturas e tradições de países de língua inglesa para ampliar o entendimento das crianças sobre o contexto linguístico e cultural do idioma inglês.</p>

            </div>
        </div>



    )
}

export default CulturaTradicoes;
