import { useEffect } from "react";

import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'
import style from "../ingles-completo.module.scss";


const Reading = () => {

  useEffect(() => {


    AOS.init({ duration: 1000 });


  }, []);

  return (

    <div id="modulo-reading" className="modulo-curso modulos-ingles" data-aos='fade-right'>



      <h2>Reading (Leitura)</h2>

      <div className="resumo">
        <figure>

          <Image fill src={'/assets/images/cursos/ingles/curso-ingles-reading-seta-cursos.png'} alt='Curso de inglês. Aprenda a ler em inglês!' />
        </figure>


        <p>
          A <strong>compreensão de leitura em inglês</strong> é crucial para aprofundar o entendimento do idioma.
          Assim temos o módulo <em>Reading (leitura)</em> no nosso curso de <strong>inglês completo</strong>, onde abraçamos a leitura
          abrangendo textos de diferentes gêneros, desde artigos jornalísticos até literatura
          contemporânea do idioma inglês. Nesse módulo os alunos aprimoram suas habilidades de <strong>interpretação em inglês</strong>,
          e ampliam seu <em>vocabulário</em>, passando a compreender diferentes estilos de escrita,
          onde incentivamos a leitura crítica e analítica,
          promovendo a capacidade de compreender ideias expressas nas mais diferentes formas no idioma inglês.

        </p>






      </div>


    </div>



  )
}

export default Reading;
