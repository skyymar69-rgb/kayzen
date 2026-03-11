import { useState, useCallback } from 'react'
import axios from 'axios'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/auth/login', { email, password })
      setUser(response.data.user)
      setIsAuthenticated(true)
      localStorage.setItem('token', response.data.token)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }, [])

  return { isAuthenticated, user, loading, login, logout }
}
