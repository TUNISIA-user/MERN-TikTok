import React from 'react'
import "./Spinnner.css"
import { useNavigate } from 'react-router-dom'
const Spinner = () => {
    const Nav  = useNavigate()
   setTimeout(()=>{
 
    Nav("/login")
   },1300)

  return (
 
<div className="spinner center">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
</div>
  )
}

export default Spinner