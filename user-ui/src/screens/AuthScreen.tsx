
import Login from '@/components/Login'
import React from 'react'

type Props = {}

const AuthScreen = (props: Props) => {
    return (
        <div className='w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center'>
            <div>
                <Login />
            </div>
        </div>
    )
}

export default AuthScreen