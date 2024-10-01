import React from "react";
import Link from 'next/link'

const LinkLiCursosPage = ({ callback }) => {


    return (
        <>
            <li> <Link className="link-cursos"
                href="/cursos/informatica/informatica-jovem"
                onClick={callback}
            >Informática</Link> </li>
            <li>
                <Link className="link-cursos" href="/cursos/ingles/ingles-completo"
                    onClick={callback}
                >Inglês
                </Link> </li>
            <li> <Link className="link-cursos" href="/cursos/robotica/robotica-maker"
                onClick={callback}
            >Robótica</Link> </li>
            {/* <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
            onClick={callback}
            >Espanhol</Link> </li> */}
            <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
                onClick={callback}
            >Administração</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
                onClick={callback}
            >Desenvolvimento Web</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
                onClick={callback}
            >Programação</Link> </li>
            <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
                onClick={callback}
            >Excel Avançado</Link> </li>
            {/* <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
            onClick={callback}
            >Power BI</Link> </li> */}
            {/* <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
            onClick={callback}
            >Media Social</Link> </li> */}
            <li> <Link className="link-cursos" href="/cursos/pagina-em-manutencao"
                onClick={callback}
            >Apoio Escolar</Link> </li>

        </>
    )
}


export default LinkLiCursosPage;
