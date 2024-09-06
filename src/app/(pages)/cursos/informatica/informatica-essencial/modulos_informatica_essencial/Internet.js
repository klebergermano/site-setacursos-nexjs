import React, { Component } from "react";
import { Animated } from "react-animated-css";
import imgInternet from "../../../../../../assets/img/informatica/img-modulo-internet.png"; 

class Internet extends Component {
  state = {};
  render() {
    return (
      <div className="modulos_informatica " id="modulo-internet">
        <div className="modulo_content">
          <div className="bloco_1">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1500}
            >
              <h1>Internet</h1>
            </Animated>
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={1000}
            >
              <div className="resumo">
                <p>
                  Alem de boas práticas e terminologias sobre internet e o aluno
                  também aprendera conceitos como Download, Upload, Emails,
                  Cookies protolocolo HTTP e IOT (Internet das Coisas).

                  <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
              >
                <img src={imgInternet} />
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
                  <li>Introdução a Terminilogias</li>
                  <li>Navegadores</li>
                  <li>Email</li>
                  <li>Sites</li>
                 
                  <li>Download e Upload</li>
                  <li>Pesquisas</li>
                  
                  <li>Atalhos</li>
                  <li>Uso de Emails</li>
                  <li>Aplicativos Online</li>
    
                </div>
              </div>
            </Animated>
          </div>
       
        </div>
      </div>
    );
  }
}

export default Internet;
