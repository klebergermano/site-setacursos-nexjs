import { useRef, useEffect, useState } from "react";
import style from "./painel_cursos.module.scss";
const VantagensGeralCursos = () => {
  const [activeLink, setActiveLink] = useState(null);

  const vantagensCursosRef = useRef(null);

  const hideAllLiSubContentActive = () => {
    const a_active = document.querySelectorAll('.a_active');
    a_active.forEach((item) => {
      item.classList.remove('a_active')
      item.querySelectorAll('.chevron')[0].style.marginRight = '-10px';
      item.querySelectorAll('.chevron')[0].style.transform = 'rotate(0deg)';

    })

    setActiveLink(null)


  }

  const handleOnClick = (e, index) => {


    hideAllLiSubContentActive();

    if (index !== activeLink) {
      setActiveLink(index)
      e.target.classList.add('a_active')
      e.target.querySelectorAll('.chevron')[0].style.transform = 'rotate(-180deg)';
      e.target.querySelectorAll('.chevron')[0].style.marginRight = '-5px';



    } else {
      setActiveLink(null)
      e.target.classList.remove('a_active')
      e.target.querySelectorAll('.chevron')[0].style.transform = 'rotate(0deg)';
      e.target.querySelectorAll('.chevron')[0].style.marginRight = '-10px';



    }


  };

  useEffect(() => {


    const handleClickOutsideDivVantagens = (e) => {
      if (vantagensCursosRef.current && !vantagensCursosRef.current.contains(e.target)) {
        // The click was outside of the element, handle it here
        //console.log('Clicked outside the "vantagensCursos" element.');
        hideAllLiSubContentActive();
      }
    };

    window.addEventListener('click', handleClickOutsideDivVantagens);

    return () => {
      window.removeEventListener('click', handleClickOutsideDivVantagens);
    };
  }, []);


  return (

    <div id={style.vantagensCursos} ref={vantagensCursosRef} data-aos='zoom-in-right'>
      <h2 id={style.titleVantagens}>Vantagens Inclusas!</h2>
      <ul>

        <li>
          <button onClick={(e) => handleOnClick(e, 0)}>
            <span className={style.checked}>✅ </span>
            <span className={style.text}><span className={style.dtqTexto}>CERTIFICADO</span> de Conclusão!</span>
            <span className={style.chevron}>&#8249;</span>
          </button>
          <ul className={`${style}.liSubContent ${activeLink === 0 ? 'active' : ''}`}>
            <li>
              Todos nossos cursos oferecem certificado de conclusão aos alunos.
              Sendo um reconhecimento valioso para nossos alunos,
              comprovando sua dedicação e realização em cada curso.
            </li>
          </ul>
        </li>


        <li>
          <button onClick={(e) => handleOnClick(e, 1)}>
            <span class='checked'>✅ </span>
            <span class='text'>Material <span class='dtqTexto'>GRATUITO!</span></span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 1 ? 'active' : ''}`}>
            <li>
              Oferecemos aos alunos acesso a materiais de ensino sem custo adicional.
              Sendo esse nosso compromisso com a acessibilidade e a eliminação de barreiras
              financeiras para a educação.
              Os materiais podem incluir apostilas, livros digitais, vídeos e outros recursos
              que auxiliam no aprendizado.
            </li>
          </ul>

        </li>

        <li>
          <button onClick={(e) => handleOnClick(e, 2)}>
            <span class='checked'>✅ </span>
            <span class='text'>Mátricula <span class='dtqTexto'>GRATUITA!</span></span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 2 ? 'active' : ''}`}>
            <li>
              Agora, sua jornada educacional está mais acessível do que nunca! Estamos oferecendo matrícula gratuita para o nosso curso, removendo qualquer barreira financeira que possa estar entre você e a busca pelo aprendizado.
            </li>
          </ul>

        </li>
        <li>
          <button onClick={(e) => handleOnClick(e, 3)}>
            <span class='checked'>✅ </span>
            <span class='text'><span class='dtqTexto'>LIVRE</span> de Taxas e Multas!</span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 3 ? 'active' : ''}`}>
            <li>

              Nosso curso é uma oportunidade única, livre de taxas e multas, abrindo as portas para uma educação acessível e sem encargos extras
            </li>
          </ul>
        </li>





        <li>
          <button onClick={(e) => handleOnClick(e, 4)}>
            <span class='checked'>✅ </span>
            <span class='text'>Material atualizado!</span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 4 ? 'active' : ''}`}>
            <li>

              Nosso curso oferece mais do que apenas conhecimento; proporcionamos uma jornada educacional atualizada, garantindo que você esteja sempre um passo à frente nas últimas tendências e avanços.
            </li>
          </ul>

        </li>

        <li>
          <button onClick={(e) => handleOnClick(e, 5)}>
            <span class='checked'>✅ </span>
            <span class='text' >Plantão de dúvidas! </span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 5 ? 'active' : ''}`}>
            <li>
              Nossa dedicação vai além da sala de aula. Oferecemos um curso com plantão de dúvidas, garantindo que seu aprendizado seja acompanhado de perto, com suporte contínuo para esclarecer todas as questões que possam surgir em sua jornada educacional.
            </li>
          </ul>
        </li>

        <li>
          <button onClick={(e) => handleOnClick(e, 6)}>
            <span class='checked'>✅ </span>
            <span class='text' >Turmas reduzidas! </span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 6 ? 'active' : ''}`}>
            <li>
              Priorizamos a qualidade sobre a quantidade. Com turmas reduzidas, nosso curso proporciona um ambiente de aprendizado mais personalizado e interativo, garantindo atenção individualizada para cada aluno, promovendo uma experiência de ensino mais envolvente e eficaz.
            </li>
          </ul>
        </li>


        <li>
          <button onClick={(e) => handleOnClick(e, 7)}>
            <span class='checked'>✅ </span>
            <span class='text'>Professor em sala!</span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 7 ? 'active' : ''}`}>
            <li>
              A presença de um professor qualificado na sala de aula é uma característica essencial. Isso permite que os alunos interajam, façam perguntas, recebam explicações claras e obtenham feedback imediato. A presença do professor também ajuda a criar um ambiente de aprendizado colaborativo e estimulante.
            </li>
          </ul>
        </li>

        <li>
          <button onClick={(e) => handleOnClick(e, 8)}>
            <span class='checked'>✅ </span>
            <span class='text'>Preço Acessível!</span>
            <span class='chevron'>&#8249;</span>
          </button>
          <ul className={`liSubContent ${activeLink === 8 ? 'active' : ''}`}>
            <li>
              A acessibilidade financeira é uma característica fundamental desse curso. Oferecer um preço acessível torna a educação disponível para um público mais amplo e diversificado, reduzindo as barreiras econômicas que muitas vezes impedem as pessoas de buscar aprendizado adicional.
            </li>
          </ul>
        </li>



      </ul>


    </div>
  );

}

export default VantagensGeralCursos;