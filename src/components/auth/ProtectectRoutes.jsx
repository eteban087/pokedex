import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectectRoutes = () => {
  const nameTrainer = useSelector(store=>store.nameTraine)
  
  if(nameTrainer){
    return <Outlet />   
  }else{
    return  <Navigate to= "/" />
  }

}
