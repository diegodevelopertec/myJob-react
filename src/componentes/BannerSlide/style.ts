/* SlideCardCarousel.css */

import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";



export const ContainerSlide=styled.div`
    width:80%;
    margin: 50px  auto;
   height: 450px;
   border-radius: 35px;

    .slide-card {
      border-radius: 35px;
    height: 550px;
    width: 350px;
    text-align: center;
  
    
  }
  
  .slide-card img {
    width:100%;
    height: 100%;
    border-radius: 35px;
    margin-bottom: 10px;
  }
  


  .slide-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color:${GlobalStyle.bgThemeSecondary};
  }
  
  .slide-card p {
    color: #8CABFF;
    font-size: 1rem;
    font-family: 'Poppins';
  }

  .divider{
    height: 1.5px;
    background-color: ${GlobalStyle.colorTitles};
    margin: 30px 0;
  }

  a{
    padding: 19px 120px;
    margin: 28px 0;
    color: #EEE;
    background-color: #8CABFF;
    border-radius: 3px;
    &:hover{
      background-color: #4477CE;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 0;
    margin: 0px  auto;
    border-radius: 9px;
    .slide-card {
      margin: 0;
      border-radius: 9px;
      width: 100%;
      height: 300px;
      min-height: 350px;
      background-color: #ffffff;
      border: 1px solid #ccc;
    
     
  }

  .slide-card img {
    width:100%;
    height: 100%;
    border-radius: 9px;
    margin-bottom: 10px;
  }
  }

`