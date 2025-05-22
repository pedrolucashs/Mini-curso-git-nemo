import { useState } from "react";
import "./styles.css";

function Sobre() {
  const [showMore, setShowMore] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setButtonPosition(!buttonPosition);
  };
  return (
    <>
        <section id="texto_ceu">
          <h1>
            Núcleo de Estudo de Aprendizado
            <br /> de Máquina e Otimização
          </h1>
          <p>
            O Laboratório de Pesquisa, Desenvolvimento & Inovação
 (LPD&I) do NEMO tem como objetivo principal fomentar e
   
            aplicar a pesquisa científica em ciência da computação e
 engenharia de software.{" "}
            {showMore && (
              <span>
                Considerando a interdisciplinaridade

                entre as profusas áreas de conhecimento da Universidade
 Federal do Ceará (UFC) do Campus Russas e outras
instituições nacionais e internacionais, o LPD&I
                desenvolve
projetos que utilizam estratégias de otimização e
de máquina.
              </span>
            )}
          </p>
          <button
            onClick={handleShowMore}
            className={buttonPosition ? "move-down" : ""}
          >
            {showMore ? "Leia menos" : "Saiba mais"}
          </button>
        </section>
    </>
  );
}

export default Sobre;