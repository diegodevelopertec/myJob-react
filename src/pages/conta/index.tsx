import { ContentPage } from "../../componentes/ContentPage"
import { Layout } from "../../componentes/Layout"
import { BoxCurriculum, ContentModal, NotCurriculum, PDFPage, Page } from "./style"
import { useAuthContext } from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import  Swal from 'sweetalert'
import { toast } from "react-toastify"
import { apiCurriculum } from "../../actions/apiCurriculum"
import { ICurriculum } from "../../interfaces/curriculum"
import generatePDF, {  Margin,Options } from 'react-to-pdf'
import { useGlobalContext } from "../../context/globalContext"
import { Modal } from "../../componentes/Modal"
import { baseURL } from "../../services/axios.config"
import Loading from "../../componentes/Loading"
import { GlobalStyle } from "../../globalStyle"
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/Button"
import {  useFormik } from "formik"
import { apiUsers } from "../../actions/users.action"
import { schemaValidateUpdateUser } from "../../validations/user.validation"




export const Conta=()=>{

    const [targetRef,setTargetRef]=useState(null)
    const getTargetElement =()=>document.getElementById('content-id') 
    const {user,setUser,SigOut,setCurriculumContext}=useAuthContext()
    const [curriculum,setCurriculum]=useState<ICurriculum | null>(null)
    const [hasCurriculum,setHasCurriculum]=useState(false)
    const navigate=useNavigate()
    const {handleStateModal,stateModal}=useGlobalContext()
     const [loadingCurriculum,setLoadingCurriculum]=useState(true)
    const boxNotRef=useRef<HTMLDivElement | null>(null)

    const [initialValues,setInitialValues]=useState({
      name:user ? user.name : '',
      lastname:user ? user.lastname : '',
      tel:user ? user.tel: '',
      email:user ? user.email : '',
      password:user ? user.password : ''
    })

    const stylePDF:Options = {
        method:'save',
        filename:`${curriculum !== null ? `${curriculum.user?.name}${curriculum.user?.lastname}-curriculo.pdf`: 'curriculo.pdf'}`,
        page: {
          
           margin: Margin.MEDIUM,
           format: 'A4',
           orientation: 'portrait',
        }
    
    }
    const GeneratePDF=()=>{ 
        const box=document.getElementById('content-id')  as HTMLDivElement
        box.style.display='flex'
        generatePDF(getTargetElement,stylePDF)
        box.style.display='none'
      }
    
    

    useEffect(()=>{
        const getCurriculumUser=async()=>{
          if(user !== null){
                const curriculumId=await apiCurriculum.getCurriculumFromUser(user.id as number)
               if(typeof curriculumId !== 'string'){
                setCurriculum(curriculumId)
                setHasCurriculum(true)
                setCurriculumContext(curriculumId)
                setLoadingCurriculum(false)
               }else{
                  setHasCurriculum(false)
                  setCurriculumContext(null)
                  setLoadingCurriculum(false)
               }
            }
           
          }
        
    setInterval(getCurriculumUser,2400)
    },[])

    useEffect(()=>{
      if(!hasCurriculum && boxNotRef.current){
        boxNotRef.current.style.display='flex' 
      }
    },[hasCurriculum])

const SigOutUser=()=>{
    Swal({
        title:'Tem certeza?',
        text: 'Você terá que fazer login novamente?',
        icon: 'info',
        
        buttons:
            {
                cancel: {
                  text: "Cancel",
                  value:false,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
                confirm: {
                  text: "OK",
                  value: true,
                  visible: true,
                  className: "",
                  closeModal: true
                }
              }
        ,
      }).then((result) => {
        if (result) {
            SigOut()
            navigate('/')
         toast.success('você saiu da conta')
        } else {
            console.log(result)
        }
      })


}

const Formik=useFormik({
 initialValues:initialValues,
  validationSchema:schemaValidateUpdateUser,
  onSubmit:async (values,{resetForm})=>{
    if(user !== null ){
        const data={
          ...values,
          type:user.type,
          photo:user && user.photo ? user.photo : null
        }
        const result=await apiUsers.updateUser(user.id as number,data)
        if(result){
          setUser({id:user?.id,...data})
          localStorage.setItem('@u',JSON.stringify({id:user?.id,...data}))
          toast.success('Dados atualizado com sucesso')
          handleStateModal(false)
          
        }else{
          toast.error('algo deu errado')
        }
    }
    resetForm()
  }
})


const deleteCurriculumUser=(id:number)=>{
  Swal({
      title:'Tem certeza?',
      text: `Se deletar seu curriculo,todas as suas formações e experiencias,bem como também suas candidaturas serão deletadas.Ainda quer continuar?`,
      icon: 'info',

      buttons:
          {
              cancel: {
                text: "Cancel",
                value:false,
                visible: true,
                className: "",
                closeModal: true,
              },
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "",
                closeModal: true
              }
            }
      ,
    }).then((result) => {
      if (result) {
        const deleteCurriculum=async()=>{
          await apiCurriculum.deleteCurriculum(id)
          setCurriculumContext(null)
          setCurriculum(null)
       }
        deleteCurriculum()
        toast.success('curriculo deletado')
      } else {
          console.log(result)
      }
    })


}

    return <Layout>
     <ContentPage titlePage="Meus Dados">
        <Page>
         <div className="left">
             <div className="profile">
               <div className="content">
                       <div className="cx-img">
                         {user?.photo !== null && <img src={`${baseURL}public/images/${user?.photo}`}  alt="" />}
                         {user?.photo === null && <img src={`/assets/user.png`}  alt="" />}
                       </div>
                       <h3>{user?.name} {user?.lastname}</h3>
                        <div className="data">
                            <p>{user?.email}</p>
                            <p>{user?.tel}</p>
                            <p>{user?.password}</p>
                        </div>
                        <div className="cx-btn">
                            <button onClick={()=>handleStateModal(true)}>Editar</button>
                        </div>
                </div>
            </div>
            <button onClick={SigOutUser}>Sair da  conta</button>
         </div>
         <div className="right">
            {loadingCurriculum && <Loading text="Carregando seu curriculo.." type="bubbles" color={`${GlobalStyle.bgTheme}`} />}
            {!loadingCurriculum &&
                (hasCurriculum && curriculum ) && <BoxCurriculum ref={boxNotRef}>
                    <div className="top">
                        <span onClick={()=>GeneratePDF()}>Baixar PDF</span>
                        <span onClick={()=>navigate(`/atualizar_curriculo/${curriculum.id}`)}>Editar</span>
                        <span onClick={()=>deleteCurriculumUser(curriculum.id)}>Excluir</span>
                    </div>
                    {curriculum !== null ? <PDFPage ref={targetRef} id="content-id">
                               <div className="dataprofile">
                                <div className="top">
                                    <h2>
                                      <div className="name">{curriculum.user?.name} {curriculum.user?.lastname}</div>
                                      <div className="office">{curriculum.tel}</div>
                                    </h2>  
                                    <div className="ctts">
                                      <span><strong>Email</strong>:{curriculum.user?.email}</span>
                                      <span><strong>Telefone </strong>:{curriculum.user?.tel}</span>
                                      <span><strong>Linkedin</strong>:{curriculum?.linkedin}</span>
                                      <span><strong>Github</strong>:{curriculum?.github}</span>
                                    </div>
                                  </div>
                               </div>
                                <section>
                                  <div className= "section about">
                                    <h3>Sobre Mim</h3>
                                    {curriculum?.about}
                                  </div>
                                  <div className= "section skills">
                                    <h3>Habilidades</h3>
                                    <ul>
                                   {curriculum.skills?.map((s,k)=><li key={k}>{s.name}</li>)}
                                    </ul>
                                  </div>
                                  <div className= "section cursos">
                                    <h3>Cursos</h3>
                                    <ul>
                                      {curriculum?.trainnings?.map((t,k)=>(
                                         <div className="curso" key={k}>
                                          <div className="title">{t?.name}-{t?.school}</div>
                                          <span>{t.start?.split('/').reverse().join('/')} - {t.end?.split('/').reverse().join('/')}</span>
                                         </div>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className= "section experiencia">
                                    <h3>Experiência Profissional</h3>
                                    <ul>
                                      {curriculum.experiences?.map((xp,k)=>(
                                         <div className="curso">
                                          <div className="title">{xp?.office}-{xp?.companyname}</div>
                                          <p>{xp.about}</p>
                                          <span>{xp.start?.split('/').reverse().join('/')} - {xp.end?.split('/').reverse().join('/')}</span>
                                         </div>
                                      ))}
                                    </ul>
                                  </div>
                                </section>
                           </PDFPage> : null
                        }
                    <div className="header">
                        <h2>{curriculum?.name} {curriculum?.lastname}</h2>
                        <div className="info">
                            <span>Email:{curriculum?.email}</span>
                            <span>Telefone(celular):{curriculum?.tel}</span>
                            <span>{curriculum?.city} - {curriculum?.state}</span>
                            
                        </div>
                    </div>
                    <section>
                        <h4>Sobre Mim</h4>
                        <p>{curriculum?.about}</p>
                    </section>
                    <section>
                        <h4>Habilidades</h4>
                        <ul className="data">
                          {curriculum?.skills && curriculum?.skills?.map((s,k)=> <li key={k}>- {s.name}</li>)}
                        </ul>
                    </section>
                    <section>
                        <h4>Formação</h4>
                       {
                        curriculum !== null && curriculum.trainnings ?
                        <div className="data">
                            {
                                curriculum.trainnings.map((t,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{t.name}</p>
                                    <p>{t.school}</p>
                                    <p>{t.start} - {t.end !== null && t.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                        
                    </section>
                    <section>
                        <h4>Experiência Profissional</h4>
                        {
                        curriculum !== null && curriculum.experiences ?
                        <div className="data">
                            {
                                curriculum.experiences.map((e,k)=>(
                                    <div className="card" key={k}>
                                    <p className="title">{e.office}</p>
                                    <p>{e.companyname}</p>
                                    <p>{e.start}  -  {e.end !== null && e.end}</p>
                                </div>
                                ))
                            }
                        </div>

                        : <div>Nenhuma formação</div>
                       }
                    </section>
                </BoxCurriculum> 
            }
             {(!hasCurriculum && !loadingCurriculum) && <NotCurriculum>
               <div className="box">
                   <div className="text">
                        <h3>Olá {user?.name}</h3>
                        <p>Para se candidatar á vagas crie o seu curriculo</p>
                        <Link to={'/criar_curriculo'}>clique Aqui</Link>
                    </div>
               </div>
            </NotCurriculum>
            }
         </div>
         <Modal>
          <ContentModal>
            <form action="" onSubmit={Formik.handleSubmit}>
            <div className="cx-input">
              <label htmlFor="">Nome</label>
              <Input type="text" name="name" value={Formik.values.name} onChange={Formik.handleChange} />
              {Formik.touched.name && <p>{Formik.errors.name}</p>}
            </div>
            <div className="cx-input">
              <label htmlFor="">Sobrenome</label>
              <Input type="text" name="lastname" value={Formik.values.lastname} onChange={Formik.handleChange} />
              {Formik.touched.lastname && <p>{Formik.errors.lastname}</p>}
            </div>
            <div className="cx-input">
              <label htmlFor="">Email</label>
              <Input type="email" name="email" value={Formik.values.email} onChange={Formik.handleChange} />
              {Formik.touched.email && <p>{Formik.errors.email}</p>}
            </div>
            <div className="cx-input">
              <label htmlFor="">Telefone</label>
              <Input type="tel" name="tel" value={Formik.values.tel} onChange={Formik.handleChange}/>
              {Formik.touched.tel && <p>{Formik.errors.tel}</p>}
            </div>
            <div className="cx-input">
              <label htmlFor="">Senha</label>
              <Input type="password" name="password" value={Formik.values.password} onChange={Formik.handleChange} />
              {Formik.touched.password && <p>{Formik.errors.password}</p>}
            </div>
           <div className="cx-btn">
              <Button type="submit" w='60%'  bgColor="#0C359E" p='22px' bgH="#1D24CA" text="Atualizar" />
           </div>
            </form>
          </ContentModal>
         </Modal>
        </Page>
     </ContentPage>
    </Layout>
}