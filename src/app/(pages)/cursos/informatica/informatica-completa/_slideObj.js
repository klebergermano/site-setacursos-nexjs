const slideObj = [
    {
        nome: 'Introdução',

        imgUrl: 'modulo-introducao.png',

        resumo: `
        <p>
      Informática é um termo abrangente; por isso, criamos um módulo que proporciona ao aluno uma visão ampla sobre terminologias, 
      a história do computador e conceitos fundamentais como a estrutara dos computadores, peça básicas e a sua disposição, além 
      de noções sobre: componentes eletrônicos, sistema binário e a transmissão de dados.
        </p>
        `,
        c_pragmatico: `
                  <li>Origem da Informática</li>
                  <li>Definição de um Computador</li>
                  <li>O uso da Tecnologia </li>
                  <li>Tipos de Computadores</li>
                  <li>Nomeclaturas e Terminologias</li>
                  <li>Sistema Computacional</li>
                  <li>Hardwares e Sofwares</li>
                  <li>Nomeclaturas e Terminologias</li>
        `

    },
    {
        nome: 'Windows 10',
        imgUrl: 'modulo-windows.png',

        resumo: `
       <p>
Neste módulo, desenvolveremos habilidades essenciais para um uso ágil do Windows 10, explorando ferramentas, atalhos práticos,  
instalação e desinstalação de programas, além de gerenciamento e manutenção do sistema.
</p><p>Abordamos ainda conceitos fundamentais 
até personalização e otimização de desempenho, incluindo PowerShell, 
configuração de redes e do sistema.
</p>
        `,
        c_pragmatico: `
            <li>Introdução ao Windows 10</li>
                  <li>Area de Trabalho</li>
                  <li>Explorador de Arquivos</li>
                  <li>Menu Iniciar</li>
                  <li>Uso de Pastas e Arquivos</li>
                  <li>Armazenamento</li>
                  <li>Configurações</li>
                  <li>Excluindo Arquivos e Pastas</li>
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
                  <li>Prompt de Comando CMD</li>
                  <li>Explorador Avançado</li>
                  <li>Editor de Registro</li>
                  <li>Acesso Remoto</li>
                  <li>Máquinas Virtuais</li>
               
        `

    },

    {
        nome: 'Pacote Office',
        resumo: `
                <p>Direcionamos uma atenção especial ao pacote Office que é considerado um requisito 
                essenciais no mercado de trabalho. Neste módulo, os alunos aprendem de maneira simples e direta, 
                por meio de exemplos práticos e aplicáveis.
</p><p>  aplicativos Microsoft Office, como Word, Excel, PowerPoint e Outlook.
                  Os participantes aprendem técnicas avançadas de formatação, automação, análise
                  de dados, criação de apresentações impactantes e gerenciamento avançado de e-mails.
</p>
        `,
        imgUrl: 'modulo-office-avancado.png',
        c_pragmatico: `
                              <span className="span_office">
                    <h4>Word</h4>
                    <li>Instrodução</li>
                    <li>Interface </li>
                    <li>Cabeçalho e Rodapé</li>
                    <li>Formatação de Texto</li>
                    <li>Orientação de Página</li>
                    <li>Layout de Página</li>
                    <li>Inserção de Imagens</li>
                    <li>Area de Tranferência</li>
                    <li>Armazenamento de Arquivos</li>
                    <li>Templates de Documento</li>
                    <li>Formataçao de Curriculos</li>
                    <li>Listas</li>
                    <li>Tabulação Mala Direta</li>
                    <li>Sumário automatico</li>
                    <li>Norma ABNT</li>
                    <li>Design de Página</li>
                    <li>Formatação com Estilo</li>
                    <li>Teclad de Atalho</li>
                    <li>Inserindo Objetos</li>
                    <li>Formas 3D</li>
                    <li>Trabalhando com Documentos</li>
                    <li>Corretor Ortográfico</li>
                    <li>Modo de Exibição</li>
                    <li>Recurso Diga-me</li>
                  </span>
                  <span className="span_office">
                    <h4>Excel</h4>
                    <li>Interface</li>
                    <li>Area de Tranferência</li>
                    <li>Modo de Exibição</li>
                    <li>Layout de Página</li>
                    <li>Pastas de Trabalho</li>
                    <li>Conceito de Planilhas</li>
                    <li>Conceitos de Tabelas</li>
                    <li>Navegação</li>
                    <li>Inserção de Informações</li>
                    <li>Operações Aritméticas</li>
                    <li>Personalização de Tabelas</li>

                    <li>Formatar como tabela</li>
                    <li>Formatação condicionais</li>
                    <li>Manipulação de Gráficos</li>
                    <li>Mini Gráficos</li>
                    <li>Trabalhando com Planilhas</li>
                    <li>Trabalhando com Tabelas</li>
                    <li>Tabela Dinâmica</li>
                    <li>Funções Condicionais</li>
                    <li>Formulas e Funções </li>
                    <li>Hyper Links</li>
                    <li>Funções Financeiras</li>
                    <li>Cálculo com Data e Hora</li>
                    <li>Atalhos</li>
                    <li>Seleção Inteligente</li>
                    <li>Filtro e Classificaçao</li>
                    <li>Impressão de Relatórios</li>
                  </span>
                  <span className="span_office">
                    <h4>Powerpoint</h4>
                    <li>Instrodução Power Point</li>
                    <li>Interface</li>
                    <li>Modo de Apresentação</li>
                    <li>Modo de Edição</li>
                    <li>Criação de Slides</li>
                    <li>Efeito de Animação</li>
                    <li>Efeito de Transição</li>
                    <li>Design de Slide </li>
                    <li>Inserção de Objetos</li>
                    <li>Inserção de Vídeos</li>
                    <li>Objetos 3D</li>
                    <li>Gravação de Slides</li>
                    <li>Apresentação em Vídeo</li>
                    <li>Hyperlinks</li>
                    <li>Telas Compartilhadas</li>
                    <li>Teclas de Atalhos</li>
                    <li>Dicas de Apresentação</li>
                    <li>Dicas de Seminários</li>
                  </span>
              <span className="span_office">
                    <h4>Outlook</h4>
                    <li>Gerenciamento Avançado de E-mails</li>
                    <li>Organização de Calendários</li>
                    <li>Tarefas e Lembretes</li>
                    <li>Contatos Avançados</li>
                    <li>Integração com Outros Aplicativos</li>
                    <li>Configuração de Conta</li>
                  </span>
                  `

    },

    {
        nome: 'Power BI',
        imgUrl: 'modulo-powerbi.png',

        resumo: `
        <p>
            O módulo de Power BI na nossa etapa avançada do curso, ensina aos alunos a utilizar eficientemente essa ferramenta para análise de dados. Os participantes aprendem a importar, transformar e visualizar dados, construir modelos de dados, criar relatórios dinâmicos e interativos, além de explorar a integração com outras ferramentas Microsoft. Ao final do curso, os alunos estão aptos a transformar
             dados em insights valiosos para tomada de decisões informadas.
         </p>
             `,
        c_pragmatico: `
                                  <li>Importação de dados</li>
                                    <li>Transformação de dados</li>
                                    <li>Visualização de dados</li>
                                    <li>Construção de modelos de dados</li>
                                    <li>Criação de relatórios dinâmicos e interativos</li>
                                    <li>Medidas personalizadas</li>
                                    <li>Criação de painéis informativos</li>
                                    <li>Integração do Power BI com outras ferramentas Microsoft</li>
                                    <li>Fluxo de trabalho eficiente</li>
                                    <li>Utilização avançada do Power BI</li>
            `

    },

    {
        nome: 'Impressoras',

        imgUrl: 'modulo-impressao.png',

        resumo: `
        <p>
       O Aluno aprendera a Scanear, tranferir seus arquivos via Email, Celular ou Computador para impressão, formatos de arquivos ideais, formato de cores CMYK e resolução de imagens e configuração de Pixeis por Polegadas para uma impressão de alta qualidade.
       </p> 
       `,
        c_pragmatico: `
                   <li>O que são Impressoras</li>
                  <li>Tipos de Impressoras</li>
                  <li>Como imprimir</li>
                  <li>Arquivos para Impressão</li>
                  <li>Como Scanear</li>
                  <li>Tipos de Papel</li>
                  <li>Configurações </li>
                  <li>Instalação da Impressora</li>
                  <li>DPI - (Pixeis por Polegada)</li>
        `

    },
    {
        nome: 'Interfaces',

        imgUrl: 'modulo-dispositivos.png',

        resumo: `
        <p>
        O aluno aprendera alem de digitação diferentes interfaces como touchpad e o funcionamento de telas touchscreen, padrão QWERTY e atalhos ASCII.
        </p>
        
        `,
        c_pragmatico: `
                   <li>Digitação</li>
                  <li>Padrão QWERTY</li>
                  <li>Teclado e Mouse</li>
                  <li>Telas e Monitores</li>
                  <li>Microfones</li>
                  <li>Telas Touch Screen</li>
                  <li>Touch Pad</li>
        `

    },

    {
        nome: 'Redes',

        imgUrl: 'modulo-redes.png',

        resumo: `
       <p>
        Você aprenderá os fundamentos sobre funcionamento de redes de computadores bem como equipamentos de redes, como hubs, switches, roteadores e crimpagem.
</p>
        `,
        c_pragmatico: `
                    <li>Desenvolvimento da Rede de Computadores</li>
                  <li>Introdução a Rede</li>
                  <li>Modens, Roteadores e Switchs</li>
                  <li>Equipamentos Secundarios</li>
                  <li>Compartilhamento de Arquivos</li>
                  <li>Conexão</li>
                  <li>Grupo de Trabalho</li>             
                  <li>Termonologias</li>
  <li>Termonologias</li>
                  <li>Configuração de IP / IPV4</li>
                  <li>Cabeamento</li>
 <li>Criação de Rede Doméstica</li>
                  <li>Crimpagem</li>



        `

    },
    {
        nome: 'Internet',

        imgUrl: 'modulo-internet.png',

        resumo: `
        <p>
        Neste módulo, o aluno aprenderá boas práticas e terminologias essenciais sobre a internet, incluindo conceitos como download, 
        upload, e-mails, cookies e o protocolo HTTP, além de explorar a Internet das Coisas (IoT).
</p><p>
Cobriremos também o funcionamento do HTTP, até tópicos mais avançados, como endereços IP, 
segurança contra malwares, o papel dos cookies, extensões e personalização de navegadores.  
</p>     

`,
        c_pragmatico: `
                      <li>Introdução a Terminilogias</li>
                  <li>Navegadores</li>
                  <li>Email</li>
                  <li>Sites</li>
                 
                  <li>Download e Upload</li>
                  <li>Pesquisas</li>
                  
                  <li>Atalhos</li>
                  <li>Uso de Emails</li>
                  <li>Aplicativos Online</li>

                  <li>HTTP</li>
                  <li>Pesquisas Avançadas</li>
                  <li>Links</li>
                  <li>IP</li>
                  <li>IOT (Internet das Coisas)</li>
                  <li>Conceitos de Nuvem</li>
                  <li>Malwares e Virus</li>
                  <li>Cookies</li>
                  <li>Extesões</li>
                  <li>Personalização de Navegadores</li>
                  <li>Conceito de Servidores</li>
                  <li>Aplicativos Online</li>
                  <li>Contas Integradas</li>
                  <li>Acesso Remoto</li>
        `

    },
    {
        nome: 'Hardware',

        imgUrl: 'modulo-hardware.png',

        resumo: `
<p>
Amplie seus conhecimentos sobre hardware de computador, entendendo as funções 
específicas de cada componente e quais são recomendados para upgrades, 
bem como funcionalidades mais avançadas, como a troca de peças e detecção de mal funcionamento 
de componentes.
</p>

      `,
        c_pragmatico: `
        
                   <li>Introdução a Hardware</li>
                  <li>Instalação de Dispositivos</li>
                  <li>Instalação de Periférico</li>
                  <li>Normas de Segurança </li>
                  <li>Estrutura Básica da Placa Mãe</li>
                  <li>Conceito de HD e SSD</li>
                  <li> Conceito de Memória Ram</li>
                  <li> Conceito de Processadores </li>
                  <li>Fontes e Alimentação da CPU</li>
                  <li>Dicas de Compra de Equipamentos</li>
                  
            <li>Arquiteturas de CPU</li>
            <li>Conceitos de GPU e NPU</li>
            <li>Funcionalidades e Tecnologias</li>
            <li>Montagem de Computadores</li>


        `

    },

]

export default slideObj;