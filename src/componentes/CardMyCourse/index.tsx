import { Box } from "./style"
import { Courses } from "../../data"
import { Button } from "react-scroll"
import Play from "../../assets/svgs/play"
import { CursoType } from "../../types/data"
import { Link } from "react-router-dom"


type props={
    course:CursoType
}

export default ({course}:props)=>{
    
    return <Box >
        <div className="left">
            <img src={course.img} alt="" />
        </div>
        <div className="right">
            <h3>{course.name}</h3>
            <Link to='/plataforma_ead/curso/12'><button><Play/>Play!</button></Link>
        </div>
    </Box>
}