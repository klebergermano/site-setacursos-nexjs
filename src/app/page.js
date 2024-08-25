
import style from "./page.module.scss"
import globals from "@/styles/globals.scss"
import SlideHome from "@/components/SlideHome/SlideHome.jsx";
import PainelCursos from "@/components/PainelCursos/PainelCursos";
import Sobre from "@/components/Sobre/Sobre";
import FormContato from "@/components/FormContato/FormContato";

export default function Home() {
  return (
    <>
      <SlideHome />
      <main className={[style.main, style.pages]}>
        <PainelCursos />
      </main>
      <Sobre />
      <FormContato />
    </>
  );
}
