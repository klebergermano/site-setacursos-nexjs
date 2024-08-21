'use client'

import style from "./painel_cursos.module.scss"
import ImgLogo from "@/../public/assets/images/logo.png"
import Image from "next/image";


const cursosList = [
  {
    nome: "Informática",
    imgUrl: 'img_painel_cursos-assets/curso-informatica-seta-cursos.webp',
    linkPage: 'curso-informatica/informatica-essencial',
    alt: 'Cursos de Informática',

    descrição: `Aprenda desde o básico até habilidades avançadas em um curso prático e abrangente.`
  },
  {
    nome: "Inglês",
    imgUrl: 'img_painel_cursos-assets/curso-ingles-seta-cursos.webp',
    linkPage: 'curso-ingles/ingles-completo',
    alt: 'Cursos de Inglês',

    descrição: `Domine o idioma inglês com cursos que vão do início ao 
    avançado, com uma didática dinâmica, completa e envolvente.`
  },


  {
    nome: "Robótica",
    imgUrl: 'img_painel_cursos-assets/curso-robotica-seta-cursos.png',
    linkPage: 'curso-robotica',
    alt: 'Cursos de Robótica',

    descrição: `Aprenda a linguagem da robótica desde os conceitos básicos até níveis mais avançados, 
    através de cursos com uma abordagem didática dinâmica e brangente.`
  },

  {
    nome: "Administração",
    imgUrl: 'img_painel_cursos-assets/curso-administracao-seta-cursos.webp',
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Administgração',

    descrição: `Conheça nossos cursos de admnistração, 
    focados nas habilidades essenciais em gestão,
    organização e comunicação.`,
  },



  {
    nome: "Excel Avançado",
    imgUrl: 'img_painel_cursos-assets/curso-excel-avancado-seta-cursos.webp',
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Excel Avançado',

    descrição: `Curso de excel avançado focado nas ferramentas mais avançadas do mercado, ideal para impulsionar a sua expertise e oportunidades! 
  `
  },

  {
    nome: "Desenvolvimento Web",
    imgUrl: 'img_painel_cursos-assets/curso-desenvolvimento-web-seta-cursos.webp',
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Desenvolvimento Web',

    descrição: `Inicie sua carreira Dev Web com esse curso especializado com as mais 
    recentes tecnologias e práticas do mercado.
    `
  },

  {
    imgUrl: 'img_painel_cursos-assets/curso-programacao-seta-cursos.webp',
    nome: "Programação",
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Programação',

    descrição: `Explore o mundo da programação com nosso curso de Python, 
    uma linguagem de programação versátil e poderosa.`
  },





  {
    imgUrl: 'img_painel_cursos-assets/reforco-apoio-escolar-seta-cursos.webp',
    nome: "Reforço Escolar",
    linkPage: 'curso-manutencao',
    alt: 'Reforço e Apoio Escolar',

    descrição: ` 
    Oferecemos suporte personalizado para cada aluno, fortalecendo habilidades e construindo confiança no aprendizado.`
  },

];

{
  /*

  {
    imgUrl: 'img_painel_cursos-assets/curso-marketing-digital-seta-cursos.webp',
    nome: "Marketing Digital",
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Marketing Digital',

    descrição: `Desperte seu potencial em social media com nosso curso. Domine estratégias, 
    plataformas e construa uma carreira destacada no mundo das redes sociais.`
  },

    {
    nome: "Power BI",
    imgUrl: 'img_painel_cursos-assets/curso-power-bi-seta-cursos.webp',
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Power BI',
    descrição: `Curso abrangente de Power BI, capacitando 
    você com habilidades para transformar informações brutas em insights visuais.`,
  },
  
    {
    imgUrl: 'img_painel_cursos-assets/curso-espanhol-seta-cursos.webp',
    nome: "Espanhol",
    linkPage: 'curso-manutencao',
    alt: 'Cursos de Espanhol',

    descrição: `Explore o mundo falando espanhol. Junte-se ao nosso curso e mergulhe na língua e 
    na cultura, abrindo portas para novas conexões e oportunidades.`
  },
  
  */
}

function PainelCursos() {


  return (
    <section id={style.bg_painel_cursos}>
      <div id={style.content_painel_cursos}>
        <h1>Conheça nossos cursos</h1>
        <div id={style.sobreCursos}>
          <p>
            Explore uma oportunidade educacional que une conveniência, interação e acessibilidade.
            Nossos cursos oferecem uma gama de vantagens para garantir uma experiência de aprendizado
            enriquecedora. Confira o que nos faz uma escolha excepcional!
          </p>
        </div>

        {/* Vantagens Geral Cursos*/}

        {/* <VantagensGeralCursos /> */}

        {
          cursosList.map((item) => {

            return (

              <div data-aos='zoom-in' className={style.bloco_curso}>

                <figure>
                  <a href={item.linkPage}>
                    <Image
                      src={'/assets/images/' + item.imgUrl}
                      width={200}
                      height={200}
                    />
                  </a>
                </figure>
                <div className={style.b_content}>
                  <h2>
                    <a href={item.linkPage}>
                      {item.nome}
                    </a>
                  </h2>
                  <figcaption className={style.descricao}>{item.descrição}</figcaption>

                  <a className={style.btn_curso} href={item.linkPage}>Saiba Mais</a>
                </div>
              </div>
            )
          }
          )
        }


      </div>
    </section>
  );
}

export default PainelCursos;
