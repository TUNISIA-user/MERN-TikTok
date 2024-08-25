import React, { useEffect, useState } from 'react';
import './CommonetSection.css';
import CardCommt from './CardCommt';
import { Nahdi_Gayth } from '../context/GlobalContext';
import axios from "./axios"

const CommonetSection = ({commt}) => {
 
 
  const Move = Nahdi_Gayth()
  const [input,setinput] = useState("")
  const [actullay,setactullay] = useState([])
 

 

 

  const handleData = async (e) => {
    e.preventDefault();
  
    try {
      const Token = input.substr(0, input.indexOf("/"));
      const commentText = input.substr(input.indexOf("/") + 1);
     
 
      const response2 = await axios.get(`/v4/newpost/${Token}`);
      
      const allComments = response2.data.flatMap(item => item.comments || []);
    
 
     // in this case get all data in RESPONSE__2 . 

    
      const response = await axios.put(`/v3/posts/${Token}`, {
        comments: [...allComments,{ text: commentText } ]
      });
  
      const finall__result = await axios.get(`/v4/newpost/${Token}`);
      const x = finall__result.data.flatMap(item => item.comments || []);
     
       actullay.length>0 ? setactullay(x) : setactullay([])
        console.log(x,"new data")
  
    } catch (error) {
      console.error("Error updating 1:", error);
    
    }
   
  };
 
 

 const test = Move.toogle
  console.log(test)
  return ( 
   
    <div   className='CommonetSection'  style={test === false ? { display: 'none' } : { display: 'block' }}   >



  <div className='search__bar__for__comment'>
      <div class="Message">
  <input title="Write Message" id='search__message' tabindex="i" pattern="\d+" placeholder="Message.." class="MsgInput" type="text" onChange={(e)=>setinput(e.target.value)} value={input}/>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet" class="SendSVG"  onClick={handleData} >
  <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
  <path d="M44 256 c-3 -8 -4 -29 -2 -48 3  -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
  </g>
</svg><span class="l"></span>
  
</div>
      </div>  
      
    
    
   







       <div className='remove__section'  onClick={()=>{
        Move.dispatch({
          type : "SET__TOOGLE__FALSE"
        })
       }}  >X</div>
       <div className='CommonetSection__insde'> 
      {actullay.length > 0 ? (

actullay.map((comment, index) => (
        
          <CardCommt
            key={index} // Ensure unique key for each comment // ok .... 
            commet={comment.text || "No Comment Text"} // Adjust based on your data structure // ok .... 
            username={ "Anonymous"} // Adjust based on your data structure
            img={'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}
            time={comment.createdAt}
          />
          
        ))
      ) : (
        <p>No comments yet.</p>
      )}
</div>
 
    </div>
 

  );
};

export default CommonetSection;
