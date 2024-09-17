
import Icon from "@/../public/assets/icons"
import _infoContatoObj from "../../../../components/_infoContatoObj"

// import Contato from "@/components/Contato/Contato.js";

import Image from "next/image.js";

import style from "./page.module.scss"

const FormEnviado = () => {

    return (

        <section className={style.pagina_em_manutencao}>

            <figure>
                <Image width={772} height={324} className={style.img_pagina_manutencao}
                    src={'/assets/images/formulario-enviado.png'}
                    alt={"Formulário enviado com sucesso!"}
                />
            </figure>
            <div>
                <p>
                    Obrigado por entrar em contato conosco! 😊
                </p>
                <p>
                    Responderemos o mais breve possível.
                </p>

                <br />

                <p className="infoContato" id="tel">
                    Se preferir nos chame no
                    WhatsApp: {_infoContatoObj.telefone} <Icon name="whatsapp" className="icon whatsapp" />
                </p>

                <p>
                    ou mande mensagem em uma de nossas páginas:
                </p>

                <p className="infoContato" id="face">
                    <Icon name="facebook" className={style.icon} />
                    &nbsp;
                    <a target="_blank" href={_infoContatoObj.facebook}>
                        Seta Cursos
                    </a>
                    &nbsp; &nbsp;
                    <Icon name="instagram" className={style.icon} />
                    &nbsp;
                    <a target="_blank" href={_infoContatoObj.instagram}>
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