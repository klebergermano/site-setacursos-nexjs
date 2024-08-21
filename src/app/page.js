
import style from "./page.module.scss"
import globals from "@/styles/globals.scss"
import SlideHome from "@/components/SlideHome/SlideHome.jsx";
import PainelCursos from "@/components/PainelCursos/PainelCursos";

export default function Home() {
  return (
    <>
      <SlideHome />
      <main className={[style.main, style.pages]}>
        <PainelCursos />
      </main>
    </>
  );
}
