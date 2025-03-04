import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Router from './router/Router'
import Login from './pages/Login'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
    <div className='w-screen h-screen'>
      <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    </div>
  )
}

export default App
