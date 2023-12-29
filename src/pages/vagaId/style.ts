import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
margin: 50px 0;
padding: 12px;

p{
    margin: 10px 0;
    font-size: 17px;
    font-family: 'Poppins';
    font-weight: 600;
}
@media screen and (max-width:850px) {
    margin: 50px 0;
}
`
export const SectionDetailsJobs=styled.div`
.card-detail{
        .card-title{
            font-size: 24px;
            color: ${GlobalStyle.bgThemeSecondary};
            padding: 22px;
            background:linear-gradient(to bottom,${GlobalStyle.bgTheme},${GlobalStyle.colorTitles});
        }
        .card-body{
            padding:22px;
            font-size: 16px;
            p,li{
                list-style: circle;
                text-transform:unset;
                font-weight:500;
                font-family: 'Poppins';
            }
            .card-contrato{
                    text-transform: uppercase;
            }
        }
        .card-body-company{
            display: flex;
            padding:32px 0;
            align-items:center;
            .cx-img{
                display: flex;
                justify-content:center;
                width:20%;
                img{
                    box-shadow: 0 0 12px #000;
                    height:160px;
                    width:160px;
                    border-radius: 100%;
                }
            }
           .data{
            flex:1;
                p{
                    padding: 12px;
                    font-weight: 600;
                    font-family: 'Poppins';
                }
              
                h3{
                    font-family: 'Roboto';
                    font-size:26px;
                    font-weight: bold;
                }
           }
        }
    }
    .actions{
      padding:0 12px ;
       flex: 1;
       margin: 33px 0;
       display: flex;
       justify-content:center;
        flex-direction: 1;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            padding:32px 22px;
            font-size: 17px;
            background-color:#0EA293;
            width: 30%;
            transition: all ease .4s;
            cursor: pointer;
            border-radius: 3px;
            border: none;
            &:hover{
                background:#14C38E;
                box-shadow: 0 0 12px ${GlobalStyle.colorTitles};
                color: ${GlobalStyle.colorTitles};

            }
        }
    
    }

@media screen and (max-width:950px) {
    .card-detail{
        .card-body-company{
            flex-direction: column;
            .cx-img{
                width: 100%;
                margin:20px 0;
                img{
                    width: 255px;
                    height: 255px;
                    border-radius: 100%;
                }
            }
            .data{
                margin: 12px 0;
                h3{
                    text-align: center;
                }
                p{
                    text-align:justify;
                }
            }
        }
    }

    .actions{
        margin:0;
        button{
            width:80%;
        }
    }
}




`
export const ShareLinks=styled.div`
    margin: 90px 0;
    width: 70%;
    background-color: #eee;
    padding: 12px;
    display: flex;
   
    
    div{
        font-size: 18px;
        font-family: 'Poppins';
        display: flex;
        align-items: center;
        margin: 12px;
        button{
            margin: 5px;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        background-color: transparent;
        flex-direction: column;
        padding:0;
        margin:85px 0;
        font-size: 14px;
        height: max-content;
       .btns{
        width: 100%;
          button{
            margin: 3px;
            height:15px;
            width: 215px;
          }
       }
    }
`


export const SectionJobsSimilar=styled.div`
margin:85px 0;
h3{
    font-family: 'Roboto';
    font-size: 122px;
    color: #272829;
    font-weight: 900;
}

p{
    font-weight: 800;
    font-size: 16px;
    margin:8px 4px;
    font-family: 'Poppins';
}


@media screen {
    margin: 0;
    padding: 0;
    h3{
        font-size: 23px;
        font-weight: 900;
    }
}
`