import Image from "next/image";

const jogosEducativos
  = () => {


    return (
      <div className="modulos_informatica " id="modulo-jogos-educativos">
        <h2>Jogos Educativos</h2>

        <div className="resumo">


          <figure>
            <Image
              src='/assets/images/cursos/informatica/modulo-windows-kids.webp'
              width={300}
              height={0}
            />
          </figure>
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
        </div>



      </div>
    );

  }

export default jogosEducativos
  ;
