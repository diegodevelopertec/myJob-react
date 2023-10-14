import styled from "styled-components";
import { ModalInterface } from ".";

export const Container=styled.div<ModalInterface>`
display: ${props=>props.stateModal ?'flex' : 'none'};
opacity:${props=>props.stateModal ?'1' : 'none'};
justify-content: center;
align-items: center;
position:fixed;
left: 0;
top: 0;
right: 0;
bottom:0;
background-color:rgba(0, 0, 0, 0.7);
z-index: 1;
transition: opacity 0.3s ease-in-out;


.modal-content{
    display: flex;
    flex-direction:column;
    position: absolute;
    min-width:600px;
    min-height: 350px;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff; /* Cor de fundo do modal */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0 22px ;
   
}
`