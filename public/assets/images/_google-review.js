import React from "react";
import imgGoogleFiveStars from "../../assets/img/google-five-stars.png"; 
import { Helmet } from "react-helmet";

const GoogleReview = ()=>{

    return (

        <div className="bg-google-review-elfsight">
            <Helmet>

            </Helmet>
        <h1>
        <span>Review <strong>EXCELENTE </strong> 
        baseado na opnião de Pais e Alunos!
        </span>
<img src={imgGoogleFiveStars} alt='Google review Seta Cursos'/>

        </h1>
       <div class="elfsight-app-f0166b04-bc71-462f-aba6-70f185d45770" data-elfsight-app-lazy></div>

       </div> 
    ); 

}

export default GoogleReview; 