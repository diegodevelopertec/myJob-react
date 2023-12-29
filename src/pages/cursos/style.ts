import styled from "styled-components";


export const GridCourses=styled.div`
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px; 
    padding: 150px 0;
    margin: 100px 0;


    @media screen  and (max-width:758px){
       display: flex;
       padding:  10px;
       margin: 20px 0;
       flex-direction: column;
    }
    @media screen  and (min-width:760px){
        grid-template-columns: repeat(3,1fr);
        margin: 90px 10px;
    }

`