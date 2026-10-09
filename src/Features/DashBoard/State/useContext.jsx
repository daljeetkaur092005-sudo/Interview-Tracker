import { createContext, useState } from "react";

export const  MyStore=createContext()
 export const DashBoardProvider=({children})=>{
    const [formdata,setFormData]=useState(JSON.parse(localStorage.getItem("formdata"))||[])
        const [category,setCategory]=useState("")
             const [difficult,setDifficult]=useState("")
                  const [status,setStatus]=useState("")
            const [search,setSearch]=useState("")
        
                      localStorage.setItem("formdata", JSON.stringify(formdata))
    return <MyStore.Provider value={{formdata,setFormData,category,setCategory,difficult,setDifficult,status,setStatus,search,setSearch}}>{children}</MyStore.Provider>

}