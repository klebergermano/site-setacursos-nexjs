import { useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";

const RecursosMultimidia = () => {

    useEffect(() => {


        AOS.init({ duration: 1000 });


    }, []);

    return (

        <div id="modulo-recursos-multimidia" className="modulo-curso modulos-ingles" data-aos='fade-right'>

            <figure>
                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-recursos-multimidia-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />


            </figure>


            <div className="resumo">

                <h2>Recursos Multimídia</h2>

                <p>Utilização de recursos multimídia, como vídeos, aplicativos educativos e jogos online, para complementar o aprendizado de inglês em sala de aula.</p>
            </div>
        </div>



    )
}

export default RecursosMultimidia;
