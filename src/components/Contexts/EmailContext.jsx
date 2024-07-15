import React,{createContext,useState,useEffect} from 'react'
export const Email = createContext();
const EmailContext = ({children}) => {
    const [email,setEmail] = useState(null);
    const [currentUser,SetCurrentUser] = useState(null);
    const [pic,setPic] = useState({});
    const [click,setClick] = useState(false)
    useEffect(()=>{
      const allCookies = document.cookie.split('; ').map(cookie => {
        const [name, value] = cookie.split('=');
        return { name, value };
      });
      //console.log(allCookies);
      function getCookie(Name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + Name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }
      console.log(allCookies)
      // Example usage: retrieving the value of the cookie named 'myURL'
      let urlFromCookie = allCookies[0].value!==undefined?getCookie(allCookies[1].name):null;
      setPic(urlFromCookie)
      //console.log(urlFromCookie);  // Output the URL stored in the cookie
      allCookies[0].value!==undefined? (allCookies[1].value!==undefined)?(setEmail(allCookies[1].value)):(setEmail(null)):null

    },[])
  return (
    <div>
        <Email.Provider value={[email,setEmail,currentUser,SetCurrentUser,pic,setPic,click,setClick]}>
            {children}
        </Email.Provider>
    </div>
  )
}

export default EmailContext