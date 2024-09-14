import React, {useEffect } from "react";
import { Animated } from "react-animated-css";


import AOS from 'aos';
import 'aos/dist/aos.css'

import imgVocabularioTematico from "../../../../../../assets/img/ingles/curso-ingles-kids-vocabulario-tematico-seta-cursos.png"; 

const VocabularioTematico= ()=> {
  
  useEffect(() => {
 

    AOS.init({ duration: 1000 });


}, []);

    return (

        <div id="modulo-writing" className="modulo-curso modulos-ingles" data-aos='fade-right'>
        
<h2>Vocabulário Temático</h2>

           
              <div className="resumo">
              <figure>

<img src={imgVocabularioTematico} alt='Curso de inglês. Compreenda o idioma inglês falado!'/>
</figure>
              
    
                
                
<p>Ensino de vocabulário relacionado aos interesses e experiências das crianças, como animais, cores, alimentos, família, etc.</p>




  


              </div>
            
            
          </div>

  

    )
}

export default VocabularioTematico;
