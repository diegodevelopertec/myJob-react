
import styled from "styled-components";
import { GlobalStyle } from "../../../globalStyle";


export const Page=styled.div`
padding: 60px;
.text{
    margin: 19px 5px;
    color: gray;
}

`
export const Form=styled.form`

.svg{
    height: 55px;
}
input,textarea{
    box-shadow:  0 0 2px gray;
}
.cx-input{
    margin: 15px 0;
    .error{
        color: red;
    }
}
.city-state{
    display: flex;

}
.category-cx{
    margin: 22px 0;
    select{
        margin: 0 12px;
        transition: all ease-in .2s;
        padding: 12px;
        outline:none;
        border: none;
        border-radius: 3px;
        box-shadow:  0 0 2px gray;
        &:focus{
          outline:2px solid ${GlobalStyle.bgTheme};
        }
        option{
            font-size: 17px;
        }
    }
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
.cx-input-radio{
    margin: 12px 0;
    label{
        margin-right:32px;
    }
    input{
         box-shadow: none;
        margin: 0 12px;
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