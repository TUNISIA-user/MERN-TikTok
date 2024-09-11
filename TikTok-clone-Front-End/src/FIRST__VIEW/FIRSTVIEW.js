import React ,{useState,useEffect}from 'react'
import "./FirstVIew.css"
import { useNavigate } from 'react-router-dom'
import axios from "../Component/axios"


const   FIRSTVIEW = () => {
    const Nav = useNavigate()
    const [users,setUsers] = useState([])
 
      const HandelUers = async()=>{
      const resPonse =  await axios.get("/bioUsers")
      setUsers(resPonse.data)
      console.log(users)
    }
   useEffect(()=>{
     
             HandelUers()
   },[])
  return (
    <> 
     <div className="users__container">
      {/* <h1>{users?users.length:0} </h1> */}
      <div className="userInsideContainer">
        {users.map((item)=>{
          return <div className="image__container__videos__users">

          <img src={item.imgUrl}/>
          {/* <p>{item.username}</p> */}
          </div>
        })}
      </div>
      </div>



    <div className='container__first_view'>
        
        <div className="insdide__cotnainer">
          <div className='firstview__img'><img src='./betterfly.PNG'/></div>
          <div className='firstview__titile'> 
            <h1>TIKTOK</h1>
            <h4 className='whatsapp'>What's up?     </h4>
          </div>


          <div className='firstview__button'>

            <input type='button' className='button1' value="Create a new account" onClick={()=> {Nav("/Spinner")}} />

            <input type='button' className='button2' value="Sign in"  onClick={()=>{Nav("/RecpAccount")}} />
           
          </div>          

        </div>  

        </div>
        </>

  )
}

export default FIRSTVIEW    