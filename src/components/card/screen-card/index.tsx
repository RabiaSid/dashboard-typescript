import { title } from 'process'
import React from 'react'

type ScreenCardProps = {
title:string
}

export default function ScreenCard(props: ScreenCardProps) {
  const {title} = props
    return ( 
    <div
      style={{
        borderRadius: "10px",
        background: '#fff',
        boxShadow: `0px 15px 20px 0px rgba(70, 6, 81, 0.12)`,
        width:"350px"
      }}
      className="row m-0 p-0 p-5 ms-1 ms-md-4 mt-2 justify-content-center align-items-center "
    >
    <h3 className='ScreenTitle'>
     {title}
     </h3>
    </div>
  )
}
