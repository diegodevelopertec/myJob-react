import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Container=styled.div`
background:linear-gradient( to right,${GlobalStyle.bgThemeSecondary},${GlobalStyle.bgTheme});
box-shadow:  0 0 5px #000;
border-radius: 5px;
color: red;
display: flex;
justify-content:space-between;
padding: 22px 12px;
margin: 12px 0;
    h3{
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 900;
        color: ${GlobalStyle.bgTheme};
        text-transform: capitalize;
      .svg{
        height: 35px;
        width: 35px;
        margin-right: 6px;
      }
    }
    p{
        color: #dede;
        font-weight: 800;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        h3{
            font-size: 18px;
            display: flex;
            flex-direction: column;
            .svg{
              align-self: start;
            }
        }
        p{
          font-size: 15px;
        }
        .right{
            display: flex;
            justify-content: end;
        }
    }
`