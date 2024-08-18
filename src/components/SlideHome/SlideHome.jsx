'use client'

import { Link as LinkScroll } from "react-scroll";
import styles from "./slideHome.module.scss"

import ReactPlayer from "react-player";



function SlideHome() {

  return (
    <div id={styles.bgSlideHome}>

      <div id={styles.slideHome}>




        <ReactPlayer
          id="video_slide"
          url={'video.mp4'}
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
