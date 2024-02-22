import { useEffect } from "react"
import CardCourse from "../../componentes/CardCourse"
import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { Courses } from "../../data"
import { GridCourses } from "./style"
import gsap from "gsap"
import { BannerSlide } from "../../componentes/BannerSlide"
import { bannersCourses } from "../../data/banner"



export const Cursos=()=>{

useEffect(()=>{
  gsap.fromTo('.grid',
  {opacity:0},{
    opacity:1 ,duration:2  }
  )
  
},[])

useEffect(()=>{
  document.title='MyJobs/Cursos'
},[])


    return <Layout>
    
<ContentPage titlePage="">
<BannerSlide banners={bannersCourses} />
      <div className="cx-filter">
       
      </div>
     <GridCourses >
       {Courses.map((i,k)=>(
        <CardCourse key={k} course={i} />
       ))}


     </GridCourses>
</ContentPage>

    
     
    </Layout>
}