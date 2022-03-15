import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Layout from './components/layout/Layout';
import NotFound from './components/notfound/NotFound';
import Studio from './components/Pages/studio/Studio';
import MyPage from './components/Pages/myPage';
import Home from './components/Pages/HomePage/Home';
import Subscription from './components/Pages/Subscription';
//import Auth from './hoc/auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="studio" element={<Studio />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
