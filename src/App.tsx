import { FC } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Position } from './component/layout/Position/Position.component';
import { Sidebar } from './component/Sidebar/Sidebar.component';
import { Brand } from './component/layout/Brand/Brand.component';
import { Analytics } from './component/layout/Analytics/Analytics.component';
import { HandleSidebarProvider } from './contexts/handleSidebar.context';
import { NewRequests } from './component/layout/NewRequests/NewRequests.component';
import { FindAndEdit } from './component/layout/FindAndEdit/FindAndEdit.component';
import { SubPosition } from './component/layout/SubPosition/SubPosition.component';
import { Attribute } from './component/layout/Attribute/Attribute.components';

const App: FC = () => {
  return (
    <BrowserRouter>
      <HandleSidebarProvider>
        <Sidebar />
        <main className='main'>
          <Routes>
            <Route path='/position' element={<Position />} />
            <Route path="/sub-position/*" element={<SubPosition />} />
            <Route path='/brand' element={<Brand />} />
            <Route path="/attribute/*" element={<Attribute />} />
            <Route path='/analytics/*' element={<Analytics />} />
            <Route path='/new-requests' element={<NewRequests />} />
            <Route path="/find/*" element={<FindAndEdit />} />
          </Routes>
        </main>
      </HandleSidebarProvider>
    </BrowserRouter>
  );
}

export default App;
