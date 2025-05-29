import React, { useState } from 'react'
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

const Routes = () => {
    const [signed] = useState(true);
    return (
        signed ? <AppRoutes/> : <AuthRoutes />
    )
}

export default Routes