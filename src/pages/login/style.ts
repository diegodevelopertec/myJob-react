import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";
import  HomePageImg from './../../../public/imgs/homepage.png'

export const Page=styled.div`
    height: 959px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${HomePageImg});
        background-color:rgba(28, 26, 27, 0.89);
    
    

@media screen and (max-width: 768px) {
    padding: 150px 12px;
}
`

export const Form=styled.form`
       min-height: 500px;
        padding: 22px;
        width: 600px;
        margin-top: 20px;
        border-radius:5px;
        box-shadow: 0 0 22px #000;
        background: rgba(28, 26, 27, 0.67);
        
        h2{
            font-size: 35px;
            color: ${GlobalStyle.bgTheme};
        }
        p{
            font-size: 23px;
            color: ${GlobalStyle.bgThemeSecondary}
        }
     
            
            .inputs{
               margin:42px 0;
              .cx-radio{
                margin: 25px 0;
                background-color: #EDEDED;
                padding: 12px;
                p{
                    font-weight: bold;
                    color: #191717;
                    margin: 12px 0;
                }
                .error{
                    color: #D83F31;
                    font-size: 12px;
                    margin: 5px 0;
                }
                span{
                    display: flex;
                    justify-content: space-around;
                    font-family: 'Poppins';
                    font-weight: 900;
                    font-size: 16px;
                    color: #191717;
                    .input-radio{
                        display: flex;
                        align-items: center;
                        span{
                            margin-left: 8px;
                        }
                    }
                }
                span{
                    input{
                        margin-left:12px;
                    }
                }
              }
              .cx-input{
                display: flex;
                align-items: center;
                flex-direction: column;
                p{
                    margin: 3px;
                    color: #D83F31;
                    font-size: 12px;
                }
                input{
                    width: 90%;
                }
            }
        }
        
        .actions{
            display:flex;
            flex-direction: column;
            align-items: center;
            input{
                    width: 100%;
                    padding:12px 132px;
                    font-size: 19px;
                    border:none;
                    border-radius: 9px;
                    cursor: pointer;
                    color: #fff;
                    transition: all ease .2s;
                    background-color:${GlobalStyle.bgThemeSecondary};
                    &:hover{
                        background:#33BBC5;
                    }
                }
           
            .about{
                display: flex;
                flex-direction: column;
                align-items: end;
                margin: 18px 0;
               a{
                    font-family: 'Poppins';
                    color: gray;
                    font-weight: 700;
                    &:hover{
                        text-decoration:underline;
                        color: ${GlobalStyle.bgThemeSecondary};
                    }
               }
            }
            hr{
                height: 1.25px;
                margin:22px ;
                width: 100%;
                background-color: #aaa;
            }
        }
        .cx-media-links{
            display: flex;
            justify-content: center;
        
            .media-link{
                display: flex;
                justify-content: center;
                align-items:center;
                div{
                    margin-left: 12px;
                    &:hover{
                      padding: 6px;
                      background-color: ${GlobalStyle.bgTheme};
                    }
                }
            }
        }
     
    



`