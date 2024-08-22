import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export const metadata = {
  title: "Create Next App",
  description: "Seta home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />


        <div className="container-global">
          {children}
          <Footer />

        </div>
      </body>
    </html>
  );
}
