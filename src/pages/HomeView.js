import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./HomeView.css";
import FundoMar from "../components/HomeView/fundo_mar/index.jsx";
import Apresentacao from "../components/HomeView/apresentacao/index.jsx";
import Bolha_top from "../assets/bolha_top.svg";
import { useEffect, useState } from "react";

function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY > 100){
        setShowScrollToTop(true);
      }else{
        setShowScrollToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
        <>
          <Header/>
          <main id="corpo">
           <Apresentacao/>

            {showScrollToTop && (
              <button onClick={scrollToTop} id="scrollToTop">
                <img src={Bolha_top} alt="Bolha Topo" />
              </button>
            )}
            <FundoMar/>
          </main>
          <Footer/>
        </>
  );
}
export default Home;