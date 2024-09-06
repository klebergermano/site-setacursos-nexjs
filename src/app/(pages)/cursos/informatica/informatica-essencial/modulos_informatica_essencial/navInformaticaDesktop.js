import React, { Component } from "react";
class NavInformatica extends Component {
  state = {};

  displayModulos(e) {
    let a_element = document.getElementsByClassName("a_element");

    for (let i = 0; i < a_element.length; i++) {
      a_element[i].classList.remove("active");
    }

    let a_name = e.target.name;
    e.target.classList.add("active");

    let modulo = document.querySelector("#modulo-" + a_name);
    var modulos = document.getElementsByClassName("modulos_informatica");
    for (var i = 0; i < modulos.length; i++) {
      modulos[i].style.display = "none";
    }

    modulo.style.display = "block";
  }

  render() {
    return (
      <nav id="nav_informatica">
        <ul>
        <li
            id="intro_info"
            className=""
            onClick={this.handleDisplayModules}
          >
            <a
              className="a_element"
              name="introducao"
              onClick={this.displayModulos}
            >
              Introdução
            </a>
          </li>
          <li id="windows" onClick={this.handleDisplayModules}>
            <a
              className="a_element active"
              name="windows"
              onClick={this.displayModulos}
            >
              Windows 10
            </a>
          </li>

          <li id="office" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="office"
              onClick={this.displayModulos}
            >
              Pacote Office
            </a>
          </li>
          <li id="hardware" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="hardware"
              onClick={this.displayModulos}
            >
              {" "}
              Hardware
            </a>
          </li>
         
          <li id="redes" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="rede"
              onClick={this.displayModulos}
            >
              {" "}
              Introdução a Redes
            </a>
          </li>     
            
    

          <li id="internet" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="internet"
              onClick={this.displayModulos}
            >
              {" "}
              Internet
            </a>
          </li>
          <li id="impressao" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="impressao"
              onClick={this.displayModulos}
            >
              {" "}
              Impressoras
            </a>
          </li>
      

          <li id="hadware" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="dispositivos"
              onClick={this.displayModulos}
            >
              {" "}
              Interfaces
            </a>
          </li>
{
/* 
  <li id="Celulares" onClick={this.handleDisplayModules}>
            <a
              className="a_element"
              name="celulares"
              onClick={this.displayModulos}
            >
              
              Celulares
            </a>
          </li>

*/

}
        
        </ul>
      </nav>
    );
  }
}

export default NavInformatica;
