import { Input } from "../Input"
import { Box } from "./style"
import SearchIcon from "../../assets/svgs/search"


export default ()=>{
    return <Box >
         <input placeholder="Busque por uma vaga" />
         <span onClick={()=>alert('hello')}>
          <SearchIcon  />
         </span>
        
    </Box>
}