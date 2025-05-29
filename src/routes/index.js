import React, { useContext, useState } from 'react'
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import AuthContext from '../contexts/AuthContext';

const Routes = () => {
    const { signed } = useContext(AuthContext)
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes