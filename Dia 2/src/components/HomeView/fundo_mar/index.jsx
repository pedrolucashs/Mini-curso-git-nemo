import "./styles.css";
import Fundo_Mar from "./assets/fundo_mar.svg";
import PeixeFundo from "./assets/Peixe_fundo.gif";
import Animais2 from "./assets/animais_2.gif";
import Polvo from "./assets/polvo.gif";
import Planta from "./assets/planta.gif";
import Nemo from "./assets/nemo.gif";

function FundoMar() {
  return (
    <>
      <section id="fundo_mar_container">
        <img src={PeixeFundo} alt="Peixe Fundo" id="peixe_fundo" />
        <img src={Animais2} alt="Animais 2" id="animais_2" />
        <img src={Polvo} alt="Polvo" id="polvo" />
        <img src={Planta} alt="Planta" id="planta" />
        <img src={Planta} alt="Planta" id="planta2" />
        <img src={Nemo} alt="Nemo" id="nemo" />
        <img src={Fundo_Mar} alt="Fundo Mar" id="fundo_mar" />
      </section>
    </>
  );
}
export default FundoMar;