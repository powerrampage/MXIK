import { FC, useContext } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Position } from './component/layout/Position/Position.component';
import { Sidebar } from './component/Sidebar/Sidebar.component';
import { Brand } from './component/layout/Brand/Brand.component';
import { Analytics } from './component/layout/Analytics/Analytics.component';
// import { Header } from './component/Header/Header.component';
import { HandleSidebarContext, HandleSidebarProvider } from './contexts/handleSidebar.context';
import { NewRequests } from './component/layout/NewRequests/NewRequests.component';

const App: FC = () => {
  return (
    <BrowserRouter>
      <HandleSidebarProvider>
        <Sidebar />
        <main className='main'>
          <Routes>
            <Route path='/position' element={<Position />} />
            <Route path='/brand' element={<Brand />} />
            <Route path='/analytics/*' element={<Analytics />} />
            <Route path='/new-requests' element={<NewRequests />} />
          </Routes>
        </main>
      </HandleSidebarProvider>
    </BrowserRouter>
  );
}

export default App;
