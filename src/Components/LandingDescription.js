import React from 'react'
// import landingVideo from '../Assets/LandingVideo/character.mp4'
import landingCharacter from '../Assets/LandingPage/landingCharacter2.png'
import { Tabs } from 'antd';
const { TabPane } = Tabs;


function callback(key) {
    console.log(key);
  }

function LandingPageDescription() {

    return (
        <div className="description-tab">

        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Professional Me" key="1">
                <span>Hey there stranger! My name is Minolie Fernando and I am a Software Engineer(Full Stack) at Paladin Analytics in
                    Colombo, Sri Lanka
                </span>
            </TabPane>
            <TabPane tab="Real Me" key="2">
             <span>Now that you got the "Professional Me"i'll loop you in on the other me. I am a full on geek. Sucker for Harry Potter & Game of Thrones</span>
            </TabPane>
        </Tabs>
            {/* <Menu mode="horizontal" className="description-menu">
                <Menu.Item>
                    Real Me
                </Menu.Item>
                <Menu.Item>
                    Professional Me
                </Menu.Item>
            
            </Menu> */}
        </div>

    )
}

export default LandingPageDescription