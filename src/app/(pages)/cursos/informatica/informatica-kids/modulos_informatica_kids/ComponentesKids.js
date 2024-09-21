import Image from "next/image";

const ComponentesKids = () => {


  return (
    <div className="modulos_informatica " id="modulo-componentes-kids">
      <h2>Componentes Kids</h2>


      <div className="resumo">


        <figure>
          <Image
            src='/assets/images/cursos/informatica/modulo-windows-kids.webp'
            width={300}
            height={0}
          />
        </figure>
        <p>

          Nesse módulos buscamos uma abordagem acessível e
          envolvente para que os pequenos compreendam os elementos essenciais que compõem um computador.
          Exploramos de maneira simples os componentes fundamentais, como processador, memória, armazenamento
          e periféricos. </p><p>
          O objetivo é despertar o interesse das crianças pelo funcionamento interno dos computadores,
          incentivamos a curiosidade e o entendimento sobre as peças tecnologicas que fazem parte do nosso dia a dia.
        </p>
      </div>

    </div>
  );

}

export default ComponentesKids
  ;
