import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef(null)

const data = [
  {
    desc :"lorem ipsum dolor sit amit consectutr adipisicing changed",
    filesize:".7mb",
    close : false,
    tag :{isOpen :true ,tagTitle : "Download Now" ,tagColor:"green"}
  },
  {
    desc :"lorem ipsum dolor sit amit consectutr adipisicing ",
    filesize:".15mb",
    close : true,
    tag :{isOpen :true ,tagTitle : "Download Now" ,tagColor:"blue"}
  },
  {
    desc :"lorem ipsum dolor sit amit consectutr adipisicing ",
    filesize:".15mb",
    close : false,
    tag :{isOpen :false ,tagTitle : "Download Now" ,tagColor:"green"}
  },
  {
    desc :"lorem ipsum dolor sit amit consectutr adipisicing ",
    filesize:".15mb",
    close : true,
    tag :{isOpen :true ,tagTitle : "Download Now" ,tagColor:"green"}
  },
];

  return (
    <>
    <div ref={ref} className='fixed w-full top-0 left-0 flex gap-5 flex-wrap p-5  h-screen z-20'>
     {data.map((item , index) =>(
      <Card data={item} referance = {ref} />
     ))}
    </div>

    </>
  )
}

export default Foreground