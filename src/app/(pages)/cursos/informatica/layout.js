
import globals from "@/styles/globals.scss"

import style from "./layout.module.scss";

export const metadata = {
    title: "Create Next App",
    description: "Seta home page",

};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,

}

export default function RootLayout({ children }) {



    return (

        <div className={`${style.pages_informatica} pages`}>
            <h1>Informática</h1>
            {children}
        </div>
    );
}
