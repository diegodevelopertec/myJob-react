import styled from "styled-components";
import { ISelect } from ".";

export const Box=styled.select<ISelect>`
 padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Poppins';
  font-weight: 700;
width: 100%;

option{
    font-weight: 700;
    padding: 8px;
  font-size: 14px;
  font-family: 'Poppins';
  background-color: #fff;
  color: #333;
}

@media screen and (max-width:950px){
  width: 100%;
}
`

