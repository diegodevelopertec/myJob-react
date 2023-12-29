import styled from "styled-components";


export const ContainerJobs=styled.div`
margin:150px 20px;
min-height: 500px;
display: flex;
flex-direction: column;

.cx-data-info{
    margin: 30px 0;
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.cx-jobs{
    margin: 20px 0;
}
@media screen and (max-width: 768px) {
    margin:20px 0px; 

}
`