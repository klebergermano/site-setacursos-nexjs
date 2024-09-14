import { useEffect } from "react";

import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'



const AtividadesCriativas = () => {

    useEffect(() => {


        AOS.init({ duration: 1000 });


    }, []);

    return (

        <div id="modulo-atividades-criativas" className="modulo-curso modulos-ingles" data-aos='fade-right'>

            <figure>

                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-atividades-criativas-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />
            </figure>


            <div className="resumo">

                <h2>Atividades Criativas</h2>
                <p>Incentivo à criação de projetos e atividades criativas, como desenhos,
                    peças teatrais simples, cartas, etc., para praticar o inglês de forma mais prática e divertida.</p>

            </div>
        </div>



    )
}

export default AtividadesCriativas;
