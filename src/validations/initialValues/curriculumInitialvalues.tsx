import { useAuthContext } from "../../context/authContext"
import { BoxCurriculum } from "../../pages/conta/style"

export default ()=>{
    const {curriculumContext}=useAuthContext()

   if(curriculumContext !== null){
    const data= {
        name:curriculumContext?.name ? curriculumContext.name : '' ,
        lastname:curriculumContext?.lastname,
       tel:curriculumContext?.tel,
       office:curriculumContext?.office,
       pcd:curriculumContext?.pcd,
       deficiency:curriculumContext?.deficiency,
       email:curriculumContext?.email,
       github:curriculumContext?.github,
       linkedin:curriculumContext?.linkedin,
       about:curriculumContext?.about,
       city:curriculumContext?.city,
       state:curriculumContext?.state,
       dateNasc:curriculumContext?.dateNasc,
      
    }
    return data
   }
}