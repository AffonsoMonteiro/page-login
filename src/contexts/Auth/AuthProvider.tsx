
import { useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children }: {children: JSX.Element}) {

  const [user, setUser] = useState<User | null>(null)

  function signin(email: string, password: string) {

  }

  function singout() {
    
  }

  return (
    <AuthContext.Provider value={{user, signin, singout}}>
      {children}
    </AuthContext.Provider>
  )
}