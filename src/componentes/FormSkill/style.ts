import { styled } from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type props={
    newItem:boolean
}

export const BoxForm=styled.fieldset`
display: flex;
flex-direction: column;
width: 70%;
padding: 22px;
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

        .box-skills{
                display: grid;
                margin: 12px 0;
                gap: 4px;
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

    @media screen and (max-width:830px){

        width:90%;
        .box-skills{
            display: flex;
            flex-direction: column;
        }
    }
`
export const BoxNewExperienceAndTrainning=styled.div<props>`
            display:${props=>props.newItem == true ? 'block' : 'none'};
            margin: 22px 0;
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
                p{
                    margin: 5px 0;
                    font-size: 13px;
                    color: red;
                }
                input{
                    width: 90%;
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