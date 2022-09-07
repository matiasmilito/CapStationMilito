import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const ProtectedRoutes = ({children}) => {
    const {user} = UserAuth();

    const navigate = useNavigate();

    if (!user) {
        return navigate('/login')
    }

    return children;
}

export default ProtectedRoutes