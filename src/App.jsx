import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import NewClient from './pages/NewClient';
import UpdateClient from './pages/UpdateClient';
import ViewClient from './pages/ViewClient';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* group of routes */}
        <Route path='/customers' element={ <Layout /> } >
          {/* routes nested */}
          <Route index element={ <Home /> } />
          <Route path='new' element={ <NewClient /> } />
          <Route path='update/:id' element={ <UpdateClient /> } />
          <Route path=':id' element={ <ViewClient /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

