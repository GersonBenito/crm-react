import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import NewClient from './pages/NewClient';
import UpdateClient from './pages/UpdateClient';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* group of routes */}
        <Route path='/client' element={ <Layout /> } >
          {/* routes nested */}
          <Route index element={ <Home /> } />
          <Route path='new' element={ <NewClient /> } />
          <Route path='update/:id' element={ <UpdateClient /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

