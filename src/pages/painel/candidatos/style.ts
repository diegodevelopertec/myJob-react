import { styled } from "styled-components";




export const ContainerProfessional=styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:22px 8px;
    justify-content: center;
    margin: 80px 5px;
    padding: 18px;


@media screen and (max-width: 768px) {
    padding: 18px 0;
    grid-template-columns: repeat(2,1fr);
}
`