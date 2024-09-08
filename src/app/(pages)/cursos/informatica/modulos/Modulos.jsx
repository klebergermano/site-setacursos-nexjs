'use client'
const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = [
    {
        nome: 'Introdução',

        imgUrl: 'img-modulo-introducao.png',

        resumo: `
        Informática é um termo abrangente por isso separamos um módulo onde on aluno tera uma visão abrangente e passara a 
        entender sobre Terminologias, conceitos como binário e a tramissão de dados através de computadores.
        `,
        c_pragmatico: `

<li>Origem da Informática</li>
                  <li>O que são computadore</li>
                  <li>O uso da Tecnologia </li>

                  <li>Tipos de Computadores</li>

                  <li>Nomeclaturas e Terminologias</li>
                  <li>Sistema Computacional</li>
                  <li>Hadwares e Sofwares</li>
                  <li>Nomeclaturas e Terminologias</li>
        
        `

    },
    {
        nome: 'Windows 10',
        resumo: `
        Desenvolva as habilidades necessárias para se tornar um usuário ágil do Windows 10, explorando as 
        principais ferramentas do sistema operacional. Descubra atalhos essenciais para o uso diário, 
        aprenda a instalar e desinstalar programas, dominando do gerenciamento do sistema a manutenção!
        
        `,
        imgUrl: 'img-modulo-windows.png',
        c_pragmatico: `
            <li>Introdução ao Windows 10</li>
                  <li>Area de Trabalho</li>
                  <li>Explorador de Arquivos</li>
                  <li>Menu Iniciar</li>
                  <li>Uso de Pastas e Arquivos</li>
                  <li>Armazenamento</li>
                  <li>Configurações</li>
                  <li>Excluindo Aruqivos e Pastas</li>
                  <li>Uso da Lixeira e Restauração</li>
                  <li>Aplicativos e Programas </li>
                  <li>Atualização e Segurança</li>
                  <li>Personalização e Configuração</li>
                  <li>Ferramentas do Sistema</li>
                  <li>Painel de Controle </li>
                  <li>Manutenção do Sistema</li>
                  <li>Gerenciamento de Programas</li>
                  <li>Instalação e Formatação</li>
                  <li>Multiplas Areas de Trabalho</li>
                  <li>Extensões de Arquivos</li>
                  <li>Arquivos e Pastas Ocultas</li>
                  <li>Promp de Comando CMD</li>
                  <li>Explorador Avançado </li>
                  <li>Editor de Registro</li>
                  <li>Acesso Remoto</li>
                  <li>Máquinas Virtuais</li>
                  <li>Instalação de Programas </li>
        `

    },
]

import EmblaCarousel from './EmblaCarousel'


export default function Modulo() {
    return (


        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    )


}