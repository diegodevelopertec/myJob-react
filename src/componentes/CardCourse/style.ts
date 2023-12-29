import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type Props={
    bgImage:string,
}
export const Container=styled.div<Props>`
background-color: #F0F0F0;
border-radius:5px;
height:max-content;

.top{
 height: 250px;
 background-repeat:no-repeat;
 background-position: center;
 background-size: cover;
 background-image:url(${props=>props.bgImage ? props.bgImage : ''});
 
 .opacity{
    width: 100%;
    height: 100%;
    background:rgba(0, 0, 0, 0.5);
 }
 img{
    height: 100%;
    width: 100%;
 }
}



.bottom{
padding: 22px;
height: 280px;
background-color: red;
background-color: #F5F7F8;
border: 1px solid #aaa;
    .content{
        h3{
            font-size: 17px;
            color: #222;
            margin:9px 0;
            padding: 12px;
            text-align: justify;
        }
        .data{
            display: flex;
            align-items: center;
            margin: 20px 0;
            justify-content: space-between;
            div{
                border-radius: 30px;
                padding: 12px 30px;
                color: #222;
                background-color: #DEDEDE;
                border: 1px solid ${GlobalStyle.bgTheme};
            }
        }

        .cx-btn{
            display: flex;
            justify-content: center;
        }
    }
}

&:hover{
    transition: all ease 0.2s;
    .top{
        .opacity{
            background:rgba(0, 0, 0, 0);
        }
    }
}

`