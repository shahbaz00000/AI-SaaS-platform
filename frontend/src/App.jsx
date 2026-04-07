import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogTitle from './pages/BlogTitle'
import RemoveBackground from './pages/RemoveBackground'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import GenerateImage from './pages/GenerateImage'
import ReviewResume from './pages/ReviewResume'
import WriteArticle from './pages/WriteArticle'
import Community from './pages/Community'
import RemoveObject from './pages/RemoveObject'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/ai" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='blog-title' element={<BlogTitle />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='generate-image' element={<GenerateImage />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='community' element={<Community />} />
          <Route path='remove-object' element={<RemoveObject />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
