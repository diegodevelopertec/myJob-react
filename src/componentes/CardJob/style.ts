import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
background-color: ${GlobalStyle.bgTheme};
padding:22px;
border-radius: 5px;
margin: 23px 0;

.top{
    .header{
        display: flex;
     
            h2{
                font-size: 25px;
                text-transform: capitalize;
                color:${GlobalStyle.bgThemeSecondary};
            }
            span{
                font-size: 12px;
                margin: 5px;
                padding: 7px;
                border-radius: 3px;
                color: #FFFF;
                background-color: ${GlobalStyle.bgThemeSecondary};
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
     
    }
}
.data-job{
    display: flex;
    p{
        margin:0 12px;
        font-weight: 800;
      font-size:14px;
      font-family: 'Poppins';
      color: #FFF;
    }
}


.divider{
 margin: 22px;
 height: 1.5px;
 background-color:${GlobalStyle.bgThemeSecondary};
}

.info{
    display: flex;
    .left{
        display: flex;
        justify-content:space-between;
        width: 70%;
        span{
            img{
                height:29px;
                margin-right: 5px;
            }
           font-family: 'Poppins';
            color: #FFF;
            font-size: 13px;
            font-weight: 800;
        }
     }
    
    .right{
      padding:0 12px ;
       flex: 1;
       display: flex;
       justify-content:center;
        flex-direction: 1;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            padding:12px 22px;
            background-color: ${GlobalStyle.bgThemeSecondary};
            width: 30%;
            transition: all ease .3s;
            cursor: pointer;
            border-radius: 3px;
            &:hover{
                box-shadow:0 0 9px #181D31;
                background: linear-gradient(to bottom ,${GlobalStyle.bgThemeSecondary},#0E8388);
                //background-color:#03C988;

            }
        }
    }
}

@media screen and (max-width: 768px) {

    .top{
        .header{
            align-items: center;
            h2{
                font-size: 23px;
                justify-content: center;
            }
            span{
                font-size: 11px;
            }
        }
    }
    .info{
     flex-direction: column;
        .left{
            display: flex;
            flex-wrap: wrap;
            width:auto;
            margin:10px 0;
            font-size:13px;
            img{
                height: 26px;
                width: 26px;
            }
        }
        .right{
            margin:12px 0;
        }
    }
}
`