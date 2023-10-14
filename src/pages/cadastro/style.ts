import { GlobalStyle } from "../../globalStyle";
import styled from "styled-components";

export const Page=styled.div`
min-height: 100vh;
padding: 50px 30px;


h3{
    font-size: 32px;
    font-family: 'Poppins';
    font-weight:900;
  span{
    color: ${GlobalStyle.bgTheme};
    font-family: 'Poppins';
  }
}
p{
    font-family: 'Poppins';
    font-weight:600;
}
form{
    width: 100%;
    display: flex;
    margin: 30px 0;
    justify-content:center;
  .cx-inputs{
    display: flex;
    width:70%;
    flex-direction: column;
    .cx-input{
      margin:12px;
      p{
        font-size: 12px;
        margin: 3px 0;
        color: red;
      }
       input{
        height: auto;
         background-color: #D8D9DA;
       }
    }
  }
  .cx-radios{
    color: ${GlobalStyle.bgTheme};
   .radio-item{
      display: flex;
      align-items: center;
      margin: 12px;
      font-size: 18px;
      font-family: 'Poppins';
      font-weight: 800;
      &:hover{
        text-decoration: underline;
      }
      input{
        height: 32px;
        margin-right:9px;
      
      }
    }
  }

  button{
    padding: 32px 22px;
    width: 50%;
    margin:24px 0;
    align-self:center;
    border-radius: 3px;
    border:none;
    background-color:${GlobalStyle.bgTheme};
    transition: all ease 0.3s;
    cursor:pointer;
    font-family: 'Poppins';
    font-weight: 900;
    font-size: 19px;
    color: white;
    &:hover{
        color: ${GlobalStyle.bgThemeSecondary};
        background: ${GlobalStyle.bgTheme};
    }
  }
  .divider{
    height:1.25px;
    margin:20px 30px;
    background: ${GlobalStyle.bgTheme};
  }
 
  .actions{
    color: #aaa;
   a,p{
    font-family: 'Poppins';
   }
    a{
        margin: 0 5px;
        color: ${GlobalStyle.bgTheme};
        &:hover{
            text-decoration:underline;
        }
    }
  }
  
}

@media screen and (max-width: 768px){
   padding: 50px 9px;
   height: auto;
   margin-top: 20px;
    form{
        justify-content: start;
        .cx-inputs{
          width:100%;
          .cx-input{
            input{
            width: 90%;
          }
          }
        }
        button{
            padding: 12px 22px;
            width: 90%;
            font-size: 16px;
        }
    }
}
`