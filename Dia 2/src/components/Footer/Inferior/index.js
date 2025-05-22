import "./styles.css";
import Nemo_Branco from "./assets/logo_nemo_branca.svg";
import Instagram  from "./assets/insta.svg";
import Icon_local from "./assets/icon_local.svg";
import Icon_Email from "./assets/icon_email.svg";
import Linkedin from "./assets/linkedin.svg";
function Inferior () {
    return(
        <>
            <article id="parte_2">
                <img src={Nemo_Branco} alt="Logo Nemo" id="logo_footer" />    
                <article>
                <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5382.753120797512!2d-37.974455!3d-4.946945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b9829eed8e44cd%3A0x3dd79f14e6ed0729!2sUniversidade%20Federal%20do%20Cear%C3%A1%20-%20Campus%20de%20Russas!5e1!3m2!1spt-BR!2sbr!4v1727111940702!5m2!1spt-BR!2sbr"

            width="40%"
            height="40%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="unique-title"
          ></iframe>
                    <section>
                        <h3 id="contato">Contate-nos</h3>
                        <section className="icon">
                            <img src={Icon_local} alt="Localização" />
                            <p>
                            Universidade Federal do Ceará, Campus Russas.<br />
                            R. Felipe Santiago, 411 - Cidade Universitária, <br />
                            Russas - CE, 62900-000
                            </p>
                        </section>
                        <section className="icon"> 
                            <img src={Icon_Email} alt="Email"/>
                            <p>
                            nemo@ufc.br
                            </p>
                        </section>
                    </section>
                </article>
                <section>
                    <h3>Acompanhe nosso conteúdo</h3>
                    <a href="https://br.linkedin.com/company/nemoufc">
                        <img src={Linkedin} alt="Linkedin" id="linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/nemo.ufc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <img src={Instagram} alt="Instagram" id="instagram"/>
                    </a>
                </section>
            </article>
            <article id="rodape">
                <p>
                © 2024 Todos Direitos Reservados ao NEMO
                </p>
            </article>
        </>
    )
}
export default Inferior;