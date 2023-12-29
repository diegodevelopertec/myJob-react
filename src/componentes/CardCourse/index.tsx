
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { Container } from "./style"


type Props={
    course:{
        id:number,
        img:string,
        name:string,
        price:string | number,
        category:string
    }
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
                    <div>{typeof course.price ==='number' && 'R$'} 
                       {typeof course.price ==='number' ?  course.price.toFixed(2).replace('.',',') : course.price}
                    </div>
                </div>
                <div className="divider"></div>
               <div className="cx-btn">
                 <Button onClick={()=>navigate(`/cursos/${course.id}`)} bgH="#0766AD" p="22px 0" color="white" colorH="white" bgColor="#525CEB" text="ver curso" w="80%" m="50px 0"/>
                
               </div>
            </div>
        </div>
    </Container>
}