import styled from "styled-components";
import { GlobalStyle } from "../../../globalStyle";


export const Page=styled.div`


`

export const Table=styled.table`
margin: 100px 0;
border-collapse: collapse;
display: table;
width:100%;
font-size: 13px;
box-shadow: 0 0 12px #000;
thead{
    background-color: ${GlobalStyle.bgTheme};
    color: white;
}
td,tr{
    padding: 12px;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid grey;
   
}

.actions{
   display: flex;
   align-items: center;
   span{
    flex: 1;
   
   }
   .btn{
    background-color:#387ADF;
    color: white;
    border-radius: 9px;
    padding: 12px;
    transition: all ease .3s;
    &:hover{
        background-color: #1D24CA;
    }
   }
        .svg{
            stroke: gray;
            stroke-width:0.4px;
            height: 35px;
            width: 35px;
            transition: all ease .3s;
            cursor: pointer;
            &:hover{
               stroke:red;
            }
        }
}

`