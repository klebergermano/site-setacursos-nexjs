'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./header.module.scss"
import Link from "next/link"
import NavHeader from "./HeaderDesktop/NavHeaderDesktop/NavHeaderDesktop"
import LoginAlunoHeader from "./LoginALunoHeader/LoginALunoHeader"

import AOS from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop"
import HeaderMobile from "./HeaderMobile/HeaderMobile"

function Header() {

    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []); // Empty dependency array ensures the effect runs only once when the component mounts



    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
        </>

    )
}

export default Header
