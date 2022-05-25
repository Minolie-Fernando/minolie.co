import React from 'react'
import ideas from '../Assets/LandingPage/Ideas.png'
import notes from '../Assets/LandingPage/Notes.png'
import projects from '../Assets/LandingPage/Projects.png'
import { Button, Icon } from 'antd';



import  {BrowserRouter as Router , Route, Link } from "react-router-dom";
import {Row, Col } from 'antd';

function LandingPageProjectButtons() {

    return (
        < >
        <Row type="flex" align="middle">
            <Col span={8}>
            <div role="button" className="idea-button">
                <img className="landing-page-profile" src={ideas} alt="fireSpot"/>
                <h3 className="ass">Ideas</h3>
            </div>
            </Col>
            <Col span={8}>
                <div role="button" className="idea-button">
                <img className="landing-page-profile" src={notes} alt="fireSpot"/>
                 <h3>Notes</h3>
                </div>
            </Col>
            <Col span={8}>
            <div role="button" className="idea-button">
                <img className="landing-page-profile" src={projects} alt="fireSpot"/>
                <h3>Projects</h3>
            </div>
            </Col>
        </Row>


        </>
    )
}

export default LandingPageProjectButtons