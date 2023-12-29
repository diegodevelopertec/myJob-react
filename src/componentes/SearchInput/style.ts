import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Box=styled.div`
width: 420px;
margin: 30px 0;
position: relative;
display: inline-block;
width: 350px;
input{
width: 100%;
padding: 22px 6px ;
padding-left: 10px;
border-radius: 15px;
border: none;
transition:all ease 0.1s;
background-color: #D9D9D9;
&::placeholder{
    color: #7E7777E0;
}
&:focus{
    outline:2px solid  ${GlobalStyle.bgTheme};
    box-shadow: 0 0 5px #aaa;
}

}
.svg{
    height:35px;
    position: absolute;
    top: 50%;
    right:6px;
    transform: translateY(-50%);
    cursor: pointer;
}

@media screen and (max-width:850px){
    width: auto;
    z-index: -2;
    .svg{
        height: 35px;
        width: 35px;
    }
}

z-index: 9999;

`