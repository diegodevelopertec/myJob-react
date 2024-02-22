import styled from "styled-components";


export const GridCourses=styled.div`
 display: grid;
   background-color: transparent;
    grid-template-columns: repeat(4,1fr);
    gap: 8px; 
    padding: 150px 0;
    margin: 100px 0;
   

    @media screen  and (max-width:758px){
        display: flex;
       padding:  12px;
       align-items:center;
       flex-direction: column;
     
      
    }
    @media screen  and (min-width:760px) and (max-width:950px){
        grid-template-columns: repeat(2,1fr);
        margin: 90px 0px;
        gap: 12px;
        div{
            width: 100%;
            margin: 12px 0;
        }
    }

`