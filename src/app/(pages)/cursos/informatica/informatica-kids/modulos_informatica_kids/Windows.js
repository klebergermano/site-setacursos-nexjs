import Image from "next/image";
function Windows() {

  return (
    <div className="modulos_informatica " id="modulo-windows">

      <h2>Windows Kids  </h2>


      <div className="resumo">


        <figure
        >
          <Image
            src='/assets/images/cursos/informatica/modulo-windows-kids.webp'
            width={300}
            height={0}
          />
        </figure>
        <p>

          O módulo "Windows Kids" do nosso curso oferece uma abordagem envolvente e adaptada, permitindo
          que as crianças explorem as funcionalidades do sistema de maneira lúdica e interativa.
        </p><p>
          O objetivo é
          promover uma compreensão divertida e envolvente,
          capacitando os pequenos para interações seguras e educativas neste ambiente tecnológico fundamental.
        </p>
      </div>

    </div>
  );

}

export default Windows;
