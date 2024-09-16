import React from "react";

import Contato from "@/components/Contato/Contato.js";

import Image from "next/image.js";
import style from "./page.module.scss"
const ManutencaoLandPage = () => {


    return (

        <section className={style.pagina_em_manutencao}>

            <figure> <Image width={792} height={817} className={style.img_pagina_manutencao} src={'/assets/images/cursos/pagina-em-manutencao/pagina-em-manutencao.png'} /></figure>
            <div className="cursos-manutencao-pagina">

                <h1>Conheça um pouco mais dos nossos cursos!</h1>
                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/INFO@0.25x.png'} /></figure>
                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/ENG@0.25x.png'} /></figure>
                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/PROG@0.25x.png'} /></figure>
                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/EXCEL@0.25x.png'} /></figure>

                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/ADM@0.25x.png'} /></figure>

                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/APESC@0.25x.png'} /></figure>

                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/POWERBI@0.25x.png'} /></figure>
                <figure><Image width={620} height={877} src={'/assets/images/cursos/pagina-em-manutencao/BD@0.25x.png'} /></figure>


            </div>

            <Contato />
        </section>


    )
}

export default ManutencaoLandPage; 