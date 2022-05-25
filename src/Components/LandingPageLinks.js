import React from 'react'
// import landingVideo from '../Assets/LandingVideo/character.mp4'
import landingCharacter from '../Assets/LandingPage/landingCharacter2.png'
import { Button, Icon } from 'antd';
import { GithubFilled } from '@ant-design/icons';

import  {BrowserRouter as Router , Route, Link } from "react-router-dom";
import {Row, Col, Divider } from 'antd';

function LandingPageLinks() {

    return (
        < >
        <Row type="flex" align="middle">
            <Col span={8}>
            <Router>
                {/* <Icon type="github-outlined" /> */}
                {/* <GithubFilled className="github" /> */}
                <a target="_blank" href="https://github.com/Minolie">Github</a>
            </Router>
            </Col>
            <Col span={8}>
            <Router>
                <a target="_blank" href="https://twitter.com/minolifernando">Twitter</a>
            </Router>
            </Col>
            <Col span={8}>
            <Router>
                <a target="_blank" href="https://www.linkedin.com/in/minolie-fernando-31663b113/">LinkedIn</a>
            </Router>
            </Col>
        </Row>
        <Divider orientation="center" style={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}>
            Me things
            </Divider>
        <Router>

        </Router>

        </>
    )
}

export default LandingPageLinks