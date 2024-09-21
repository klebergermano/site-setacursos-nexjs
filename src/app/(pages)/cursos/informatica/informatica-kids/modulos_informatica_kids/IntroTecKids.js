
import Image from "next/image";
const IntroTecKids = () => {

  return (
    <div className="modulos_informatica " id="modulo-intro-tec-kids">

      <h2>Intro Tec Kids</h2>


      <div className="resumo">


        <figure
        >
          <Image
            src='/assets/images/cursos/informatica/modulo-intro-kids.webp'
            width={400}
            height={0}
          />
        </figure>
        <p>
          Nesse módulo introduzimos a criança ao fascinante universo da tecnologia de forma vibrante e educativa.
          Explicamos de maneira interativa e vívida,
          o que é a tecnologia e como ela faz parte do nosso cotidiano.
        </p>
        <p>
          O objetivo é preparar os pequenos para absorverem de forma natural os conceitos mais importantes
          de cada etapa do curso.

        </p>
      </div>

    </div>
  );

}

export default IntroTecKids
  ;
