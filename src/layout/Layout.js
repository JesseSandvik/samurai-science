import Footer from '../organisms/footer/Footer';
import Header from '../organisms/header/Header';
import Main from '../organisms/main/Main';

const Layout = ({children}) => {
  return (
    <section className="layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </section>
  );
};

export default Layout;
