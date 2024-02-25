import styled from "styled-components";

export const Page=styled.div`
margin: 50px 20px;
display: flex;
align-items: center;
flex-direction: column;
form{
    width: 70%;
    padding: 22px;
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
                div{
                    margin:0 22px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    input{
                        width: auto;
                        background-color: #DEDEDE;
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