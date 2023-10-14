import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type props={
    activeMobile:boolean
}

export const Container=styled.header<props>`
height: 70px;
background-color:${GlobalStyle.bgTheme};
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;

.left{
    h2{
        font-size: 32px;
        color: ${GlobalStyle.bgThemeSecondary};
    }
}
.cx-btn{
      display: none;
      button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${GlobalStyle.bgThemeSecondary};
        border: none;
        height: auto;
        border-radius: 3px;
        padding: 8px;
        box-shadow:0 0 3px #EDED;
        img{
          height: 30px;
         }

      }
    }

nav{
    .close-menu{
        display: none;
        position: fixed;
        justify-content: flex-end;
        top: 0;
        width:auto;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${GlobalStyle.bgThemeSecondary};
            border: none;
            height: auto;
            border-radius: 3px;
            padding: 8px;
            

            img{
              height: 30px;
            }
        }
    
    }
    .links{
        display: flex;
        a{
            font-size: 19px;
            margin:0 12px;
            color: #DEDEDE;
            transition:all ease 0.2s;
            &:hover{
                color:${GlobalStyle.bgThemeSecondary};
              
            }
        }
    }
}



@media screen and (max-width: 768px) {
    padding: 12px 8px;
    .right {
        .cx-btn{
            display:${props=>props.activeMobile === false ? 'flex' : ' none'};
        }
        nav{
            .close-menu{
                display:flex;
            }
            display:${props=>props.activeMobile ? 'auto' : 'hidden'};
            transition: all ease .3s;
            padding: 190px 0;
            position: fixed;
            bottom: 0;
            width:${props=>props.activeMobile ? '60vw' : '0'};
            top: 0;
            right: 0;
            height: 100vh;
            background-color:${GlobalStyle.bgThemeSecondary};
            .links{
                flex-direction: column;
                a{
                    font-size: 17px;
                    margin:16px auto;
                }
            }
        }
    }


}
`