import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SlideHome from "@/components/SlideHome/SlideHome.jsx";

export const metadata = {
  title: "Create Next App",
  description: "Seta home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <SlideHome />

        <div className="container-global">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
