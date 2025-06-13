import { BrowserRouter, Routes, Route } from 'react-router'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home.tsx'))
const Construct = lazy(() => import('./pages/Construct.tsx'))
const Router : React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Construct />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

 

export default Router
