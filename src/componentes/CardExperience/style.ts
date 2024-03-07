import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Container=styled.div`
background:linear-gradient( to right,${GlobalStyle.bgThemeSecondary},${GlobalStyle.bgTheme});
box-shadow:  0 0 5px #000;
border-radius: 5px;
color: red;
display: flex;
justify-content:space-between;
padding: 22px 12px;
margin:12px 0;
    h3{
       font-size: 22px;
       text-transform: capitalize;
       color: ${GlobalStyle.bgTheme};
    }
    .company{
        font-size: 18px;
        margin: 12px 0;
    }
    p{
        color: white;
        margin:12px 0;
        font-size: 12px;
        font-weight: 600;
    }

    .svg{
        stroke:white;
        height: 45px;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        h3{
            font-size: 20px;
        }
        .right{
            display: flex;
            justify-content: end;
        }
    }
    
`