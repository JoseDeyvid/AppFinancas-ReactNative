import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native';
import AuthRoutes from './authRoutes';

const Routes = () => {
    const [signed] = useState(false);
    // const [loading] = useState(false)
    return (
        <View>
            {signed ? <View><Text>Usuario logado</Text></View> : <AuthRoutes/>}
        </View>
    )
}

export default Routes