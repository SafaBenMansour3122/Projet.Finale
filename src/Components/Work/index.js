import React, { Component } from 'react';
import {WorkSection , WorkTitle , PartTitle ,WorkPart, WorkLine , Span , Images} from './style.js';
import axios from 'axios'

    class Work extends Component {

                state = {
                    works: []
                }

                componentDidMount(){
                    axios.get('js/data.json').then(res=>{this.setState({works: res.data.works})})
                }
        render(){

            const {works} = this.state;

            const worksList = works.map((workItem) =>{
                return(
                    <WorkPart first={workItem.id} key={workItem.id}>
                        <Images src={workItem.image}/>
                        <WorkLine/>
                        <PartTitle>{workItem.title}</PartTitle>
                    </WorkPart> 
                )
            })
                return (
                    <WorkSection>
                       <div className="container">
            
                           <WorkTitle><Span>Des</Span> Modèles</WorkTitle>
                           {worksList}
                       </div>
            
                    </WorkSection>
                    );
            }
        
       }
    
    

    export default Work;