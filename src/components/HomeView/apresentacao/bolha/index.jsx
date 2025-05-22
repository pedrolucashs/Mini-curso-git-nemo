import "./styles.css";
import Bolha_Ceu from "./assets/bolha_ceu.svg";
import Icon_Robo from "./assets/icon_robo.svg";
import Icon_IA from "./assets/icon_ia.svg";
import Icon_DScience from "./assets/icon_dscience.svg";

function Bolha () {
  return (
    <>
      <section id="bolhas">
        <section >
          <img src={Icon_DScience} alt="Data Science" id="dscience" />
          <img src={Icon_IA} alt="IA" id="ia" />
          <img src={Icon_Robo} alt="Robô" id="robo" />
        </section>
        <article>
          <img src={Bolha_Ceu} alt="Bolha Céu" id="bolha_ceu" />
          </article>
      </section>
    
      
    </>
  )
}
export default Bolha;