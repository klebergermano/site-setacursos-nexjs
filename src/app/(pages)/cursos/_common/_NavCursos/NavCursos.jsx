'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from "./nav_cursos.module.scss"

import Link from 'next/link'

function NavCursos({ itemsNav }) {
    const [pathPagina, setPathPagina] = useState('')



    function addClassItemActiveNavCurso() {

        const pathname = window.location.href;
        const url = pathname.split('?')[0]; // Remove everything after '?' including '?'
        const urlArr = url.split('/');
        const lastItemUrl = (urlArr[urlArr.length - 1]).replace('-', '-');

        const navItemActive = document.querySelectorAll('.item_curso_' + lastItemUrl);



        navItemActive.forEach((item) => {
            //item.setAttribute('id', 'item_curso_ativo');
            item.classList.add('item_curso_ativo');
        })



    }

    useEffect(() => {

        addClassItemActiveNavCurso();
        //setPathPagina(lastItemUrl)


    }, [])


    return (

        <nav id='bg-nav-cursos-por-categoria' className={style.bg_nav_cursos_por_categoria}>
            <h2>CURSOS DE INFORMÁTICA</h2>
            {
                itemsNav.map((item) => {
                    const itemPath = (item.link).split('/')
                    const lastItemPath = itemPath[itemPath.length - 1];
                    return (

                        <div className={`${style.item_curso} item_curso_${lastItemPath}`}>

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