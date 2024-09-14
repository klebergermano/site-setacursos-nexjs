import { useEffect } from "react";

import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css'

import style from "../ingles-completo.module.scss";

const Listening = () => {

  useEffect(() => {


    AOS.init({ duration: 1000 });


  }, []);

  return (

    <div id="modulo-listening" className={`${style.modulo_curso} ${style.modulos_ingles}`} data-aos='fade-right'>

      <h2>Listening (Escuta)</h2>

      <div className={style.resumo}>
        <figure>

          <Image fill src={'/assets/images/cursos/ingles/curso-ingles-listening-seta-cursos.png'} alt='Curso de inglês. Aprenda a ler em inglês!' />

        </figure>


        <p>
          No módulo do curso de <strong>inglês completo</strong>,
          <em>Listening (escuta)</em> é projetado para que os alunos possam
          aprimorar a sua habilidade de <strong>compreensão auditiva do idioma inglês</strong>,
          para isso utilizamos uma variedade de
          recursos, como gravações autênticas, diálogos, palestras e material audiovisual.
        </p><p>
          Os alunos são apresentados ainda a
          diferentes sotaques em inglês, como o <em>Americano</em> e <em>Britânico</em>, tendo acesso a diferentes ritmos e estilos de fala,
          melhorando a capacidade de entender nativos em diferentes contextos.
        </p>




      </div>


    </div>



  )
}

export default Listening;
