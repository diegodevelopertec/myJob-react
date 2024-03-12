import { styled } from "styled-components";

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

        @media screen and (max-width:850px){
          margin: 22px 4px;
            width: auto;
       }
`
export const BoxNewExperienceAndTrainning=styled.div<props>`
           display:${props=>props.newItem == true ? 'block' : 'none'};
            margin: 22px 0;
            border-radius: 5px;
            box-shadow: 0 0 12px #000;
            padding: 22px;

            form{
               margin: 0;
               width: auto;
               padding: 0;
            }
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
                display: flex;
                align-items: center;
                label{
                    width:100px;
    
                }
                p{
                    margin: 5px 0;
                    font-size: 13px;
                    color: red;
                }
                input{
                   flex:1;
                    background-color: #DEDEDE;
                    margin: 0 18px;
                }
            }
            .cx-input-textarea{
               
               p{
                   margin: 5px 0;
                   font-size: 13px;
                   color: red;
               }
             
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
    margin: 22px 4px;
    width: auto;
   .cx-dates {
     flex-direction: column;
     
   }
}
`