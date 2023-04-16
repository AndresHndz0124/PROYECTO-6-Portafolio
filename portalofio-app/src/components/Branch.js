import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaReact,FaPython,FaSnowflake,FaNodeJs,FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb,SiCss3 } from "react-icons/si";

function Branch() {
    return (
        <div>
            <section id="two" class="main style2">
                <div class="container">
                    <div class="row gtr-150">
                        <div class="col-6 col-12-medium">
                            <ul class="major-icons">
                                <li><span class="icon"><FaReact style={{ color: '#61DAFB', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><IoLogoJavascript style={{ color: '#F7DF1E', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><FaPython style={{ color: '#3776AB', fontSize: '4em',transform: 'rotate(-45deg)' }} /></span></li>
                                
                                <li><span class="icon"><FaNodeJs style={{ color: '#339933', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><FaHtml5 style={{ color: '#E34F26', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><SiCss3 style={{ color: '#1572B6', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>

                                <li><span class="icon"><FaSnowflake style={{ color: '#4BA4D9', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><SiMongodb style={{ color: '#4DB33D', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                                <li><span class="icon"><BsFiletypeSql style={{ color: '#FF5722', fontSize: '4em',transform: 'rotate(-45deg)'}} /></span></li>
                            </ul>
                        </div>
                        <div class="col-6 col-12-medium">
                            <header class="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                    amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Branch;