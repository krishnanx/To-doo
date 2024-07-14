import React,{createContext,useState,useEffect} from 'react'
export const Email = createContext();
const EmailContext = ({children}) => {
    const [email,setEmail] = useState(null);
    useEffect(()=>{
      const allCookies = document.cookie.split('; ').map(cookie => {
        const [name, value] = cookie.split('=');
        return { name, value };
      });
      console.log(allCookies);
      (allCookies[0].value!==undefined)?(setEmail(allCookies[0].value)):(setEmail(null))
    },[])
  return (
    <div>
        <Email.Provider value={[email,setEmail]}>
            {children}
        </Email.Provider>
    </div>
  )
}

export default EmailContext