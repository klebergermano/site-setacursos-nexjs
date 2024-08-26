
import style from "./page.module.scss"
import globals from "@/styles/globals.scss"
import SlideHome from "@/components/SlideHome/SlideHome.jsx";
import PainelCursos from "@/components/PainelCursos/PainelCursos";
import Sobre from "@/components/Sobre/Sobre";
import Contato from "@/components/Contato/Contato";
import GoogleReview from "@/components/GoogleReview/GoogleReview";

export default function Home() {
  return (
    <>
      <SlideHome />
      <main className={[style.main, style.pages]}>
        <PainelCursos />
      </main>
      <Sobre />
      <GoogleReview />
      <Contato />
    </>
  );
}
