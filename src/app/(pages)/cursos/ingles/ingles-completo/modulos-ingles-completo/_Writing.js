import { useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css'

import Image from "next/image";
import style from "../ingles-completo.module.scss";


const Writing = () => {

  useEffect(() => {


    AOS.init({ duration: 1000 });


  }, []);

  return (

    <div id="modulo-writing" className="modulo-curso modulos-ingles" data-aos='fade-left'>



      <h2>Writing (Escrita)</h2>

      <div className="resumo">
        <figure>

          <Image fill src={'/assets/images/cursos/ingles/curso-ingles-writing-seta-cursos.png'} alt='Curso de inglês. Aprenda a ler em inglês!' />

        </figure>


        <p>
          No módulo do curso de <strong>inglês completo</strong>, <em>Writing (escrita)</em>, os alunos
          são guiados para desenvolver suas
          habilidades de expressão escrita. Desde a construção de frases simples
          até a redação de ensaios mais complexos, os exercícios práticos abordam <em>gramática</em>,
          <em>vocabulário</em> e <em>estrutura textual</em>. A ênfase está na <strong>clareza</strong>,
          <strong> coesão</strong> e desenvolvimento de <strong>argumentos</strong>,
          preparando os alunos para se comunicarem efetivamente por meio da
          <strong> escrita</strong> em diversos contextos.




        </p>






      </div>


    </div>



  )
}

export default Writing;
