import { createContext, useState } from "react"

export const AppContext = createContext();

function AppContextProvider({ children }) {

   const [isLogin, setIsLogin] = useState(false);
   const [userEmail, setUserEmail] = useState('');


   return (
      <AppContext.Provider value={{ isLogin, setIsLogin, userEmail, setUserEmail }}>
         {children}
      </AppContext.Provider>
   );
}

export default AppContextProvider;