import Login from './components/Login';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/home' element={<Main />} />
      </Routes>
      {/* <Login />
      <Main /> */}
    </div>
  );
}

export default App;
