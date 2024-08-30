'use client'

import { Link as LinkScroll } from "react-scroll";
import styles from "./slideHome.module.scss"

import ReactPlayer from "react-player";

import Video from "next-video";

function SlideHome() {

  return (
    <div name='slide_home' id={styles.bgSlideHome}>

      <div id={styles.slideHome}>


        <div id={styles.infoSlide}>
          <h1>Procurando por <strong>Cursos de Inglês</strong>, <strong>Informática</strong> e
            <strong> Profissionalizantes</strong>?</h1>
          <p>Nós podemos te ajudar!</p>

          <LinkScroll
            href='#contentPainelCursos'
            className="a-sem-link"

            activeClass="active"
            to="painel_cursos"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Conhecer Cursos <span>&#8249;</span>
          </LinkScroll>
        </div>
        <div id="bgScanlines"></div>

        <ReactPlayer
          id="video_slide"
          url={"assets/videos/seta-cursos-Ingles-informatica.mp4"}
          width="100%"
          height="100%"
          loop
          playing
          muted
        ></ReactPlayer>

      </div>
    </div>
  );

};

export default SlideHome;
