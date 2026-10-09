import { useForm } from "react-hook-form";
import { MyStore } from "../State/useContext";
import { useContext} from "react";

export const useDashBoard=()=>{
      const { register, handleSubmit } = useForm(); 
      
      const {formdata,setFormData,category,difficult,status,search,setSearch}=useContext(MyStore)
      console.log(category)
       const completed= formdata.filter(
    (val) => val.status === "Completed"
  ).length
  const pending= formdata.filter(
    (val) => val.status === "Pending"
  ).length


















  
        const filterData=formdata.filter((val)=>(category==="" || val.category===category) && (difficult==="" || val.difficulty===difficult) && ( status==="" || val.status===status) &&  ( val.category.toLowerCase().includes(search.toLowerCase())|| val.addQuestion.toLowerCase().includes(search.toLowerCase())))
        
       

   const detailSubmit=(data)=>{
           console.log(data)
           setFormData([...formdata,data])
   }

   return {
     register, handleSubmit,detailSubmit,filterData,completed,pending
   }
}