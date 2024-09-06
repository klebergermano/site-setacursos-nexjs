import React, { Component, useContext } from "react";
import { Animated } from "react-animated-css";
import imgWindows from "../../../../../../assets/img/informatica/img-modulo-windows.png"; 


class Windows extends Component {
  state = {};

  render() {
    return (
      <div className="modulos_informatica " id="modulo-windows">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Windows</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                Desenvolva as habilidades necessárias para se tornar um usuário ágil do Windows 10, 
                explorando as principais ferramentas do sistema operacional. Descubra atalhos essenciais 
                para o uso diário, aprenda a 
                instalar e desinstalar programas, dominando do gerenciamento do sistema a manutenção!

                  <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img src={imgWindows}
                />
              </Animated>

                </p>
              </div>
            </Animated>
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1200}
            >
              <div className="conteudo">
                <h3>Conteúdo Pragmático</h3>
                <div>
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
                </div>
              </div>
            </Animated>
          </div>
          {/*bloco_1 */}
       
        </div>
      </div>
    );
  }
}

export default Windows;
