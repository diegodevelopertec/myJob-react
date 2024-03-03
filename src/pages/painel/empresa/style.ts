import styled from "styled-components";
import { GlobalStyle } from "../../../globalStyle";


export const PageCompany=styled.div`
margin: auto 60px;
.header-page{
    display: flex;
    align-items: center;
    box-shadow: 0 0 12px #000;
    background:linear-gradient(to bottom, ${GlobalStyle.bgTheme},#000);
    padding: 22px;
    border-radius: 12px;
    img{
        height: 230px;
        width: 230px;
        border-radius: 100%;
        box-shadow: 0 0 12px #aaa;
   }
 h3{
    font-size: 33px;
   margin: 0 22px;
   color: white;
 }

}


.data{
    display: grid;
    margin: 100px 0;
    grid-template-columns: repeat(3,1fr);
}
section{
    margin: 30px 0;
    h3{
      font-size: 33px;
       margin: 0 22px;
      }
}




`