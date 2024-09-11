import React   ,{useState}from 'react'
import "./RecupAccount.css"
import axios from "./axios"
import { Nahdi_Gayth } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

const RecupAccount = () => {
  
 const Nav = useNavigate()

   const Move = Nahdi_Gayth()
 const [useridIdentify,setIdentify] = useState(null)
    
    const HandelSingIn = async() =>{




      console.log(useridIdentify)
      try{
        const res = await axios.get(`restoreData/${useridIdentify}`)

          console.log(res.data)
           if(res){
            Move.dispatch({
              type : "SET__TOKEN__USER",
              payloadDataINdex :{
                imgUrl__Token :res.data.user.imgUrl,
                name__user__token : res.data.user.username,
                token:res.data.userId
              }
            })

            Move.dispatch({
              type: "SET__USER__FROM__FIRE__BASE",
              payload__xuser :{
                bio:res.data.user.bio,
                 email:res.data.user.email,
                 imgUrl:res.data.user.imgUrl
              }

            })
           }
           if(res){
            Nav("/videos")
           }
      }

      catch(eror){
       console.log(eror)
      }
    }

 

  return (
    <div className="container__recupAccount">
        

        <div className="Restore__your__acount">

        <input type="text" placeholder="email"  value={useridIdentify} onChange={(e)=>{setIdentify(e.target.value)}}/>
        <br/>
        <button onClick={HandelSingIn}>Sing in </button>
            </div>
    </div>
  )
}

export default RecupAccount