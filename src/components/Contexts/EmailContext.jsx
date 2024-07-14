import React,{createContext,useState,useEffect} from 'react'
export const Email = createContext();
const EmailContext = ({children}) => {
    const [email,setEmail] = useState(null);
    const [currentUser,SetCurrentUser] = useState(null)
    useEffect(()=>{
      const allCookies = document.cookie.split('; ').map(cookie => {
        const [name, value] = cookie.split('=');
        return { name, value };
      });
      console.log(allCookies);
      function getCookie(Name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + Name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }
      
      // Example usage: retrieving the value of the cookie named 'myURL'
      let urlFromCookie = getCookie(allCookies[0].name);
      console.log(urlFromCookie);  // Output the URL stored in the cookie
      (allCookies[0].value!==undefined)?(setEmail(allCookies[0].value)):(setEmail(null))

    },[])
  return (
    <div>
        <Email.Provider value={[email,setEmail,currentUser,SetCurrentUser]}>
            {children}
        </Email.Provider>
    </div>
  )
}

export default EmailContext