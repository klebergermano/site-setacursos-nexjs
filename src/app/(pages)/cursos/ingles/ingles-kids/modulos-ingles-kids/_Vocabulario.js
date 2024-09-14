import { useEffect } from "react";

import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'

const VocabularioTematico = () => {

    useEffect(() => {


        AOS.init({ duration: 1000 });


    }, []);

    return (

        <div id="modulo-vocabulario-tematico" className="modulo-curso modulos-ingles" data-aos='fade-right'>

            <figure>

                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-vocabulario-tematico-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />


            </figure>


            <div className="resumo">

                <h2>Vocabulário Temático</h2>

                <p>Ensino de vocabulário relacionado aos interesses e experiências das crianças, como animais, cores, alimentos, família, etc.</p>
            </div>
        </div>



    )
}

export default VocabularioTematico;
