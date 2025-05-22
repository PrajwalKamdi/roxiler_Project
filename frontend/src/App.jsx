import React, { Suspense } from 'react'
import Loading from './components/pages/Loading'
const Admin_layout = React.lazy(() => import('./components/Layouts/Admin_layout'))
const User_layout = React.lazy(() => import('./components/Layouts/User_layout'))
const App = () => {
  const role = localStorage.getItem('role') === 'admin' ? 'admin' : 'user';
  return (
    <>
      <Suspense fallback={<Loading />}>
        {role === 'admin' ? <Admin_layout/> : <User_layout />}
        {role === 'owner' && <User_layout />}

      </Suspense>
    </>
  )
}

export default App
