
import styled from "styled-components";



export const Page=styled.div`
padding:50px;
display: flex;

.left{
display: flex;
width: 40%;
flex-direction: column;
align-items: center;
    .profile{
        border-radius: #000;
        width: 350px;
        height: 500px;
        padding: 22px;
        border: 1px solid #DEDEDe;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        .content{
           .cx-img{
                display: flex;
                justify-content: center;
                img{
                    height: 150px;
                    width: 150px;
                    border:1px solid  #DEDEDE;
                    box-shadow: 0 0 5px #000;
                    border-radius: 100%;
                }
           }
            h3{
                font-size: 22px;
                margin: 12px 0;
            }
            .data{
                p{
                    padding: 9px 0;
                    border-bottom: 1px solid #DEDEDE;
                }
            }
            .cx-btn{
                display: flex;
                justify-content: center;
                margin:22px 0;
                button{
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
        }
    }
    button{
        border: none;
        background-color: transparent;
        margin: 12px 0;
        cursor: pointer;
        font-weight: 700;
        color: gray;
        &:hover{
            color:#387ADF;
            text-decoration: underline;
        }
    }
}
.right{
    flex: 1;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 950px) {
 flex-direction: column;
padding: 100px 12px;
    .left,.right{
      width: 100%;
      .profile{
        width: 90%;
      }
    }
}

`

export const NotCurriculum=styled.div`
width: 100%;
display: flex;
.box{
    width: 100%;
    height: 500px;
    border-radius: 22px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    background: url('/imgs/curriculum.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;;

    .text{
    margin: 0 190px;
    color: #000;
        h3{
        font-size: 43px;
        margin: 12px 0;
        }
        p{
            margin-bottom: 18px;
        }
    a{
        text-align: center;
            width: 70%;
            border-radius: 12px;
            border: none;
            padding:12px 22px;
            transition: all ease .3s;
            color: white;
            font-size: 19px;
            margin: 32px 0;
            background-color: #387ADF;
            cursor: pointer;
            &:hover{
                background-color: #1D24CA;
            }
        }
    }
}

@media screen and (max-width:950px) {
   display: flex;
   justify-content: center;
   margin: 70px 0;
   .box{
     width:100%;
     .text{
        font-size: 19px;
        margin: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
     }
   }
}
`

export const BoxCurriculum=styled.div`
border: 1px solid #DEDEDE;
padding:22px  12px;
width: 100%;
.top{
    display: flex;
    justify-content: end;
    padding-bottom: 9px;
    border-bottom: 1px solid #DEDEDe;
    span{
        margin: 0 12px;
        padding: 12px;
        border-radius: 6px;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            color: #387ADF;
            box-shadow: 0 0 5px #222;
            outline: 1px solid #387ADF;
        }
    }
}
.header{
    padding:30px 0;
    h2{
      text-align: center;
      margin-bottom: 30px;
    }
    .info{
        display: flex;
        flex-direction: column;
        span{
            margin: 5px 0;
        }
    }
}

section{
    margin: 20px 0;
    h4{
        font-size: 23px;
    }
    ul{
        margin: 12px 0;
        li{
            margin: 4px 0;
        }
    }
    .card{
        border: 1px solid #DEDEDE;
        border-radius: 9px;
        padding: 12px;
        margin: 12px 0;
        .title{
            font-weight: bold;
            margin: 9px 0;
        }
    }
}
@media screen and (max-width:950px){
    margin: 50px 0;
}
`

export const PDFPage=styled.div`
width: 100%;
flex-direction: column;
display:none;
font-family: 'Poppins';
.data-profile{
    display: flex;
    flex-direction: column;
}
.top{


    h2{
    font-size:45px;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction:column;
    .office{
        font-size: 18px;
        margin: 6px 0;
    }
}

.ctts{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    span{
        font-size: 15px;
    }
}


}
.section{
    ul{
        display: block;
        margin: 8px;
       li{
        list-style-position: inside;
        background-color: transparent;
        color:#000;
        padding: 0;
        margin: 2px 0;
       }

    }

    .curso,.experiencia{
        margin: 12px 0;
        .title{
            text-transform: capitalize;
            font-weight: bold;
        }
    }
}

`

export const ContentModal=styled.div`
width:880px;
padding:12px 52px;
.cx-input{
    padding: 4px;
    label{
    max-width: 100px;
    margin-right:9px;
}
input{
    background-color: #DEDE;
    flex:1;
    padding: 9px;
}

    
}


.cx-btn{
    display:flex;

    margin:30px 0;
    justify-content:center;
}
`