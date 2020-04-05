import React , {useState , useEffect} from 'react';
import {PortfolioSection  , PortfolioTitle , Span , PortfolioList , PortfolioItem , Box , Image , Overlay , Button} from './style.js';
import axios from 'axios'

    const Portfolio = () => {

        const [ images , setImages ] = useState([]) 

        useEffect( () =>{
            axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)})
        }, [] )

        const PortfolioImages = images.map( (imageItem) =>{
            return(
                <Box key={imageItem.id}>
                    <Image src={imageItem.image} alt=""/>
                    <Overlay>
                        <Button>
                        Show Image
                        </Button>
                    </Overlay>
                </Box>
            )
        })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>Mon</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>BoX</PortfolioItem>
                <PortfolioItem>Modèle 1</PortfolioItem>
                <PortfolioItem>Modèle 2</PortfolioItem>
                <PortfolioItem>Modèle 3</PortfolioItem>
                
            </PortfolioList>
            
            <div  >
                
               {PortfolioImages}

            </div>
        
            
        </PortfolioSection>
        );
    }

    export default Portfolio;