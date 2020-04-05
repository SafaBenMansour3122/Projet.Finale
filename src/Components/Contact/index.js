import React from 'react';
import {ContactSection , ContactTitle , Span , Form ,  FormInput , InputText , InputEmail , Label , Select , Textarea , InputSubmit} from './style.js';
import Footer from './../Footer'


    const Contact = () => {

    return (

    <React.Fragment>
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Contactez </Span>Nous</ContactTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Votre Nom"/>
                        <InputEmail type="email" placeholder="Votre Email"/>
                    </FormInput>

                    <Label >Le choix de  votre Box :</Label>
                    <Select>
                        <option value="Article1">Modèle 1</option>
                        <option value="Article2">Modèle 2</option>
                        <option value="Article3">Modèle 3</option>
                        
                    </Select>
                    
                    <Textarea cols="30" rows="10" placeholder="Votre Message"></Textarea>
                    <InputSubmit type="submit" value="Envoyer Le Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer/>
        </React.Fragment>
    
        );
    }

    export default Contact;