import React from 'react';
import {SocialMediaa ,Social, Icon , P , SpanInfo1, SpanInfo2} from './style.js'
import axios from 'axios'

    class SocailMedia extends React.Component {

        state= {
            social: []
        }

        componentDidMount (){
            axios.get('js/data.json').then( res =>{ this.setState({social: res.data.social})})
        }
         render(){

            const {social} = this.state

            const socialList = social.map ( (socialItem) => {
                return(
                
                    
                    <Social item={socialItem.id} key={socialItem.id}>
                        <Icon className={socialItem.icon}></Icon>
                        <P>
                            <SpanInfo1 >{socialItem.title}</SpanInfo1>
                            <SpanInfo2 >{socialItem.body}</SpanInfo2>
                        </P>
                    </Social>
        
               
                )
            })
            return (
                <SocialMediaa>
                {socialList}
                    </SocialMediaa>
                
                )
         }
    
    }

    export default SocailMedia;