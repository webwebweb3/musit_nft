import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NotFound from './components/notfound/NotFound';
import MyPage from './components/Pages/mypage/Layout';
import Home from './components/Pages/HomePage/Home';
import Subscription from './components/Pages/Subscription';
import Studio from './components/Pages/studio/Studio';
import UploadMusic from './components/Pages/studio/uploadmusic/UploadMusic';
import MyInfo from './components/Pages/mypage/MyInfo';
import Streaming from './components/Pages/streaming/Streaming';
//TODO: delete
import FileUploader from './components/Pages/streaming/musicCard/Testing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="mypage/*" element={<MyPage />}>
            <Route path="infoedit" element={<MyInfo />} />
          </Route>
          <Route path="streaming" element={<Streaming />} />
          //TODO: delete
          <Route path="test" element={<FileUploader />} />
          <Route path="studio/:id" element={<Studio />} />
          <Route
            path="studio/:artistName/uploadmusic"
            element={<UploadMusic />}
          />
          <Route path="subscription" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
