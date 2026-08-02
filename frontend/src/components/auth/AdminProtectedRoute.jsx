import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import api from '../../lib/api/apiClient'
import useAuthStore from '../../lib/store/authStore'

const AdminProtectedRoute = ({ children }) => {

    const { user, setAuth, clearAuth, token } = useAuthStore()

    const { 
        data, 
        error, 
        isLoading, 
        isError, 
        isSuccess 
    } = useQuery({
        queryKey: ['currentAdmin'],
        queryFn: async () => {
            const response = await api.get('/auth/me')
            return response.data
        },
        retry: 1
    })


    // Error case
    useEffect(() => {
        if (error) {
            clearAuth()
        }
    }, [error, clearAuth])


    // Success case
    useEffect(() => {
        if (isSuccess && data) {
            setAuth(data, token)
        }
    }, [isSuccess, data, setAuth, token])


    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader className="animate-spin" />
            </div>
        )
    }


    // Not logged in
    if (isError || !user) {
        return <Navigate to="/login" replace />
    }


    // Not admin
    if (user.role !== "admin") {
        return <Navigate to="/" replace />
    }


    return children
}

export default AdminProtectedRoute