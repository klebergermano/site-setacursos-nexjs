import Image from "next/image";

const AplicacoesCriativas
  = () => {


    return (
      <div className="modulos_informatica " id="modulo-aplicacoes-criativas">

        <h2>Aplicacões Criativas</h2>

        <div className="resumo">


          <figure>
            <Image
              src='/assets/images/cursos/informatica/modulo-aplicacoes-kids.jpg'
              width={300}
              height={0}
            />
          </figure>
          <p>
            O módulo "Aplicações Criativas" do nosso curso foi projetado para inspirar e
            desenvolver as habilidades criativas das crianças por meio da tecnologia.
            De forma envolvente e interativa, exploramos diversas aplicações que estimulam a
            expressão artística,
            o pensamento inovador e a criação digital.</p><p>

            Nosso objetivo é capacitar as crianças a utilizaren a tecnologia como uma ferramenta
            para dar vida
            às suas ideias criativas,
            inspirando-as a explorar novas fronteiras na era digital.
          </p>
        </div>



      </div>
    );

  }

export default AplicacoesCriativas
  ;
