'use client'
import style from "./sobre.module.scss"
import Image from "next/image";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Sobre = () => {


  return (
    <div className="sessao-homepage" id={style.sobre}>
      <div id={style.content}>
        <div>
          <h1 data-aos='zoom-in' data-aos-duration='100'>Quem somos</h1>
          <p data-aos='zoom-in-right' data-aos-duration='1000'>
            <br />
            Nós a SETA CURSOS somos uma escola de cursos livres, que acredita firmemente que
            a chave para uma sociedade melhor começa com uma educação de qualidade.
          </p>

          <p data-aos='zoom-in-left' data-aos-duration='1000'>

            Há mais de 5 anos, nos dedicamos à educação, proporcionando aos nossos alunos uma
            experiência única por meio de cursos completamente personalizados e constantemente
            atualizados. Nesse período, temos aprimorado continuamente nossos programas educacionais,
            assegurando que estejam alinhados com a constante evolução e necessidades do mundo atual.
          </p>
          <p data-aos='zoom-in-right' data-aos-duration='1000'>
            Oferecemos assim cursos de <strong>Inglês</strong>, <strong>Informática</strong>,
            <strong>Administração</strong>, <strong>Programação</strong>, <strong>Desenvolvimento Web</strong>,
            <strong>Marketing Digital</strong>, <strong>Excel Avançado</strong> e muito mais!
          </p>


          <p data-aos='zoom-in-left' data-aos-duration='1000'>
            Nossa missão é levar conhecimento de qualidade, de maneira prática e acessível.
            Buscamos oferecer uma educação que atenda às necessidades individuais de cada aluno,
            com o compromisso de estar sempre à frente das últimas tendências e informações, garantindo a
            relevância e a atualidade de nossos cursos e contribuindo
            para o crescimento pessoal e profissional dos nossos alunos.
            <b />
          </p>


          <p data-aos='zoom-in-up' data-aos-duration='1000'>

            Se você busca alavancar seus conhecimentos nas áreas de tecnologia, idiomas ou reforço educacional,
            está no lugar certo!
            <LinkScroll
              href='/contato'

              activeClass="active"
              to="bg-contato-home"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}> Fale conosco </LinkScroll> e saiba mais! 🚀

          </p>


        </div>
        <figure className={style.logo_sobre}>
          <Image src={"/assets/images/logo2.png"} width={300} height={0} alt='Seta Cursos' loading='lazy' />
        </figure>
      </div>
    </div>
  );
}

export default Sobre;
