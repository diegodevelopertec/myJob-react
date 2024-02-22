import styled from "styled-components";
import { GlobalStyle } from "../../globalStyle";

type Props={
    bgImage:string,
}
export const Container=styled.div<Props>`
background-color: #F0F0F0;
height:max-content;

border-radius: 12px;
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
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        width: 100%;
    }
}



.bottom{
    padding: 22px 12px;
    height: 280px;
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
    transition: all ease .3s;
    box-shadow:  0 0 22px #222;
    .top{
        .opacity{
            background:rgba(0, 0, 0, 0);
        }
    }
}

@media screen and (max-width:750px) {
    width: 90%;
    margin:10px 0;
    .bottom{
        .data{
          display: none;
        }
    }
}
`