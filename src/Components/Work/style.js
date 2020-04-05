import styled from 'styled-components'


export const WorkSection = styled.div` 
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
`


export const WorkTitle = styled.h2` 
    font-size: 60px;
`

export const Span = styled.span`
    font-weight: normal;
`

export const WorkPart = styled.div` 
    margin-top:20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.first === 1 ? "0" : '5%'}
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 0px;
`

export const  WorkLine = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 0px;
`

export const Images = styled.img`
width:100%;
height:150px;
margin-top:0px;
border:0px;

`

