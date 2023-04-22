import React from "react";
import '../Config/assets/css/main.css';
import Card from './Card';

function Features() {
    const cardsData = [
        {
            image: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg",
            title: "E-commerce Application",
            text: "The following code refers to the fifth project of the Bootcamp, where an eCommerce project is developed to put into practice skills related to Fullstack applications.",
            url: "https://harmonious-fenglisu-673abc.netlify.app/login",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-5-eCommerce/tree/main/FRONTEND"
        },
        {
            image: "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg",
            title: "Backend with MongoDB",
            text: "At this URL, the server of an e-commerce application is hosted where purchases and users who log in to the website are registered.",
            url: "https://app-ecommerce.onrender.com/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-5-eCommerce/tree/main/BACKEND"
        },
        {
            image: "https://img.freepik.com/free-psd/various-templates-moody-food-restaurant-with-screen_23-2148429052.jpg",
            title: "Restaurant App React",
            text: "The objective of this project was to build a customized webpage using React, where it will be possible to store the webpage and be saved in Firebase.",
            url: "https://elaborate-smakager-891d29.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-4-React"
        },
        {
            image: "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg",
            title: "Dashboard App",
            text: "This app aims to put JavaScript skills into practice to connect to an API and graph the values ​​related to Cryptocurrencies.",
            url: "https://aesthetic-buttercream-14a564.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-3.-Dashboard-App"
        },
        {
            image: "https://img.freepik.com/free-vector/app-development-concept-with-modern-style_23-2147864205.jpg",
            title: "Frontend CRUD Application",
            text: "Webpage based on CRUD processes, through which it is possible to facilitate the view, search, and modification of information within the interface.",
            url: "https://coruscating-rolypoly-2efc0c.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto-2-Fronted-APP-CRUD"
        },
        {
            image: "https://img.freepik.com/free-vector/travel-onboarding-app-screens_23-2148400931.jpg",
            title: "Business Landing",
            text: "UCAMP Bootcamp's first Frontend project based on HTML5, CSS, and includes Flexbox, Grids, and responsive web design techniques.",
            url: "https://euphonious-lebkuchen-c4ca44.netlify.app/",
            buttonLink: "https://github.com/AndresHndz0124/Proyecto1-Fronted"
        },
    ];


    return (
        <section id="three" class="main style1 special">
            <div class="container">
                <header class="major">
                    <h2>FullStack projects developed!</h2>
                </header>
                <p>The following projects were developed as final submissions for each of the modules that made up the bootcamp. To learn a little more about how they were implemented, I'll provide a brief description and a direct link to the repository of each one
                </p>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {cardsData.map((card, index) => (
                        <div class="col">
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