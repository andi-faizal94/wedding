import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/home' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
