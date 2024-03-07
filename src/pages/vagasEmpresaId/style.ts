
import styled from "styled-components";


export const Page=styled.div`

.header-page{
    height:300px;
    background-color: #F0F3FF;
    border-bottom: 1px solid #DEDE;
        .logo-name{
            position:absolute;
            left: 150px;
            top: 280px;
            display: flex;
            align-items: center;
            img{
            height: 145px;
            width: 145px;
        }
        h2{
            margin: 0 22px;
            padding: 22px;
            font-size: 45px;
        }
        }

    }

    .content{
        padding: 150px;
        section{
            margin: 30px 0;
            h3{
                font-size: 33px;
                margin: 30px 0;
            }
        }
        .vagas{
            margin: 50px 0;
            .cards-vagas{
                margin: 70px;
            }
        }
    }


@media screen and (max-width:820px) {
    width: 100%;
    .header-page{
        .logo-name{
            top: 190px;
            display: flex;
            flex-direction:column;
            left: 50%;
             right: 50%;
            
            h2{
                font-size: 23px;
                text-align:justify;
            
            }
        }
    }
    .content{
        padding: 150px 12px;
        section{
            h3{
                font-size: 22px;
                text-align: center;
                font-weight:bold;
            }
     
      }
      .vagas{
            .card-vagas{
                margin:auto 0px;
            }
       }
    }
}
`

export const CardJobCompany=styled.div`
padding: 22px 33px;
border-radius: 9px;
border-bottom: 1px solid #dede;
display: flex;
justify-content: space-around;
margin: 12px 0;
align-items: center;
transition: all ease .3s;
margin: 12px 0;
&:hover{
    outline: 1px solid #aaa;
}
.job-details{
    h4{
        font-size: 20px;
    }
    p{
        margin: 5px;
        font-size: 13px;
        color: #aaa;
    }
}
a{
    outline: 1px solid #0C359E;
    transition: all ease .3s;
    color: #0C359E;
    font-weight: 600;
    padding: 12px 33px;
    border-radius: 33px;
    &:hover{
        outline: 1px solid white;
        background-color: #0C359E;
        color: white;
   }

}
@media screen and (max-width:950px){
    padding: 12px 9px;
    width:auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    font-size: 13px;
    .job-details{
        h4{
            font-size: 16px;
        }
    }
    a{
        padding: 12px 9px;
        margin: 30px 0;
        background-color: red;
        font-size: 13px;
        border-radius: 7px;
        width: 60%;
        text-align: center;
    }
}



`