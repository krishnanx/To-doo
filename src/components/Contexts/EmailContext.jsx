import React,{createContext,useState} from 'react'
export const Email = createContext();
const EmailContext = ({children}) => {
    const [email,setEmail] = useState(null)
  return (
    <div>
        <Email.Provider value={[email,setEmail]}>
            {children}
        </Email.Provider>
    </div>
  )
}

export default EmailContext