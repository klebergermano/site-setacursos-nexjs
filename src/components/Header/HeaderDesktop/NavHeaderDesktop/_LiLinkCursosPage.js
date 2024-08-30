import React from "react";
import Link from 'next/link'

const LinkLiCursosPage = () => {


    return (
        <>
            <li> <Link className="link-cursos" href="/curso-informatica/informatica-essencial">Informática</Link> </li>
            <li> <Link className="link-cursos" href="/curso-ingles/ingles-completo">Inglês</Link> </li>
            <li> <Link className="link-cursos" href="/curso-robotica">Robótica</Link> </li>
            {/* <li> <Link className="link-cursos" href="/curso-manutencao">Espanhol</Link> </li> */}
            <li> <Link className="link-cursos" href="/curso-manutencao">Administração</Link> </li>
            <li> <Link className="link-cursos" href="/curso-manutencao">Desenvolvimento Web</Link> </li>
            <li> <Link className="link-cursos" href="/curso-manutencao">Programação</Link> </li>
            <li> <Link className="link-cursos" href="/curso-manutencao">Excel Avançado</Link> </li>
            {/* <li> <Link className="link-cursos" href="/curso-manutencao">Power BI</Link> </li> */}
            {/* <li> <Link className="link-cursos" href="/curso-manutencao">Media Social</Link> </li> */}
            <li> <Link className="link-cursos" href="/curso-manutencao">Apoio Escolar</Link> </li>

        </>
    )
}


export default LinkLiCursosPage;
