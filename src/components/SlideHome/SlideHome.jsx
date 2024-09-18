'use client'

import { Link as LinkScroll } from "react-scroll";
import styles from "./slide_home.module.scss"
import dynamic from 'next/dynamic';
//import ReactPlayer from "react-player";
// Dynamically import ReactPlayer to enable Suspense
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { Suspense } from "react";
import Loading from "../Loading/loading";
import { useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css'




function SlideHome() {


  useEffect(() => {
    AOS.init({ duration: 500 });
    const slide = document.querySelector('#info_slide');
    setTimeout(() => {
      slide.style.width = '400px'
      slide.style.top = '50%'

      slide.style.opacity = '1.0'


    }, 0)

  }, []);

  return (
    <div id='bg_slide_home  ' className={styles.bg_slide_home}>

      <div id='slide_home' className={styles.slide_home}>


        <div id="info_slide" className={styles.info_slide} >
          <h1 data-aos='zoom-in-down' >Procurando por cursos de <br /> <strong>Inglês</strong>, <strong>Informática</strong> e
            <strong> Profissionalizantes</strong>?</h1>
          <p data-aos='zoom-in-left'>Nós podemos te ajudar!</p>

          <LinkScroll
            data-aos='zoom-in-up'
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
        <Suspense fallback={<Loading />}>
          <ReactPlayer
            id="video_slide"
            url={"/assets/videos/seta-cursos-ingles-informatica.mp4"}
            width="100%"
            height="100%"
            loop
            playing
            muted
            // picture in picture
            pip={true}

          ></ReactPlayer>
        </Suspense>
      </div>
    </div >
  );

};

export default SlideHome;
