'use client'
import Info from "../info_contatos";
import Icon from "@/../public/assets/icons";
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./footer.module.scss"

function Footer() {
    return (
        <div id={style.footer} className={style.footer} name='footer'>
            <div id={style.footer_container}>


                <div className={`${style.clmn_footer} ${style.clmn_f_1} `}>

                    <p className={style.info_contato} id="endereco-footer">
                        {Info.endereco}
                    </p>

                    <p className={style.info_contato} id="endereco-footer">
                        {Info.bairro}, {Info.cep} - {Info.cidade}
                    </p>

                    <p className={style.info_contato} id={style.email_footer}>
                        <Icon name="email" className={style.icon} />
                        {Info.email}
                    </p>

                </div>
                <div className={`${style.clmn_footer} ${style.clmn_f_2} `} >

                    <p className={style.info_contato} id={style.tel_footer}>
                        {Info.telefone} <Icon name="whatsapp" className={style.icon} />
                    </p>

                    <p className={style.info_contato} id={style.face_footer}>
                        <Icon name="facebook" className={style.icon} />
                        <a target="_blank" href={Info.facebook}>
                            Seta Cursos
                        </a>
                    </p>

                    <p className={style.info_contato} id={style.insta_footer}>

                        <Icon name="instagram" className={style.icon} />
                        <a target="_blank" href={Info.instagram}>
                            @Seta Cursos
                        </a>
                    </p>



                </div>


            </div>


        </div >

    )
}

export default Footer
