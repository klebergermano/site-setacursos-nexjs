'use client'

import { Link as LinkScroll } from "react-scroll";
import styles from "./slide_home.module.scss"

import ReactPlayer from "react-player";

import Video from "next-video";

function SlideHome() {

  return (
    <div id='bg_slide_home  ' className={styles.bg_slide_home}>

      <div id='slide_home' className={styles.slide_home}>


        <div id={styles.info_slide} >
          <h1>Procurando por cursos de <br /> <strong>Inglês</strong>, <strong>Informática</strong> e
            <strong> Profissionalizantes</strong>?</h1>
          <p>Nós podemos te ajudar!</p>

          <LinkScroll

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
        <div id="bg_scanlines"></div>

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
    </div >
  );

};

export default SlideHome;
