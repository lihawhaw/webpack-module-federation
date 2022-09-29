import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'
import Layout from '@/layout'

const Index = loadable(
  () => import(/* webpackChunkName: 'index' */ '@/pages/index'),
)
const Home = loadable(
  () => import(/* webpackChunkName: 'home' */ '@/pages/home'),
)
const About = loadable(
  () => import(/* webpackChunkName: 'about' */ '@/pages/about'),
)
const NoMatch = loadable(
  () => import(/* webpackChunkName: 'not-match' */ '@/components/no-match'),
)

export default function AppRouter() {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={__BASENAME__}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='about' element={<About />} />
          <Route path='home' element={<Home />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
