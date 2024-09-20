
import globals from "@/styles/globals.scss"

import style from "./layout.module.scss";





export default function Layout({ children }) {

  return (
    //Layout Cursos
    <div className={`${style.layout_container}`}>

      {children}

    </div>
  );
}