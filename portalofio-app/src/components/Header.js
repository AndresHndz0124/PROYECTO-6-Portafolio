import React from "react";



function Header() {

    return (
        <header>
            <section id="header">
                <div class="inner">
                    <span class="icon solid major fa-cloud"></span>
                    <h1>Hola! mi nombre es  <a href="https://www.linkedin.com/in/andreshenandez/"><strong>Andrés Hernández </strong></a><br /></h1>
                    <p>En la siguiente pagina web te contare un poco sobre mi y mis habilidades <br />
                        Dale click al siguiente botón para conocer más.</p>
                    <ul class="actions special">
                        <li><a href="#one" class="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        </header >
    );
}

export default Header;