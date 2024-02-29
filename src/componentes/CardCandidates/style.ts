import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";


export const Container=styled.div`
background:linear-gradient( to bottom , ${GlobalStyle.bgTheme},#000);
border-radius: 6px;
box-shadow:0 0 6px #aaa;

&:hover{
    background:linear-gradient( to bottom , #5E227F,#000);
}
.divider{
    height: 1.25px;
    margin: 0px 12px;
    background-color:${GlobalStyle.bgThemeSecondary};
}
.top{
   
    .cx-img{
        display: flex;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        justify-content:center;
        height:146px;
        margin-bottom: 52px;
        background:linear-gradient( to right,${GlobalStyle.bgThemeSecondary},#000);
        img{
          height: 146px;
          border-radius: 100%;
          width: 146px;
          margin-top:46px;
          border: 1px solid gray;
        }
    }
    .cx-info{
        display: flex;
        flex-direction: column;
        align-items:center;
        margin:23px 0;
        .name{
            color: ${GlobalStyle.bgThemeSecondary};
            font-size: 22px;
            display: flex;
            margin: 13px 0;
            text-shadow: 0 0 5px #000;
        }
       
        
    }
}
.cargo{
    display:flex;
    justify-content: center;
    margin: 8px 0;
    font-size: 15px;
    p{
        color: white;
        padding: 10px ;
        width: max-content;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
        background-color: ${GlobalStyle.bgTheme};
    }
}

.action{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 34px 0;
 
    a{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${GlobalStyle.bgThemeSecondary};
        padding: 12px 5px;
        border:none;
        transition: all ease .2s;
        border-radius: 3px;
        color: #FFF;
        &:hover{
            background:#512B58;
        }
    }
}


@media screen and (max-width:950px){
    .cargo{
       p{
        font-size:8px;
       }
    }

    .action{
        a{
            width: 90%;
        }
    }
}
`