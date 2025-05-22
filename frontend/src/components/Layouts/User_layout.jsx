import React, { Suspense } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loading from '../pages/Loading'

const User_layout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer/>
    </div>
  )
}

export default User_layout
