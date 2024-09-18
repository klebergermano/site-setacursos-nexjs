
import Icon from "@/../public/assets/icons"
import _infoContatoObj from "../../../../components/_infoContatoObj"
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
// import Contato from "@/components/Contato/Contato.js";

import Image from "next/image.js";

import style from "./page.module.scss"

const FormEnviado = () => {

    return (

        <section className={style.pagina_em_manutencao}>

            <figure>
                <Image width={772} height={324} className={style.img_pagina_manutencao}
                    src={'/assets/images/formulario-erro.png'}
                    alt={"Formulário enviado com sucesso!"}
                />
            </figure>
            <div>
                <p>
                    Agradecemos por entrar em contato conosco!
                </p>
                <p>

                    Infelizmente, houve um erro ao enviar seu formulário. Pedimos desculpas pelo transtorno.
                </p>


                <p>

                    <Link href={"/"}>
                        <FaArrowLeft />
                        Voltar para página inícial</Link></p>
                <br />
                <p>
                    Por favor, tente novamente ou
                    entre em contato através de um de nossos outros canais de comunicação.
                </p>


                <br />

                <p className="infoContato" id="tel">

                    WhatsApp: {_infoContatoObj.telefone} <Icon name="whatsapp" className="icon whatsapp" />
                </p>

                <p>
                    Se preferir, nos mande mensagem em uma de nossas páginas:
                </p>

                <p className="infoContato" id="face">
                    <a target="_blank" href={_infoContatoObj.facebook}>
                        <Icon name="facebook" className={style.icon} />
                        &nbsp;

                        Seta Cursos
                    </a>


                    <a target="_blank" href={_infoContatoObj.instagram}>
                        <Icon name="instagram" className={style.icon} />
                        &nbsp;
                        @Seta Cursos
                    </a>
                </p>
                <br />

                <p>🌞 Tenha um ótimo dia! 🌞
                </p>
            </div>
            {/* <Contato /> */}
        </section>


    )
}

export default FormEnviado; 