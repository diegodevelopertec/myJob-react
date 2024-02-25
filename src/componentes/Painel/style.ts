import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";


export const Container=styled.div`
    min-height:100vh;
    background-color: #fff;
    display: flex;

`
export const HeaderPainel=styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    left:0;
    height: 100vh;
    width: 16vw;
    background:linear-gradient(to bottom,${GlobalStyle.bgTheme},#000);
    .logo{
        font-size: 25px;
        margin:50px 0;
        h3{
            display: flex;
            align-items: center;
            font-size: 32px;
            color:${GlobalStyle.bgThemeSecondary};
            .svg{
                height:55px;
                width:55px;
            }
        }
        p{
            font-size: 19px;
            font-weight: 700;
            text-shadow: none;
            text-align: center;
            font-family: 'Poppins';
            color: ${GlobalStyle.bgThemeSecondary};
        }
    }
    nav{
        display: flex;
        flex-direction: column;
        font-size: 15px;
    

        a{
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            padding:15px 22px;
            margin:8px ;
            color: #FFF;
            border-bottom:1px solid ${GlobalStyle.bgThemeSecondary};
            font-size: 14px;
            transition: all ease 0.3s;
            border-radius: 3px;
            font-family: 'Poppins';
           text-transform: uppercase;
           font-weight: 900;
           .svg{
                height:25px;
                width:25px;
                stroke:#fff;
                margin-right: 12px;
           }
           .fill{
               height:25px;
                width:25px;
               fill:#fff;
                margin-right: 12px;
           }
            &:hover{
                border:1px solid ${GlobalStyle.bgThemeSecondary};
                background-color: ${GlobalStyle.colorTitles};
                border-top-right-radius: 12px;
                border-top-left-radius: 12px;
                color: ${GlobalStyle.bgThemeSecondary};
              .svg{
                stroke: ${GlobalStyle.bgThemeSecondary};
              }
              .fill{
                fill: ${GlobalStyle.bgThemeSecondary};
              }

            }
        }
    }
`
export const Main=styled.main`
display: flex;
margin-left: 219px;
flex: 1;
background-color:#F9F9F9;
flex-direction: column;
min-height: 800px;
`