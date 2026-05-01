import { Route, Routes } from "react-router-dom"
import Home from "./Home"

function r() {
  return (
     <>
          <Routes>
             <Route path = "/HOmepages" element={<Home />}/>
        
     
          </Routes>
     
     </>
  )
}

export default r