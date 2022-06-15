import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Position } from './component/layout/Position/Position.component';
import { Sidebar } from './component/Sidebar/Sidebar.component';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Position />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
