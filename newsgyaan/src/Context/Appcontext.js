import { createContext,useState,useEffect} from "react";
import Cookies from 'js-cookie';
export const Appcontext=createContext();


const AppcontextProvider=(props)=>{
     const [token, setToken] = useState('');
     const backendurl="https://newsgyaan-app-backend.onrender.com";
     console.log(backendurl);
     
     const value={
      token,setToken,backendurl
      };

      useEffect(() => {
        setToken(Cookies.get('token'));
      }, [])
      
   
    return (
        <Appcontext.Provider value={value}>
         {props.children}
        </Appcontext.Provider>
    );
};
export default AppcontextProvider;
