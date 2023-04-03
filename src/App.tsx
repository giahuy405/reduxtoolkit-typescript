import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AuthComponent from './components/AuthComponent'
type Props = {}

export default function App({ }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeTemplate />}>
          <Route >
            <Route index element={<AuthComponent />} />
            <Route path='search' element={<Search />} />
            <Route path='detail' element={<Detail />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}