import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Signin from "./Components/Signin";
import Homelogin from "./Components/Homelogin";
import Createaccount from "./Components/Createaccount";
import Nextpage from "./Components/Nextpage";
import Finish from "./Components/Finish";
import Btn from "./Components/Btn";
import './App.css'

function App() {
  
  

  return (
    <>
   <BrowserRouter>
   
   
   <Routes>
     
   <Route path="" element={<Homelogin />} />
      <Route path="/Homelogin" element={<Homelogin />} />
     
      <Route path="/Nextpage" element={<Nextpage />} />
      <Route path="/Finish" element={<Finish />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Createaccount" element={<Createaccount />} />
   
  </Routes>

</BrowserRouter>

   
     
    </>
  )
}

export default App
