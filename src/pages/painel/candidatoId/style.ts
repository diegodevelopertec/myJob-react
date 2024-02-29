import { GlobalStyle } from "../../../globalStyle";
import styled from "styled-components";


export const Page=styled.div`
margin:50px 90px;
*{
    font-family:'Poppins', sans-serif, 'Roboto';
    h3{
       font-family:'Poppins', sans-serif, 'Roboto';
    }
    p{
        font-size: 18px;
        font-weight: 500;
        text-align: justify;
    }

}
@media screen and (max-width:780px){
    margin:50px 10px;
}
`

export const HeaderPage=styled.div`
display: flex;
flex-direction: column;
.top{
    display: flex;
    font-size: 32px;
    align-items: center;
    .svg{
        height: 45px;
        fill: ${GlobalStyle.bgThemeSecondary};
    }
    img{
        height: 155px;
        box-shadow: 0 0 14px #000;
        width: 155px;
        margin-right: 23px;
        border-radius: 100%;
    }
    span{
        font-size: 18px;
        margin:0 12px;
        font-weight: bold;
        padding:12px 23px;
        border-radius: 33px;
        color: #EEE;
        background-color: ${GlobalStyle.bgThemeSecondary};
        border: 1px solid ${GlobalStyle.bgTheme};
    }
}
.divider{
    height: 1.25px;
    margin:19px 130px;
    background-color: ${GlobalStyle.bgTheme};
}
.ctts{
   display :flex ;
   flex-direction: column;
   align-items: center;
   .title{
    text-align: center;
    font-weight: 800px;
    margin: 22px 0;
   }
   .links{
    display :flex;
    justify-content: center;
    align-items: center;
    a{
        margin: 12px;
        transition: all ease .3s;
        .svg{
            height: 35px;
            width: 35px;
        }
        &:hover{
            padding: 12px;
            border-radius:12px;
            background-color: ${GlobalStyle.bgThemeSecondary};

        }
    }
   }
}

@media screen and (max-width:780px){
  .top{
    flex-direction: column;
    h3{
        font-size: 22px;
        margin:12px 0;
        font-weight: 900;
    }
    span{
        background-color: #aaa;
        padding: 12px;
        border-radius: 12px;
    }
  }
}

`

export const Section=styled.section`
margin: 40px 0;
.title-section{
    font-size: 28px;
    font-weight: 900;
    margin: 24px 0;
   
}
.skills{
   display: inline-block;
   flex-wrap: wrap;

   li{
    font-weight: 900;
    border-radius: 5px;
    color:${GlobalStyle.bgThemeSecondary};
    background-color: ${GlobalStyle.bgTheme};
    padding: 9px 12px;
    margin: 12px;
   }
}
`