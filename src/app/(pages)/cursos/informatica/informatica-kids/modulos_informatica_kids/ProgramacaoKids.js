
import Image from "next/image";

const IntroTecKids
  = () => {


    return (
      <div className="modulos_informatica " id="modulo-programacao-kids">
        <h2>Programação Kids</h2>

        <div className="resumo">


          <figure>
            <Image
              src='/assets/images/cursos/informatica/modulo-programacao-kids.jpg'
              height={200}
              width={300}
            />
          </figure>
          <p>

            O módulo "Programação Kids" em nosso curso oferece uma introdução
            empolgante e acessível ao mundo da programação para crianças.
            Exploramos conceitos fundamentais do pensamento computacional e
            da lógica de codificação, estimulando o pensamento lógico e criativo.
          </p><p>
            Nosso objetivo é inspirar uma paixão pela resolução de problemas e pela criação digital
            de maneira divertida e educativa.
          </p>
        </div>



      </div>
    );

  }

export default IntroTecKids
  ;
