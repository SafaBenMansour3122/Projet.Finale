import React from 'react';
import {HomeSection , HomeInfo , HomeTitle , HomeDesc  } from './style.js'



    const Home = () => {

    return (
        <HomeSection>
            <div className="container">
                <HomeInfo>
                    <HomeTitle>Chez FouFa</HomeTitle>
                    <HomeDesc>merci de votre canfiance à nous </HomeDesc>
                </HomeInfo>
            </div>
           
        </HomeSection>
        );
    }

    export default Home;