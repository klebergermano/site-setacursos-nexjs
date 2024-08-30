'use client'

import style from "./login_aluno_header.module.scss"
import Link from "next/link"
import Icon from "@/../public/assets/icons";




function LoginAlunoHeader() {
    return (
        <div id={style.login_aluno_header}>
            <ul>
                <li>
                    <Icon name="user" className={style.icon} />
                    Área do Aluno: &nbsp;&nbsp;&nbsp;
                    <a href='#'>
                        Entrar
                    </a>


                </li>
            </ul>
        </div>

    )
}

export default LoginAlunoHeader
