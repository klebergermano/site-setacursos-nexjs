import imgGoogleFiveStars from "@/../public/assets/images/google-five-stars.png";
import style from "./google_review_elfsight.module.scss";
import Image from "next/image";
const GoogleReview = () => {

    return (

        <div className={style.bg_google_review_elfsight}>

            <h1>
                <span>Review <strong>EXCELENTE </strong>
                    baseado na opnião de Pais e Alunos!
                </span>
            </h1>
            <figure>
                <Image src={'/assets/images/google-five-stars.png'} width={300} height={0} alt='Google review Seta Cursos' />
            </figure>
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div class="elfsight-app-f0166b04-bc71-462f-aba6-70f185d45770" data-elfsight-app-lazy></div>
        </div>
    );

}

export default GoogleReview; 