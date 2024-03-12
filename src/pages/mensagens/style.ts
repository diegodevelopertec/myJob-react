import styled from "styled-components";


export const Page=styled.div`
padding:50px 300px;

.modal-message{
    padding: 12px;
    border: 1px solid grey;
    color: grey;
    margin: 6px;
    h3{
        margin-bottom: 12px;
        .svg{
            height: 25px;
            stroke:grey;
        }
    }
    .date{
        margin: 6px 0;
        color: #ddde;
    }

}
.message{
    padding: 12px;
    transition: all ease .3s;
    border-bottom: 1px solid grey;
    .action-message{
        display: flex;
        align-items: center;
        justify-content: end;
       span{
        margin: 0 12px;
        border-radius:3px;
        padding:4px  12px;
        outline: 1px solid gray;
        cursor: pointer;
        &:hover{
            color:blue;
            box-shadow: 0 0 8px #aaa;
            outline: 1px solid  blue;
        }
       }
    }
.title{
    font-weight:800;
    margin: 22px 0;
    display: flex;
    align-items:center;
    .svg{
        height: 35px;
        stroke: grey;
    }
}
.date{
        margin: 6px 0;
        color: #ddde;
  }
p{
    color: grey;
}
&:hover{
    
}
}
`