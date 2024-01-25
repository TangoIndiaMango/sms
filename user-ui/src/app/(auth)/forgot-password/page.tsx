import ForgotPassword from '@/components/ForgotPassword'
import React from 'react'

type Props = {}

const ForgetPasswordPage = (props: Props) => {
    return (
        <div className='w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center'>
            <div>
                <ForgotPassword />
            </div>
        </div>
    )
}

export default ForgetPasswordPage