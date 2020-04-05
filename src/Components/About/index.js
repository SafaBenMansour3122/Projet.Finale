import React from 'react';
import {AboutSection , CreativeInfo , InfoTitle , Span , InfoDir , InfoDesc} from './style.js'

    const About = () => {

    return (
        <AboutSection>
        <div className="container">
            <CreativeInfo>
                <InfoTitle><Span>Love</Span> BoX</InfoTitle>
                <InfoDir>Présentation</InfoDir>
                <InfoDesc>
                    Des photos-souvenirs en format vintage personnalisable, dans une superbe boîte à l’image de l’amour :
                    gaie, colorée, fleurie, joyeuse. Faites fondre votre bien-aimé(e) et optez pour le cadeau à forte valeur émotionnelle,
                    qui saura raviver la passion amoureuse des premiers jours… ❤️

                    pour la amours, « All you need is a LOVE BOX » ❤️
                 </InfoDesc>
                
            </CreativeInfo>
        </div>
    </AboutSection>
        );
    }

    export default About;