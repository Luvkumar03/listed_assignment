import Component from "./Pages/Component/Component";
import SignUp from "./Pages/Mainpage/SignUp";
import {Routes , Route} from 'react-router-dom'


function App() {
  return (
   
   <Routes>
   <Route path="/" element={ <SignUp/>} />
   <Route path="/Component" element={ <Component/>} />
  
   </Routes>
  
  );
}

export default App;
