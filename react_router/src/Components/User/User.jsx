import React from 'react'
import { useParams } from 'react-router-dom'


export default function User() {
    const {userId} = useParams() 
  return (
    <div className='bg-gray-600 text-center'>
      User : {userId}
    </div>
  )
}
