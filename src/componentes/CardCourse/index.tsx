
import {useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { Container } from "./style"
import { CursoType } from "../../types/data"


type Props={
    course:CursoType
}

export default ({course}:Props)=>{
    const navigate=useNavigate()


    return <Container bgImage={course.img}>
        <div className="top">
            <div className="opacity"></div>
        </div>
        <div className="bottom">
            <div className="content">
                <h3>{course.name}</h3>
                <div className="data">
                    <div>{course.category}</div> 
                    <div>{course.free ? 'Gratuito' : `R$ ${course.price.toFixed(2).replace('.',',') }`}
                    </div>
                </div>
                <div className="divider"></div>
               <div className="cx-btn">
                 <Button onClick={()=>navigate(`/cursos/${course.id}`)} bgH="#0766AD" 
                    p="22px 0" color="white" 
                    colorH="white" bgColor="#525CEB" text="ver curso" 
                     w="80%" m="50px 0"
                  />
                
               </div>
            </div>
        </div>
    </Container>
}