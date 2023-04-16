import React from "react";
import '../Config/assets/css/main.css';
import pic01 from '../Config/images/pic01.jpg';

function Blog() {
    const pic = "https://img.freepik.com/free-vector/modern-hand-drawn-education-concept_23-2147906438.jpg?t=st=1681675599~exp=1681676199~hmac=b36ce481d96877fa7cd714d7c769741df0b649108b6b82ed20a639c336b735da"
    return (
        <div>
            <section id="one" class="main style1">
                <div class="container">
                    <header class="major">
                        <h2>Education<br /></h2>
                    </header>
                    <div class="row gtr-150">
                        <div class="col-6 col-12-medium">
                            <ul className="Education">
                                <li className="list-study"> <strong>Full Stack Developer Bootcamp</strong></li>
                                <ul className= "withoulist"><li><p>UCamp CDMX, 2022 - Still Attending</p></li></ul>
                                <br></br>
                                <li className="list-study"><strong>Specialization in Artificial Intelligence</strong></li>
                                <ul className= "withoulist"><li><p>National University of Colombia - Medellin Campus, 2021 - 2022</p></li></ul>
                                <br></br>
                                <li className="list-study"><strong>Industrial Engineer</strong></li>
                                <ul className= "withoulist"><li><p>National University of Colombia - Medellin Campus, 2013 - 2018</p></li></ul>

                            </ul>
                        </div>
                        <div class="col-6 col-12-medium imp-medium">
                            <span class="image fit"><img src={pic} alt="" /></span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Blog;