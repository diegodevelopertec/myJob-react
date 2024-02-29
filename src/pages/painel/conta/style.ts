import styled from "styled-components";


export const Page=styled.div`

.data{
    margin: 100px 0;
    display: flex;
    justify-content: center;
    .content-data{
        padding:22px;
        box-shadow: 0 0 12px #aaa;
        border: 1px solid gray;
        height:500px;
        width: 500px;
        p{
        border-bottom: 1px solid gray;
        padding: 12px;
        strong{ margin-right: 9px;}
       }
       .bx-btn{
            display: flex;
            justify-content:center;
            align-items: center;
            width: 100%;
            margin: 50px 0;
            button{
                cursor: pointer;
                width: 150px;
                padding: 12px;
                color: white;
                background-color:#387ADF;
                border: none;
                border-radius: 9px;
                transition: all ease .3s;
                &:hover{
                    background-color: #1D24CA;
                }
            }
        }
   
    }}

`