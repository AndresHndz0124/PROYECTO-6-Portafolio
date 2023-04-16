import React from "react";
import Header from "../components/Header";
import Blog from "../components/Blog"
import Features from "../components/Features"
import Branch from "../components/Branch"
import FooterPage from "../components/Footers"

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Blog />
            <Branch />
            <Features />
            <FooterPage />
        </React.Fragment>
    )
}
export default Home;
