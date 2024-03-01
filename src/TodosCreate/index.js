import React from "react";
import { TbChecklist } from "react-icons/tb";
function TodosCreate(){

  return(
    <div className='flex flex-row justify-center items-center'>
    <p className=' text-center grow text-white text-3xl font-bold '>
        Add your first todo!
    </p>
    <TbChecklist className='size-40 grow text-white' />
    </div>
    )
  }
export { TodosCreate }