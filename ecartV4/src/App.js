import './App.css';

import { PageHeader } from './header';
import LoginComponent from './login';
import { Routes, Route } from 'react-router-dom';

import UserSearchesComponent from './UserSearchesComponent';
import UserProducts from './UserProducts';
import UserDashboard from './UserDashboard';

import UserFavCategoriesBrands from './UserFavCategoriesBrands';
function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/integratedPage" element={<UserSearchesComponent/>} />
        <Route path="/UserProducts" element={<UserProducts/>} />
        <Route path="/UserDashboard" element={<UserDashboard/>} />
        
        <Route path="/UserFavCategoriesBrands" element={<UserFavCategoriesBrands />} />
      </Routes>
    </div>
  );
}

export default App;