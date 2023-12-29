import styled from "styled-components";


export const Container=styled.div`
display: flex;
flex-direction: column;
padding:50px;

.content{
    min-height: 100vh;
}

@media screen and (max-width:769px){
    h2{
        margin:auto 22px;
    }
    padding: 10px 7px;
}
`