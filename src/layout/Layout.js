import {Route, Routes} from 'react-router-dom';
import {pageRoutes} from '../appData/routing/pageRoutes';

import Footer from '../organisms/footer/Footer';
import Header from '../organisms/header/Header';
import Main from '../organisms/main/Main';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Routes>
          {pageRoutes.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
