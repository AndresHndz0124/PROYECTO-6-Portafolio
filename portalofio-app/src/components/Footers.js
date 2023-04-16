import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FooterPage() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="text-center p-3 fot">
            CONTACT INFORMATION
            </div>

            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://github.com/AndresHndz0124?tab=repositories" role="button"><i><FontAwesomeIcon icon={['fab', 'github']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/andreshenandez/" role="button"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>

                    {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'google']} /></i></a> */}

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>


                </section>


                <div className="flex_footer">


                    <div className="texto">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+1 (786) 670-4648</span>
                    </div>

                    <div className="texto">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>anfhernandezve2gmail.com</span>
                    </div>
                </div>

            </div>
            <div className="text-center p-3 fot">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default FooterPage;