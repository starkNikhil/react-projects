import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data =useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/starkNikhil').then(Response=> Response.json()).then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-white m-4 bg-gray-600 text-3xl'>
      Github Followers: {data.followers}
      <img src= {data.avatar_url} alt="Github picture"/>
    </div>
  )
}

export default Github

export const  githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/starkNikhil")
    return response.json()
}
