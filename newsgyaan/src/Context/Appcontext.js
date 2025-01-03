import { createContext,useState} from "react";

export const Appcontext=createContext();


const AppcontextProvider=(props)=>{

     const [token, setToken] = useState(localStorage.getItem('token')||'');
     const backendurl=process.env.REACT_APP_BACKEND_URL;
     console.log(backendurl);
     
     const value={
      token,setToken,backendurl
      };
        
    return (
        <Appcontext.Provider value={value}>
         {props.children}
        </Appcontext.Provider>
    );
};
export default AppcontextProvider;