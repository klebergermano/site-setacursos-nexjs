import React, { Component } from "react";
import { Animated } from "react-animated-css";

import imgRedes from "../../../../../../assets/img/informatica/img-modulo-redes.png"; 

class Rede extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-rede">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Redes</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Você aprenderá os fundamentos sobre funcionamento de redes de
                  computadores bem como equipamentos de redes, como hubs,
                  switches, roteadores e crimpagem.

                  <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img src={imgRedes}
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
                <h3>Conteúdo Programático</h3>
                <div>
                <li>Desenvolvimento da Rede de Computadores</li>
                  <li>Introdução a Rede</li>
                  <li>Modens, Roteadores e Switchs</li>
                  <li>Equipamentos Secundarios</li>
                  <li>Compartilhamento de Arquivos</li>
                  <li>Conexão</li>
                  <li>Grupo de Trabalho</li>             
                  <li>Termonologias</li>
    
                </div>
              </div>
            </Animated>
          </div>
    
        </div>
      </div>
    );
  }
}

export default Rede;
