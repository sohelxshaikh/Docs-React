import React from 'react'

import { FaRegFileAlt } from "react-icons/fa";

import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion"


function Card({data ,referance}) {
  return (
    <>
    <motion.div drag dragConstraints= {referance} whileDrag={{scale:1.2}} dragElastic={1.1} className='flex-shrink-0 relative w-60 h-72 overflow-hidden text-white py-10 px-8 rounded-[40px] bg-zinc-900/90'>
    <FaRegFileAlt />
    <p className='text-sm  mt-5 leading-tight' >{data.desc}</p>
    <div className=' footer w-full h-[7rem] absolute  bottom-0  left-0'>
      <div className='flex items-center px-8  py-3 justify-between mb-3'>
        <h5>{data.filesize}</h5> 
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
          {data.close ?<IoClose />:  <IoMdDownload size=".8em" color='#fff'/>}
         </span>
      </div>
      {data.tag.isOpen && (
        <div className={`tag  w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
  </div>
      )
     }
      
    </div>

    </motion.div>
    </>
  )
}

export default Card