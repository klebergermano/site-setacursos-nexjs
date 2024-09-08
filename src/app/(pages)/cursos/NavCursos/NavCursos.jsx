'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import style from "./nav_cursos.module.scss"


import Link from 'next/link'



function addClassItemActiveNavCurso() {

    const pathname = window.location.href;

    const url = pathname.split('?')[0]; // Remove everything after '?' including '?'

    const urlArr = url.split('/');
    const lastItemUrl = urlArr[urlArr.length - 1];
    console.log('========================>', lastItemUrl)

    const navItemActive = document.querySelectorAll('.item-curso-' + lastItemUrl);
    console.log(navItemActive)

    navItemActive.forEach((item) => {
        item.classList.add('item-curso-active');
    })

}

function NavCursos({ itemsNav }) {


    useEffect(() => {

        addClassItemActiveNavCurso();

    }, [])


    return (

        <nav id='bg-nav-cursos-por-categoria' className={style.bg_nav_cursos_por_categoria}>
            <h2>Conheça nossos <strong>CURSOS DE INFORMÁTICA</strong></h2>
            {
                itemsNav.map((item) => {

                    return (

                        <div className={`item_curso_${item.link} ${style.item_curso} ${style.item_curso_informatica}`}>
                            <Link href={`/cursos/${item.link}`}>
                                <figure>
                                    <Image width={200} height={0} src={`/assets/images/cursos/${item.imgUrl}`} alt='curso-informatica-pratica-seta-cursos' />
                                    <figcaption>
                                        {item.nome}
                                    </figcaption>
                                </figure>

                            </Link>

                        </div>
                    )
                })


            }
        </nav>


    )

}


export default NavCursos