
import { useReducer,createContext,useContext,useEffect, act } from "react";

// founder  

const inititaleState ={
    user :null ,
    FLOWING : [] ,
    FLOWING2 : [],
    toogle  : false 

}



 

const reducer = (state, action) => {
  switch (action.type) {
  
    case "SET_ADD_LIST1": // Ensure this matches exactly with your dispatch type
    return {
      ...state,
      FLOWING2: [...state.FLOWING2, action.payload_item]
    };
 


    case  "SET__USER__FROM__FIRE__BASE":
      return{
        ...state,
        user :  action.payload__xuser
      }


    
    case "SET_FLOWING":
      return {
        ...state,
        FLOWING: [...state.FLOWING, action.payload__flow]
      };
      
  


      case "UPDATE__USER": 
       return {
    ...state,
    user:{
      ...state.user,
      email: action.paylod.email, bio:action.paylod.bio} 
      
     
  };

  case "SET__TOOGLE__TRUE":
    return{
      ...state,
      toogle : true 
    }


    
  case "SET__TOOGLE__FALSE":
    return{
      ...state,
      toogle : false  
    }



    default:
      return state;
  }
};

 

 



 

 


export const GlobalContext = createContext(inititaleState)


const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,inititaleState)
   

    useEffect(() => {
        console.log("State updated:", state);
 
        
    }, [state]);

    return(
        <GlobalContext.Provider
        value={{
            user : state.user,
            FLOWING2 : state.FLOWING2,
            toogle  : state.toogle,
            FLOWING : state.FLOWING,
            dispatch:dispatch
        }}
        >

            {children}
        </GlobalContext.Provider>
    )
 }

 export default ContextProvider


 export const Nahdi_Gayth =()=>{
    return useContext(GlobalContext)
 }
