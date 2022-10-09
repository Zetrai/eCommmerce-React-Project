import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation Bar (0.0) </h1>
      </div>
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
