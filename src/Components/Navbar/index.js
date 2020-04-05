import React from 'react';
import {Link} from 'react-router-dom'
import {NavbarSection , Logo , LogoText , UlList , ListItem ,Anchor} from './style.js'

    const Navbar = () => {

    return (
      <NavbarSection> 
        <div className="container">
           <Logo>
               <LogoText>Cadeaux D'amoureux </LogoText>
           </Logo>

           <UlList>
               <ListItem><Link className='anchor' to="/">Accueil</Link></ListItem>
               <ListItem><Anchor href="#">Modèle</Anchor></ListItem>
               <ListItem><Anchor href="#">Portefeuille</Anchor></ListItem>
               <ListItem><Anchor href="#">Profil</Anchor></ListItem>
               <ListItem><Link className='anchor' to="/contact">Contact</Link></ListItem>
           </UlList>
        </div>
      </NavbarSection>  
    
           );
    }

    export default Navbar;