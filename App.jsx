import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Login from "./Pages/Login"
import Header from "./Components/Header"
import PrivateRoute from "./Components/PrivateRoute"
import CreateListing from "./Pages/CreateListing"
import UpdateListing from "./Pages/UpdateListing"
import Listings from "./Pages/Listings"
import Search from "./Pages/Search"




export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/sign-in" element={<Login/>}/>
     <Route path="/Sign-up" element={<SignUp/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/listing/:listingId" element={<Listings/>}/>
     


     <Route element={<PrivateRoute/>}>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/create-listing" element={<CreateListing/>}/>
     <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

