import { Routes, Route } from 'react-router-dom';
import Main from './Main';

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Main />} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default Page;
