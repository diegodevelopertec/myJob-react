import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

type props={
    activeData:boolean
}
export const Box=styled.div<props>`
margin: 30px 0;
position: relative;
display: inline-block;
width: 190px;
 label{
        margin:13px 0;
    }

p{
width: 100%;
padding: 22px ;
border-radius: 15px;
border: none;
text-align: center;
transition:all ease 0.1s;
background-color: #D9D9D9;
color: #aaa;
text-align: center;
}
.svg{
    height:35px;
    fill: ${GlobalStyle.bgTheme};
    position: absolute;
    top: 50%;
   right: 10px;
   transform: translateY(-50%);
   cursor: pointer;
}

.box-data{
    display: ${props=>props.activeData ? 'block' : 'none'};
    position:fixed;
    top:99px;
    min-width: 480px;
    padding: 22px;
    left: 550px;
    z-index:2;
    border-radius: 3px;
    box-shadow: 0 0 5px #222;
    background-color: #F5F7F8;
    border: 1px solid ${GlobalStyle.bgTheme};
legend{
    margin: 9px 0;
  }
   
}

@media screen and (max-width:870px){
  width: 100%;
   .box-data{
    left: 0;
    margin: 0 30px;
    right: 0;
    top:70px;
    width: 80%;
   }
    p{ 
        background-color:${GlobalStyle.bgThemeSecondary};
        color:${GlobalStyle.bgTheme};
        
    }
    .svg{
        fill:${GlobalStyle.bgThemeSecondary};
    }
}
`