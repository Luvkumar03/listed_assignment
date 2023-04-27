
import { Routes, Route } from 'react-router-dom';
import Component from './Pages/Component/Component';
import SignUp from './Pages/Mainpage/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Component" element={ <Component/>} />
      </Routes>
    </div>
  );
}

export default App;