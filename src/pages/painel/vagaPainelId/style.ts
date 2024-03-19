import { GlobalStyle } from "../../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
padding: 0 32px;

.pcd-line{
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 12px 0;
    padding: 12px;
    
    .cx{
        display: flex;
        align-items: center;
        justify-content: end;
        margin: 12px 0;
        padding: 12px;
        font-weight: bold;
        .svg{
            height: 55px;
            fill:${GlobalStyle.bgTheme};
            width: 55px;
            margin-right: 12px;
        }
    }
    
}
p{
    margin: 10px 0;
    font-size: 17px;
    font-family: 'Poppins';
    font-weight: 700;
    color: gray;
}
.header-page{
    .title-action{
        display: flex;
        border-bottom: 1px solid gray;
        justify-content: space-between;
        align-items: center;
        button,a{
            padding:12px 32px;
            margin:  0 8px;
            color: white;
            cursor: pointer;
            border: none;
            border-radius: 9px;
            background-color: #387ADF;
            transition:all ease .3s;
            &:hover{
                background-color: #0C359E;
            }
        }
        h3{
            font-size: 29px;
            margin: 90px 0;
            color: #222;
            display: flex;
            align-items: center;
            span{
                background-color: ${GlobalStyle.bgTheme};
                font-size: 15px;
                color:white;
                padding: 12px;
                border-radius: 35px;
                margin-left: 20px;
            }
        }
    }
    

}
@media screen and (max-width:850px) {
    margin: 10px 0;
    margin-bottom: 100px;
    .header-page{
        h3{
            flex-direction: column;
        }
    }
}
`
export const SectionDetailsJobs=styled.div`
.card-detail{
        .card-title{
            font-size: 24px;
            color: #fff;
            padding: 22px;
            display: flex;
            align-items: center;
            background:linear-gradient(to bottom,${GlobalStyle.bgTheme},${GlobalStyle.bgThemeSecondary});
            .svg{
                height: 45px;
                width: 45px;
            }
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
                    height:160px;
                    width:160px;
                    border-radius: 100%;
                }
            }
           .data{
            flex:1;
                p{
                    padding: 12px;
                    font-weight: 500;
                    color: #aaa;
                    font-family: 'Poppins';
                }
              
                h3{
                    font-family: 'Montserrat';
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

type props={
    onView:boolean
}

export const BoxListCandidates=styled.div<props>`
position: fixed;
display: ${props=>props.onView ? 'flex' :'hidden'};
flex-direction: column;
background-color: #F3F3F3;
box-shadow:0 0 12px #222;
right: 0;
width:${props=>props.onView ? '83vw' :'0'};
height: 100vh;
bottom: 0;
transition: all ease-in-out 0.3s;
.close-box{
   padding:12px 20px;
   display: flex;
    background-color: ${GlobalStyle.bgTheme};
    justify-content:space-around;
    align-items: center;
    .title{
        font-size: 15px;
        font-family: 'Poppins';
        font-weight: 800;
        text-align: center;
        color: #fff;
    }
    span{
        font-size: 33px;
        height: 35px;
        width: 35px;
        color: #fff;
        transition: all ease .2s;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
           color: ${GlobalStyle.bgThemeSecondary};
          
        }
    }
}

.content{
    margin:90px  30px;
    display: flex;
    height: 100vh;
    .filters{
        border: 1px solid #dde;
        border-radius: 8px;
        height: 500px;
        padding: 12px;
        box-shadow: 0 0 5px #222 2px;
        flex: 1;
        legend{
            font-size: 18px;
            margin-bottom: 22px;
            border-bottom: 1px solid #dde;
        }
        .filter-item{
            display: flex;
            flex-direction: column;
            span{
                margin: 5px 0;
                font-size: 16px;
                input {
                    margin-right: 8px;
                }
            }
        }
    }
    overflow-y: auto;
    .list-candidates{
        width: 70%;
        height: 670px;
        overflow-y: auto;
        box-shadow:0 0 8px #aaa;
        margin: 0 12px;
        border: 1px solid #dde;
        display: ${props=>props.onView ? 'block' :'none'};
        padding:33px 22px;
        .divider{
            margin: 5px 0;
            height: 1px;
            background-color: #dde;
        }
        .profile{
            display: flex;
            margin: 12px 0;
            align-items: center;
            justify-content: space-between;
            .left{
                display: flex;
                font-size: 13px;
                flex-direction: column;
              .data{
                display: flex;
               align-items: center;
               color: #222;
               font-weight: 700;
                img{
                    background-color: #3876BF;
                    height: 34px;
                    width: 34px;
                    border-radius: 100%;
                    margin: 0 12px;
                    box-shadow:  0 0 5px #000;
                };
              }
            }
            .right{
                a{
                    background-color: #3876BF;
                    color: #Fff;
                    padding: 9px 12px;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                    transition:all ease .3s;
                    &:hover{
                        background-color: #3D30A2;
                    }
                }
            }
        }
    }
}


@media screen and (max-width:950px) {
    top:9vh;
    overflow: auto;
    height: auto;
    width:${props=>props.onView ? '100vw' :'0'};
}
`