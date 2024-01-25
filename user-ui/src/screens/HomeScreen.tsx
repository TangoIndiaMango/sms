import Header from '@/components/Layout/Header'
import Programs from '@/components/Programs'
import WelcomeDetails from '@/components/WelcomeDetails'
import React from 'react'

type Props = {}

const HomeScreen = (props: Props) => {
  return (
    <>
      <Header />
      <WelcomeDetails />
      <div className="w-full h-50">
        <Programs />
      </div>
    </>

  )
}

export default HomeScreen