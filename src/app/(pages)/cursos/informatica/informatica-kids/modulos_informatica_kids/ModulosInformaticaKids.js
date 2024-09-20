

import style from "./modulos-informatica-kids.module.scss"
import Image from "next/image"

const modulosInfo = [

  {
    nome: 'Intro Tec Kids',
    imgUrl: 'modulo-intro-kids.png',
    resumo: `
    <p>
          Nesse módulo introduzimos a criança ao fascinante universo da tecnologia de forma vibrante e educativa.
          Explicamos de maneira interativa e vívida,
          o que é a tecnologia e como ela faz parte do nosso cotidiano.
          </p><p>
                  O objetivo é preparar os pequenos para absorverem de forma natural os conceitos mais importantes
          de cada etapa do curso.
</p>
`,
  },

  {
    nome: 'Windows Kids',
    imgUrl: 'modulo-windows-kids.png',
    resumo: `

<p>
          O módulo "Windows Kids" do nosso curso oferece uma abordagem envolvente e adaptada, permitindo
          que as crianças explorem as funcionalidades do sistema de maneira lúdica e interativa.
          </p><p>
          O objetivo é
          promover uma compreensão divertida e envolvente,
          capacitando os pequenos para interações seguras e educativas neste ambiente tecnológico fundamental.
</p>
`,
  },

  {
    nome: 'Programação Kids',
    imgUrl: 'modulo-programacao-kids.png',
    resumo: `
    <p>
O módulo "Programação Kids" em nosso curso oferece uma introdução
            empolgante e acessível ao mundo da programação para crianças.
            Exploramos conceitos fundamentais do pensamento computacional e
            da lógica de codificação, estimulando o pensamento lógico e criativo.
     </p><p>     
            Nosso objetivo é inspirar uma paixão pela resolução de problemas e pela criação digital
            de maneira divertida e educativa.
            </p>
`,
  },
  {
    nome: 'Aplicacões Criativas',
    imgUrl: 'modulo-aplicacoes-kids.jpg',
    resumo: `
    <p>
    O módulo "Aplicações Criativas" do nosso curso foi projetado para inspirar e
            desenvolver as habilidades criativas das crianças por meio da tecnologia.
            De forma envolvente e interativa, exploramos diversas aplicações que estimulam a
            expressão artística,
            o pensamento inovador e a criação digital.</p>
            <p>

            Nosso objetivo é capacitar as crianças a utilizaren a tecnologia como uma ferramenta
            para dar vida
            às suas ideias criativas,
            inspirando-as a explorar novas fronteiras na era digital.
</p>
            `
  },

  {
    nome: 'Componentes Kids',
    imgUrl: 'modulo-componentes-kids.png',
    resumo: `
    <p>
Nesse módulos buscamos uma abordagem acessível e
          envolvente para que os pequenos compreendam os elementos essenciais que compõem um computador.
          Exploramos de maneira simples os componentes fundamentais, como processador, memória, armazenamento
          e periféricos. </p><p>
          O objetivo é despertar o interesse das crianças pelo funcionamento interno dos computadores,
          incentivamos a curiosidade e o entendimento sobre as peças tecnologicas que fazem parte do nosso dia a dia.
        </p>
`,
  },

  {
    nome: 'Jogos Educativos',
    imgUrl: 'modulo-jogos-educativos.png',
    resumo: `
<p>
    O módulo "Jogos Educativos" em nosso curso apresenta uma abordagem envolvente,
    centrada no aprendizado digital das crianças.
    Exploramos uma variedade de jogos para estimular habilidades cognitivas,
    oferecendo desafios que promovem o raciocínio, a resolução de problemas e a
    compreensão prática da tecnologia. </p><p>
    O objetivo é criar um ambiente envolvente onde as crianças possam aprender de maneira descontraída
    e inspiradora, utilizando jogos educativos como
    ferramentas valiosas.
    </p>
`,
  },

  {
    nome: 'Internet com Segurança',
    imgUrl: 'modulo-internet-kids.png',
    resumo: `
    <p>
No módulo "Internet Kids", as crianças são guiadas em uma jornada sobre a navegação segura na internet.
            Abordamos conceitos vitais,
            como privacidade online e reconhecimento de conteúdo confiável, fornecendo dicas e orientações práticas.
         </p><p>
            O objetivo é equipar os pequenos com habilidades essenciais para uma navegação online protegida e consciente,
            garantindo uma experiência digital positiva e enriquecedora.
            </p>
`,
  },




]

function ModulosInformaticaKids() {


  return (

    <div className={style.modulos_informatica_kids}>


      {modulosInfo.map((item, index) => (
        <div key={index} data-aos='fade-right'>
          <h2>{item.nome} </h2>
          <figure>
            <Image width={400} height={260} src={`/assets/images/cursos/informatica/${item.imgUrl}`} alt={item.nome} />
          </figure>

          <div class={style.resumo}
            dangerouslySetInnerHTML={{ __html: item.resumo }}
          >



          </div>
        </div>

      ))}


    </div>


  )
}

export default ModulosInformaticaKids;
