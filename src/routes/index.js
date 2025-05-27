import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native';
import AuthRoutes from './authRoutes';

const Routes = () => {
    const [signed] = useState(false);
    // const [loading] = useState(false)
    return (
        signed ? <View></View> : <AuthRoutes />
    )
}

export default Routes