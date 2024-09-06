import React from "react";
import Link from 'next/link'

const LinkLiCursosPage = () => {


    return (
        <>
            <li> <Link className="link-cursos" href="/cursos/informatica/informatica-essencial">Informática</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/ingles/ingles-completo">Inglês</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/robotica">Robótica</Link> </li>
            {/* <li> <Link className="link-cursos" href="/cursos/manutencao">Espanhol</Link> </li> */}
            <li> <Link className="link-cursos" href="/cursos/manutencao">Administração</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/manutencao">Desenvolvimento Web</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/manutencao">Programação</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/manutencao">Excel Avançado</Link> </li>
            {/* <li> <Link className="link-cursos" href="/cursos/manutencao">Power BI</Link> </li> */}
            {/* <li> <Link className="link-cursos" href="/cursos/manutencao">Media Social</Link> </li> */}
            <li> <Link className="link-cursos" href="/cursos/manutencao">Apoio Escolar</Link> </li>

        </>
    )
}


export default LinkLiCursosPage;
