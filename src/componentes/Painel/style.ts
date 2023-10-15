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
    width: 15vw;
    background:linear-gradient(to bottom,${GlobalStyle.bgTheme},#000);
    .logo{
        font-size: 25px;
        margin: 100px 0;
        h3{
            font-size: 32px;
            color:${GlobalStyle.bgThemeSecondary};
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
            text-align: center;
            padding:15px 22px;
            margin:8px ;
            color: #FFF;
            transition: all ease 0.3s;
            border-radius: 3px;
            font-family: 'Poppins';
           text-transform: uppercase;
           font-weight: 900;
            &:hover{
                background-color: ${GlobalStyle.colorTitles};
                color: ${GlobalStyle.bgThemeSecondary};

            }
        }
    }
`
export const Main=styled.main`
display: flex;
margin-left: 199px;
flex: 1;
background-color:#F9F9F9;
flex-direction: column;
min-height: 800px;
`