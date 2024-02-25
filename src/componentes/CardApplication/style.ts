import { GlobalStyle } from './../../globalStyle';
import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
border-radius: 4px;
background-color: ${GlobalStyle.bgTheme};
padding: 8px 22px;
margin:12px 0;

.top{
    .header{
        display: flex;
        align-items: center;
         h2{
                font-size: 20px;
                text-shadow:0 0 5px #000;
                color:${GlobalStyle.bgThemeSecondary};
            }
            span{
                font-size: 14px;
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

.divider{
 margin: 14px;
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
            font-family: 'Poppins';
            color: #FFF;
            font-weight: 800;
            font-size: 12px;
            .svg{
                height:22px;
                margin-right: 5px;
                
            }
            .fill{
                fill: ${GlobalStyle.bgThemeSecondary};
            }
           
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
            padding:8px 22px;
            background-color: ${GlobalStyle.bgThemeSecondary};
            width: 30%;
            transition: all ease 0.3s;
            cursor: pointer;
            border-radius: 3px;
            &:hover{
                background-color:#00DFA2;

            }
        }
    }
    .state{
        p{
            font-size: 13px;
        }
    }
}

@media screen and (max-width: 768px) {
padding: 15px 8px;
    .top{
        .header{
            align-items: center;
            h2{
                font-size: 15px;
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
            span{
                font-size: 11px;
            }
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
.state{
    margin: 18px 0;
        p{
            color: #279EFF;
            font-weight: 900;
            font-size: 13px;
            text-decoration: underline;
            color: ${GlobalStyle.bgThemeSecondary};
        }
    }
`