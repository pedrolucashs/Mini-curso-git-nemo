import './styles.css';
import Onda_S from './assets/onda_superior.svg';
import Onda_M from './assets/onda_meio.svg';
import Onda_I from './assets/onda_inferior.svg';
import Peixe from './assets/peixe.gif';
function Onda () {
  return (
    <div className="ondas">
      <img src={Peixe} alt="Peixe" id="peixe" />
      <div className="ondas-container">
      <img src={Onda_S} alt="Ondas" className="onda" id="onda_superior" />
      <img src={Onda_S} alt="Ondas" className="onda" id="onda_superior_clone" />
      <img src={Onda_M} alt="Ondas" className="onda" id="onda_meio" />
      <img src={Onda_M} alt="Ondas" className="onda" id="onda_meio_clone" />
      <img src={Onda_I} alt="Ondas" className="onda" id="onda_inferior" />
      <img src={Onda_I} alt="Ondas" className="onda" id="onda_inferior_clone" />
    </div>
    </div>
  );
}
export default Onda;