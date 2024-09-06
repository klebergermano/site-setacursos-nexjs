import React, { Component } from "react";
import { Animated } from "react-animated-css";
import imgHardware from "../../../../../../assets/img/informatica/img-modulo-hardware.png"; 

class Hadware extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-hardware">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Hardware</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Aprenda e amplie seus conhecimentos sobre o hardware de
                  computador entendendo as funções específicas de cada peça e
                  quais são recomendadas na hora de fazer um upgrade em seu
                  computador.

                  <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img src={imgHardware} />
                {/*
                    <ImageInformatica
                  imgDesktop={"modulo_hardware.png"}
                  imgMobile={"modulo_hardware-mob.png"}
                />
                */}
            
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
                </div>
              </div>
            </Animated>
          </div>

       
        </div>
      </div>
    );
  }
}

export default Hadware;
