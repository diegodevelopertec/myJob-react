import styled from "styled-components";
import { ButtonInterface } from ".";


export const Component=styled.button<ButtonInterface>`
background-color: ${props=>props.bgColor ? props.bgColor :'#EDED'};
color: ${props=>props.color ? props.color :'#000'};
border: ${props=>props.bd ? props.bd :'none'};
border-radius: ${props=>props.radius ? props.radius :'3px'};
padding:${props=>props.p ? props.p :'12px 23px'};
margin:${props=>props.m ? props.m :'auto'};
width:${props=>props.w ? props.w :'120px'};
height:${props=>props.h ? props.h :'auto'};
transition:${props=>props.trs ? props.trs :'auto'};
box-shadow:${props=>props.shadow ? props.shadow :'0'};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
 &:hover{
    background-color: ${props=>props.bgH ? props.bgH : 'auto'};
    color: ${props=>props.colorH ? props.colorH :'#000'};
 }
`