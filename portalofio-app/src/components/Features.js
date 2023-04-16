import React from "react";
import '../Config/assets/css/main.css';
import Card from './Card';

function Features() {
    const cardsData = [
        {
            image: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg",
            title: "Aplicación de Comercio Electrónico",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://harmonious-fenglisu-673abc.netlify.app/login",
            buttonLink: "https://harmonious-fenglisu-673abc.netlify.app/login"
        },
        {
            image: "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg",
            title: "Backend with MongoDB",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://app-ecommerce.onrender.com/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-5-eCommerce/tree/main/BACKEND"
        },
        {
            image: "https://img.freepik.com/free-psd/italian-food-template_23-2148519599.jpg",
            title: "Restaurant App React",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://elaborate-smakager-891d29.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-4-React"
        },
        {
            image: "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg",
            title: "Dashboard App",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://aesthetic-buttercream-14a564.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-3.-Dashboard-App"
        },
        {
            image: "https://img.freepik.com/free-vector/app-development-concept-with-modern-style_23-2147864205.jpg",
            title: "Fronted Aplicación CRUD",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://coruscating-rolypoly-2efc0c.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-2-Fronted-APP-CRUD"
        },
        {
            image: "https://img.freepik.com/free-vector/travel-onboarding-app-screens_23-2148400931.jpg",
            title: "Landing de Negocio",
            text: "Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.",
            url: "https://euphonious-lebkuchen-c4ca44.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto1-Fronted"
        },
    ];

    return (
        <section id="three" class="main style1 special">
            <div class="container">
                <header class="major">
                    <h2>Proyectos desarrolados durante el bootcamp!</h2>
                </header>
                <p>Los siguientes proyectos fueron desarrolados como entregas finales de cada uno de los modulos que componian el bootcamp. Para conocer un poco más de como fue su implementación te dejo una prequeña descripción y link directo al repositorio de cada uno.
                </p>
                <div class="row gtr-150">
                    {cardsData.map((card, index) => (
                        <div class="col-4 col-12-medium">
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                text={card.text}
                                url={card.url}
                                buttonLink={card.buttonLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;