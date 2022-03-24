
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children }: {children: JSX.Element}) {

  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  useEffect(() => {
    const validateToken = async () => {
      const storageDate = localStorage.getItem('authToken')
      if(storageDate) {
        const data = await api.validateToken(storageDate)
        if(data.user) {
          setUser(data.user)
        }
      }
    } 
    validateToken()
  }, [api])

  async function signin(email: string, password: string) {
    const data = await api.signin(email, password)
    if(data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true;
    }
    return false
  }

  async function signout() {
    await api.logout()
    setUser(null)
    setToken('')
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  return (
    <AuthContext.Provider value={{user, signin, signout}}>
      {children}
    </AuthContext.Provider>
  )
}