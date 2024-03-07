import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

export const Page=styled.div`
margin: 50px 20px;
display: flex;
align-items: center;
flex-direction: column;
form{
    width: 70%;
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
    margin: 50px 5px;
    form{
        width: 100%;
        
    }
}
`
type props={
    newItem:boolean
}

export const BoxNewExperienceAndTrainning=styled.div<props>`
         display:${props=>props.newItem == true ? 'block' : 'none'};
          margin: 22px;
            border-radius: 5px;
            box-shadow: 0 0 12px #000;
            padding: 22px;
            background-color: #F5F7F8;
           .header-box{
                display: flex;
                border-bottom: 1px solid grey;
                align-items:center;
                justify-content:space-between;
                h2{
                    font-size: 19px;
                    font-weight: 100;
                    margin-bottom: 22px;
               }
               span{
                    cursor: pointer;
                 
                    .svg{ 
                        height: 35px;
                    }
               }

           }
            .cx-input{
                margin: 9px 0;
            }
            .cx-radio{
                display: flex;
                margin: 8px 0;
              
                label{
                    margin-right: 22px;
                 
                }
                input{
                    margin-right: 8px;
                    font-size: 13px;
                
                }
                span{
                    margin-right: 12px;
                }
            }
            .cx-dates{
                display: flex;
                align-items: center;
                justify-content: center;
                label{
                    font-size: 13px;
                }
               
                .cx-date{
                    margin:0 22px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    input{
                        width: auto;
                        background-color: #DEDEDE;
                    }
                }
                .radio{
                    display: flex;
                    align-items: center;
                    label{
                        margin: 0 22px;
                    }
                    input{
                        margin: 12px;
                    }
                }
            }
            .cx-btn{
                display: flex;
                justify-content: center;
                button{
                    width:150px;
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
        

@media screen and (max-width:850px){
    width: auto;
    margin: 22px 4px;
    .cx-radio,.cx-dates{
        flex-direction: column;
    }
}
`