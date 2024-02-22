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
box-shadow: 0 0 32px #222;
.left{
    h2{
        font-size: 32px;
        display: flex;
        align-items: center;
        color: ${GlobalStyle.bgThemeSecondary};
        .svg{
            height: 40px;
            width: 40px;
         
        }
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
            font-size: 16px;
            font-family: 'Poppins';
            margin:0 12px;
            color: #DEDEDE;
            padding: 13px 24px;
            border-radius: 23px;
            transition:all ease 0.2s;
            &:hover{
                background-color:${GlobalStyle.bgThemeSecondary};
              
            }
        }
    }
}



@media screen and (max-width: 768px) {
    padding: 12px 8px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom:100px;
    z-index: 1;
    .right {
        .cx-btn{
            display:${props=>props.activeMobile === false ? 'flex' : ' none'};
        }
        nav{
            .close-menu{
                display:flex;
               
            }
            z-index: 1;
            display:${props=>props.activeMobile ? 'auto' : 'hidden'};
            transition: all ease .3s;
            padding: 190px 0;
            position: fixed;
            bottom: 0;
            width:${props=>props.activeMobile ? '60vw' : '0'};
            top: 0;
            right: 0;
            height: 100vh;
            background-color:#0F1035;
            .links{
                display:${props=>props.activeMobile ? 'auto' : 'none'};
                flex-direction: column;
                a{
                    font-size: 17px;
                    padding: 22px;
                    display: flex;
                    justify-content: center;
                    width:${props=>props.activeMobile ? 'auto' : ''};
                    margin:0;
                    border-radius: 0;
                    border-top: 1px solid #DEDEDE;
                }
            }
        }
    }


}
`