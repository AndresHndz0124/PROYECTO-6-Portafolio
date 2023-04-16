import React from "react";



function Header() {

    return (
        <header>
            <section id="header">
                <div class="inner">
                    <span class="icon solid major fa-cloud"></span>
                    <h1>Hello! My name is <a href="https://www.linkedin.com/in/andreshenandez/"><strong>Andrés Hernández. </strong></a><br /></h1>
                    <p>On the following web page, I will tell you a little about myself and my abilities.<br />
                    Click the button below to learn more.</p>
                    <ul class="actions special">
                        <li><a href="#one" class="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        </header >
    );
}

export default Header;