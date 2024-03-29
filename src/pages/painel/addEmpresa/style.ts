import styled from "styled-components";

export const Form=styled.form`
padding: 110px;
input,textarea{
    box-shadow:  0 0 2px gray;
}
.cx-input{
    .error{
        color: red;
    }
}
.city-state{
    display: flex;

}

.city-state{
    flex: 1;
    display: flex;
    justify-content: space-around;
    .cx-input{
        flex: 1;
        margin: 0 5px;
         input{
           padding: 9px;
           width: 490px;
        }
    }
  
}
.cx-btn{
    margin: 70px 0;
    display: flex;
    justify-content: center;
    input{
        width: 40%;
        padding: 22px;
        border: none;
        font-size: 18px;
        border-radius: 9px;
        color: white;
        background-color: #387ADF;
        transition: all ease .3s;
        cursor: pointer;
        &:hover{
            background-color: #1D24CA;
        }
    }
}
`