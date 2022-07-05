import {useState, useCallback, useEffect} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null)

    const login = useCallback((jwtToken: string) => {
        setToken(jwtToken)
        localStorage.setItem("token", jwtToken)
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem("token")
    }, [])

    useEffect(() => {
        const jwtToken = localStorage.getItem("token")
        if (jwtToken) {
            login(jwtToken)
        }
    }, [login])

    return {login, logout, token}
}