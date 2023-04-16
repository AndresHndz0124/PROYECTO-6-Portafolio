import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaPython, FaSnowflake, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb, SiCss3 } from "react-icons/si";

function Branch() {
    return (
        <div>
            <section id="two" class="main style2">
                <div class="container">
                    <div class="row gtr-150">
                        <div class="col-6 col-12-medium">
                            <ul class="major-icons">
                                <li><span class="icon"><FaReact style={{ color: '#61DAFB', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><IoLogoJavascript style={{ color: '#F7DF1E', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><FaPython style={{ color: '#3776AB', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>

                                <li><span class="icon"><FaNodeJs style={{ color: '#339933', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><FaHtml5 style={{ color: '#E34F26', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><SiCss3 style={{ color: '#1572B6', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>

                                <li><span class="icon"><FaSnowflake style={{ color: '#4BA4D9', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><SiMongodb style={{ color: '#4DB33D', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                                <li><span class="icon"><BsFiletypeSql style={{ color: '#FF5722', fontSize: '4em', transform: 'rotate(-45deg)' }} /></span></li>
                            </ul>
                        </div>
                        <div id="cv" class="col-6 col-12-medium">
                            <header class="major">
                                <h2>About me</h2>
                                <br></br>
                                <h5>FULL STACK DEVELOPER STUDENT | BUSINESS IMPLEMENTATOR | DATA ANALYST | ARTIFICIAL INTELLIGENCE</h5>
                            </header>
                            <p>Industrial engineer focused on the technology and service industry sectors with experience in process assessment, 
                                automation and optimization through BPMN methodology.Also I have knowledge in architecture and database modeling 
                                with skills focused on in the management of data acquisition, transformation and visualization tools (BI), 
                                ETL design and relevant experience in Business Intelligence and Business Analyst functions for the evaluation 
                                and execution of changes that lead to added value for the organization.</p>

                            <p>I am characterized as a responsible, organized, curious and challenge lover with leadership qualities that facilitates 
                                decision making focused on the established objectives, allowing effective and active learning. With qualities of teamwork, 
                                taste for acquiring new knowledge in the areas of work and great ability to work under pressure.</p>
 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Branch;
