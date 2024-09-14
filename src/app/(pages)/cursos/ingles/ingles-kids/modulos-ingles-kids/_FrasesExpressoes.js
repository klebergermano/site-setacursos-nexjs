import Image from "next/image";

const FrasesExpressoes = () => {


    return (

        <div id="modulo-frases-expressoes" className="modulo-curso modulos-ingles" data-aos='fade-right'>


            <figure>

                <Image fill src={'/assets/images/cursos/ingles/curso-ingles-kids-frases-expressoes-seta-cursos.png'} alt='Curso de inglês kids, com atividades criativas' />


            </figure>


            <div className="resumo">

                <h2>Frases e Expressões Cotidianas</h2>

                <p>

                    Introdução de expressões e frases em inglês que as crianças usam no dia a dia, como cumprimentos,
                    pedidos simples e as resposta mais comuns para essas expressões.
                </p>

            </div>


        </div>


    )
}

export default FrasesExpressoes;
