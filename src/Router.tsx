import { BrowserRouter, Routes, Route } from 'react-router'

const Router : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

const Home : React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  ) 
}

export default Router
