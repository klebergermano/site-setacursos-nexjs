import { useEffect } from "react";
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'
import style from "../ingles-completo.module.scss";


const Talking = () => {

  useEffect(() => {


    AOS.init({ duration: 1000 });


  }, []);

  return (

    <div id="modulo-talking" className="modulo-curso modulos-ingles" data-aos='fade-left'>

      <h2>Talking (Conversação)</h2>

      <div className="resumo">
        <figure>

          <Image fill src={'/assets/images/cursos/ingles/curso-ingles-talking-seta-cursos.png'} alt='Curso de inglês. Aprenda a ler em inglês!' />

        </figure>

        <p>No tópico de conversação <em>Talking (conversação)</em> do curso de <strong>inglês completo</strong>,
          visamos desenvolver a <em>confiança</em> e a <em>fluência oral</em> dos alunos em inglês. Através de atividades interativas,
          discussões, debates e simulações, os alunos terão a oportunidade de aplicar o que aprenderam nas outras áreas. Esse módulo enfatiza a
          comunicação eficaz em situações cotidianas e profissionais, preparando os alunos para interagirem de forma
          natural e fluida ao <strong>falar inglês</strong>.</p>






      </div>


    </div>



  )
}

export default Talking;
