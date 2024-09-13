
import Image from "next/image";
const InternetKids
  = () => {


    return (
      <div className="modulos_informatica " id="modulo-internet-kids">

        <h2>Internet com Segurança</h2>

        <div className="resumo">


          <figure>
            <Image
              src='/assets/images/cursos/informatica/modulo-internet-kids.jpg'
              width={300}
              height={0}
            />
          </figure>
          <p>


            No módulo "Internet Kids", as crianças são guiadas em uma jornada sobre a navegação segura na internet.
            Abordamos conceitos vitais,
            como privacidade online e reconhecimento de conteúdo confiável, fornecendo dicas e orientações práticas.
          </p>
          <p>
            O objetivo é equipar os pequenos com habilidades essenciais para uma navegação online protegida e consciente,
            garantindo uma experiência digital positiva e enriquecedora.
          </p>
        </div>



      </div>
    );

  }

export default InternetKids
  ;
