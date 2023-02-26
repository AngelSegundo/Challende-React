import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DataContextProvider } from './context/Datacontext';
import Homepage from './Pages/Home/Homepage';
import Loginpage from './Pages/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <DataContextProvider>

        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/Homepage' element={<Homepage />} />
          {/* <Route path='/store' element={<Store />} />
          <Route path='/cesta' element={<Cesta />} /> */}
        </Routes>

      </DataContextProvider>
    </div>
  );
}

export default App;
