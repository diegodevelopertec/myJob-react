import { GlobalStyle } from './../../globalStyle';
import styled from "styled-components";


export const Page=styled.div`
margin: 50px 20px;
display: flex;
align-items: center;
flex-direction: column;
.form{
    width: 72%;
    padding: 22px;
    .box-skills{
        display: grid;
        margin: 22px 0;
        gap: 12px;
        min-height: 200px;
        grid-template-columns: repeat(5,1fr);
        li{
            color: white;
            padding:12px 12px;
            display:flex;
            justify-content: space-around;
            align-items: center;
            height: 24px;
            font-size: 14px;
            border-radius: 34px;
            background-color: ${GlobalStyle.bgTheme};
            .svg{
                cursor: pointer;
                stroke:white;
                height: 30px;
                stroke-width: 1px;
                &:hover{
                    stroke: red;
                }
            }
        }
    }
    .cx-btn{
                display: flex;
                justify-content: center;
               input{
                    width:190px;
                    border-radius: 12px;
                    border: none;
                    padding:12px 22px;
                    transition: all ease .3s;
                    color: white;
                    font-size: 15px;
                    margin: 32px 0;
                    background-color: #387ADF;
                    cursor: pointer;
                    &:hover{
                        background-color: #1D24CA;
                    }
                }
            }
            .cx-radio{
                    display: flex;
                    margin: 12px 0;
                    align-items: center;
                    label{
                      font-size: 13px;
                    }
                    input{
                        margin: 12px;
                        font-size: 13px;
                    }
           }
    .cx-input{
        display: flex;
        flex-direction: column;
        label{
            font-size: 13px;
        }
        input,textarea{
          padding:12px;
          width: auto;
          background-color: #DEDEDE;
        }
    }
    
    fieldset{
        border: 1px solid grey;
        padding: 12px;
        margin: 18px 0;
        legend{
         font-size: 22px;
         font-weight: 33px;
         font-weight: 700;
         font-family: 'Arial';
         display: flex;
         align-items: center;
         .svg{
            height: 45px;
            width: 45px;
            margin:0 3px;
         }
         .stroke{
            fill:${GlobalStyle.bgTheme};
         }
      
         
         span{
            font-size: 14px;
            margin: 0 12px;
            cursor: pointer;

           &:hover{
            text-decoration: underline;
            color: #387ADF;
           }
         }
        }
        .cx-state-city{
            display: flex;
            align-items: center;
            div{
                flex: 1;
                select{
                    width: 350px;
                    padding: 12px;
                    border-radius: 2px;
                    transition: all ease 0.3s;
                    &:focus{
                        outline: 1px solid ${GlobalStyle.bgTheme};
                    }
                }
            }
        }
        
           
    }
}

@media screen and (max-width:850px){
    margin: 50px 0px;
    form{
        width: 100%;
        .cx-state-city{
            flex-direction: column;
            div{
                margin: 8px 0;
            }
        }
    }
}
`