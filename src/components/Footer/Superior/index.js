import { Link, useLocation,  } from "react-router-dom";
import "./styles.css";
function Superior() {
    const location = useLocation;
  return (
    <article id="parte_1">
    <section>
        <h3>Sobre o NEMO</h3>
        <p>
          Somos um núcleo de pesquisa da Universidade <br/>
          Federal do Ceará com o objetivo principal de <br/>
          fomentar e aplicar a pesquisa científica em <br/>
          ciência da computação e engenharia de software.
        </p>
    </section>
    <section>
        <h3>Info Nemo</h3>
    </section>
</article>
  )
}
export default Superior