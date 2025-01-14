import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import OffertoryForm from './components/offertory/offertory'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/offertory' element={<OffertoryForm/>}/>
      </Routes>      
    </div>
  );
}

export default App;
